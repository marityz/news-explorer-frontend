export default class Header {
    constructor(parents, menu) {
        this.parents = parents;
        this.menu = menu;
        this.linkArticle = this.menu.querySelector('.header-menu__link-article') || null;
        this.text = this.menu.querySelector('.header-menu-auth__user-name');
        this.imgExit = this.menu.querySelector('.header-menu-auth__logout');
    }


    //отрисовка разметки
    render = (props) => {
        //если  залогинен
        if (!props.isLoginIn || true) {
            this.linkArticle.classList.remove('header-menu__article_nologin');
            this.imgExit.classList.remove('header-menu-auth__logout_none');
            this.text.textContent = localStorage.getItem("username");
        }
        // не залогинен
        else {
            this.linkArticle.classList.add('header-menu__article_nologin');
            this.imgExit.classList.add('header-menu-auth__logout_none');
            this.text.textContent = "Авторизоваться";
        }


        this.parents.prepend(this.menu);

    };

    getAuthContent = () => {
        this.linkArticle.classList.remove('header-menu__article_nologin');
        this.imgExit.classList.remove('header-menu-auth__logout_none');
        this.text.textContent = localStorage.getItem("username");

    };

    logOut = () => {
        localStorage.removeItem('username');
        localStorage.setItem('isLoggedIn', false);
        this.text.textContent = "Авторизоваться";
        this.linkArticle.classList.add('header-menu__article_nologin');
        this.imgExit.classList.add('header-menu-auth__logout_none');
        document.location.reload();

    };


}
