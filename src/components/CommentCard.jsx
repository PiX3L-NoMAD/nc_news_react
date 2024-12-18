import { formatDate } from "../utils/formatDate";

const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
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