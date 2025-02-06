import { useState } from "react";

const Voting = ({currVotes, onChange}) => {
    const [votes, setVotes] = useState(currVotes);

    const handleVote = (change) => {
        setVotes((currentVotes) => currentVotes + change);
        if (onChange) {
            onChange(change);
        }
    };

    return (
                <div className="flex space-x-3">

                    <button
                        className="flex items-center animate-pulse px-4 py-2 bg-green-600 text-white font-bold rounded-full transform hover:scale-110 hover:bg-green-600 transition-all duration-300 ease-in-out"
                        onClick={() => handleVote(1)}
                    >
                        Upvote
                        <div className="mx-1 px-1 bg-red-50 text-green-800 rounded-md">

                        {votes}
                        </div>
                        <i className="fa fa-arrow-up ml-1 animate-bounce"></i>
                    </button>
                    
                    <button
                        className="self-center h-7 pl-3 pr-2 text-xs font-thin bg-gray-200 rounded-md transform hover:scale-105 hover:bg-red-400 transition-all duration-200 ease-in-out"
                        onClick={() => handleVote(-1)}
                    >
                        Downvote
                        <i className="fa fa-arrow-down hover:animate-bounce text-gray-800 pl-1"></i>
                    </button>
                </div>
    )
}

export default Voting;