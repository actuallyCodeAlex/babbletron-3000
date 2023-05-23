import * as ReactDOM from "react-dom/client";
import somethingPath from './kitchen-sink.md';

console.log({ somethingPath });

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
