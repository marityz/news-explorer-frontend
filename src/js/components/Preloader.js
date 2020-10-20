export default class Preloader {
    constructor(parent, template) {
        this.parent = parent;
        this.template = template;
    }

    open = (referenceElement) => {
        this.preloader = this.template.cloneNode(true).querySelector(".preloader");
        this.preloader.classList.add("preloader_activ");
        this.parent.insertBefore(this.preloader, referenceElement);

    };
    close = () => {
        this.preloader.classList.remove("preloader_activ");
    }

}
