export default class MobileMenu {
    constructor(menu, toggleButton, isColor) {
        this.menu = menu;
        this.toggleButton = toggleButton;
        this.color = isColor;
    }

    setEventListeners = () => {
        this.toggleButton.addEventListener('click', this.toggle);

    };

    toggle = () => {
        if (this.menu.classList.contains('header-menu__nav-mobile_open')) {
            this.menu.classList.remove('header-menu__nav-mobile_open');

            if (this.color) {
                this.toggleButton.style.backgroundImage = "url(./images/menu-mobile-black.svg)";
                return;
            }
            this.toggleButton.style.backgroundImage = "url(./images/menuicon-mobile-menu.svg)";
            return;

        }
        this.menu.classList.add('header-menu__nav-mobile_open');
        if (this.color) {
            this.toggleButton.style.backgroundImage = "url(./images/cross-sign.svg)";
            return;
        }
        this.toggleButton.style.backgroundImage = "url(./images/header-close.svg)";

    }


}

