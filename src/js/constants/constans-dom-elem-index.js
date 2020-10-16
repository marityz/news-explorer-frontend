
//все элементы с header
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');
const mobileMenu = document.querySelector('.header-menu__nav-mobile');


const toggleButtonMobileMenu = document.querySelector('.header-menu__nav-mobile-toggle-button');
const buttonOpenAuthorizationPopupMobile = document.querySelector('.header-menu__button_mobile');

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
const buttonSendRegistrationForm = document.getElementById('buttonreg');


const modalWindowPopupSuccess = document.querySelector('.popup-success');
const buttonClosePopupSuccess = modalWindowPopupSuccess.querySelector('.popup__close');
const linkOpenPopupAuthorization = document.querySelector('.popup__form_success-link');


const errorResultCards = document.querySelector('.result-error');
const containerCards = document.querySelector('.result__cards');
const templateCard = document.querySelector('#card').content;
const formNewsSearch = document.forms.newsearch;
const buttonForAddingNews = document.querySelector(".result__button");


export {
    header,
    headerMenu,
    mobileMenu,
    toggleButtonMobileMenu,
    buttonOpenAuthorizationPopupMobile,
    modalWindowAuthorization,
    buttonCloseAuthorizationPopup,
    buttonOpenAuthorizationPopup,
    linkOpenAuthorizationPopup,
    formAuthorization,
    modalWindowRegistration,
    buttonCloseRegistrationPopup,
    linkOpenRegistrationPopup,
    buttonSendRegistrationForm,
    modalWindowPopupSuccess,
    buttonClosePopupSuccess,
    linkOpenPopupAuthorization,
    formRegistration,
    errorResultCards,
    containerCards,
    templateCard,
    formNewsSearch,
    buttonForAddingNews,


}
