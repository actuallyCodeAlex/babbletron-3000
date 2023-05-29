/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

import "./app";

const PROJECT_ID = "2wj8k8pe";
const DATASET = "production";

const QUERY = encodeURIComponent('*[_type == "project"]');

// Compose the URL for your project's endpoint and add the query
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    const list = document.querySelector("ul");
    const firstListItem = document.querySelector("ul li");

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result.forEach((project: any) => {
        // create a list element for each project
        const listItem = document.createElement("li");

        // add the project name as the text content
        listItem.textContent = project?.title;

        // add the item to the list
        list.appendChild(listItem);
      });
      const pre = document.querySelector("pre");
      // add the raw data to the preformatted element
      pre.textContent = JSON.stringify(result, null, 2);
    }
  })
  .catch((err) => console.error(err));

