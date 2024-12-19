import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";

const TopicPage = () => {
    const { topic } = useParams();

    return (
        <>
            <h2>{topic.toUpperCase()}</h2>
            <ArticlesList topic={topic}/>
        </>
    )
}

export default TopicPage;