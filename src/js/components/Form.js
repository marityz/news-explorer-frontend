export default class Form {
    constructor(form) {
        this.form = form;

    }

    setServerError = (error) => {
        this.form.querySelector('.server-error').textContent = error;
    };

    clearServerError = () => {
        this.form.querySelector('.server-error').textContent = "";
    };


    setEventListeners = (listener) => {
        this.form.addEventListener("submit", listener);
        this.form.addEventListener("input", this.clearServerError)
    };
}
