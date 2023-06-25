import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";

import { Nav } from "./components/nav";
import { Repositories } from "./features/repositories";
import { NavOptions } from "./types";

const App = () => {
  const [activeNav, setActiveNav] = useState(NavOptions.Home);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // 1. Make REPOS REQ to MIDDLEWARE
    const repos = "http://localhost:8000/repos";
    fetch(repos)
      .then((res) => res.json())
      .then((response) => {
        setRepositories(response.repos);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row full-height">
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
        <div className="mt-5" id="content">
          {activeNav === NavOptions.Home && <span>HOME</span>}
          {activeNav === NavOptions.Repositories && (
            <Repositories repositories={repositories} />
          )}
          {activeNav === NavOptions.Settings && <span>SETTINGS</span>}
        </div>
      </div>
    </div>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
