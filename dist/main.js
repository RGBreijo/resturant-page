!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){let n=document.createElement("div");n.setAttribute("class","menuItem");let i=document.createElement("div");n.appendChild(i);let d=document.createElement("div");return n.appendChild(d),i.textContent=e,d.textContent=t,n}n.r(t),function(){let e=document.createElement("div");e.setAttribute("id","resturantMenuContainer");let t=document.createElement("SECTION");e.appendChild(t);let n=document.createElement("HEADER");n.setAttribute("class","mainContentHeader"),e.appendChild(n),t.appendChild(n);let d=document.createElement("h1");d.textContent="Menu",n.appendChild(d);let l=document.createElement("div");l.setAttribute("class","mainMenuContentContainer"),t.appendChild(l);const a=Object.entries({"Cheese Pizza":"$14.00","Pepperoni Pizza":"$15.00","Ham Pizza":"$15.00","Meat Pizza":"$18.00","BBQ Chicken Pizza":"$20.00",Hotdog:"$3.00","chicken Fingers":"$7.00",Hamburger:"$5.00"});for(const[e,t]of a)l.appendChild(i(e,t))}();let d=document.querySelector(".content");function l(){document.querySelector(".mobileNavContainer").style.width="0"}d.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","navigationContentContainer");let t=document.createElement("div");t.setAttribute("id","logoContainer");let n=document.createElement("p");n.textContent="Pizza Planet",t.appendChild(n);let i=document.createElement("div");i.setAttribute("class","mobileNavContent");let d=document.createElement("div");d.setAttribute("id","mobileHamburger"),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div")),d.appendChild(document.createElement("div"));let l=document.createElement("div");l.setAttribute("class","mobileNavContainer");let a=l.appendChild(document.createElement("div")),o=document.createElement("p");o.textContent="X",o.setAttribute("id","closeMobileNav"),a.appendChild(o);let r=document.createElement("nav");r.setAttribute("id","mobileMainNavigation");let c=r.appendChild(document.createElement("div")),u=document.createElement("ul");c.appendChild(u),u.appendChild(document.createElement("li")).textContent="Home",u.appendChild(document.createElement("li")).textContent="Menu",u.appendChild(document.createElement("li")).textContent="Contact",l.appendChild(r),i.appendChild(d),i.appendChild(l);let m=document.createElement("nav");m.setAttribute("id","desktopMainNavigation");let p=document.createElement("ul");return m.appendChild(p),p.appendChild(document.createElement("li")).textContent="Home",p.appendChild(document.createElement("li")).textContent="Menu",p.appendChild(document.createElement("li")).textContent="Contact",e.appendChild(t),e.appendChild(i),e.appendChild(m),e}()),document.querySelector("#mobileHamburger").addEventListener("click",(function(){document.querySelector(".mobileNavContainer").style.width="200px",document.querySelector("#closeMobileNav").addEventListener("click",l)})),d.appendChild(function(e){let t=document.createElement("div"),n=t.appendChild(document.createElement("HEADER").appendChild(document.createElement("img")));return t.setAttribute("id","headerContentContainer"),n.setAttribute("src",e),t}("pizzaPlanetPhotos/outsidePizzaPlanet.jpg")),d.appendChild(function(e){let t=document.createElement("div");t.setAttribute("id","resturantDescriptionContainer");let n=document.createElement("SECTION");t.appendChild(n);let i=document.createElement("HEADER");i.setAttribute("class","mainContentHeader");let d=document.createElement("h1");d.textContent="Pizza Planet";let l=document.createElement("p");l.textContent="The galaxies most delicious pizza",i.appendChild(d),i.appendChild(l),n.appendChild(i);let a=document.createElement("div");a.setAttribute("class","mainContentContainer"),n.appendChild(a);let o=document.createElement("div");o.setAttribute("class","mainContentImageContainer");let r=document.createElement("img");r.setAttribute("id","insideArcade"),r.setAttribute("src",e),o.appendChild(r),a.appendChild(o);let c=document.createElement("div");c.setAttribute("id","mainContentText"),n.appendChild(c);let u=document.createElement("p");return u.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius magni eaque molestias porro vel optio tempora officia, sapiente impedit repellendus! Ad consequuntur quis ullam praesentium consectetur architecto voluptatum, eveniet ab placeat, rem minima numquam officia tempora. Minus numquam perferendis quisquam reiciendis quia veritatis quas doloremque, quis corrupti sed. Nulla.",c.appendChild(u),a.appendChild(c),t}("pizzaPlanetPhotos/pizzaPlanetGames.jpg")),d.appendChild(function(){let e=document.createElement("div");e.setAttribute("id","emailSignUpContainer");let t=document.createElement("SECTION");e.appendChild(t);let n=document.createElement("div");t.appendChild(n);let i=document.createElement("h2");i.textContent="Sign Up For 10 Free Tokens!",n.appendChild(i);let d=document.createElement("p");d.textContent="Sign up to our news letter",n.appendChild(d);let l=document.createElement("form");e.appendChild(l);let a=document.createElement("label");l.appendChild(a);let o=document.createElement("input");o.setAttribute("type","email"),o.setAttribute("placeholder","example@email.com"),o.required=!0,l.appendChild(o);let r=document.createElement("button");return r.textContent="Sign Up",l.appendChild(r),e}())}]);