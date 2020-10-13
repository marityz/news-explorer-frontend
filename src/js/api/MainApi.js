export default class MainApi {
    constructor(data) {
        this.url = data.url;
        this.headers = data.headers;
    }

    signUp = (email, password, name) => {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            }),
        })
            .then((res) => this._returnJson(res))
    };


    signIn = (email, password) => {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => this._returnJson(res))
    };

    getArticles = () => {
        return fetch(`${this.url}/articles`, {
            method: "GET",
            credentials: 'include',
            headers: this.headers,
        })
            .then((res) => this._returnJson(res))
    };

    createArticle = (saveData) => {
        return fetch(`${this.url}/articles`, {
            method: "POST",
            credentials: "include",
            headers: this.headers,
            body: JSON.stringify({
                keyword: saveData.keyword,
                title: saveData.title,
                text: saveData.text,
                date: saveData.date,
                source: saveData.source,
                link: saveData.link,
                image: saveData.image,
            }),
        })
            .then((res) => this._returnJson(res));
    };

        _returnJson = (res) => {
            if (!res.ok) {
                return Promise.resolve(res.json());
            }
            return res.json();
        }



    }
