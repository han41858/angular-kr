(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6U+v":function(e,t,r){"use strict";r.r(t),r.d(t,"ResourceListModule",(function(){return S}));var c=r("ofXK"),o=r("fXoL"),i=r("lJxs"),s=r("qZ0a"),n=r("jn67"),a=r("tk/3");const u=n.a+"resources.json";let b=(()=>{class e{constructor(e){this.http=e,this.categories=this.getCategories()}getCategories(){const e=this.http.get(u).pipe(Object(i.a)(e=>{return t=e,Object.keys(t).map(e=>{const r=t[e];return{id:p(e),title:e,order:r.order,subCategories:l(r.subCategories,e)}}).sort(f);var t}),Object(s.a)());return e.connect(),e}}return e.\u0275fac=function(t){return new(t||e)(o.Wb(a.a))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac}),e})();function l(e,t){return Object.keys(e).map(r=>{const c=e[r];return{id:p(r),title:r,order:c.order,resources:d(c.resources,r,t)}}).sort(f)}function d(e,t,r){return Object.keys(e).map(c=>{const o=e[c];return o.category=r,o.subCategory=t,o.id=p(c),o}).sort(g)}function f(e,t){return e.order===t.order?g(e,t):e.order>t.order?1:-1}function g(e,t){return e.title.toUpperCase()>t.title.toUpperCase()?1:-1}function p(e){return e.toLowerCase().replace(/\s+/g,"-")}var h=r("/lUL");function y(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",6),o.Zb("click",(function(){o.rc(e);const r=t.$implicit;return o.dc().selectCategory(r.id)}))("keyup.enter",(function(){o.rc(e);const r=t.$implicit;return o.dc().selectCategory(r.id)})),o.zc(1),o.Rb()}if(2&e){const e=t.$implicit,r=o.dc();o.Eb("selected",e.id==r.selectedCategory.id),o.Ab(1),o.Ac(e.title)}}function v(e,t){if(1&e&&(o.Sb(0,"div"),o.Sb(1,"div",9),o.Sb(2,"a",10),o.Sb(3,"div"),o.Sb(4,"h4"),o.zc(5),o.Rb(),o.Sb(6,"p",11),o.zc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e){const e=t.$implicit;o.Ab(2),o.ic("href",e.url,o.tc),o.Ab(3),o.Ac(e.title),o.Ab(2),o.Ac(e.desc||"No Description")}}function C(e,t){if(1&e&&(o.Sb(0,"div"),o.Ob(1,"a",7),o.Sb(2,"h3",8),o.zc(3),o.Rb(),o.yc(4,v,8,3,"div",5),o.Rb()),2&e){const e=t.$implicit;o.Ab(1),o.jc("id",e.id),o.Ab(2),o.Ac(e.title),o.Ab(1),o.ic("ngForOf",e.resources)}}let m=(()=>{class e{constructor(e,t){this.resourceService=e,this.locationService=t}ngOnInit(){const e=this.locationService.search().category||"";this.resourceService.categories.subscribe(t=>{this.categories=t,this.selectCategory(e)})}selectCategory(e){e=e.toLowerCase(),this.selectedCategory=this.categories.find(t=>t.id.toLowerCase()===e)||this.categories[0],this.locationService.setSearch("",{category:this.selectedCategory.id})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(b),o.Nb(h.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["aio-resource-list"]],decls:6,vars:2,consts:[[1,"resources-container"],[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],[1,"l-flex--column","align-items-center"],[1,"shadow-1","showcase"],[4,"ngFor","ngForOf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"h-anchor-offset",3,"id"],[1,"subcategory-title"],[1,"c-resource"],["rel","noopener","target","_blank",1,"l-flex--column","resource-row-link",3,"href"],[1,"resource-description"]],template:function(e,t){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.yc(2,y,2,3,"a",2),o.Rb(),o.Sb(3,"div",3),o.Sb(4,"div",4),o.yc(5,C,5,3,"div",5),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Ab(2),o.ic("ngForOf",t.categories),o.Ab(3),o.ic("ngForOf",null==t.selectedCategory?null:t.selectedCategory.subCategories))},directives:[c.j],encapsulation:2}),e})(),S=(()=>{class e{constructor(){this.customElementComponent=m}}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},providers:[b],imports:[[c.c]]}),e})()}}]);
//# sourceMappingURL=resource-resource-list-module-es2015.4eab3227c9dca4e84370.js.map