import { useEffect, useState } from "react";
import FancyBox from "./FancyBox";
import { getAllArticles } from "../api/api";
import { Link } from "react-router-dom";

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getAllArticles().then((articlesData) => {
            setArticles(articlesData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        })
    }, [])


    return (
        <>
        {loading? (
            <p>Loading articles...</p>
        ) : error ? (
            <p>There has been an error fetching the articles.</p>
        ) : (
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
            )}
        </>
    )
}

export default ArticlesList;