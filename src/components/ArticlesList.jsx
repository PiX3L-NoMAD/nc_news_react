import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import FilterArticles from "./FilterArticles";
import { faker } from "@faker-js/faker"

const ArticlesList = ({ topic }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sort_by") || "created_at";
    const order = searchParams.get("order") || "desc";

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

    const handleSortByChange = (sortByChoice, orderChoice) => {
        setSearchParams({ sort_by: sortByChoice, order: orderChoice });
    };

    if (error || loading) {
        return statusMsg;
    };

    return (
        <>
            <FilterArticles 
                onSortByChange={handleSortByChange} 
            />
            <ul className="w-full grid sm:grid-cols-2 sm:justify-evenly py-4 gap-10 grid-cols-1 justify-items-center">
                {articles.map((article) => {
                    return (
                        <li key={article.article_id} >
                            <ArticleCard 
                                title={article.title}
                                image={article.article_img_url}
                                date={article.created_at}
                                topic={article.topic}
                                author={article.author}
                                votes={article.votes}
                                body={faker.word.words(10)}
                                commentCount={article.comment_count}
                                articleId={article.article_id}
                            /> 
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default ArticlesList;