import './index.css';
import Header from "../../js/components/Header.js";
import Popup from "../../js/components/Popup";
import FormValidator from "../../js/components/FormValidator";
import MobileMenu from "../../js/components/MobileMenu";
import FORM_ERRORS from "../../js/constants/errorMessages";
import Form from "../../js/components/Form";
import MainApi from "../../js/api/MainApi";
import NewsApi from "../../js/api/NewsApi";
import NewsCard from "../../js/components/NewsCard";
import NewsCardList from "../../js/components/NewsCardList";

import {PROPS, defaultDataMainApi, defaultDataNewsApi, notImgCard} from "../../js/constants/constans";
import {
    mobileMenu,
    toggleButtonMobileMenu,
    buttonExitMobile,
    windowErrorPopup,
    closePopupErrorButton,
    header,
    headerMenu,
    containerCards,
} from "../../js/constants/constants-dom-elem"


import {
    modalWindowAuthorization,
    buttonCloseAuthorizationPopup,
    buttonOpenAuthorizationPopup,
    linkOpenAuthorizationPopup,
    formAuthorization,
    modalWindowRegistration,
    buttonCloseRegistrationPopup,
    linkOpenRegistrationPopup,
    modalWindowPopupSuccess,
    buttonClosePopupSuccess,
    linkOpenPopupAuthorization,
    formRegistration,
    templateCard,
    formNewsSearch,
    buttonForAddingNews,
    errorElementInputSearch,
    templatePreloader,
    containerPreloader,
    referenceElementPreloader

} from "../../js/constants/constans-dom-elem-index";

import {
    today,
    weekBefore,
    formatDate,
    formatDateRenderCard
} from "../../js/utils/time-utils"

import {
    renderNotFound,
} from "../../js/utils/function-utils"

import Preloader from "../../js/components/Preloader";

