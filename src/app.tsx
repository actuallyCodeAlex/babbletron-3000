import * as ReactDOM from "react-dom/client";
import { KitchenSink } from "./markdown/kitchen-sink";

const App = () => {
  return (
    <div>
      <KitchenSink />
    </div>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
