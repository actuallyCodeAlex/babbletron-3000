import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";
import { RepoDisplay } from "./components/repo-display";
import { RepoList } from "./components/repo-list";

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // 1. Make REPOS REQ to MIDDLEWARE
    const repos = "http://localhost:8000/repos";
    fetch(repos).then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRepositories(response.repos);
      }).catch((error) => console.error(error))
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 mb-5">babbletron-3000</h1>

      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Repositories</h2>
              <RepoList repositories={repositories} setContent={setContent} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <RepoDisplay content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
