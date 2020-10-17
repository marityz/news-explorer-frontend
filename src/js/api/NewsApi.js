export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getArticles(text, startdate, todate, page) {
        return fetch(`${this.options.baseUrl}?q=${text}&from=${startdate}&to=${todate}&page=${page}&pageSize=3&apiKey=${this.options.apiKey}`, {
            method: 'GET',

        })

            .then((res) => this._returnJson(res));
    }

    _returnJson = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
