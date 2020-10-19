import NewsCard from "./NewsCard";

export default class ArticlesCard extends NewsCard{
    constructor(data, template, api, showLabel) {
        super(data, template, api, showLabel);
    }

    _deleteCard = () => {
        this.api.deleteCard(this.data.id)
            .then((res) => {
                document.location.reload();
                console.log( "Карточка удалена")
            })
            .catch((err)=>{
                console.log(err)
            })

    };
    _saveAndDeleteCard = () => {
        this._deleteCard();
    };

    _renderIcon = () => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            this._renderIconNotSaveText();
            setTimeout(this._hideIconNotSaveText, 1000);
        }
    };

}
