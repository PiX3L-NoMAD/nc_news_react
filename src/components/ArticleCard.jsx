import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ArticleCard = ({ title, body, image, author, date, commentCount, votes, articleId }) => {
    
    const truncatedBody = body ? body.substring(0, 100) + '...' : '';

    return (
        <div className="max-w-sm bg-gradient-to-t from-white via-purple-100 to-purple-300 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all hover:scale-[101%] hover:shadow-[0_0_15px_4px_rgba(255,0,255,0.8)] pb-1">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-xl object-cover w-full h-48"
                />
            )}
            {title && (
                <div className="p-3">
                    <h5 className="mb-3 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-700 transition-all duration-300">
                        {title}
                    </h5>
                </div>
            )}

            {author && (
                <div className="text-gray-700 text-sm m-2" style={{ fontFamily: 'Georgia, serif' }}>
                    <em>Article by <strong>{author}</strong></em>
                </div>
            )}
            {date && <p className="text-gray-600 text-xs m-2">{formatDate(date)}</p>}

            {truncatedBody && <p className="m-5 font-medium text-orange-950">{truncatedBody}</p>}

            {articleId && (
                <motion.div
                    whileHover={{ scale: 1.02, color: "#4e1eb6" }}
                    transition={{ type: "spring", stiffness: 400}}
              >
                    <Link to={`/articles/${articleId}`} className="inline-flex items-center m-2 px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-br from-black to-purple-500 rounded-full hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">
                        Read more
                        <svg className="rtl:rotate-180 w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </motion.div>
            )}

            <div className="flex justify-center items-center p-2 gap-2">
                <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <i className="fa fa-arrow-up text-gray-500"></i>
                    <span>{votes}</span>
                </div>

                <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <i className="fa fa-comment text-gray-500 transition-all duration-200"></i>
                    <span>{commentCount || '0'}</span>
                </div>
                
            </div>
        </div>
    );
};

export default ArticleCard;
