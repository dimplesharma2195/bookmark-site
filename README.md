# Bookmark Site
The Bookmark Site is a simple web application built with **React** that allows users to manage their bookmarks. Users can add new bookmarks, update existing ones, delete them, and filter the displayed bookmarks by category. The application features a modal (implemented via React Portals) for adding and editing bookmarks, and it persists data using the browser's **localStorage**, ensuring that bookmarks remain available throughout the session.

## Features

- **Add New Bookmarks:**  
  Click the "Add New" button to open a modal form. Enter details such as category, name, and URL to add a bookmark.

- **Edit and Update Bookmarks:**  
  Each bookmark displays an **Edit** button (styled in white) that, when clicked, reopens the modal with the bookmark's data prefilled. Once updated, the modal closes and the data is updated.

- **Delete Bookmarks:**  
  Each bookmark includes a **Delete** button (styled in red with bold text) to remove the bookmark from the list.

- **Dynamic Filter by Category:**  
  A filter dropdown appears when there is at least one bookmark. The dropdown is automatically populated with unique categories from the bookmarks, plus an "All" option. This allows users to filter the displayed bookmarks by category.

- **Local Storage Persistence:**  
  Bookmarks are stored in the browser's localStorage, ensuring that the data persists even if the page is reloaded or the browser is closed.

- **Responsive Design:**  
  The layout is styled using CSS, ensuring a clean and responsive user interface that works on various devices.## Features

## Project GIF:  

![Image](https://github.com/user-attachments/assets/4295a883-5c5f-4a4d-8644-1b420156852a)

## Demo Video:  
https://github.com/user-attachments/assets/ca6ec86c-4d8a-4d40-8f48-1c009185b9b7

## Tech Stacks

- **React:**  
  Used to build the component-based user interface.
  
- **React Context API:**  
  Manages global state for bookmarks. It provides functions to add, update, and delete bookmarks.
  
- **React Hooks:**  
  - `useState`: Manages local state for forms, modal visibility, and filters.  
  - `useEffect`: Syncs the bookmark data with localStorage whenever updates occur.
  
- **React Portals:**  
  Used in the Modal component to render the modal outside the main DOM hierarchy, ensuring it overlays the main content properly.

- **CSS:**  
  Provides styling for the layout, bookmark items, modals, buttons, and overall design.

- **Local Storage API:**  
  Used to persist bookmark data across sessions.

## Technical Terms and Implementation Details

- **Context API (BookmarksContext.js):**  
  - **Purpose:** Provides a centralized store for bookmark data and related operations.  
  - **Usage:** The `BookmarksContext` is created and exported. The `BookmarksProvider` wraps the main App component in `index.js`, making bookmark data and functions (add, update, delete) accessible across all child components.

- **React Hooks:**  
  - **useState:**  
    - Used in `App.js` to manage local state variables like `modalOpen`, `formData`, `editingBookmark`, and `selectedCategory`.
  - **useEffect:**  
    - Used in `BookmarksContext.js` to synchronize state changes with localStorage. It ensures that every time the bookmark list is updated, the new data is stored in the browser.
  
- **React Portals (Modal.js):**  
  - **Purpose:** Renders the modal component into a DOM node (`#modal-root`) that exists outside of the main app element.  
  - **Usage:** This approach makes sure that the modal appears above all other elements, regardless of the parent component's CSS styling or positioning.
