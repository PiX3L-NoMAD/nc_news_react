import axios from "axios";

export const getAllArticles = () => {
    return axios.get(`https://janilees-northcoders-project.onrender.com/api/articles?p=1`)
    .then((response) => {
        return response.data.articles;
    })
}