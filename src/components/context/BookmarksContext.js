import React, { createContext, useState } from "react";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (bookmark) => {
    setBookmarks((prev) => [...prev, { ...bookmark, id: Date.now() }]);
  };

  const updateBookmark = (id, updatedBookmark) => {
    setBookmarks((prev) =>
      prev.map((b) => (b.id === id ? { ...updatedBookmark, id } : b))
    );
  };

  const deleteBookmark = (id) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, updateBookmark, deleteBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};