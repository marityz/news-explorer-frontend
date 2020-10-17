


//работа с попапами
//авторизация
const modalWindowAuthorization = document.querySelector('.popup-auth');
const buttonCloseAuthorizationPopup = modalWindowAuthorization.querySelector('.popup__close');
const buttonOpenAuthorizationPopup = document.querySelector('.header-menu__auth');
const linkOpenAuthorizationPopup = document.querySelector('.popup__form_auth-link');


// формы

const formAuthorization = document.forms.auth;
const formRegistration = document.forms.registr;


//регистрация
const modalWindowRegistration = document.querySelector('.popup-reg');
const buttonCloseRegistrationPopup = modalWindowRegistration.querySelector('.popup__close');
const linkOpenRegistrationPopup = document.querySelector('.popup__form_reg-link');


const modalWindowPopupSuccess = document.querySelector('.popup-success');
const buttonClosePopupSuccess = modalWindowPopupSuccess.querySelector('.popup__close');
const linkOpenPopupAuthorization = document.querySelector('.popup__form_success-link');



const templateCard = document.querySelector('#card').content;
const formNewsSearch = document.forms.newsearch;
const buttonForAddingNews = document.querySelector(".result__button");

const windowErrorPopup = document.querySelector(".popup-err");
const closePopupErrorButton = windowErrorPopup.querySelector(".popup__close");
const textErrorPopup = windowErrorPopup.querySelector( ".popup-err__text");
const errorElementInputSearch = document.querySelector(".search-error");


export {

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
    windowErrorPopup,
    closePopupErrorButton,
    textErrorPopup,
    errorElementInputSearch
}