(function () {

    const showLabelCard = false;

    //объекты

    const preloader = new Preloader(containerPreloader, templatePreloader);

    const errorPopup = new Popup(windowErrorPopup, closePopupErrorButton);
    errorPopup.setEventListeners();

    const headerMenuNotLogin = new Header(header, headerMenu);
    const headerMenuMobileNotLogin = new Header(header, mobileMenu);


    const toggleMobileMenu = new MobileMenu(mobileMenu, toggleButtonMobileMenu, showLabelCard);
    toggleMobileMenu.setEventListeners();


    function checkForLogin(event) {
        if (event.target.textContent === "Авторизоваться") {
            popupAuthorization.open();
        }
        if (event.target.textContent === localStorage.getItem("username")) {
            headerMenuNotLogin.logOut();
            headerMenuMobileNotLogin.logOut();
            toggleMobileMenu.toggle();
        }
    }


    //проверка на логин
    localStorage.getItem("username") ? headerMenuNotLogin.getAuthContent() : 0;
    localStorage.getItem("username") ? headerMenuMobileNotLogin.getAuthContent() : 0;


    const validFormAuthorization = new FormValidator(formAuthorization, FORM_ERRORS.errorMessages);
    const sendingFormAuthorization = new Form(formAuthorization);

    function setSubmitButtonUnactive(form, formValid) {
        formValid.resetErrorForm();
        form.reset();
        formValid.setSubmitButtonState(false);
    }

    const popupAuthorization = new Popup(modalWindowAuthorization, buttonCloseAuthorizationPopup,
        () => {
            setSubmitButtonUnactive(formAuthorization, validFormAuthorization)
        });


    buttonOpenAuthorizationPopup.addEventListener("click", (event) => {
        sendingFormAuthorization.clearServerError();
        checkForLogin(event);
    });

    popupAuthorization.setEventListeners(toggleButtonMobileMenu);


    const validFormRegistration = new FormValidator(formRegistration, FORM_ERRORS.errorMessages);
    const sendingFormRegistration = new Form(formRegistration);

    //попап регистрации
    const popupRegistration = new Popup(modalWindowRegistration, buttonCloseRegistrationPopup, () => {
        popupAuthorization.close();
        setSubmitButtonUnactive(formRegistration, validFormRegistration)
    });
    popupRegistration.setEventListeners(toggleButtonMobileMenu);

    //попап подтверждения регистрации
    const popupSuccess = new Popup(modalWindowPopupSuccess, buttonClosePopupSuccess, () => {
        popupRegistration.close();
    });
    popupSuccess.setEventListeners(toggleButtonMobileMenu);


    //слушатели на переключение попапов.
    buttonExitMobile.addEventListener('click', (event) => {
        checkForLogin(event)
    });

    linkOpenRegistrationPopup.addEventListener('click', () => {
        popupAuthorization.close();
        popupRegistration.open();

    });

    linkOpenAuthorizationPopup.addEventListener('click', () => {
        popupRegistration.close();
        popupAuthorization.open();
    });

    linkOpenPopupAuthorization.addEventListener('click', () => {
        popupSuccess.close();
        popupAuthorization.open();

    });

//для работы с апи
    const mainApi = new MainApi(defaultDataMainApi);

    sendingFormRegistration.setEventListeners((event) => {
        event.preventDefault();
        const email = event.target.elements.emailreg.value;
        const password = event.target.elements.passwordreg.value;
        const name = event.target.elements.namereg.value;

        mainApi.signUp(email, password, name)
            .then((res) => {
                if (res.message) {
                    return Promise.reject(res);
                }
                popupRegistration.close();
                popupSuccess.open()
            })
            .catch((err) => {
                console.log(err);
                sendingFormRegistration.setServerError(err.message);
            })

    });
    //работа с авторизацией
    sendingFormAuthorization.setEventListeners((event) => {
        event.preventDefault();
        const email = event.target.elements.emailauth.value;
        const password = event.target.elements.passwordauth.value;
        mainApi.signIn(email, password)
            .then((res) => {
                if (res.message) {
                    return Promise.reject(res);
                }
                localStorage.setItem("username", res.name);
                localStorage.setItem("isLoggedIn", true);
                PROPS.isLoggedIn = true;
                PROPS.name = res.name;
                headerMenuMobileNotLogin.render(PROPS);
                headerMenuNotLogin.render(PROPS);
                popupAuthorization.close();
                document.location.reload();

            })
            .then(() => {

            })
            .catch((err) => {
                console.log(err);
                sendingFormAuthorization.setServerError(err.message);
            })
    });


    // работа над отрисовкой карточки

    const apiNewsCard = new NewsApi(defaultDataNewsApi);
    const CardList = new NewsCardList(containerCards, apiNewsCard);

    function drawCard(obj, searchText) {
        if (obj.urlToImage === null) {
            obj.urlToImage = notImgCard;
        }
        if (obj.description === null) {
            obj.description = "  ";
        }

        const card = {
            keyword: searchText,
            title: obj.title,
            link: obj.url,
            text: obj.description,
            date: formatDateRenderCard(obj.publishedAt),
            source: obj.source.name,
            image: obj.urlToImage,
        };
        const newsCard = new NewsCard(card, templateCard, mainApi, showLabelCard, errorPopup);
        return newsCard.createCard();
    }


    formNewsSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        CardList.clearResults();
        buttonForAddingNews.classList.remove("result__button_none");
        const searchText = event.target.elements.tag.value;
        //первая страница при загрузке
        const frontPage = 1;
        if (searchText.length === 0) {
            //вывод ошибки нулевого зарпоса
            containerPreloader.classList.add("result_displaynone");
            errorElementInputSearch.classList.remove('search-error_none');
            setTimeout(() => {
                errorElementInputSearch.classList.add('search-error_none')
            }, 1000);
        } else {
            CardList.setInputTextSearch(searchText);
            preloader.open(referenceElementPreloader);
            apiNewsCard.getArticles(searchText, formatDate(today), formatDate(weekBefore), frontPage)
                //проверка на нулевой массиы
                .then((res) => {
                    if (res.articles.length === 0) {
                        renderNotFound(true);
                        return res;
                    } else {
                        renderNotFound(false);
                        return res;
                    }

                })
                //проверка на длину массива
                .then((res) => {
                    if (res.articles.length < 3) {
                        buttonForAddingNews.classList.add("result__button_none");
                        return res;
                    }
                    return res;
                })
                //отрисовка карточек
                .then((res) => {
                    const cards = res.articles.map((obj) => {
                        return drawCard(obj, searchText)
                    });
                    CardList.renderResults(cards);
                })
                //очищаем форму
                .then(() => {
                    formNewsSearch.reset();
                })
                //устанавливаем ошибку
                .catch((err) => {
                    console.log(err);
                    errorPopup.openError(FORM_ERRORS.errorMessages.resultError);

                })
                //заканчиваетс отриосвка прелоудера
                .finally(() => {
                    preloader.close();
                })
        }
    });


    buttonForAddingNews.addEventListener("click", () => {
        CardList.showMore(drawCard, buttonForAddingNews, errorPopup, preloader, buttonForAddingNews);
    })

})();


