import { Dispatch, FC } from "react";
import { RepoListItem } from "../repo-list-item";
import { Repository } from '../../types';

interface RepoListProps {
    repositories: Repository[]
    setContent: Dispatch<any>;
}

export const RepoList: FC<RepoListProps> = (props: RepoListProps) => {
    const { repositories, setContent } = props;

    return <ul className="list-group">
        {repositories.map((repository) => <RepoListItem key={repository.id} repository={repository} setContent={setContent} />)}
    </ul>
}

export default RepoList;
