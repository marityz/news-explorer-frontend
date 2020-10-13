//
const iconSave = require("../../images/save.svg");
const iconDelete = require("../../images/trash.svg");
const blueIconSave = require("../../images/bookmark.svg");

export default class NewsCard {
    constructor(data, template, api) {

        this.data = data;
        this.keyword = data.keyword;
        this.title = data.title;
        this.text = data.text;
        this.time = this._formatDate(this.data.publishedAt || this.data.date);
        this.source = data.source;
        this.link = data.link;
        this.image = data.image;
        this.template = template;
        this.api = api;
    }

    createCard = () => {
        this.card = this.template.cloneNode(true).querySelector(".result-card");
        //все элементы для прорисовки карты
        this.imgCard = this.card.querySelector(".results-card__image-content");
        this.titleCard = this.card.querySelector(".results-card__title");
        this.textCard = this.card.querySelector(".results-card__text");
        this.sourceCard = this.card.querySelector(".results-card__source");
        this.timeCard = this.card.querySelector(".results-card__date");
        this.flag = this.card.querySelector(".results-card__flag");
        this.flagNotSaveText = this.card.querySelector(".results-card__log-in");

        //действия для создания карточки
        this.titleCard.textContent = this.title;
        this.textCard.textContent = this.text;
        this.sourceCard.textContent = this.source;
        this.sourceCard.setAttribute("href", this.link);
        this.timeCard.textContent = this.time;
        this.imgCard.setAttribute("src", this.image);
        this._renderIconLogIn();
        this._setEventListeners();
        return this.card;
    };

    _setEventListeners = () => {
        this.flag.addEventListener("mouseover", this._renderIcon);
        this.flag.addEventListener("click", this._saveCard);
    };

    _formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
        })}, ${date.getFullYear()}`;
    };





    _renderIcon = () => {
        if(localStorage.getItem("isLoggedIn") === "false"){
            console.log("хуй");
            this._renderIconNotSaveText();
            setTimeout(this._hideIconNotSaveText, 800);
        } else {

        }

    };

    _renderIconLogIn = () => {
        if(localStorage.getItem("isLoggedIn") === "true"){
            this.api.getArticles()
                .then((res) => {
                    res.forEach((card) => {
                        if(card.link === this.link && card.date === this.time){
                            this.flag.style.backgroundImage = "url(../../images/bookmark.svg)"
                        } else {

                        }
                    })
                })

        }
    };

    _saveCard = () => {
       // if() {
            const obj = {
                keyword: this.keyword,
                title: this.title,
                text: this.text,
                date: this.time,
                source: this.source,
                link: this.link,
                image: this.image,
            };

            this.api.createArticle(obj)
                .then((res) => {
                    this.flag.style.backgroundImage = "url(../../images/bookmark.svg)"
                })
       // }

    };


    _renderIconNotSaveText = () => {
        this.flagNotSaveText.classList.remove("results-card__log-in_notdisplay");
    };

    _hideIconNotSaveText = () => {
        this.flagNotSaveText.classList.add("results-card__log-in_notdisplay");
    }
}
