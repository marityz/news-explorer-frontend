!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f}));var r=document.querySelector(".header-menu__nav-mobile"),o=document.querySelector(".header-menu__nav-mobile-toggle-button"),i=document.querySelector(".header-menu__button_mobile"),u=document.querySelector(".popup-err"),c=u.querySelector(".popup__close"),a=u.querySelector(".popup-err__text"),s=document.querySelector(".header"),l=document.querySelector(".header-menu"),d=document.querySelector(".result__cards"),f=document.querySelector(".header-menu__button")},function(e,t,n){"use strict";t.a={errorMessages:{empty:"Это обязательное поле",wrongLength:"Должно быть от 2 до 30 символов",wrongUrl:"Здесь должна быть ссылка",wrongEmail:"Здесь нужно указать email",wrongPassword:"Поле пароль должно содержать более 8 символов",resultError:"Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}}},function(e,t,n){"use strict";function r(e){return e>=9?e:"0".concat(e)}n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var o=new Date,i=new Date;function u(e){return"".concat(e.getFullYear(),"-").concat(r(e.getMonth()+1),"-").concat(r(e.getDate()))}i.setDate(o.getDate()-7)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r={isLoggedIn:" ",name:""},o={url:"http://localhost:3000/api",headers:{"Content-Type":"application/json"}},i={baseUrl:"https://nomoreparties.co/news/v2/everything",apiKey:"d3848ea6d4654c90be9e1e1a22f6c998"},u="https://fixim.ru/image/question/75/523_5b176e8c.jpg"},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));var i=function e(t,n){var i=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r(this,e),o(this,"setEventListeners",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i.buttonClose=e,null!=i.buttonClose&&i.buttonClose.addEventListener("click",i.close),i.closePopupButton.addEventListener("click",i.close)})),o(this,"open",(function(){i.onOpenCallback(),i.modalWindow.classList.add("popup_is-opened"),document.addEventListener("keyup",i._handleEscClose),document.addEventListener("mousedown",i._closePopupMousedown)})),o(this,"close",(function(){i.modalWindow.classList.remove("popup_is-opened"),document.removeEventListener("keyup",i._handleEscClose),document.removeEventListener("mousedown",i._closePopupMousedown)})),o(this,"openError",(function(){i.modalWindow.classList.add("popup_is-opened"),document.addEventListener("keyup",i._handleEscClose),document.addEventListener("mousedown",i._closePopupMousedown)})),o(this,"setErrorText",(function(e){i.modalWindow.querySelector("popup-err__text").textContent=e})),o(this,"_handleEscClose",(function(e){27===e.keyCode&&i.close()})),o(this,"_closePopupMousedown",(function(e){e.target.classList.contains("popup_is-opened")&&i.close()})),this.modalWindow=t,this.closePopupButton=n,this.onOpenCallback=u}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"render",(function(e){console.log(e),e.isLoginIn,o.linkArticle.classList.remove("header-menu__article_nologin"),o.imgExit.classList.remove("header-menu-auth__logout_none"),o.text.textContent=localStorage.getItem("username"),o.parents.prepend(o.menu)})),r(this,"getAuthContent",(function(){o.linkArticle.classList.remove("header-menu__article_nologin"),o.imgExit.classList.remove("header-menu-auth__logout_none"),o.text.textContent=localStorage.getItem("username")})),r(this,"logOut",(function(){localStorage.removeItem("username"),localStorage.setItem("isLoggedIn",!1),o.text.textContent="Авторизоваться",o.linkArticle.classList.add("header-menu__article_nologin"),o.imgExit.classList.add("header-menu-auth__logout_none"),document.location.reload()})),this.parents=t,this.menu=n,this.linkArticle=this.menu.querySelector(".header-menu__link-article")||null,this.text=this.menu.querySelector(".header-menu-auth__user-name"),this.imgExit=this.menu.querySelector(".header-menu-auth__logout")}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t,n,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"setEventListeners",(function(){i.toggleButton.addEventListener("click",i.toggle)})),r(this,"toggle",(function(){i.menu.classList.contains("header-menu__nav-mobile_open")?(i.menu.classList.remove("header-menu__nav-mobile_open"),i.color?i.toggleButton.style.backgroundImage="url(../images/menu-mobile-black.svg)":i.toggleButton.style.backgroundImage="url(../images/menuicon-mobile-menu.svg)"):(i.menu.classList.add("header-menu__nav-mobile_open"),i.toggleButton.style.backgroundImage="url(../images/header-close.svg)")})),this.menu=t,this.toggleButton=n,this.color=o}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"signUp",(function(e,t,r){return fetch("".concat(n.url,"/signup"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({email:e,password:t,name:r})}).then((function(e){return n._returnJson(e)}))})),r(this,"signIn",(function(e,t){return fetch("".concat(n.url,"/signin"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({email:e,password:t})}).then((function(e){return n._returnJson(e)}))})),r(this,"getArticles",(function(){return fetch("".concat(n.url,"/articles"),{method:"GET",credentials:"include",headers:n.headers}).then((function(e){return n._returnJson(e)}))})),r(this,"createArticle",(function(e){return fetch("".concat(n.url,"/articles"),{method:"POST",credentials:"include",headers:n.headers,body:JSON.stringify({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image})}).then((function(e){return n._returnJson(e)}))})),r(this,"deleteCard",(function(e){return fetch("".concat(n.url,"/articles/").concat(e),{method:"DELETE",credentials:"include",headers:n.headers,body:JSON.stringify({id:e})}).then((function(e){return n._returnJson(e)}))})),r(this,"_returnJson",(function(e){return e.ok?e.json():Promise.resolve(e.json())})),this.url=t.url,this.headers=t.headers}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function e(t,n,i,u,c){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"createCard",(function(){return a.card=a.template.cloneNode(!0).querySelector(".result-card"),a.imgCard=a.card.querySelector(".results-card__image-content"),a.titleCard=a.card.querySelector(".results-card__title"),a.textCard=a.card.querySelector(".results-card__text"),a.sourceCard=a.card.querySelector(".results-card__source"),a.timeCard=a.card.querySelector(".results-card__date"),a.flag=a.card.querySelector(".results-card__flag"),a.flagNotSaveText=a.card.querySelector(".results-card__log-in"),a.label=a.card.querySelector(".results-card__label"),a.showLabel&&"true"===localStorage.getItem("isLoggedIn")&&(a.label.textContent=a.data.keyword,a.label.classList.remove("results-card__label_none")),a.titleCard.textContent=a.title,a.textCard.textContent=a.text,a.sourceCard.textContent=a.source,a.sourceCard.setAttribute("href",a.link),a.timeCard.textContent=a.time,a.imgCard.setAttribute("src",a.image),a._renderIconLogIn(),a._setEventListeners(),a.card})),o(this,"_setEventListeners",(function(){a.flag.addEventListener("mouseover",a._renderIcon),a.card.addEventListener("click",a._eventListenerClick)})),o(this,"_eventListenerClick",(function(e){e.target===a.flag&&"true"===localStorage.getItem("isLoggedIn")?a._saveAndDeleteCard():window.open(a.link)})),o(this,"_formatDate",(function(e){var t=new Date(e);return"".concat(t.toLocaleDateString("ru-RU",{day:"numeric",month:"long"}),", ").concat(t.getFullYear())})),o(this,"_renderIcon",(function(){"false"===localStorage.getItem("isLoggedIn")&&(a._renderIconNotSaveText(),setTimeout(a._hideIconNotSaveText,800))})),o(this,"_renderIconLogIn",(function(){"true"===localStorage.getItem("isLoggedIn")&&a.api.getArticles().then((function(e){0===e.length||e.forEach((function(e){e.link===a.link&&e.date===a.time&&(a._id=e._id,a.flag.classList.add("results-card__flag_save"))}))})).catch((function(e){console.log(e),a._displayError()}))})),o(this,"_saveAndDeleteCard",(function(){a.flag.classList.contains("results-card__flag_save")?a._deleteCard():a._saveCard()})),o(this,"_saveCard",(function(){var e={keyword:a.keyword,title:a.title,text:a.text,date:a.time,source:a.source,link:a.link,image:a.image};a.api.createArticle(e).then((function(e){a._id=e.data._id,a.flag.classList.add("results-card__flag_save")})).catch((function(e){console.log(e),a._displayError()}))})),o(this,"_deleteCard",(function(){a.api.deleteCard(a._id).then((function(e){a.flag.classList.remove("results-card__flag_save"),console.log(e)})).catch((function(e){console.log(e),a._displayError()}))})),o(this,"_renderIconNotSaveText",(function(){a.flagNotSaveText.classList.remove("results-card__log-in_notdisplay")})),o(this,"_hideIconNotSaveText",(function(){a.flagNotSaveText.classList.add("results-card__log-in_notdisplay")})),o(this,"_displayError",(function(){a.error.setErrorText(r.a.errorMessages.resultError),a.error.openError()})),this.data=t,this.keyword=t.keyword,this.title=t.title,this.text=t.text,this.time=this._formatDate(this.data.date),this.source=t.source,this.link=t.link,this.image=t.image,this.template=n,this.api=i,this.showLabel=u,this.error=c}},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(2),o=n(1);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function e(t,n){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"addCard",(function(e){u.parent.appendChild(e)})),i(this,"renderResults",(function(e){e.forEach((function(e){return u.addCard(e)}))})),i(this,"showMore",(function(e,t,n){u.api.getArticles(u.getInputTextSearch(),Object(r.a)(r.b),Object(r.a)(r.c),u.count).then((function(e){return e.articles.length<3?(t.classList.add("result__button_none"),e):e})).then((function(t){var n=t.articles.map((function(t){return e(t,u.getInputTextSearch())}));u.renderResults(n)})).then((function(){u.count=u.count+1})).catch((function(e){console.log(e),textErrorPopup.textContent=o.a.errorMessages.resultError,n.openError()}))})),i(this,"clearResults",(function(){u.count=2,u.parent.querySelectorAll(".result-card").forEach((function(e){return e.remove()}))})),i(this,"setInputTextSearch",(function(e){u.inputText=e})),i(this,"getInputTextSearch",(function(){return u.inputText})),this.api=n,this.parent=t,this.count=2}},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(11);var r=n(5),o=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_create",(function(e,t){return o.userInfo=o.template.cloneNode(!0).querySelector(".user-info"),o.name=o.userInfo.querySelector(".user-info__title-name"),o.numSaveArticles=o.userInfo.querySelector(".user-info__num"),o.text=o.userInfo.querySelector(".user-info__text"),o.tag=o.userInfo.querySelector(".user-info__tag"),o.subtext=o.userInfo.querySelector(".user-info__number"),o.numTag=o.userInfo.querySelector(".user-info__numtag"),0===t.length&&o.text.classList.add("user-info__text_none"),t.length<=3&&(o.subtext.classList.add("user-info__num_none"),o.tag.textContent=t),t.length>3&&(o.numTag.textContent=t.length-2,o.tag.textContent=t.slice(0,2)),o.name.textContent=localStorage.getItem("username"),o.numSaveArticles.textContent=e,o.parent.appendChild(o.userInfo)})),c(this,"getUserData",(function(){o.api.getArticles().then((function(e){var t=e.map((function(e){return e.keyword})),n=o._getWordCount(t).map((function(e){return" ".concat(e.key)}));o._create(e.length,n)})).catch((function(e){console.log(e)}))})),c(this,"_getWordCount",(function(e){var t=e.reduce((function(e,t){return void 0!==e[t]?u(u({},e),{},c({},t,e[t]+1)):u(u({},e),{},c({},t,1))}),{});return Object.keys(t).map((function(e){return{key:e,num:t[e]}})).sort((function(e,t){return t.num-e.num}))})),this.parent=t,this.template=n,this.api=r},s=n(7),l=n(3);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e);var t=h(n);function n(e,r,o,i){var u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),_(m(u=t.call(this,e,r,o,i)),"_deleteCard",(function(){console.log(u.data),u.api.deleteCard(u.data.id).then((function(e){document.location.reload(),console.log("Карточка удалена")}))})),_(m(u),"_saveAndDeleteCard",(function(){u._deleteCard()})),_(m(u),"_renderIcon",(function(){"true"===localStorage.getItem("isLoggedIn")&&(u._renderIconNotSaveText(),setTimeout(u._hideIconNotSaveText,1e3))})),u}return n}(n(8).a),v=n(9),b=n(4),w=n(1),S=n(0);!localStorage.getItem("username")&&(window.location.href="index.html"),function(){var e=document.querySelector("#result-card-articles").content,t=document.querySelector("#user-info").content;new o.a(S.g,S.i,!0).setEventListeners();var n=new b.a(S.j,S.c,null);n.setEventListeners();var i=new r.a(S.e,S.f);i.render(!0);var u=new s.a(l.b);new a(S.e,t,u).getUserData();var c=new v.a(S.d,u,null);S.b.addEventListener("click",(function(){i.logOut(),document.location.href="./index.html"})),S.a.addEventListener("click",(function(){i.logOut()})),u.getArticles().then((function(t){var n=t.map((function(t){return function(t){var n={id:t._id,keyword:t.keyword,title:t.title,link:t.link,text:t.text,date:t.date,source:t.source,image:t.image};return new y(n,e,u,!0).createCard()}(t)}));c.renderResults(n)})).catch((function(e){console.log(e),S.h.textContent=w.a.errorMessages.resultError,n.openError()}))}()}]);