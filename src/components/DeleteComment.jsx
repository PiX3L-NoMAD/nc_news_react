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
        
        setTimeout(() => {
            setStatusMsg("Deleting comment...", 3000)
        });
        
        deleteCommentByCommentId(commentId, user)
        .then(() => {
            setLoading(false);
            onDelete(commentId);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg(" Unable to delete comment. Try again later.") 
        })
    }
    
    if (error || loading) {
        return (
            <p className="text-sm ml-2 text-red-500">
                {statusMsg}
            </p>
        );
    };

    return (
        <>
            <button onClick={() => handleDelete(comment.commentId)}>
                {console.log(commentId)}
                <i className="flex flex-row fa fa-trash mx-2 text-sm text-gray-500 gap-1"><p className="font-nunito flex items-center text-sm text-gray-500 hover:underlin font-medium">Delete</p></i>
            </button>
        </>
    )
}

export default DeleteComment;