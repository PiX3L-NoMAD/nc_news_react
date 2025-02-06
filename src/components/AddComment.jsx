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
        <form className="mb-6 font-nunito" onSubmit={handleSubmit(onSubmit)}>
        <label>
    <p className="text-sm mb-2 text-gray-700 flex items-center">
        <i className="fa fa-user text-blue-500 mr-2" />
        <span className="font-semibold">{`Commenting as ${user}:`}</span>
    </p>
</label>
            <div className="py-2 px-4 mb-4 bg-gray-50 rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows="5"
                    className="px-0 w-full text-sm bg-gray-50 text-gray-900 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Write a comment..." 
                    {...register("newComment", {
                        required: "Input cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Input must be at least 3 characters long"
                        }
                    })}
                    required>
                </textarea>
                {errors.newComment && (
                    <p className="error-message">
                        {errors.newComment.message}
                    </p>
                )}
            </div>
            <button type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-bold text-center text-white bg-gradient-to-r from-blue-500 via-white-500 to-pink-500 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 hover:scale-105 transition-all duration-300 ease-in-out">
                Comment
            </button>
        </form>
        </>
    )
}

export default AddComment;