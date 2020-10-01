import './../pages/index.css';
import Popup from "./Popup";

(function () {
    const popupRegistr = document.querySelector('.popup-reg');
    const openPopupRegistrButton = document.querySelector('.header-menu__button');
    const closePopupRegistrButton = popupRegistr.querySelector('.popup__close');


    const popupAuth = document.querySelector('.popup-auth');
    const openPopupAuth = popupRegistr.querySelector('.popup__form_auth-link');
    const closePopupAuth = popupAuth.querySelector('.popup__close');


    const togglePopupRegistr = new Popup(popupRegistr, closePopupRegistrButton, openPopupRegistrButton, ()=>{
        console.log('llox')
    });

    togglePopupRegistr.setEventListeners();

    const togglePopupAuth = new Popup( popupAuth, closePopupAuth, openPopupAuth, ()=>{
        togglePopupRegistr.close();
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
