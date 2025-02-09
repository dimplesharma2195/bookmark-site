import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookmarksProvider } from "./components/context/BookmarksContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookmarksProvider>
    <App />
  </BookmarksProvider>
);