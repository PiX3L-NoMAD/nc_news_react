import { useParams } from "react-router-dom";
import DateObject from "react-date-object";
import { useEffect, useState } from "react";
import { getArticleById } from "../api/api";

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [dateCreated, setDateCreated] = useState("");
    const [votes, setVotes] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        
        getArticleById(articleId).then((articleData) => {
            let date = new DateObject(articleData.created_at);
            setDateCreated(date.format("YYYY/MM/DD hh:mm"));
            setVotes(articleData.votes);
            setCommentCount(articleData.comment_count);
            setArticle(articleData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        })
    }, [articleId])

    const handleUpVote = () => {
        setVotes((currentVotes) => currentVotes + 1);
    }

    const handleDownVote= () => {
        setVotes((currentVotes) => currentVotes - 1);
    }

    const handleCommentsClick= () => {
        console.log("Comments list will appear here");
    }

    return (
        <>
        {loading? (
            <p>Loading article...</p>
        ) : error ? (
            <p>Error fetching the article.</p>
        ) : (
                <div className="articlebox">
                    <div className="articlebox-image">
                        {article.article_img_url && 
                            <img src={article.article_img_url} 
                            alt={`Image of ${article.title}`} 
                            className="articlebox-image"
                        />}
                    </div>
                    <h3 className="articlebox-title">{article.title}</h3>
                    <ul className="articlebox-author-date">
                        <li>
                            <p>{`Written by ${article.author}`}</p>
                        </li>
                        <li>
                            <p>{dateCreated}</p>
                        </li>
                    </ul>
                    <p className="articlebox-body">{article.body}</p>
                    <div className="articlebox-social-icons">
                        <i className="fa fa-thumbs-up" onClick={handleUpVote}>{` ${votes}`}</i>
                        <i className="fa fa-thumbs-down" onClick={handleDownVote}/>
                        <i className="fa fa-comment" onClick={handleCommentsClick}>{` ${commentCount}`}</i>
                    </div>
            </div>
            )}
        </>
    )
}

export default ArticlePage;