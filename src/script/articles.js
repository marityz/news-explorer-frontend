import './../pages/articles.css';
import MobileMenu from "./MobileMenu";

(function () {
    const mobileMenu = document.querySelector('.header-menu__nav-mobile');
    const toggleButtonMobileMenu = document.querySelector('.header-menu__nav-mobile-toggle-button');

    const toggleMobileMenu = new MobileMenu(mobileMenu, toggleButtonMobileMenu);
    toggleMobileMenu.setEventListeners();

})();
