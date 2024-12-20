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
        <div className="vote-icons">
            {onChange && <i className="fa fa-thumbs-up" onClick={(() => handleVote(1))} />}
            <p className="vote-count">{` ${votes}`}</p>
            {onChange && <i className="fa fa-thumbs-down" onClick={(() => handleVote(-1))} />}
        </div>
    )
}

export default Voting;