import * as ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>babbletron-3000</h1>

      <textarea id="markdown" />

      <textarea id="html" />
    </div>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
