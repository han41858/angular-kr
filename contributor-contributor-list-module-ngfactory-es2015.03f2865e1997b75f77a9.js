(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"ll+R":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{constructor(l,n){this.contributorService=l,this.locationService=n}ngOnInit(){const l=this.locationService.search().group||"";this.contributorService.contributors.subscribe(n=>{this.groups=n,this.groupNames=n.map(l=>l.name),this.selectGroup(l)})}selectGroup(l){l=l.toLowerCase(),this.selectedGroup=this.groups.find(n=>n.name.toLowerCase()===l)||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}class r{constructor(){this.customElementComponent=o}}var c=u("Mr+X"),i=u("Gi4r"),e=u("SVse"),s=u("jn67");class a{constructor(){this.noPicture="_no-one.png",this.pictureBase=s.a+"images/bios/"}flipCard(l){l.isFlipped=!l.isFlipped}}var b=t.pb({encapsulation:2,styles:[],data:{}});function p(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"a",[["class","info-item"],["mat-button",""]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" View Bio "]))],null,null)}function f(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"a",[["class","info-item icon"],["mat-icon-button",""],["target","_blank"]],[[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==u.stopPropagation()&&t),t},null,null)),(l()(),t.rb(1,0,null,null,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","logos:twitter"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t.qb(2,9158656,null,0,i.b,[t.k,i.d,[8,null],[2,i.a]],{svgIcon:[0,"svgIcon"]},null)],function(l,n){l(n,2,0,"logos:twitter")},function(l,n){l(n,0,0,t.vb(1,"https://twitter.com/",n.component.person.twitter,"")),l(n,1,0,t.Db(n,2).inline,"primary"!==t.Db(n,2).color&&"accent"!==t.Db(n,2).color&&"warn"!==t.Db(n,2).color)})}function g(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"a",[["class","info-item icon"],["mat-icon-button",""],["target","_blank"]],[[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==u.stopPropagation()&&t),t},null,null)),(l()(),t.rb(1,0,null,null,2,"mat-icon",[["class","link-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t.qb(2,9158656,null,0,i.b,[t.k,i.d,[8,null],[2,i.a]],null,null),(l()(),t.Jb(-1,0,["link"]))],function(l,n){l(n,2,0)},function(l,n){l(n,0,0,t.vb(1,"",n.component.person.website,"")),l(n,1,0,t.Db(n,2).inline,"primary"!==t.Db(n,2).color&&"accent"!==t.Db(n,2).color&&"warn"!==t.Db(n,2).color)})}function m(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","card-back"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.flipCard(o.person)&&t),t},null,null)),(l()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(2,null,["",""])),(l()(),t.rb(3,0,null,null,1,"p",[["class","contributor-bio"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""]))],null,function(l,n){var u=n.component;l(n,2,0,u.person.name),l(n,4,0,u.person.bio)})}function d(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,16,"div",[["class","contributor-card"]],null,null,null,null,null)),t.Gb(512,null,e.w,e.x,[t.r,t.s,t.k,t.D]),t.qb(2,278528,null,0,e.i,[e.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Fb(3,{flipped:0}),(l()(),t.rb(4,0,null,null,10,"div",[["class","card-front"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.flipCard(o.person)&&t),t},null,null)),(l()(),t.rb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.rb(7,0,null,null,7,"div",[["class","contributor-image"]],[[4,"background-image",null]],null,null,null,null)),(l()(),t.rb(8,0,null,null,6,"div",[["class","contributor-info"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(10,16384,null,0,e.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,f)),t.qb(12,16384,null,0,e.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,g)),t.qb(14,16384,null,0,e.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,m)),t.qb(16,16384,null,0,e.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,t=l(n,3,0,u.person.isFlipped);l(n,2,0,"contributor-card",t),l(n,10,0,u.person.bio),l(n,12,0,u.person.twitter),l(n,14,0,u.person.website),l(n,16,0,u.person.isFlipped)},function(l,n){var u=n.component;l(n,6,0,u.person.name),l(n,7,0,"url("+u.pictureBase+(u.person.picture||u.noPicture)+")")})}var h=u("lJxs"),v=u("qZ0a");const k=s.a+"contributors.json",L=["Angular","Collaborators","GDE"];class w{constructor(l){this.http=l,this.contributors=this.getContributors()}getContributors(){const l=this.http.get(k).pipe(Object(h.a)(l=>{const n={};return Object.keys(l).forEach(u=>{const t=l[u];t.groups.forEach(l=>{(n[l]||(n[l]=[])).push(t)})}),n}),Object(h.a)(l=>Object.keys(l).map(n=>{const u=L.indexOf(n);return{name:n,order:-1===u?L.length:u,contributors:l[n].sort(O)}}).sort(I)),Object(v.a)());return l.connect(),l}}function O(l,n){return l.name.toUpperCase()>n.name.toUpperCase()?1:-1}function I(l,n){return l.order===n.order?l.name>n.name?1:-1:l.order>n.order?1:-1}var C=u("/lUL"),q=t.pb({encapsulation:2,styles:[],data:{}});function B(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"a",[["class","button mat-button filter-button"]],[[2,"selected",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.selectGroup(l.context.$implicit)&&t),t},null,null)),(l()(),t.Jb(1,null,["",""]))],null,function(l,n){l(n,0,0,n.context.$implicit==n.component.selectedGroup.name),l(n,1,0,n.context.$implicit)})}function j(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"aio-contributor",[],null,null,null,d,b)),t.qb(1,49152,null,0,a,[],{person:[0,"person"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function G(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"section",[["class","grid-fluid"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","contributor-group"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,j)),t.qb(3,278528,null,0,e.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.selectedGroup.contributors)},null)}function D(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","flex-center group-buttons"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,B)),t.qb(2,278528,null,0,e.j,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,null,1,null,G)),t.qb(4,16384,null,0,e.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.groupNames),l(n,4,0,u.selectedGroup)},null)}function F(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"aio-contributor-list",[],null,null,null,D,q)),t.qb(1,114688,null,0,o,[w,C.a],null,null)],function(l,n){l(n,1,0)},null)}var J=t.nb("aio-contributor-list",o,F,{},{},[]),x=u("IheW"),y=u("IP0z"),S=u("Xd0L"),P=u("cUpR");u.d(n,"ContributorListModuleNgFactory",function(){return E});var E=t.ob(r,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[J]],[3,t.j],t.w]),t.Bb(4608,e.m,e.l,[t.t,[2,e.B]]),t.Bb(4608,w,w,[x.c]),t.Bb(1073742336,e.c,e.c,[]),t.Bb(1073742336,y.a,y.a,[]),t.Bb(1073742336,S.c,S.c,[[2,S.a],[2,P.f]]),t.Bb(1073742336,i.c,i.c,[]),t.Bb(1073742336,r,r,[])])})}}]);
//# sourceMappingURL=contributor-contributor-list-module-ngfactory-es2015.03f2865e1997b75f77a9.js.map