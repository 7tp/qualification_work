!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}({8:function(t,e,n){"use strict";n.r(e);n(9);const r=document.querySelector(".about-project"),o=document.querySelector(".about-project__title"),c=document.querySelector(".about-project__statistic"),l=document.querySelector(".analyst__grid"),u=document.createElement("h2");if(localStorage.getItem("question")){u.parentNode===r&&(r.removeChild(u),o.classList.remove("result__hide"),c.classList.remove("result__hide"),l.classList.remove("result__hide"));const t=document.querySelector(".about-project__title_insert").textContent=localStorage.getItem("question"),e=JSON.parse(localStorage.getItem("newsCards"));document.querySelector("#week").textContent=localStorage.getItem("newsInAWeek");const n=e.reduce((function(e,n){if(t.match(/\s/))t.split(" ").forEach((function(t){const r=new RegExp(t.substr(0,t.length-1),"gi");n.title.match(r)&&e++}));else{const r=new RegExp(t.substr(0,t.length-1),"gi");n.title.match(r)&&e++}return e}),0);document.querySelector("#header").textContent=n;const i=new Date(e[0].publishedAt);document.querySelector(".analyst__date-insert").textContent=i.toLocaleString("ru",{month:"long"});const a=document.querySelectorAll(".analyst__grid-volume"),s=document.querySelectorAll(".analyst__grid-pic");document.querySelector(".analyst__grid-date").querySelectorAll("div").forEach((function(n,r){let o=new Date;o=new Date(o.setDate(o.getDate()-7));let c=new Date(o.setDate(o.getDate()+r));a[r].textContent=e.reduce((function(e,n){const r=new Date(n.publishedAt);if(c.toLocaleString("ru",{day:"numeric",month:"long"})===r.toLocaleString("ru",{day:"numeric",month:"long"}))if(t.match(/\s/))t.split(" ").forEach((function(t){const r=new RegExp(t.substr(0,t.length-1),"gi");n.title.match(r)&&e++,n.description.match(r)&&e++}));else{const r=new RegExp(t.substr(0,t.length-1),"gi");n.title.match(r)&&e++,n.description.match(r)&&e++}return e}),0),s[r].setAttribute("style",`width: ${a[r].textContent}%`),c=c.toLocaleString("ru",{day:"numeric",weekday:"short"}),n.textContent=c}))}else o.classList.add("result__hide"),c.classList.add("result__hide"),l.classList.add("result__hide"),u.classList.add("about-project__title","title"),u.setAttribute("style","margin-bottom: 80px"),u.textContent="Вы еще ничего не спросили",r.appendChild(u)},9:function(t,e,n){}});