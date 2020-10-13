export default class Popup {
    constructor(modalWindow, closePopupButton, onOpenCallback) {
        this.modalWindow = modalWindow;
        this.closePopupButton = closePopupButton;

        this.onOpenCallback = onOpenCallback;
    }


    setEventListeners = (buttonClose = null) => {
        this.buttonClose = buttonClose;

        if (this.buttonClose != null) {
            this.buttonClose.addEventListener("click", this.close);
        }
        this.closePopupButton.addEventListener("click", this.close);
    };


    open = () => {
        this.onOpenCallback();
        this.modalWindow.classList.add("popup_is-opened");
        document.addEventListener('keyup', this._handleEscClose);
        document.addEventListener('mousedown', this._closePopupMousedown);
    };

    close = () => {
        this.modalWindow.classList.remove("popup_is-opened");
        document.removeEventListener('keyup', this._handleEscClose);
        document.removeEventListener('mousedown', this._closePopupMousedown);
    };

    //закрытие по ESC
    _handleEscClose = (event) => {
        if (event.keyCode === 27) {
            this.close();
        }
    };
    //закрытие попапа по клику вне его
    _closePopupMousedown = (event) => {
        if (event.target.classList.contains('popup_is-opened')) {
            this.close();
        }
    }


}
