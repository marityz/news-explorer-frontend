export default class Popup {
    constructor(modalWindow, closePopupButton, openPopupButton = null, onOpenCallback) {
        this.modalWindow = modalWindow;
        this.openPopupButton = openPopupButton;
        this.closePopupButton = closePopupButton;
        this.onOpenCallback = onOpenCallback;
    }

    setEventListeners = () => {
        if (this.openPopupButton != null) {
            this.openPopupButton.addEventListener("click", this.open);
        }
        this.closePopupButton.addEventListener("click", this.close);
    };

    open = () => {
        this.onOpenCallback();
        this.modalWindow.classList.add("popup_is-opened");
    };

    close = () => {
        this.modalWindow.classList.remove("popup_is-opened");
    };


}
