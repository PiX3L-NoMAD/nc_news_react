import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";

const TopicPage = () => {
    const { topic } = useParams();

    return (
        <>
            <h2 
                className="font-nunito text-3xl font-bold text-gray-800 mb-6 text-center"
                style={{ fontFamily: "Georgia, serif" }}
            >
                Viewing all articles for{" "}
                <strong className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{topic.toUpperCase()}</strong>
            </h2>
            <ArticlesList topic={topic} />
        </>
    );
};

export default TopicPage;