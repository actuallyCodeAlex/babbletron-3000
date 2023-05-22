/**
 * This file is loaded via the <script> tag in the  file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return <h1>Hello, World!</h1>;
}

const main = () => {
  const container = document.getElementById("container");
  const options = {
    onRecoverableError: () => {
      console.log("Recoverable error");
    },
  };
  const root = createRoot(container, options);

  console.log({ root });;

  root.render(<App />)
};

console.log('Running main!');
main();
