import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppClass from "./AppClass";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppClass />
    <Footer />
  </>
);
