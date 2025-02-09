import TopicCard from "./TopicCard";
import { useEffect, useState } from "react";
import { getAllTopics } from "../api/api";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [topicsWithImages, setTopicsWithImages] = useState([]);

    useEffect(() => {
        getAllTopics()
            .then((topicsData) => {
                setTopics(topicsData);

                const topicsWithImagesData = topicsData.map((topic) => ({
                    ...topic,
                    image: faker.image.url({
                        category: "sports",
                        width: 400,
                        height: 400,
                    }),
                }));

            setTopicsWithImages(topicsWithImagesData);
        });
    }, []);

    return (
        <ul className="justify-center grid grid-cols-1 md:grid-cols-3 gap-4">
            {topicsWithImages.map((topic) => (
                <li key={topic.slug}>
                    <Link to={`/topics/${topic.slug}`}>
                        <TopicCard
                            image={topic.image}
                            slug={topic.slug.toUpperCase()}
                            body={topic.description}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TopicsList;