import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// function App() {
//   //logic
//   return <h1>Noi dung the h1</h1>;
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// React.createElement(
//   "div",
//   { className: "divElement", title: "hoc lap tring" },
//   "noi dung the div",
// );

// const rootNode = document.getElementById("root");
// const root = createRoot(rootNode);
// root.render(<App />>);
