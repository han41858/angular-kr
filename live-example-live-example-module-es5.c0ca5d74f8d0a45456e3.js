!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){l=!0,c=t},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw c}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{m7ka:function(e,i,a){"use strict";a.r(i),a.d(i,"LiveExampleModule",(function(){return C}));var c=a("ofXK"),o=a("jn67"),l=a("fXoL");function u(t,e){var n="string"==typeof e?e:e.find((function(e){return t.hasOwnProperty(e.toLowerCase())}));return void 0===n?void 0:t[n.toLowerCase()]}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t?e:"false"!==t.trim()}var s=["content"];function b(t,e){if(1&t&&(l.Rb(0,"p"),l.Rb(1,"a",8),l.Ac(2,"\uc608\uc81c\ub97c \ub2e4\uc6b4\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),l.Qb(),l.Ac(3,". "),l.Qb()),2&t){var n=l.cc(2);l.Ab(1),l.hc("href",n.zip,l.sc)}}function d(t,e){if(1&t&&(l.Rb(0,"span"),l.Rb(1,"div",5),l.Nb(2,"aio-embedded-stackblitz",6),l.Qb(),l.zc(3,b,4,1,"p",7),l.Qb()),2&t){var n=l.cc();l.Ab(1),l.ic("title",n.title),l.Ab(1),l.hc("src",n.stackblitz),l.Ab(1),l.hc("ngIf",n.enableDownload)}}function h(t,e){if(1&t&&(l.Rb(0,"span"),l.Rb(1,"a",9),l.Ac(2),l.Qb(),l.Qb()),2&t){var n=l.cc();l.Ab(1),l.ic("title",n.title),l.hc("href",n.zip,l.sc),l.Ab(1),l.Bc(n.title)}}function m(t,e){if(1&t&&(l.Rb(0,"span"),l.Ac(1," / "),l.Rb(2,"a",8),l.Ac(3,"\ub2e4\uc6b4\ub85c\ub4dc \ub9c1\ud06c"),l.Qb(),l.Qb()),2&t){var n=l.cc(2);l.Ab(2),l.hc("href",n.zip,l.sc)}}function v(t,e){if(1&t&&(l.Rb(0,"span"),l.Rb(1,"a",10),l.Ac(2),l.Qb(),l.zc(3,m,4,1,"span",7),l.Qb()),2&t){var n=l.cc();l.Ab(1),l.ic("title",n.title),l.hc("href",n.stackblitz,l.sc),l.Ab(1),l.Bc(n.title),l.Ab(1),l.hc("ngIf",n.enableDownload)}}var p,y,g,w=["*"],A=["iframe"],k=o.a+"live-examples/",z=o.a+"zips/",S=((g=function(){function e(i,r){n(this,e);var a=function(e){var n,i={},r=t(e instanceof l.l?e.nativeElement.attributes:e.attributes);try{for(r.s();!(n=r.n()).done;){var a=n.value;i[a.name.toLowerCase()]=a.value}}catch(c){r.e(c)}finally{r.f()}return i}(i),c=this.getExampleDir(a,r.path(!1)),o=this.getStackblitzName(a);this.mode=this.getMode(a),this.enableDownload=this.getEnableDownload(a),this.stackblitz=this.getStackblitz(c,o,"embedded"===this.mode),this.zip=this.getZip(c,o),this.title=this.getTitle(a)}return r(e,[{key:"ngAfterContentInit",value:function(){var t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}},{key:"getEnableDownload",value:function(t){return!f(u(t,"noDownload"))}},{key:"getExampleDir",value:function(t,e){var n=u(t,"name");if(!n){var i=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=i?i[0]:"index"}return n.trim()}},{key:"getMode",value:function(t){var e=f(u(t,"downloadOnly")),n=f(u(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}},{key:"getStackblitz",value:function(t,e,n){return"".concat(k).concat(t,"/").concat(e,"stackblitz.html").concat(n?"?ctl=1":"")}},{key:"getStackblitzName",value:function(t){var e=(u(t,"stackblitz")||"").trim();return e&&e+"."}},{key:"getTitle",value:function(t){return(u(t,"title")||"\ub77c\uc774\ube0c \uc608\uc81c \ub9c1\ud06c").trim()}},{key:"getZip",value:function(t,e){var n=t.split("/")[0];return"".concat(z).concat(t,"/").concat(e).concat(n,".zip")}}]),e}()).\u0275fac=function(t){return new(t||g)(l.Mb(l.l),l.Mb(c.g))},g.\u0275cmp=l.Gb({type:g,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&l.vc(s,!0),2&t&&l.mc(n=l.Zb())&&(e.content=n.first)},ngContentSelectors:w,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","Download example",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(l.gc(),l.Rb(0,"span",0,1),l.fc(2),l.Qb(),l.Rb(3,"span",2),l.zc(4,d,4,3,"span",3),l.zc(5,h,3,3,"span",3),l.zc(6,v,4,4,"span",4),l.Qb()),2&t&&(l.Ab(3),l.hc("ngSwitch",e.mode),l.Ab(1),l.hc("ngSwitchCase","embedded"),l.Ab(1),l.hc("ngSwitchCase","downloadOnly"))},directives:function(){return[c.m,c.n,c.o,Q,c.k]},encapsulation:2}),g),Q=((y=function(){function t(){n(this,t)}return r(t,[{key:"ngAfterViewInit",value:function(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=l.Gb({type:y,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&l.vc(A,!0),2&t&&l.mc(n=l.Zb())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&l.Nb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),y),C=((p=function t(){n(this,t),this.customElementComponent=S}).\u0275mod=l.Kb({type:p}),p.\u0275inj=l.Jb({factory:function(t){return new(t||p)},imports:[[c.c]]}),p)}}])}();
//# sourceMappingURL=live-example-live-example-module-es5.c0ca5d74f8d0a45456e3.js.map