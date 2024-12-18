import { formatDate } from "../utils/formatDate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchVotesByArticleId } from "../api/api";
import CommentsList from "./CommentsList";

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState(false);
    const [votes, setVotes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    
    useEffect(() => {
        setLoading(true);
        setStatusMsg("Loading article...")
        setError(false);
        
        getArticleById(articleId).then((articleData) => {
            setArticle(articleData);
            setVotes(articleData.votes);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error loading article.")
        })
    }, [articleId, votes])
    
    const handleUpVote = () => {
        setVotes((currentVotes) => currentVotes + 1);
        setLoading(true);
        setError(false);
        
        patchVotesByArticleId(articleId, 1)
        .then((updatedArticle) => {
            setArticle(updatedArticle);
            setVotes(updatedArticle.votes);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error updating votes. Try again later.")
        })
    };
    
    const handleDownVote = () => {
        setVotes((currentVotes) => currentVotes - 1);
        setLoading(true);
        setError(false);
        
        patchVotesByArticleId(articleId, -1)
        .then((updatedArticle) => {
            setArticle(updatedArticle);
            setVotes(updatedArticle.votes);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error updating votes. Try again later.")
        })
    }
    
    const toggleShowComments = () => {
        setShowComments((currOpen) => !currOpen);
    }

    if (loading || error) {
        return statusMsg;
    }

    return (
        <>
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
                        <p>{formatDate(article.created_at)}</p>
                    </li>
                </ul>
                <p className="articlebox-body">{article.body}</p>
                <div className="articlebox-social-icons">
                    <i className="fa fa-thumbs-up" onClick={handleUpVote}>{` ${votes}`}</i>
                    <i className="fa fa-thumbs-down" onClick={handleDownVote}/>
                    <i className="fa fa-comment" onClick={toggleShowComments}>{` ${article.comment_count || '0'}`}</i>
                </div>
                <div className={`comments-container ${showComments ? 'slide-in' : 'slide-out'}`}>
                    {showComments && <CommentsList articleId={articleId} />}
                </div>
            </div>
        </>
    )
}

export default ArticlePage;