(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fPy6:function(t,n,o){"use strict";o.r(n),o.d(n,"ContributorListModule",(function(){return O}));var c=o("ofXK"),r=o("NFeN"),e=o("fXoL"),i=o("lJxs"),s=o("qZ0a"),u=o("jn67"),b=o("tk/3");const a=u.a+"contributors.json",p=["Angular","Collaborators","GDE"];let l=(()=>{class t{constructor(t){this.http=t,this.contributors=this.getContributors()}getContributors(){const t=this.http.get(a).pipe(Object(i.a)(t=>{const n={};return Object.keys(t).forEach(o=>{const c=t[o];c.groups.forEach(t=>{(n[t]||(n[t]=[])).push(c)})}),n}),Object(i.a)(t=>Object.keys(t).map(n=>{const o=p.indexOf(n);return{name:n,order:-1===o?p.length:o,contributors:t[n].sort(f)}}).sort(d)),Object(s.a)());return t.connect(),t}}return t.\u0275fac=function(n){return new(n||t)(e.Wb(b.a))},t.\u0275prov=e.Jb({token:t,factory:t.\u0275fac}),t})();function f(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function d(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var g=o("/lUL");function m(t,n){1&t&&(e.Sb(0,"a",7),e.zc(1," View Bio "),e.Rb())}function k(t,n){if(1&t){const t=e.Tb();e.Sb(0,"a",8),e.Zb("click",(function(n){return e.rc(t),n.stopPropagation()})),e.Ob(1,"mat-icon",9),e.Rb()}if(2&t){const t=e.dc();e.kc("href","https://twitter.com/",t.person.twitter,"",e.tc)}}function h(t,n){if(1&t){const t=e.Tb();e.Sb(0,"a",8),e.Zb("click",(function(n){return e.rc(t),n.stopPropagation()})),e.Sb(1,"mat-icon",10),e.zc(2,"link"),e.Rb(),e.Rb()}if(2&t){const t=e.dc();e.jc("href",t.person.website,e.tc)}}function y(t,n){if(1&t){const t=e.Tb();e.Sb(0,"div",11),e.Zb("click",(function(){e.rc(t);const n=e.dc();return n.flipCard(n.person)}))("keyup.enter",(function(){e.rc(t);const n=e.dc();return n.flipCard(n.person)})),e.Sb(1,"h3"),e.zc(2),e.Rb(),e.Sb(3,"p",12),e.zc(4),e.Rb(),e.Rb()}if(2&t){const t=e.dc();e.Ab(2),e.Ac(t.person.name),e.Ab(2),e.Ac(t.person.bio)}}const v=function(t){return{flipped:t}};let S=(()=>{class t{constructor(){this.noPicture="_no-one.png",this.pictureBase=u.a+"images/bios/"}flipCard(t){t.isFlipped=!t.isFlipped}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Hb({type:t,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(e.Sb(0,"div",0),e.Sb(1,"div",1),e.Zb("click",(function(){return n.flipCard(n.person)}))("keyup.enter",(function(){return n.flipCard(n.person)})),e.Sb(2,"h3"),e.zc(3),e.Rb(),e.Sb(4,"div",2),e.Sb(5,"div",3),e.yc(6,m,2,0,"a",4),e.yc(7,k,2,1,"a",5),e.yc(8,h,3,1,"a",5),e.Rb(),e.Rb(),e.Rb(),e.yc(9,y,5,2,"div",6),e.Rb()),2&t&&(e.ic("ngClass",e.lc(8,v,n.person.isFlipped)),e.Ab(3),e.Ac(n.person.name),e.Ab(1),e.xc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")"),e.Ab(2),e.ic("ngIf",n.person.bio),e.Ab(1),e.ic("ngIf",n.person.twitter),e.Ab(1),e.ic("ngIf",n.person.website),e.Ab(1),e.ic("ngIf",n.person.isFlipped))},directives:[c.i,c.k,r.a],encapsulation:2}),t})();function w(t,n){if(1&t){const t=e.Tb();e.Sb(0,"a",3),e.Zb("click",(function(){e.rc(t);const o=n.$implicit;return e.dc().selectGroup(o)}))("keyup.enter",(function(){e.rc(t);const o=n.$implicit;return e.dc().selectGroup(o)})),e.zc(1),e.Rb()}if(2&t){const t=n.$implicit,o=e.dc();e.Eb("selected",t==o.selectedGroup.name),e.Ab(1),e.Ac(t)}}function A(t,n){1&t&&e.Ob(0,"aio-contributor",7),2&t&&e.ic("person",n.$implicit)}function C(t,n){if(1&t&&(e.Sb(0,"section",4),e.Sb(1,"div",5),e.yc(2,A,1,1,"aio-contributor",6),e.Rb(),e.Rb()),2&t){const t=e.dc();e.Ab(2),e.ic("ngForOf",t.selectedGroup.contributors)}}let R=(()=>{class t{constructor(t,n){this.contributorService=t,this.locationService=n}ngOnInit(){const t=this.locationService.search().group||"";this.contributorService.contributors.subscribe(n=>{this.groups=n,this.groupNames=n.map(t=>t.name),this.selectGroup(t)})}selectGroup(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find(n=>n.name.toLowerCase()===t)||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(l),e.Nb(g.a))},t.\u0275cmp=e.Hb({type:t,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(e.Sb(0,"div",0),e.yc(1,w,2,3,"a",1),e.Rb(),e.yc(2,C,3,1,"section",2)),2&t&&(e.Ab(1),e.ic("ngForOf",n.groupNames),e.Ab(1),e.ic("ngIf",n.selectedGroup))},directives:[c.j,c.k,S],encapsulation:2}),t})(),O=(()=>{class t{constructor(){this.customElementComponent=R}}return t.\u0275mod=e.Lb({type:t}),t.\u0275inj=e.Kb({factory:function(n){return new(n||t)},providers:[l],imports:[[c.c,r.b]]}),t})()}}]);
//# sourceMappingURL=contributor-contributor-list-module-es2015.6ec812b8c592ae34c7d9.js.map