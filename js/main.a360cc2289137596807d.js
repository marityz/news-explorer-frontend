!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f}));var r=document.querySelector(".header-menu__nav-mobile"),o=document.querySelector(".header-menu__nav-mobile-toggle-button"),i=document.querySelector(".header-menu__button_mobile"),a=document.querySelector(".popup-err"),s=a.querySelector(".popup__close"),u=a.querySelector(".popup-err__text"),c=document.querySelector(".header"),l=document.querySelector(".header-menu"),d=document.querySelector(".result__cards"),f=document.querySelector(".header-menu__button")},function(e,t,n){"use strict";t.a={errorMessages:{empty:"Это обязательное поле",wrongLength:"Должно быть от 2 до 30 символов",wrongUrl:"Здесь должна быть ссылка",wrongEmail:"Здесь нужно указать email",wrongPassword:"Поле пароль должно содержать более 8 символов",resultError:"Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}}},function(e,t,n){"use strict";function r(e){return e>=9?e:"0".concat(e)}n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=new Date,i=new Date;function a(e){return"".concat(e.getFullYear(),"-").concat(r(e.getMonth()+1),"-").concat(r(e.getDate()))}i.setDate(o.getDate()-7)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a}));var r={isLoggedIn:" ",name:""},o={url:"https://api.marina.avinkin.ru/api",headers:{"Content-Type":"application/json"}},i={baseUrl:"https://nomoreparties.co/news/v2/everything",apiKey:"d3848ea6d4654c90be9e1e1a22f6c998"},a="https://fixim.ru/image/question/75/523_5b176e8c.jpg"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));var i=function e(t,n){var i=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r(this,e),o(this,"setEventListeners",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i.buttonClose=e,null!=i.buttonClose&&i.buttonClose.addEventListener("click",i.close),i.closePopupButton.addEventListener("click",i.close)})),o(this,"open",(function(){i.onOpenCallback(),i.modalWindow.classList.add("popup_is-opened"),document.addEventListener("keyup",i._handleEscClose),document.addEventListener("mousedown",i._closePopupMousedown)})),o(this,"close",(function(){i.modalWindow.classList.remove("popup_is-opened"),document.removeEventListener("keyup",i._handleEscClose),document.removeEventListener("mousedown",i._closePopupMousedown)})),o(this,"openError",(function(){i.modalWindow.classList.add("popup_is-opened"),document.addEventListener("keyup",i._handleEscClose),document.addEventListener("mousedown",i._closePopupMousedown)})),o(this,"setErrorText",(function(e){i.modalWindow.querySelector("popup-err__text").textContent=e})),o(this,"_handleEscClose",(function(e){27===e.keyCode&&i.close()})),o(this,"_closePopupMousedown",(function(e){e.target.classList.contains("popup_is-opened")&&i.close()})),this.modalWindow=t,this.closePopupButton=n,this.onOpenCallback=a}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"render",(function(e){console.log(e),e.isLoginIn,o.linkArticle.classList.remove("header-menu__article_nologin"),o.imgExit.classList.remove("header-menu-auth__logout_none"),o.text.textContent=localStorage.getItem("username"),o.parents.prepend(o.menu)})),r(this,"getAuthContent",(function(){o.linkArticle.classList.remove("header-menu__article_nologin"),o.imgExit.classList.remove("header-menu-auth__logout_none"),o.text.textContent=localStorage.getItem("username")})),r(this,"logOut",(function(){localStorage.removeItem("username"),localStorage.setItem("isLoggedIn",!1),o.text.textContent="Авторизоваться",o.linkArticle.classList.add("header-menu__article_nologin"),o.imgExit.classList.add("header-menu-auth__logout_none"),document.location.reload()})),this.parents=t,this.menu=n,this.linkArticle=this.menu.querySelector(".header-menu__link-article")||null,this.text=this.menu.querySelector(".header-menu-auth__user-name"),this.imgExit=this.menu.querySelector(".header-menu-auth__logout")}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t,n,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"setEventListeners",(function(){i.toggleButton.addEventListener("click",i.toggle)})),r(this,"toggle",(function(){i.menu.classList.contains("header-menu__nav-mobile_open")?(i.menu.classList.remove("header-menu__nav-mobile_open"),i.color?i.toggleButton.style.backgroundImage="url(../images/menu-mobile-black.svg)":i.toggleButton.style.backgroundImage="url(../images/menuicon-mobile-menu.svg)"):(i.menu.classList.add("header-menu__nav-mobile_open"),i.toggleButton.style.backgroundImage="url(../images/header-close.svg)")})),this.menu=t,this.toggleButton=n,this.color=o}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"signUp",(function(e,t,r){return fetch("".concat(n.url,"/signup"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({email:e,password:t,name:r})}).then((function(e){return n._returnJson(e)}))})),r(this,"signIn",(function(e,t){return fetch("".concat(n.url,"/signin"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({email:e,password:t})}).then((function(e){return n._returnJson(e)}))})),r(this,"getArticles",(function(){return fetch("".concat(n.url,"/articles"),{method:"GET",credentials:"include",headers:n.headers}).then((function(e){return n._returnJson(e)}))})),r(this,"createArticle",(function(e){return fetch("".concat(n.url,"/articles"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image})}).then((function(e){return n._returnJson(e)}))})),r(this,"deleteCard",(function(e){return fetch("".concat(n.url,"/articles/").concat(e),{method:"DELETE",credentials:"include",headers:n.headers,body:JSON.stringify({id:e})}).then((function(e){return n._returnJson(e)}))})),r(this,"_returnJson",(function(e){return e.ok?e.json():Promise.resolve(e.json())})),this.url=t.url,this.headers=t.headers}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function e(t,n,i,a,s){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"createCard",(function(){return u.card=u.template.cloneNode(!0).querySelector(".result-card"),u.imgCard=u.card.querySelector(".results-card__image-content"),u.titleCard=u.card.querySelector(".results-card__title"),u.textCard=u.card.querySelector(".results-card__text"),u.sourceCard=u.card.querySelector(".results-card__source"),u.timeCard=u.card.querySelector(".results-card__date"),u.flag=u.card.querySelector(".results-card__flag"),u.flagNotSaveText=u.card.querySelector(".results-card__log-in"),u.label=u.card.querySelector(".results-card__label"),u.showLabel&&"true"===localStorage.getItem("isLoggedIn")&&(u.label.textContent=u.data.keyword,u.label.classList.remove("results-card__label_none")),u.titleCard.textContent=u.title,u.textCard.textContent=u.text,u.sourceCard.textContent=u.source,u.sourceCard.setAttribute("href",u.link),u.timeCard.textContent=u.time,u.imgCard.setAttribute("src",u.image),u._renderIconLogIn(),u._setEventListeners(),u.card})),o(this,"_setEventListeners",(function(){u.flag.addEventListener("mouseover",u._renderIcon),u.card.addEventListener("click",u._eventListenerClick)})),o(this,"_eventListenerClick",(function(e){e.target===u.flag&&"true"===localStorage.getItem("isLoggedIn")?u._saveAndDeleteCard():window.open(u.link)})),o(this,"_formatDate",(function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"}),", ").concat(t.getFullYear())})),o(this,"_renderIcon",(function(){"false"===localStorage.getItem("isLoggedIn")&&(u._renderIconNotSaveText(),setTimeout(u._hideIconNotSaveText,800))})),o(this,"_renderIconLogIn",(function(){"true"===localStorage.getItem("isLoggedIn")&&u.api.getArticles().then((function(e){0===e.length||e.forEach((function(e){e.link===u.link&&e.date===u.time&&(u._id=e._id,u.flag.classList.add("results-card__flag_save"))}))})).catch((function(e){console.log(e),u._displayError()}))})),o(this,"_saveAndDeleteCard",(function(){u.flag.classList.contains("results-card__flag_save")?u._deleteCard():u._saveCard()})),o(this,"_saveCard",(function(){var e={keyword:u.keyword,title:u.title,text:u.text,date:u.time,source:u.source,link:u.link,image:u.image};u.api.createArticle(e).then((function(e){u._id=e.data._id,u.flag.classList.add("results-card__flag_save")})).catch((function(e){console.log(e),u._displayError()}))})),o(this,"_deleteCard",(function(){u.api.deleteCard(u._id).then((function(e){u.flag.classList.remove("results-card__flag_save"),console.log(e)})).catch((function(e){console.log(e),u._displayError()}))})),o(this,"_renderIconNotSaveText",(function(){u.flagNotSaveText.classList.remove("results-card__log-in_notdisplay")})),o(this,"_hideIconNotSaveText",(function(){u.flagNotSaveText.classList.add("results-card__log-in_notdisplay")})),o(this,"_displayError",(function(){u.error.setErrorText(r.a.errorMessages.resultError),u.error.openError()})),this.data=t,this.keyword=t.keyword,this.title=t.title,this.text=t.text,this.time=this._formatDate(this.data.date),this.source=t.source,this.link=t.link,this.image=t.image,this.template=n,this.api=i,this.showLabel=a,this.error=s}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2),o=n(1);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"addCard",(function(e){a.parent.appendChild(e)})),i(this,"renderResults",(function(e){e.forEach((function(e){return a.addCard(e)}))})),i(this,"showMore",(function(e,t,n){a.api.getArticles(a.getInputTextSearch(),Object(r.a)(r.b),Object(r.a)(r.c),a.count).then((function(e){return e.articles.length<3?(t.classList.add("result__button_none"),e):e})).then((function(t){var n=t.articles.map((function(t){return e(t,a.getInputTextSearch())}));a.renderResults(n)})).then((function(){a.count=a.count+1})).catch((function(e){console.log(e),textErrorPopup.textContent=o.a.errorMessages.resultError,n.openError()}))})),i(this,"clearResults",(function(){a.count=2,a.parent.querySelectorAll(".result-card").forEach((function(e){return e.remove()}))})),i(this,"setInputTextSearch",(function(e){a.inputText=e})),i(this,"getInputTextSearch",(function(){return a.inputText})),this.api=n,this.parent=t,this.count=2}},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(10);var r=n(5),o=n(4),i=/^(([a-zA-Z0-9])((([a-zA-Z0-9])*([-_]{1}))?[^_\-\#\.\,\!\$\%\^\&\*\(\)\/\\\|\s\@\?\'\]\[\}\;\>\<\:])?)+@(((([a-z])*([-_]{1})?)[^_\-\#\.\,\!\$\%\^\&\*\(\)\/\\\|\s\@\?\'\]\[\}\;\>\<\:]))+(((\.[a-z]{2,}))+)$/;function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_isValidate",(function(e){return e.setCustomValidity(""),e.validity.valueMissing?(e.setCustomValidity("".concat(r.errorMessages.empty)),!1):r._isValidEmail(e.value)||"email"!==e.type?e.validity.tooShort&&"password"===e.type?(e.setCustomValidity("".concat(r.errorMessages.wrongPassword)),!1):e.validity.tooLong||e.validity.tooShort?(e.setCustomValidity("".concat(r.errorMessages.wrongLength)),!1):e.checkValidity():(e.setCustomValidity("".concat(r.errorMessages.wrongEmail)),!1)})),u(this,"_findErrorElement",(function(e){return r.errorElems.find((function(t){return t.id==="".concat(e.id,"-error")}))})),u(this,"_isValidEmail",(function(e){return i.test(e)})),u(this,"resetErrorForm",(function(){r.inputs.forEach((function(e){r._findErrorElement(e).textContent=""}))})),u(this,"_checkInputValidity",(function(e){var t=r._findErrorElement(e);r._isValidate(e)?t.textContent="":t.textContent=e.validationMessage})),u(this,"setSubmitButtonState",(function(e){e?(r.button.removeAttribute("disabled"),r.button.classList.add("popup__button_valid")):(r.button.setAttribute("disabled",!0),r.button.classList.remove("popup__button_valid"))})),u(this,"_init",(function(){r.button=r.element.querySelector(".popup__button"),r.inputs=a(r.element.querySelectorAll(".popup__input")),r.errorElems=r.inputs.map((function(e){return r.element.querySelector("#".concat(e.id,"-error"))})),r._setEventListeners()})),u(this,"_handlerInputForm",(function(e){var t=e.target;r._checkInputValidity(t);var n=r.inputs.every((function(e){return r._isValidate(e)}));r.setSubmitButtonState(n)})),u(this,"_setEventListeners",(function(){r.element.addEventListener("input",r._handlerInputForm)})),this.element=t,this.errorMessages=n,this._init()},l=n(6),d=n(1);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"setServerError",(function(e){n.form.querySelector(".server-error").textContent=e})),f(this,"clearServerError",(function(){n.form.querySelector(".server-error").textContent=""})),f(this,"setEventListeners",(function(e){n.form.addEventListener("submit",e),n.form.addEventListener("input",n.clearServerError)})),this.form=t},h=n(7);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},(r="_returnJson")in(n=this)?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.options=t}var t,n,r;return t=e,(n=[{key:"getArticles",value:function(e,t,n,r){var o=this;return fetch("".concat(this.options.baseUrl,"?q=").concat(e,"&from=").concat(t,"&to=").concat(n,"&page=").concat(r,"&pageSize=3&apiKey=").concat(this.options.apiKey),{method:"GET"}).then((function(e){return o._returnJson(e)}))}}])&&p(t.prototype,n),r&&p(t,r),e}(),_=n(8),v=n(9),y=n(3),b=n(0),S=document.querySelector(".popup-auth"),E=S.querySelector(".popup__close"),w=document.querySelector(".header-menu__auth"),L=document.querySelector(".popup__form_auth-link"),C=document.forms.auth,x=document.forms.registr,k=document.querySelector(".popup-reg"),I=k.querySelector(".popup__close"),q=document.querySelector(".popup__form_reg-link"),T=document.querySelector(".popup-success"),O=T.querySelector(".popup__close"),j=document.querySelector(".popup__form_success-link"),A=document.querySelector("#card").content,P=document.forms.newsearch,M=document.querySelector(".result__button"),D=document.querySelector(".popup-err"),V=(D.querySelector(".popup__close"),D.querySelector(".popup-err__text"),document.querySelector(".search-error")),J=n(2),N=document.querySelector(".result");function B(e){var t=document.querySelector(".preloader");e?(t.classList.add("preloader_activ"),N.classList.add("result_displaynone")):t.classList.remove("preloader_activ")}function U(e){var t=document.querySelector(".not-found");e?(N.classList.add("result_displaynone"),t.classList.add("not-found_activ")):(N.classList.remove("result_displaynone"),t.classList.remove("not-found_activ"))}!function(){var e=new o.a(b.j,b.c);e.setEventListeners();var t=new r.a(b.e,b.f),n=new r.a(b.e,b.g),i=new l.a(b.g,b.i,!1);function a(e){"Авторизоваться"===e.target.textContent&&p.open(),e.target.textContent===localStorage.getItem("username")&&(t.logOut(),n.logOut(),i.toggle())}i.setEventListeners(),localStorage.getItem("username")&&t.getAuthContent(),localStorage.getItem("username")&&n.getAuthContent();var s=new c(C,d.a.errorMessages),u=new m(C);function f(e,t){t.resetErrorForm(),e.reset(),t.setSubmitButtonState(!1)}var p=new o.a(S,E,(function(){f(C,s)}));w.addEventListener("click",(function(e){u.clearServerError(),a(e)})),p.setEventListeners(b.i);var D=new c(x,d.a.errorMessages),N=new m(x),F=new o.a(k,I,(function(){p.close(),f(x,D)}));F.setEventListeners(b.i);var R=new o.a(T,O,(function(){F.close()}));R.setEventListeners(b.i),b.a.addEventListener("click",(function(e){a(e)})),q.addEventListener("click",(function(){p.close(),F.open()})),L.addEventListener("click",(function(){F.close(),p.open()})),j.addEventListener("click",(function(){R.close(),p.open()}));var z=new h.a(y.b);N.setEventListeners((function(e){e.preventDefault();var t=e.target.elements.emailreg.value,n=e.target.elements.passwordreg.value,r=e.target.elements.namereg.value;z.signUp(t,n,r).then((function(e){if(e.message)return Promise.reject(e);F.close(),R.open()})).catch((function(e){console.log(e),N.setServerError(d.a.errorMessages.resultError)}))})),u.setEventListeners((function(e){e.preventDefault();var r=e.target.elements.emailauth.value,o=e.target.elements.passwordauth.value;z.signIn(r,o).then((function(e){if(e.message)return Promise.reject(e);localStorage.setItem("username",e.name),localStorage.setItem("isLoggedIn",!0),y.a.isLoggedIn=!0,y.a.name=e.name,n.render(y.a),t.render(y.a),p.close(),document.location.reload()})).then((function(){})).catch((function(e){console.log(e),u.setServerError(d.a.errorMessages.resultError)}))}));var W=new g(y.c),$=new v.a(b.d,W);function K(t,n){null===t.urlToImage&&(t.urlToImage=y.d),null===t.description&&(t.description="  ");var r={keyword:n,title:t.title,link:t.url,text:t.description,date:t.publishedAt,source:t.source.name,image:t.urlToImage};return new _.a(r,A,z,!1,e).createCard()}P.addEventListener("submit",(function(t){t.preventDefault(),$.clearResults(),M.classList.remove("result__button_none");var n=t.target.elements.tag.value;0===n.length?(V.classList.remove("search-error_none"),setTimeout((function(){V.classList.add("search-error_none")}),1e3)):($.setInputTextSearch(n),B(!0),W.getArticles(n,Object(J.a)(J.b),Object(J.a)(J.c),1).then((function(e){return 0===e.articles.length?(U(!0),e):(U(!1),e)})).then((function(e){return e.articles.length<3?(M.classList.add("result__button_none"),e):e})).then((function(e){var t=e.articles.map((function(e){return K(e,n)}));$.renderResults(t)})).then((function(){P.reset()})).catch((function(t){console.log(t),b.h.textContent=d.a.errorMessages.resultError,e.openError()})).finally((function(){B(!1)})))})),M.addEventListener("click",(function(){$.showMore(K,M,e)}))}()}]);