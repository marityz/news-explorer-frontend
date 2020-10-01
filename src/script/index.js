import './../pages/index.css';
import Popup from "./Popup";
import FormValidator from "./FormValidator";
import MobileMenu from "./MobileMenu";
import FormPopup from "./FormPopup";

(function () {

    const errorMessages = {
        empty: 'Это обязательное поле',
        wrongLength: 'Должно быть от 2 до 30 символов',
        wrongUrl: 'Здесь должна быть ссылка',
        wrongEmail: 'Здесь нужно указать email',
        wrongPassword: 'Поле пароль должно содержать более 8 символов'
    };
    const textLoading = "Загрузка...";
    //открытие/закрытие меню на мелких разрешениях
    const mobileMenu = document.querySelector('.header-menu__nav-mobile');
    const toggleButtonMobileMenu = document.querySelector('.header-menu__nav-mobile-toggle-button');

    const toggleMobileMenu = new MobileMenu(mobileMenu, toggleButtonMobileMenu);
    toggleMobileMenu.setEventListeners();

    // все о попапе регистрации
    const popupRegistration = document.querySelector('.popup-reg');
    const openPopupRegistrationButton = document.querySelector('.header-menu__button');
    const closePopupRegistrationButton = popupRegistration.querySelector('.popup__close');
    const formRegistration = document.forms.registr;
    const validFormRegistration = new FormValidator(formRegistration, errorMessages);

    function setSubmitButtonUnactive(form, formValid) {
        formValid.resetErrorForm();
        form.reset();
        formValid.setSubmitButtonState(false);
    }

    const togglePopupRegistration = new Popup(popupRegistration, closePopupRegistrationButton, openPopupRegistrationButton, () => {
        setSubmitButtonUnactive(formRegistration, validFormRegistration)
    });

    togglePopupRegistration.setEventListeners();


//все о папапе авторизации
    const popupAuth = document.querySelector('.popup-auth');
    const openPopupAuth = popupRegistration.querySelector('.popup__form_auth-link');
    const closePopupAuth = popupAuth.querySelector('.popup__close');
    const formAuth = document.forms.auth;
    const validFormAuth = new FormValidator(formAuth, errorMessages);


    const togglePopupAuth = new Popup(popupAuth, closePopupAuth, openPopupAuth, () => {
        togglePopupRegistration.close();
    });

    togglePopupAuth.setEventListeners();


})();


// function toggleMenuMobile(){
//     if (openNavMobileMenu.classList.contains('header-menu__nav-mobile_open')) {
//         openNavMobileMenu.classList.remove('header-menu__nav-mobile_open');
//         toggleNavMobileButton.style.backgroundImage = "url(../images/menuicon-mobile-menu.svg)"
//     } else {
//         openNavMobileMenu.classList.add('header-menu__nav-mobile_open');
//         toggleNavMobileButton.style.backgroundImage = "url(../images/header-close.svg)"
//     }
// }
//
//
// toggleNavMobileButton.addEventListener('click', () => {
//     toggleMenuMobile()
// });
