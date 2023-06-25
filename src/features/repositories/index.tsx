import { useEffect, useState } from "react";
import { RepoDisplay } from "./components/repo-display";
import { RepoList } from "./components/repo-list";

interface RepositoriesProps {
  repositories: any[];
}

export const Repositories = (props: RepositoriesProps) => {
  const [content, setContent] = useState(null);
  const { repositories } = props;

  return (
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
  );
};
