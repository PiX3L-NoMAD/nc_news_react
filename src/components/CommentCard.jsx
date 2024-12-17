import DateObject from "react-date-object";
import { useState, useEffect } from "react";

const CommentCard = ({comment}) => {
    const [dateCreated, setDateCreated] = useState("just now");

    useEffect(() => {
        let date = new DateObject(comment.created_at);
        setDateCreated(date.format("YYYY/MM/DD hh:mm"));
    }, [comment]);

    return (
        <div className="comment-card">
            <div className="comment-username">
                <i className="fa fa-user">{` ${comment.author}`}</i>
            </div>
            <div className="comment-date">{dateCreated && <p>{dateCreated}</p>}</div>
            <div className="comment-body">
                {comment.body && <p>{comment.body}</p>}
            </div>
        </div>
    )
}

export default CommentCard;