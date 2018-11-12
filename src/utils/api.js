import axios from 'axios';

const BASE_URL = 'https://ncreddit.herokuapp.com/api/';

export const getArticles = async () => {
    const { data } = await axios.get(`${BASE_URL}/articles`);
    return data.articles;
};

export const getArticle = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
    return data.article;
};

export const postComment = async (comment, id) => {
    const url = `${BASE_URL}articles/${id}/comments`;
    const { data } = await axios.post(url, comment);
    return data;
};