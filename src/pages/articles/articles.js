localStorage.getItem("username") ? 0 : (window.location.href = "index.html");


import './articles.css';
import Header from "../../js/components/Header.js";
import MobileMenu from "../../js/components/MobileMenu";
import UserInfo from "../../js/components/UserInfo.js"
import MainApi from "../../js/api/MainApi";
import {defaultDataMainApi} from "../../js/constants/constans";
import ArticlesCard from "../../js/components/ArticlesCard";
import NewsCardList from "../../js/components/NewsCardList";
import Popup from "../../js/components/Popup";
import FORM_ERRORS from "../../js/constants/errorMessages";

import {
    mobileMenu,
    toggleButtonMobileMenu,
    buttonExitMobile,
    windowErrorPopup,
    closePopupErrorButton,
    textErrorPopup,
    header,
    headerMenu,
    containerCards,
    buttonLogOut
} from "../../js/constants/constants-dom-elem"


(function () {
    const showLabelCard = true;
    //все темплейты
    const templateCardArticles = document.querySelector("#result-card-articles").content;
    const templateUserInfo = document.querySelector("#user-info").content;

    //объекты
    const toggleMobileMenu = new MobileMenu(mobileMenu, toggleButtonMobileMenu, showLabelCard);
    toggleMobileMenu.setEventListeners();

    const errorPopup = new Popup(windowErrorPopup, closePopupErrorButton, null);
    errorPopup.setEventListeners();

    const headerArticles = new Header(header, headerMenu);
    headerArticles.render(true);


    const api = new MainApi(defaultDataMainApi);

    const userInfo = new UserInfo(header, templateUserInfo, api);

    userInfo.getUserData(errorPopup);

    const cardList = new NewsCardList(containerCards, api, null);

    //слушатели

    buttonLogOut.addEventListener("click", () => {
        headerArticles.logOut();
        document.location.href = "./index.html";
    });

    buttonExitMobile.addEventListener("click", () => {
        headerArticles.logOut();
    });


    function drawCard(obj) {

        const card = {
            id: obj._id,
            keyword: obj.keyword,
            title: obj.title,
            link: obj.link,
            text: obj.text,
            date: obj.date,
            source: obj.source,
            image: obj.image,
        };
        const newsCard = new ArticlesCard(card, templateCardArticles, api, showLabelCard);
        return newsCard.createCard();
    }


    api.getArticles()
        .then((res) => {
            const cards = res.map((card) => {
                return drawCard(card);
            });
            cardList.renderResults(cards);

        })
        .catch((err) => {
            console.log(err);
            errorPopup.openError(FORM_ERRORS.errorMessages.resultError);
        });

})
();


