import { formatDate } from "../utils/formatDate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchVotesByArticleId } from "../api/api";
import CommentsList from "./CommentList";
import Voting from "./Voting";

const ArticlePage = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState(false);
    const [votes, setVotes] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    
    useEffect(() => {
        setLoading(true);
        setStatusMsg("Loading article...")
        setError(false);
        
        getArticleById(articleId).then((articleData) => {
            setArticle(articleData);
            setVotes(articleData.votes);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error loading article.")
        })
    }, [articleId])
    
    const handleChange = (change) => {
        setVotes((currentVotes) => currentVotes + change);
        setError(false);
        
        patchVotesByArticleId(articleId, change)
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Error updating votes. Try again later.")
            setVotes((currentVotes) => currentVotes - change);
        })
    };
    
    const toggleShowComments = () => {
        setShowComments((currOpen) => !currOpen);
    }

    if (loading || error) {
        return statusMsg;
    }

    return (
        <div className="max-w-screen-xl mx-auto lg:p-10 sm:p-2 md:p-3 relative">
        <div>
            {/* Article Image */}
            {article.article_img_url && (
                <div
                    className="w-full h-64 bg-cover bg-center text-center shadow-lg overflow-hidden"
                    style={{ height: "450px", backgroundImage: `url(${article.article_img_url})` }}
                />
            )}
        </div>
        <div className="max-w-4xl mx-auto bg-red-50 rounded-t-none rounded-b-xl shadow-2xl p-6 mb-8 flex flex-col justify-between leading-normal">
            {/* Article Title */}
            <h1 className="text-4xl font-extrabold text-gray-800 mt-6 hover:text-indigo-500 transition-all duration-300 ease-in-out relative">{article.title}</h1>

            {/* Author and Date */}
            <div className="flex justify-between text-gray-500 text-sm my-4">
                <p>{`Written by ${article.author}`}</p>
                <p>{formatDate(article.created_at)}</p>
            </div>

            <blockquote className="border-l-4 text-base italic leading-8 my-3 p-4 text-gray-600">
            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. 
            </blockquote>

            {/* Article Body */}
            <p className="text-lg leading-relaxed text-gray-700">{article.body}</p>

            {/* Voting and Comments Section */}
            <div className="flex items-center justify-between mt-8">
            <Voting currVotes={votes} onChange={handleChange}/>
            
                <button
                    className="flex items-center collapse-title text-gray-600 hover:text-indigo-500 transition-all duration-300 ease-in-out"
                    onClick={toggleShowComments}
                >
                    <i className="fa fa-comment mr-2 hover:animate-bounce"></i>
                    {article.comment_count || "0"}
                </button>

            </div>

            {/* Comments Section */}
            {showComments && (
                <div className="mt-6 p-4 border-t collapse-content border-gray-200 ">
                    <CommentsList articleId={articleId} />
                </div>
            )}
        </div>
        </div>
    );
};

export default ArticlePage;