import { useEffect, useState } from "react";
import FancyBox from "./FancyBox";
import { getAllArticles } from "../api/api";
import { Link } from "react-router-dom";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    useEffect(() => {
        setError(false);
        setLoading(true);
        setStatusMsg("Loading articles...")

        getAllArticles().then((articlesData) => {
            setArticles(articlesData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Unable to load articles. Try again later.")
        })
    }, [])

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