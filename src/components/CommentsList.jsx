import { useEffect, useState } from "react";
import { getCommentsByArticleId, postCommentByArticleId } from "../api/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const CommentsList = ({ articleId }) => {
    const [comments, setComments] = useState([]);
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

    if (loading || error) {
        return statusMsg;
    };

    return (
        <>
            <ul className="comments-list">
                <AddComment articleId={articleId} addNewComment={addNewComment}/>
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} >
                            <CommentCard comment={comment}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CommentsList;