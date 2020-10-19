import FORM_ERRORS from "../constants/errorMessages";

export default class UserInfo {
    constructor(parent, template, api) {
        this.parent = parent;
        this.template = template;
        this.api = api;
    }

    _create = (numberOfArticles, keywords) => {
        console.log(keywords, numberOfArticles);
        //приходит массив статей, упорядочный массив КС
        this.userInfo = this.template.cloneNode(true).querySelector(".user-info");
        //нашли все элементы
        this.name = this.userInfo.querySelector(".user-info__title-name");

        this.numSaveArticles = this.userInfo.querySelector(".user-info__num");
        this.text = this.userInfo.querySelector(".user-info__text");
        this.tag = this.userInfo.querySelector(".user-info__tag");
        this.subtext = this.userInfo.querySelector(".user-info__number");
        this.numTag = this.userInfo.querySelector(".user-info__numtag");

        if (keywords.length === 0) {
            this.text.classList.add('user-info__text_none');
        }
        if (keywords.length < 3 || keywords.length === 3) {
            this.subtext.classList.add('user-info__num_none');
            this.tag.textContent = keywords;
        }
        if (keywords.length > 3) {
            this.numTag.textContent = keywords.length - 2;
            this.tag.textContent = keywords.slice(0, 2);
        }
        this.name.textContent = localStorage.getItem("username");
        this.numSaveArticles.textContent = numberOfArticles.length;


        return this.parent.appendChild(this.userInfo);

    };


    getUserData = (error) => {
        this.api.getArticles()
            .then((res) => {

                const keywords = res.map((elem) => {
                    return elem.keyword;
                });

                const sortWord = this._getWordCount(keywords).map((obj) => {
                    return ` ${obj.key}`
                });

                this._create(res, sortWord);


            })
            .catch((err) => {
                console.log(err);
                error.openError(err.message)

            });
    };


    _getWordCount = (array) => {
        const obj = array.reduce(
            (acc, rec) => {
                return (typeof acc[rec] !== 'undefined') ? {
                    ...acc,
                    [rec]: acc[rec] + 1
                } : {
                    ...acc,
                    [rec]: 1
                }
            }, {}
        );
        const newArr = Object.keys(obj).map((key) => ({
            key: key,
            num: obj[key]
        }));
        const arr = newArr.sort(function (a, b) {
            return b.num - a.num;
        });
        return arr;
    }

}
