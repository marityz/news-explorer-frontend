import {formatDate, today, weekBefore} from "../utils/time-utils";

export default class NewsCardList {
    constructor(parent, api, error = null) {
        this.api = api;
        this.parent = parent;
        this.count = 2;
        this.error = error;
    }

    addCard = (card) => {
        this.parent.appendChild(card);
    };

    renderResults = (cards) => {
        cards.forEach((card) => {
            return this.addCard(card);
        });
    };

    showMore = (drawCard, button) => {
        this.api.getArticles(this.getInputTextSearch(), formatDate(today), formatDate(weekBefore), this.count)
            .then((res) => {
                if (res.articles.length < 3) {
                    button.classList.add("result__button_none");
                    return res;
                }
                return res;

            })
            .then((res) => {
                const cards = res.articles.map((obj) => {
                    return drawCard(obj, this.getInputTextSearch());
                });
                this.renderResults(cards);

            })
            .then(() => {
                this.count = this.count + 1;
            })
            .catch((err) => {
                console.log(err);
                this.setServerError();

            })


    };

    clearResults = () => {
        this.count = 2;
        this.parent.querySelectorAll(".result-card").forEach((elem) => elem.remove());
    };

    setInputTextSearch = (text) => {
        this.inputText = text;
    };

    getInputTextSearch = () => {
        return this.inputText;
    };


    setServerError = () => {
        this.error.classList.add("result-error_activ");
    };

    clearServerError = () => {
        this.error.classList.remove("result-error_activ");
    };


}
