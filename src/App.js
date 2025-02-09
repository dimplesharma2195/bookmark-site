import React, { useState, useContext } from "react";
import { BookmarksContext } from "./components/context/BookmarksContext";
import Modal from "./components/modal/Modal";
import "./App.css";

function App() {
  const { bookmarks, addBookmark, updateBookmark, deleteBookmark } =
    useContext(BookmarksContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ category: "", name: "", url: "" });
  const [editingBookmark, setEditingBookmark] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModalForNew = () => {
    setFormData({ category: "", name: "", url: "" });
    setEditingBookmark(null);
    setModalOpen(true);
  };

  const openModalForEdit = (bookmark) => {
    setFormData({
      category: bookmark.category,
      name: bookmark.name,
      url: bookmark.url,
    });
    setEditingBookmark(bookmark);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBookmark) {
      updateBookmark(editingBookmark.id, formData);
    } else {
      addBookmark(formData);
    }
    closeModal();
  };

  // Compute unique categories from bookmarks and add the "All" option
  const categories = ["All", ...Array.from(new Set(bookmarks.map((b) => b.category)))];

  // Filter bookmarks based on the selected category
  const filteredBookmarks =
    selectedCategory === "All"
      ? bookmarks
      : bookmarks.filter((b) => b.category === selectedCategory);

  return (
    <div className="app">
      <h1 className="heading">BookMarks</h1>
      <button className="add-button" onClick={openModalForNew}>
        Add New
      </button>

      {/* Only show "Your Bookmarks" heading and filter if there is at least one bookmark */}
      {bookmarks.length > 0 && (
        <>
          <h2 className="your-bookmarks-heading">Your Bookmarks</h2>
          <div className="filter-container">
            <label htmlFor="filter">Filter by Category: </label>
            <select
              id="filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="bookmarks-list">
        {filteredBookmarks.map((bookmark) => (
          <div key={bookmark.id} className="bookmark-item">
            <div className="bookmark-info">
              <div className="bookmark-name">{bookmark.name}</div>
              <div className="bookmark-url">
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  {bookmark.url}
                </a>
              </div>
            </div>
            <div className="bookmark-actions">
              <button
                className="edit-button"
                onClick={() => openModalForEdit(bookmark)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteBookmark(bookmark.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>{editingBookmark ? "Edit Bookmark" : "Add Bookmark"}</h2>
          <form onSubmit={handleSubmit} className="bookmark-form">
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Url:</label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">
              {editingBookmark ? "Update" : "Add"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default App;