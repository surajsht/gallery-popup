import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ImageContext from "./ImageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ImageContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ImageContext>
);
