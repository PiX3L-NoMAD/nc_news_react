import { useEffect, useState } from "react";
import { getAllArticles, getArticlesByTopic } from "../api/api";
import { Link } from "react-router-dom";
import FancyBox from "./FancyBox";

const ArticlesList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    useEffect(() => {
        setError(false);
        setLoading(true);
        setStatusMsg("Loading articles...")

        getAllArticles(topic)
        .then((articlesData) => {
            setArticles(articlesData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Unable to load articles. Try again later.")
        })
    }, [topic]);

    if (error || loading) {
        return statusMsg;
    }

    return (
        <>
            <ul className="list">
                {articles.map((article) => {
                    return (
                        <li key={article.article_id} >
                            <Link to={`/articles/${article.article_id}`} >
                                <FancyBox 
                                    title={article.title}
                                    image={article.article_img_url}
                                    metadata={`Written by ${article.author}`}
                                /> 
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ArticlesList;