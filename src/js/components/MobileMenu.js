export default class MobileMenu {
    constructor(menu, toggleButton) {
        this.menu = menu;
        this.toggleButton = toggleButton;
    }

    setEventListeners = () => {
        this.toggleButton.addEventListener('click', this.toggle);

    };

    toggle = () => {
        if (this.menu.classList.contains('header-menu__nav-mobile_open')) {
            this.menu.classList.remove('header-menu__nav-mobile_open');
            this.toggleButton.style.backgroundImage = "url(../images/menuicon-mobile-menu.svg)"
        } else {
            this.menu.classList.add('header-menu__nav-mobile_open');
            this.toggleButton.style.backgroundImage = "url(../images/header-close.svg)"
        }
    }


}

