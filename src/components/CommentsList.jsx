import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api/api";
import CommentCard from "./CommentCard";

const CommentsList = ({articleId}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getCommentsByArticleId(articleId).then((commentsData) => {
            setComments(commentsData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        })
    }, [articleId])


    return (
        <>
        {loading? (
            <p>Loading comments...</p>
        ) : error ? (
            <p>Error fetching comments.</p>
        ) : (
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id} >
                                <CommentCard comment={comment}/>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default CommentsList;