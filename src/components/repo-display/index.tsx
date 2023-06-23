import { FC } from "react";

interface RepoDisplayProps {
    content: string | null;
}

export const RepoDisplay: FC<RepoDisplayProps> = (props: RepoDisplayProps) => {
    const { content } = props;

    return <div id="repo-display">
        <textarea readOnly value={content ? content : ''} />
    </div>
}

export default RepoDisplay;
