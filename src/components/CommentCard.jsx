import { formatDate } from "../utils/formatDate";
import DeleteComment from "./DeleteComment";

const CommentCard = ({comment, onDelete}) => {

    const user = "weegembump";

    return (
        <div className="comment-card">
            {comment.author === user && (
                <DeleteComment 
                    commentId={comment.comment_id} 
                    onDelete={onDelete}
                />
            )}
            <div className="comment-username">
                <i className="fa fa-user">{` ${comment.author}`}</i>
            </div>
            <div className="comment-date">
                {formatDate(comment.created_at) && <p>{formatDate(comment.created_at)}</p>}
            </div>
            <div className="comment-body">
                {comment.body && <p>{comment.body}</p>}
            </div>
        </div>
    )
}

export default CommentCard;