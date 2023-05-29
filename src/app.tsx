import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 1. Make PROJECTS REQ to MIDDLEWARE
    const localProjectServerUrl = "http://localhost:8000/projects";
    fetch(localProjectServerUrl).then((res) => res.json())
      .then((response) => {
        console.log(response);
        setProjects(response.repos);
      }).catch((error) => console.error(error))
  }, [])
  return (
    <>
      <h1>Sanity + Electron + React</h1>
      <main>
        <h2>Projects</h2>
        <h3>FROM SANITY</h3>
        <ul>
          <li>Loading projects...</li>
        </ul>
        <div>
          <pre>
            ¯\_(ツ)_/¯ Your data will show up here when you've configured
            everything correctly
          </pre>
        </div>
        <h3>FROM MIDDLEWARE</h3>
        <ol>
          {projects.map((project) => <li key={project.id}>{project.name}</li>)}
        </ol>
      </main>
    </>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
