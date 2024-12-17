import DateObject from "react-date-object";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../api/api";
import CommentsList from "./CommentsList";

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [votes, setVotes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        
        getArticleById(articleId).then((articleData) => {
            setArticle(articleData);
            setVotes(articleData.votes);
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
    
    const handleDownVote = () => {
        setVotes((currentVotes) => currentVotes - 1);
    }
    
    const toggleShowComments = () => {
        setShowComments((currOpen) => !currOpen);
    }
    
    let date = new DateObject(article.created_at);
    date = date.format("YYYY/MM/DD hh:mm");

    return (
        <>
        {(() => {
        if (loading) {
            return <p>Loading article...</p>
        } 
        
        if (error) {
             return <p>Error fetching the article.</p>
        } 
        
        return (
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
                        <p>{date}</p>
                    </li>
                </ul>
                <p className="articlebox-body">{article.body}</p>
                <div className="articlebox-social-icons">
                    <i className="fa fa-thumbs-up" onClick={handleUpVote}>{` ${votes}`}</i>
                    <i className="fa fa-thumbs-down" onClick={handleDownVote}/>
                    <i className="fa fa-comment" onClick={toggleShowComments}>{` ${article.comment_count}`}</i>
                </div>
                <div className={`comments-container ${showComments ? 'slide-in' : 'slide-out'}`}>
                    {showComments && <CommentsList articleId={articleId} />}
                </div>
            </div>
            )
        })()}
    </>
    )
}

export default ArticlePage;