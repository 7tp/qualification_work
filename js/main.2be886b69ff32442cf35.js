!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=22)}({2:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));const n="https://newsapi.org/v2/everything?",o="4af89f6877ab4761885f949aa2b1dd7d",s="https://api.github.com/repos/7tp/qualification_work/commits"},22:function(e,t,r){"use strict";r.r(t);r(7);var n=r(2);const o=new Date,s=`&to=${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`,u=new Date(o.setDate(o.getDate()-7)),l=`&from=${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`+s;function i(e,t){t?e.classList.remove("result__hide"):e.classList.add("result__hide")}function c(e,t){t?e.classList.remove("result__hide"):e.classList.add("result__hide")}function a(e,t){t?e.classList.remove("result__hide"):e.classList.add("result__hide")}function d(e,t){t?e.classList.remove("result__hide"):e.classList.add("result__hide")}function _(e,t){t>0?e.classList.remove("result__hide"):e.classList.add("result__hide")}class m{constructor(e,t){this.container=e,this.news=t}_addNews(e,t,r,n,o,s){const u=document.querySelector("#templateResult").content.querySelector(".result__card-link").cloneNode(!0);u.setAttribute("href",`${e}`),u.querySelector(".result__card-image").setAttribute("style",`background-image: url(${t})`),u.querySelector(".result__card-date").textContent=r,u.querySelector(".result__card-title").textContent=n,u.querySelector(".result__card-text").textContent=o,u.querySelector(".result__card-source").textContent=s,this.container.appendChild(u)}showNews(){this.news.forEach(e=>{let t=new Date(e.publishedAt);t=`${t.toLocaleString("ru",{month:"long",day:"numeric"})}, ${t.getFullYear()}`,this._addNews(e.url,e.urlToImage,t,e.title,e.description,e.source.name)})}}const h=1280,f=534,g=3,y=4,b=document.querySelector(".result__grid");function S(e){return window.innerWidth>f&&window.innerWidth<h?e.splice(0,y):e.splice(0,g)}function p(e,t,r){e.onclick=function(){t=S(r),_(e,r.length),new m(b,t).showNews()}}const q=document.querySelector(".search__error");class w{constructor(e,t){this.button=e,this.question=t}listener(){this.question.addEventListener("input",this._validate.bind(this))}_validate(){0===this.question.value.length?(this.notValid(),q.textContent="Это обязательное поле"):this.question.validity.valid&&this.isValid()}isValid(){this.button.removeAttribute("disabled"),this.button.classList.remove("button_disabled"),q.textContent=""}notValid(){this.button.setAttribute("disabled",!0),this.button.classList.add("button_disabled")}}const v=document.querySelector(".result__grid"),x=document.querySelector(".result__button-more"),L=document.querySelector(".result__loading"),$=document.querySelector(".result__not-found"),C=document.querySelector(".result__is-found"),A=document.querySelector("input[name=news_question]"),D=new w(document.querySelector(".search__form-button"),A);class N{constructor(e,t,r,n){this.url=e,this.question=t,this.date=r,this.key=n}loadData(){return fetch(`${this.url}q=${this.question}${this.date}&pageSize=100&apiKey=${this.key}`).then(e=>e.ok?e.json():Promise.reject(`Ошибка при загрузке из сервера ${this.url}: ${e.status}`))}}const j=document.querySelector("form[name=news]"),O=document.querySelector("input[name=news_question]"),k=document.querySelector(".search__form-button"),I=document.querySelector(".result__grid"),V=document.querySelector(".result__button-more"),M=document.querySelector(".result"),P=document.querySelector(".result__loading"),E=document.querySelector(".result__not-found"),F=document.querySelector(".result__is-found"),R=new w(k,O);if(R.listener(),O.addEventListener("blur",()=>R.isValid()),O.value=localStorage.getItem("question"),localStorage.getItem("question")){const e=JSON.parse(localStorage.getItem("newsCards")),t=S(e);new m(I,t).showNews(),_(V,e.length),i(M,!0),d(F,!0),p(V,t,e)}j.addEventListener("submit",(function(e){e.preventDefault(),O.setAttribute("disabled",!0),R.notValid(),localStorage.clear();const t=O.value.replace(/\s+/gi," AND "),r=new N(n.c,t,l,n.a);localStorage.setItem("question",t.replace(/\sAND\s/gi," ").replace(/^\w|[а-я]/i,e=>e.toUpperCase())),I.textContent="",a(E,!1),d(F,!1),c(P,!0),i(M,!0),o=r,o.loadData().then(e=>{let t=[];c(L,!1),A.removeAttribute("disabled"),D.isValid(),0===e.totalResults?(a($,!0),d(C,!1),localStorage.clear()):(a($,!1),d(C,!0)),localStorage.setItem("newsCards",JSON.stringify(e.articles)),localStorage.setItem("newsInAWeek",e.totalResults),t=S(e.articles),new m(v,t).showNews(),_(x,e.articles.length),p(x,t,e.articles)}).catch(e=>{console.log(e),c(L,!1),localStorage.clear(),a($,!0),d(C,!1),document.querySelector(".result__not-found-title").textContent="";const t=document.querySelector(".result__not-found-text");t.setAttribute("style","margin-top: 0"),t.textContent="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер не доступен. Подождите немного и попробуйте ещё раз."});var o})),document.querySelector(".result__not-found-title").textContent="Ничего не найдено";const T=document.querySelector(".result__not-found-text");T.removeAttribute("style","margin-top: 0"),T.textContent="К сожалению по вашему запросу ничего не найдено."},7:function(e,t,r){}});