import { Dispatch, FC } from "react";
import { Repository } from "../../../../types";

interface RepoListItemProps {
  repository: Repository;
  setContent: Dispatch<any>;
}

export const RepoListItem: FC<RepoListItemProps> = (
  props: RepoListItemProps
) => {
  const { repository, setContent } = props;

  const handleClick = async () => {
    try {
      const repo = `http://localhost:8000/repo?owner=${repository.owner.login}&repo=${repository.name}`;
      const response = await fetch(repo);
      const { content } = await response.json();

      setContent(content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="list-group-item list-group-item-action"
      key={repository.id}
      onClick={handleClick}
      type="button"
    >
      {repository.name}
    </button>
  );
};

export default RepoListItem;
