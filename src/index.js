import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//Idk. An error is being thrown in the App.js file --
// ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
// SUGGESTED FROM LINK ABOVE:
// import { createRoot } from "react-dom/client";
// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
