import MainApi from "../api/MainApi";


const PROPS = {
    isLoggedIn:" ",
    name: '',
};


const defaultDataMainApi = {
    url: 'http://localhost:3000/api',
    headers: {
        "Content-Type": "application/json"
    }
};


const defaultDataNewsApi = {
    //baseUrl: https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[ваш_ключ]
    baseUrl: 'https://newsapi.org/v2/everything',
    apiKey: 'd3848ea6d4654c90be9e1e1a22f6c998',
};

export {
    PROPS,
    defaultDataMainApi,
    defaultDataNewsApi
}
