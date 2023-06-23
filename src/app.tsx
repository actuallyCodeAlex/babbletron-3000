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
  }, [])
  return (
    <>
      <h1>babbletron-3000</h1>
      <RepoList repositories={repositories} setContent={setContent} />
      <RepoDisplay content={content} />
    </>
  );
};

const render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
};

render();
