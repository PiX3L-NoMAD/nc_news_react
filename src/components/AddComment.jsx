import { useForm } from "react-hook-form";
import { useState } from "react";
import { postCommentByArticleId } from "../api/api";

const AddComment = ({ articleId, addNewComment }) => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    const user = "weegembump";

    const onSubmit = (data) => {
        setError(false);
        setLoading(true);
        setStatusMsg("Posting comment...")

        const commentReqBody = {
            username: user,
            body: data.newComment,
        };

        postCommentByArticleId(articleId, commentReqBody)
            .then((addedComment) => {
                setLoading(false);
                addNewComment(addedComment[0]);
            })
            .catch(() => {
                setLoading(false)
                setError(true);
                setStatusMsg("Error posting comment. Try again later.")
            })
        reset();
    }

    if (loading || error) {
        return statusMsg;
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
                <label>
                    <p> 
                        {"Commenting as "}
                        <i className="fa fa-user"> 
                            {` ${user}: `} 
                        </i>
                    </p>
                    <input
                        {...register("newComment", {
                            required: "Input cannot be empty",
                            minLength: {
                                value: 3,
                                message: "Input must be at least 3 characters long"
                            }
                        })}
                        placeholder="Your comment here..."
                    />
                    {errors.newComment && (
                        <p className="error-message">
                            {errors.newComment.message}
                        </p>
                    )}
                </label>
                <br />
                <button type="submit" className="comment-btn">
                    Comment
                </button>
            </form>
        </>
    )
}

export default AddComment;