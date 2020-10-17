import {formatDate, today, weekBefore} from "../utils/time-utils";
import FORM_ERRORS from "../constants/errorMessages";

export default class NewsCardList {
    constructor(parent, api) {
        this.api = api;
        this.parent = parent;
        this.count = 2;
    }

    addCard = (card) => {
        this.parent.appendChild(card);
    };

    renderResults = (cards) => {
        cards.forEach((card) => {
            return this.addCard(card);
        });
    };

    showMore = (drawCard, button, errorPopup) => {
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
                textErrorPopup.textContent = FORM_ERRORS.errorMessages.resultError;
                errorPopup.openError()
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




}
