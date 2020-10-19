const PROPS = {
    isLoggedIn:" ",
    name: '',
};


const defaultDataMainApi = {
    url: 'https://api.marina.avinkin.ru/api',
    //url:'http://localhost:3000/api',
    headers: {
        "Content-Type": "application/json"
    }
};


const defaultDataNewsApi = {
    //baseUrl: https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[ваш_ключ]
    //baseUrl: 'https://newsapi.org/v2/everything',
    baseUrl:'https://nomoreparties.co/news/v2/everything',
    apiKey: 'd3848ea6d4654c90be9e1e1a22f6c998',
};

const notImgCard = "https://fixim.ru/image/question/75/523_5b176e8c.jpg";

export {
    PROPS,
    defaultDataMainApi,
    defaultDataNewsApi,
    notImgCard
}
