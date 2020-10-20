export default class MainApi {
    constructor(data) {
        this.url = data.url;
        this.headers = data.headers;
    }

    signUp = (email, password, name) => {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            credentials: 'include',
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
            headers: this.headers,
            credentials: 'include',
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
            headers: this.headers,
            credentials: 'include',
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


    deleteCard = (id) => {
        return fetch(`${this.url}/articles/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: this.headers,
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((res) => this._returnJson(res))

    };


    // getUserData = () => {
    //     return fetch(`${this.url}/users/me`, {
    //         method: "GET",
    //         credentials: "include",
    //     })
    //         .then((res) => this._returnJson(res));
    //
    // };


    _returnJson = (res) => {
        if (!res.ok) {
            return Promise.resolve(res.json());
        }
        return res.json();
    }


}
