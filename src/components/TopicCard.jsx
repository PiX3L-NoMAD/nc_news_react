const TopicCard = ({ image, slug, body }) => {
    return (
        <div className="relative w-full h-48 shadow-lg transition-all hover:scale-[101%] hover:shadow-[0_0_15px_4px_rgba(255,0,255,0.8)] pb-1 rounded-lg">
            
            <img src={image} alt={slug} className="w-full h-full object-cover brightness-50 rounded-lg" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center bg-pink-900 backdrop-blur-sm bg-opacity-20 rounded-lg hover:decoration-purple-50">
                <h2 className="text-xl font-bold font-nunito drop-shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105">{slug}</h2>
                <p className="text-sm">{body}</p>
            </div>
        </div>
    );
};

export default TopicCard;