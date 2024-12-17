const FancyBox = ({ title, body, image }) => {
    return (
        <div className="fancybox">
            <h3 className="fancybox-title">{title}</h3>
            {image && <img src={image} alt={title} className="fancybox-image" />}
            <p className="fancybox-body">{body}</p>
        </div>
    )    
}

export default FancyBox;