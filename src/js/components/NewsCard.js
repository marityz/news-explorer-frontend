import FORM_ERRORS from "../../js/constants/errorMessages";

export default class NewsCard {
    constructor(data, template, api, showLabel,error) {
        this.data = data;
        this.keyword = data.keyword;
        this.title = data.title;
        this.text = data.text;
        this.time = this._formatDate(this.data.date);
        this.source = data.source;
        this.link = data.link;
        this.image = data.image;
        this.template = template;
        this.api = api;
        this.showLabel = showLabel;
        this.error = error;
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
        this.label = this.card.querySelector(".results-card__label");

        //действия для создания карточки
        if(this.showLabel && localStorage.getItem("isLoggedIn") === "true"){
            this.label.textContent = this.data.keyword;
            this.label.classList.remove("results-card__label_none");
        }
        this.titleCard.textContent = this.title;
        this.textCard.textContent = this.text;
        this.sourceCard.textContent = this.source;
        this.sourceCard.setAttribute("href", this.link);
        this.timeCard.textContent = this.time;
        this.imgCard.setAttribute("src",  this.image);
        this._renderIconLogIn();
        this._setEventListeners();
        return this.card;
    };

    _setEventListeners = () => {
        this.flag.addEventListener("mouseover", this._renderIcon);
        this.card.addEventListener("click", this._eventListenerClick);

    };

    _eventListenerClick = (event) => {
        if (event.target === this.flag && localStorage.getItem("isLoggedIn") === "true") {
            this._saveAndDeleteCard();
        } else {
            window.open(this.link);
        }


    };

    _formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
        })}, ${date.getFullYear()}`;
    };

    _renderIcon = () => {
        if (localStorage.getItem("isLoggedIn") === "false") {
            this._renderIconNotSaveText();
            setTimeout(this._hideIconNotSaveText, 800);

        } else {


        }

    };

    _renderIconLogIn = () => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            this.api.getArticles()
                .then((res) => {
                    if (res.length === 0) {

                    } else {
                        res.forEach((card) => {
                            if (card.link === this.link && card.date === this.time) {
                                this._id = card._id;
                                this.flag.classList.add('results-card__flag_save');
                            } else {

                            }
                        })

                    }

                })
                .catch((err) =>{
                    console.log(err);
                    this._displayError();
                })

        }
    };

    _saveAndDeleteCard = () => {
        if (this.flag.classList.contains("results-card__flag_save")) {
            this._deleteCard();
        } else {
            this._saveCard()
        }
    };


    _saveCard = () => {
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
                this._id = res.data._id;
                this.flag.classList.add('results-card__flag_save');
            })
            .catch((err) => {
                console.log(err);
                this._displayError();

            })

    };

    _deleteCard = () => {
        this.api.deleteCard(this._id)
            .then((res) => {
                this.flag.classList.remove('results-card__flag_save');
                console.log(res)
            })
            .catch((err)=>{
                console.log(err);
               this._displayError();
            })

    };


    _renderIconNotSaveText = () => {
        this.flagNotSaveText.classList.remove("results-card__log-in_notdisplay");
    };

    _hideIconNotSaveText = () => {
        this.flagNotSaveText.classList.add("results-card__log-in_notdisplay");
    };

    _displayError = () => {
        this.error.setErrorText(FORM_ERRORS.errorMessages.resultError);
        this.error.openError();
    }
}
