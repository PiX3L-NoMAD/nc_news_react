import { useEffect, useState } from "react";
import FancyBox from "./FancyBox";
import { getAllTopics } from "../api/api";
import { Link } from "react-router-dom";

const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    useEffect(() => {
        setError(false);
        setLoading(true);
        setStatusMsg("Loading topics...")

        getAllTopics()
        .then((topicsData) => {
            setTopics(topicsData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
            setStatusMsg("Unable to load topics. Try again later.")
        })
    }, [])

    if (error || loading) {
        return statusMsg;
    }

    return (
        <>
            <ul className="list">
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug} >
                            <Link to={`/topics/${topic.slug}`} >
                                <FancyBox 
                                    title={topic.slug.toUpperCase()}
                                    body={`Written by ${topic.description}`}
                                /> 
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TopicsList;