import { FC } from "react";
import Markdown from 'markdown-to-jsx';

interface RepoDisplayProps {
    content: string | null;
}

export const RepoDisplay: FC<RepoDisplayProps> = (props: RepoDisplayProps) => {
    const { content } = props;

    return <div id="repo-display">
        {content && <Markdown>{content}</Markdown>}
    </div>
}

export default RepoDisplay;
