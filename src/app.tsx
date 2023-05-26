import * as ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>Sanity + Electron + React</h1>
      <main>
        <h2>Projects</h2>
        <ul>
          <li>Loading projects...</li>
        </ul>
        <div>
          <pre>
            ¯\_(ツ)_/¯ Your data will show up here when you've configured
            everything correctly
          </pre>
        </div>
      </main>
    </>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
