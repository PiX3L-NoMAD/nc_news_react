import { useEffect, useState } from "react";
import FancyBox from "./FancyBox";
import { getAllArticles } from "../api/api";

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
                            <FancyBox key={article.article_id} title={article.title} body={"Written by " + article.author} image={article.article_img_url}>
                            </FancyBox> 
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default ArticlesList;