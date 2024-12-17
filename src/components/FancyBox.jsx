const FancyBox = ({ title, body, image, metadata, date }) => {
    return (
        <div className="fancybox">
            <div className="fancybox-image">
                {image && <img src={image} alt={title} className="fancybox-image"/>}
            </div>
            <h3 className="fancybox-title">{title}</h3>
            {date && <p>{date}</p>}
            {body && <p className="fancybox-body">{body}</p>}
            {metadata && <div className="metadata">{metadata}</div>}
        </div>
    )    
}

export default FancyBox;