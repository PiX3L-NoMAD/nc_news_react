import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const CommentList = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [commentDeleted, setCommentDeleted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    
    useEffect(() => {
        setComments([]);
        setLoading(true);
        setError(false);
        setStatusMsg("Loading comments...");
        
        getCommentsByArticleId(articleId)
        .then((commentsData) => {
            setStatusMsg("");
            setLoading(false);
            setComments(commentsData);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error loading comments.");
        });
    }, [articleId]);
    
    const addNewComment = (newComment) => {
        setComments((currComments) => [newComment, ...currComments]);
    };
    
    const deleteComment = (deletedCommentId) => {
        setCommentDeleted(true);
        setComments((currComments) => 
            currComments.filter((comment) => 
                comment.comment_id !== deletedCommentId)
        );
    
        setStatusMsg("Comment deleted");
        
        setTimeout(() => {
            setStatusMsg("")
        }, 2000);
    }
    
    if (loading || error) {
        return statusMsg;
    };

    return (
        <>
            <ul className="comments-list">
                <AddComment articleId={articleId} addNewComment={addNewComment}/>
                {commentDeleted && statusMsg}
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} >
                            <CommentCard comment={comment}
                            onDelete={deleteComment}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CommentList;