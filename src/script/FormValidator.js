export default class FormValidator {
    constructor(element, errorMessages) {
        this.element = element;
        this.errorMessages = errorMessages;

        this._init();
    }

    _isValidate = (input) => {
        input.setCustomValidity("");

        if (input.validity.valueMissing) {
            input.setCustomValidity(`${this.errorMessages.empty}`);
            return false;
        }

        if (!this._isValidEmail(input.value) && input.type === "email") {
            input.setCustomValidity(`${this.errorMessages.wrongEmail}`);
            return false;
        }

        if (input.validity.tooShort && input.type === "password") {
            input.setCustomValidity(`${this.errorMessages.wrongPassword}`);
            return false;
        }

        if (input.validity.tooLong || input.validity.tooShort) {
            input.setCustomValidity(`${this.errorMessages.wrongLength}`);
            return false;
        }


        return input.checkValidity();
    };

    _findErrorElement = (input) => {
        const errorElem = this.errorElems.find((element) => {
            return element.id === `${input.id}-error`;
        });
        return errorElem;
    };

    _isValidEmail = (input) => {
        const regExp = /^(([a-zA-Z0-9])((([a-zA-Z0-9])*([-_]{1}))?[^_\-\#\.\,\!\$\%\^\&\*\(\)\/\\\|\s\@\?\'\]\[\}\;\>\<\:])?)+@(((([a-z])*([-_]{1})?)[^_\-\#\.\,\!\$\%\^\&\*\(\)\/\\\|\s\@\?\'\]\[\}\;\>\<\:]))+(((\.[a-z]{2,}))+)$/;
        return regExp.test(input);
    };

    resetErrorForm = () => {
        this.inputs.forEach((input) => {
            this._findErrorElement(input).textContent = "";
        });
    };

    _checkInputValidity = (input) => {
        const errorElem = this._findErrorElement(input);

        if (!this._isValidate(input)) {
            errorElem.textContent = input.validationMessage;
        } else {
            errorElem.textContent = "";
        }

    };

    setSubmitButtonState = (state) => {
        if (state) {
            this.button.removeAttribute("disabled");
            this.button.classList.add("popup__button_valid");

        } else {
            this.button.setAttribute("disabled", true);
            this.button.classList.remove("popup__button_valid");
        }

    };

    _init = () => {
        this.button = this.element.querySelector(".popup__button");
        this.inputs = [...this.element.querySelectorAll(".popup__input")];
        this.errorElems = this.inputs.map((input) => {
            return this.element.querySelector(`#${input.id}-error`);
        });
        this._setEventListeners();
    };

    _handlerInputForm = (event) => {
        const input = event.target;

        this._checkInputValidity(input);

        const isValidInputs = this.inputs.every((input) => {
            return this._isValidate(input);
        });

        this.setSubmitButtonState(isValidInputs);

    };


    _setEventListeners = () => {
        this.element.addEventListener("input", this._handlerInputForm);
    }

}
