localStorage.getItem("username") ? 0 : (window.location.href = "index.html");


import './articles.css';
import Header from "../../js/components/Header.js";
import MobileMenu from "../../js/components/MobileMenu";
import UserInfo from "../../js/components/UserInfo.js"
import MainApi from "../../js/api/MainApi";
import {defaultDataMainApi} from "../../js/constants/constans";
import ArticlesCard from "../../js/components/ArticlesCard";
import NewsCardList from "../../js/components/NewsCardList";


const mobileMenu = document.querySelector('.header-menu__nav-mobile');
const toggleButtonMobileMenu = document.querySelector('.header-menu__nav-mobile-toggle-button');
const buttonExitMobile = document.querySelector(".header-menu__button_mobile");

const toggleMobileMenu = new MobileMenu(mobileMenu, toggleButtonMobileMenu);
toggleMobileMenu.setEventListeners();


const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header-menu");


const headerArticles = new Header(header, headerMenu);
headerArticles.render(true);
const buttonLogOut = document.querySelector(".header-menu__button");
buttonLogOut.addEventListener("click", () => {
    headerArticles.logOut();
    document.location.href = "./index.html";
});


const api = new MainApi(defaultDataMainApi);

const templateUserInfo = document.querySelector("#user-info").content;

const userInfo = new UserInfo(header, templateUserInfo, api);

userInfo.getUserData();

const templateCardArticles = document.querySelector("#result-card-articles").content;
const containerCard = document.querySelector(".result__cards");


const cardList = new NewsCardList(containerCard, api, null);
const showLabel = true;



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
    const newsCard = new ArticlesCard(card, templateCardArticles, api, showLabel);
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
        console.log(err)
    });


const arr  = ["Огонь", "Погода", "Огонь", "Огонь","Погода","Просто"];
//нужно получить
//arr = {"Огонь" - 3, "Погода" - 2, "Просто" -1}

