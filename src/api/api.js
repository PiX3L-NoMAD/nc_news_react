import axios from "axios";

const api = axios.create({
    baseURL: 'https://janilees-northcoders-project.onrender.com/api'
})

export const getAllArticles = () => {
    return api.get('/articles')
    .then(({ data }) => {
        return data.articles;
    })
}

export const getArticleById = (articleId) => {
    return api.get(`articles/${articleId}`)
    .then(({ data }) => {
        return data.article;
    })
}

export const getCommentsByArticleId = (articleId) => {
    return api.get(`articles/${articleId}/comments/`)
    .then(({ data }) => {
        return data.comments;
    })
}