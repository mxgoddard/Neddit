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

export const getComments = async (id) => {
    const { data } = await axios.get(`${BASE_URL}articles/${id}/comments`);
    return data.comments;
};

export const vote = async (id, section, voted) => {
    const url = `${BASE_URL}${section}/${id}?vote=${voted}`;
    const { data } = await axios.patch(url);
    return data;
};


export const login = async (username) => {
    const url = `${BASE_URL}users/${username}`;
    try {
        const { data } = await axios.get(url);
        return data.user;
    } catch(error) {
        console.log(error);
        return;
    }
};

export const getTopics = async () => {
    const url = `${BASE_URL}topics`;
    const { data } = await axios.get(url);
    return data.topics;
};

export const postArticle = async (slug, article) => {
    const url = `${BASE_URL}topics/${slug}/articles`;
    const { data } = await axios.post(url, article);
    console.log(data);
    return data;
};
