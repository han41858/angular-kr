(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{dth9:function(t,e,i){"use strict";i.r(e),i.d(e,"ApiListModule",(function(){return C}));var s=i("ofXK"),a=i("tk/3"),c=i("PCNd"),r=i("jtHE"),n=i("itXk"),o=i("lJxs"),l=i("fXoL"),u=i("XNiG"),h=i("1G5W"),p=i("vkgz"),b=i("jn67"),y=i("vHPH");let f=(()=>{class t{constructor(t,e){this.http=t,this.logger=e,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new u.a,this.sectionsSubject=new r.a(1),this._sections=this.sectionsSubject.pipe(Object(h.a)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(t=>this.logger.log(`ApiService got API ${t.length} section(s)`))),this._sections.pipe(Object(p.a)(t=>{t.forEach(t=>{t.deprecated=!!t.items&&t.items.every(t=>"deprecated"===t.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(t){const e=this.apiBase+(t||this.apiListJsonDefault);this.http.get(e).pipe(Object(h.a)(this.onDestroy),Object(p.a)(()=>this.logger.log("Got API sections from "+e))).subscribe(t=>this.sectionsSubject.next(t),t=>{throw this.logger.error(t),t})}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(a.a),l.Wb(y.a))},t.\u0275prov=l.Jb({token:t,factory:t.\u0275fac}),t})();var d=i("/lUL"),S=i("x4lQ");const v=["filter"];function g(t,e){if(1&t&&(l.Sb(0,"h2"),l.Sb(1,"a",11),l.zc(2),l.Rb(),l.Rb()),2&t){const t=l.dc().$implicit;l.Ab(1),l.Eb("deprecated-api-item",t.deprecated),l.ic("href",t.path,l.tc),l.Ab(1),l.Ac(t.title)}}function m(t,e){if(1&t&&(l.Qb(0),l.Sb(1,"li",13),l.Sb(2,"a",11),l.Ob(3,"span"),l.zc(4),l.Rb(),l.Rb(),l.Pb()),2&t){const t=e.$implicit;l.Ab(2),l.Eb("deprecated-api-item","deprecated"===t.stability),l.ic("href",t.path,l.tc),l.Ab(1),l.Db("symbol ",t.docType,""),l.Ab(1),l.Bc(" ",t.title," ")}}function w(t,e){if(1&t&&(l.Sb(0,"ul",12),l.yc(1,m,5,7,"ng-container",8),l.Rb()),2&t){const t=l.dc().$implicit;l.Ab(1),l.ic("ngForOf",t.items)}}function j(t,e){if(1&t&&(l.Sb(0,"div"),l.yc(1,g,3,4,"h2",9),l.yc(2,w,2,1,"ul",10),l.Rb()),2&t){const t=e.$implicit;l.Ab(1),l.ic("ngIf",t.items),l.Ab(1),l.ic("ngIf",t.items&&t.items.length)}}class A{constructor(){this.query="",this.status="all",this.type="all"}}let O=(()=>{class t{constructor(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new r.a(1),this.searchCriteria=new A,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"stable",title:"Stable"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}ngOnInit(){this.filteredSections=Object(n.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(o.a)(t=>({sections:t[0],criteria:t[1]})),Object(o.a)(t=>t.sections.map(e=>Object.assign(Object.assign({},e),{items:this.filterSection(e,t.criteria)})))),this.initializeSearchCriteria()}setQuery(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}setStatus(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}setType(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(t,{query:e,status:i,type:s}){const a=!e||-1!==t.name.indexOf(e),c=t.items.filter(t=>(t=>"all"===s||s===t.docType)(t)&&(t=>"all"===i||i===t.stability||"security-risk"===i&&t.securityRisk)(t)&&(t=>a||-1!==t.name.indexOf(e))(t));return c.length?c:a&&"package"===s?[]:null}initializeSearchCriteria(){const{query:t,status:e,type:i}=this.locationService.search(),s=(t||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(t=>t.value===e)||this.statuses[0],this.type=this.types.find(t=>t.value===i)||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:t,status:e,type:i}=this.searchCriteria;this.locationService.setSearch("API Search",{query:t||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})}setSearchCriteria(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(f),l.Nb(d.a))},t.\u0275cmp=l.Hb({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&l.wc(v,!0),2&t&&l.nc(i=l.ac())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],["label","Status:",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","Filter","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"aio-select",1),l.Zb("change",(function(t){return e.setType(t.option)})),l.Rb(),l.Sb(2,"aio-select",2),l.Zb("change",(function(t){return e.setStatus(t.option)})),l.Rb(),l.Sb(3,"div",3),l.Sb(4,"input",4,5),l.Zb("input",(function(t){return e.setQuery(t.target.value)})),l.Rb(),l.Sb(6,"i",6),l.zc(7,"search"),l.Rb(),l.Rb(),l.Rb(),l.Sb(8,"article",7),l.yc(9,j,3,2,"div",8),l.ec(10,"async"),l.Rb()),2&t&&(l.Ab(1),l.ic("options",e.types)("selected",e.type)("showSymbol",!0),l.Ab(1),l.ic("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.Ab(7),l.ic("ngForOf",l.fc(10,7,e.filteredSections)))},directives:[S.a,s.j,s.k],pipes:[s.b],encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.customElementComponent=O}}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},providers:[f],imports:[[s.c,c.a,a.b]]}),t})()}}]);
//# sourceMappingURL=api-api-list-module-es2015.5577544c873785b559f4.js.map