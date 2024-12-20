import { formatDate } from "../utils/formatDate";
import Voting from "./Voting";

const FancyBox = ({ title, body, image, author, date, commentCount, votes, articleId }) => {
    return (
        <div className="fancybox">
            <div>
                {image && <img src={image} alt={title} className="fancybox-image"/>}
            </div>
            {title && <h3 className="fancybox-title">{title}</h3>}
            {body && <p className="fancybox-body">{body}</p>}
            {author && <div className="fancybox-author"><em>Article by <strong>{author}</strong></em></div>}
            {date && <p className="fancybox-date">{formatDate(date)}</p>}
            <div className="fancybox-social-icons">
                <i className="fa fa-thumbs-up"><Voting currVotes={votes} /></i>
                <i className="fa fa-comment"><br />{` ${commentCount || '0'}`}</i>
            </div>
        </div>
    )    
}

export default FancyBox;