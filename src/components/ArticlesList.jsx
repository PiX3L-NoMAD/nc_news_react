import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { Link } from "react-router-dom";
import FancyBox from "./FancyBox";
import FilterArticles from "./FilterArticles";

const ArticlesList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("DESC");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    useEffect(() => {
        setError(false);
        setLoading(true);
        setStatusMsg("Loading articles...")

        getArticles(sortBy, order, topic)
        .then((articlesData) => {
            setArticles(articlesData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Unable to load articles. Try again later.")
        })
    }, [sortBy, order, topic]);

    const handleSortByChange = (sortByChoice) => {
        setSortBy(sortByChoice);
    };

    const handleOrderChange = (orderChoice) => {
        setOrder(orderChoice);
    };

    if (error || loading) {
        return statusMsg;
    };

    return (
        <>
        <div className="filtering-bar">
            <FilterArticles 
                sortBy={sortBy}
                order={order}
                onSortByChange={handleSortByChange} 
                onOrderChange={handleOrderChange}
            />
        </div>
            <ul className="list">
                {articles.map((article) => {
                    return (
                        <li key={article.article_id} >
                            <Link to={`/articles/${article.article_id}`} >
                                <FancyBox 
                                    title={article.title}
                                    image={article.article_img_url}
                                    date={article.created_at}
                                    topic={article.topic}
                                    author={article.author}
                                    votes={article.votes}
                                    commentCount={article.comment_count}
                                /> 
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default ArticlesList;