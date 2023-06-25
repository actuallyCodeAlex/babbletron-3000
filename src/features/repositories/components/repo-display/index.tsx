import { FC } from "react";
import Markdown from "markdown-to-jsx";

interface RepoDisplayProps {
  content: string | null;
}

export const RepoDisplay: FC<RepoDisplayProps> = (props: RepoDisplayProps) => {
  const { content } = props;

  return (
    <div id="repo-display">
      {content && <Markdown>{content}</Markdown>}
      {content === null && <p>Select a repository</p>}
      {content === "" && <p>No readme file located in repository</p>}
    </div>
  );
};

export default RepoDisplay;
