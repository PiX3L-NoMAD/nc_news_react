import { useState } from "react";
import { deleteCommentByCommentId } from "../api/api";

const DeleteComment = ({ commentId, onDelete }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    
    const user = "weegembump";
    
    const handleDelete = () => {
        setError(false);
        setLoading(true);
        setStatusMsg("Deleting comment...")
        
        deleteCommentByCommentId(commentId, user)
        .then(() => {
            setLoading(false);
            onDelete(commentId);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Unable to delete comment. Try again later.") 
        })
    }
    
    if (error || loading) {
        return statusMsg
    };

    return (
        <>
            <button onClick={handleDelete} className="delete-btn">
                DELETE
            </button>
        </>
    )
}

export default DeleteComment;