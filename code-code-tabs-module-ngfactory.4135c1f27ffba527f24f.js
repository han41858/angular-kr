(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{M2Lx:function(t,e,n){"use strict";n.d(e,"c",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"d",function(){return b});var i=n("n6gG"),a=n("CcnG"),o=n("6blF"),r=n("K9Ia"),l=n("Gi3i"),s=function(){function t(){}return t.prototype.create=function(t){return"undefined"==typeof MutationObserver?null:new MutationObserver(t)},t.ngInjectableDef=Object(a.V)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),c=function(){function t(t){this._mutationObserverFactory=t,this._observedElements=new Map}return t.prototype.ngOnDestroy=function(){var t=this;this._observedElements.forEach(function(e,n){return t._cleanupObserver(n)})},t.prototype.observe=function(t){var e=this,n=t instanceof a.k?t.nativeElement:t;return o.a.create(function(t){var i=e._observeElement(n).subscribe(t);return function(){i.unsubscribe(),e._unobserveElement(n)}})},t.prototype._observeElement=function(t){if(this._observedElements.has(t))this._observedElements.get(t).count++;else{var e=new r.a,n=this._mutationObserverFactory.create(function(t){return e.next(t)});n&&n.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:n,stream:e,count:1})}return this._observedElements.get(t).stream},t.prototype._unobserveElement=function(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))},t.prototype._cleanupObserver=function(t){if(this._observedElements.has(t)){var e=this._observedElements.get(t),n=e.observer,i=e.stream;n&&n.disconnect(),i.complete(),this._observedElements.delete(t)}},t.ngInjectableDef=Object(a.V)({factory:function(){return new t(Object(a.Y)(s))},token:t,providedIn:"root"}),t}(),u=function(){function t(t,e,n){this._contentObserver=t,this._elementRef=e,this._ngZone=n,this.event=new a.m,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(i.b)(t),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"debounce",{get:function(){return this._debounce},set:function(t){this._debounce=Object(i.d)(t),this._subscribe()},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},t.prototype.ngOnDestroy=function(){this._unsubscribe()},t.prototype._subscribe=function(){var t=this;this._unsubscribe();var e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(function(){t._currentSubscription=(t.debounce?e.pipe(Object(l.a)(t.debounce)):e).subscribe(t.event)})},t.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},t}(),b=function(){return function(){}}()},kF7p:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),a=function(){function t(){}return t.prototype.ngOnInit=function(){this.tabs=[];for(var t=this.content.nativeElement.querySelectorAll("code-pane"),e=0;e<t.length;e++)this.tabs.push(this.getTabInfo(t[e]))},t.prototype.ngAfterViewInit=function(){var t=this;this.codeComponents.toArray().forEach(function(e,n){e.code=t.tabs[n].code})},t.prototype.getTabInfo=function(t){return{class:t.getAttribute("class"),code:t.innerHTML,language:t.getAttribute("language"),linenums:t.getAttribute("linenums")||this.linenums,path:t.getAttribute("path")||"",region:t.getAttribute("region")||"",header:t.getAttribute("header")}},t}(),o=function(){return function(){this.customElementComponent=a}}(),r=n("xYTU"),l=n("0GXo"),s=n("4+yM"),c=n("4c35"),u=n("Wf4p"),b=n("K9Ia"),d=n("pugT"),p=n("F/XL"),h=n("p0ib"),m=(n("ihYY"),n("p0Sj")),f=n("ny24"),g=n("n6gG"),_=n("YSh2"),y=n("lLAP"),x=new i.q("MatInkBarPositioner",{providedIn:"root",factory:function(){return function(t){return{left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"}}}}),v=function(){function t(t,e,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=n}return t.prototype.alignToElement=function(t){var e=this;this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(function(){requestAnimationFrame(function(){return e._setStyles(t)})}):this._setStyles(t)},t.prototype.show=function(){this._elementRef.nativeElement.style.visibility="visible"},t.prototype.hide=function(){this._elementRef.nativeElement.style.visibility="hidden"},t.prototype._setStyles=function(t){var e=this._inkBarPositioner(t),n=this._elementRef.nativeElement;n.style.left=e.left,n.style.width=e.width},t}(),C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s.b)(e,t),e}(c.b),k=function(){return function(){}}(),w=function(t){function e(e){var n=t.call(this)||this;return n._viewContainerRef=e,n.textLabel="",n._contentPortal=null,n._stateChanges=new b.a,n.position=null,n.origin=null,n.isActive=!1,n}return Object(s.b)(e,t),Object.defineProperty(e.prototype,"content",{get:function(){return this._contentPortal},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()},e.prototype.ngOnDestroy=function(){this._stateChanges.complete()},e.prototype.ngOnInit=function(){this._contentPortal=new c.h(this._explicitContent||this._implicitContent,this._viewContainerRef)},e}(Object(u.k)(k)),I=function(t){function e(e,n,i){var a=t.call(this,e,n)||this;return a._host=i,a._centeringSub=d.a.EMPTY,a._leavingSub=d.a.EMPTY,a}return Object(s.b)(e,t),e.prototype.ngOnInit=function(){var e=this;t.prototype.ngOnInit.call(this),this._centeringSub=this._host._beforeCentering.pipe(Object(m.a)(this._host._isCenterPosition(this._host._position))).subscribe(function(t){t&&!e.hasAttached()&&e.attach(e._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(function(){e.detach()})},e.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()},e}(c.c),O=function(){function t(t,e,n){var a=this;this._elementRef=t,this._dir=e,this._dirChangeSubscription=d.a.EMPTY,this._onCentering=new i.m,this._beforeCentering=new i.m,this._afterLeavingCenter=new i.m,this._onCentered=new i.m(!0),this._dir&&n&&(this._dirChangeSubscription=this._dir.change.subscribe(function(t){a._computePositionAnimationState(t),n.markForCheck()}))}return Object.defineProperty(t.prototype,"position",{set:function(t){this._positionIndex=t,this._computePositionAnimationState()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin())},t.prototype.ngOnDestroy=function(){this._dirChangeSubscription.unsubscribe()},t.prototype._onTranslateTabStarted=function(t){var e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)},t.prototype._onTranslateTabComplete=function(t){this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()},t.prototype._getLayoutDirection=function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"},t.prototype._isCenterPosition=function(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t},t.prototype._computePositionAnimationState=function(t){void 0===t&&(t=this._getLayoutDirection()),this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"},t.prototype._computePositionFromOrigin=function(){var t=this._getLayoutDirection();return"ltr"==t&&this.origin<=0||"rtl"==t&&this.origin>0?"left-origin-center":"right-origin-center"},t}(),T=function(){return function(){}}(),D=function(t){function e(e){var n=t.call(this)||this;return n.elementRef=e,n}return Object(s.b)(e,t),e.prototype.focus=function(){this.elementRef.nativeElement.focus()},e.prototype.getOffsetLeft=function(){return this.elementRef.nativeElement.offsetLeft},e.prototype.getOffsetWidth=function(){return this.elementRef.nativeElement.offsetWidth},e}(Object(u.k)(T)),L=function(){return function(){}}(),S=function(t){function e(e,n,a,o,r){var l=t.call(this)||this;return l._elementRef=e,l._changeDetectorRef=n,l._viewportRuler=a,l._dir=o,l._ngZone=r,l._scrollDistance=0,l._selectedIndexChanged=!1,l._destroyed=new b.a,l._showPaginationControls=!1,l._disableScrollAfter=!0,l._disableScrollBefore=!0,l._selectedIndex=0,l.selectFocusedIndex=new i.m,l.indexFocused=new i.m,l}return Object(s.b)(e,t),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(t){t=Object(g.d)(t),this._selectedIndexChanged=this._selectedIndex!=t,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItemIndex(t)},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentChecked=function(){this._tabLabelCount!=this._labelWrappers.length&&(this._updatePagination(),this._tabLabelCount=this._labelWrappers.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())},e.prototype._handleKeydown=function(t){switch(t.keyCode){case _.f:this._keyManager.setFirstItemActive(),t.preventDefault();break;case _.c:this._keyManager.setLastItemActive(),t.preventDefault();break;case _.d:case _.j:this.selectFocusedIndex.emit(this.focusIndex),t.preventDefault();break;default:this._keyManager.onKeydown(t)}},e.prototype.ngAfterContentInit=function(){var t=this,e=this._dir?this._dir.change:Object(p.a)(null),n=this._viewportRuler.change(150),i=function(){t._updatePagination(),t._alignInkBarToSelectedTab()};this._keyManager=new y.d(this._labelWrappers).withHorizontalOrientation(this._getLayoutDirection()).withWrap(),this._keyManager.updateActiveItem(0),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(h.a)(e,n).pipe(Object(f.a)(this._destroyed)).subscribe(function(){i(),t._keyManager.withHorizontalOrientation(t._getLayoutDirection())}),this._keyManager.change.pipe(Object(f.a)(this._destroyed)).subscribe(function(e){t.indexFocused.emit(e),t._setTabFocus(e)})},e.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete()},e.prototype._onContentChanges=function(){var t=this,e=function(){t._updatePagination(),t._alignInkBarToSelectedTab(),t._changeDetectorRef.markForCheck()};this._ngZone?this._ngZone.run(e):e()},e.prototype._updatePagination=function(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()},Object.defineProperty(e.prototype,"focusIndex",{get:function(){return this._keyManager?this._keyManager.activeItemIndex:0},set:function(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)},enumerable:!0,configurable:!0}),e.prototype._isValidIndex=function(t){if(!this._labelWrappers)return!0;var e=this._labelWrappers?this._labelWrappers.toArray()[t]:null;return!!e&&!e.disabled},e.prototype._setTabFocus=function(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._labelWrappers&&this._labelWrappers.length){this._labelWrappers.toArray()[t].focus();var e=this._tabListContainer.nativeElement,n=this._getLayoutDirection();e.scrollLeft="ltr"==n?0:e.scrollWidth-e.offsetWidth}},e.prototype._getLayoutDirection=function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"},e.prototype._updateTabScrollPosition=function(){var t=this.scrollDistance,e="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform="translateX("+e+"px)"},Object.defineProperty(e.prototype,"scrollDistance",{get:function(){return this._scrollDistance},set:function(t){this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),t)),this._scrollDistanceChanged=!0,this._checkScrollingControls()},enumerable:!0,configurable:!0}),e.prototype._scrollHeader=function(t){this.scrollDistance+=("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3},e.prototype._scrollToLabel=function(t){var e=this._labelWrappers?this._labelWrappers.toArray()[t]:null;if(e){var n,i,a=this._tabListContainer.nativeElement.offsetWidth;"ltr"==this._getLayoutDirection()?i=(n=e.getOffsetLeft())+e.getOffsetWidth():n=(i=this._tabList.nativeElement.offsetWidth-e.getOffsetLeft())-e.getOffsetWidth();var o=this.scrollDistance,r=this.scrollDistance+a;n<o?this.scrollDistance-=o-n+60:i>r&&(this.scrollDistance+=i-r+60)}},e.prototype._checkPaginationEnabled=function(){var t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t},e.prototype._checkScrollingControls=function(){this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck()},e.prototype._getMaxScrollDistance=function(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0},e.prototype._alignInkBarToSelectedTab=function(){var t=this._labelWrappers&&this._labelWrappers.length?this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement:null;this._inkBar.alignToElement(t)},e}(Object(u.j)(L)),A=0,j=function(){return function(){}}(),E=function(){return function(t){this._elementRef=t}}(),P=function(t){function e(e,n){var a=t.call(this,e)||this;return a._changeDetectorRef=n,a._indexToSelect=0,a._tabBodyWrapperHeight=0,a._tabsSubscription=d.a.EMPTY,a._tabLabelSubscription=d.a.EMPTY,a._dynamicHeight=!1,a._selectedIndex=null,a.headerPosition="above",a.selectedIndexChange=new i.m,a.focusChange=new i.m,a.animationDone=new i.m,a.selectedTabChange=new i.m(!0),a._groupId=A++,a}return Object(s.b)(e,t),Object.defineProperty(e.prototype,"dynamicHeight",{get:function(){return this._dynamicHeight},set:function(t){this._dynamicHeight=Object(g.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(t){this._indexToSelect=Object(g.d)(t,null)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){var e=this._elementRef.nativeElement;e.classList.remove("mat-background-"+this.backgroundColor),t&&e.classList.add("mat-background-"+t),this._backgroundColor=t},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentChecked=function(){var t=this,e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){var n=null==this._selectedIndex;n||this.selectedTabChange.emit(this._createChangeEvent(e)),Promise.resolve().then(function(){t._tabs.forEach(function(t,n){return t.isActive=n===e}),n||t.selectedIndexChange.emit(e)})}this._tabs.forEach(function(n,i){n.position=i-e,null==t._selectedIndex||0!=n.position||n.origin||(n.origin=e-t._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._changeDetectorRef.markForCheck())},e.prototype.ngAfterContentInit=function(){var t=this;this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(function(){if(t._clampTabIndex(t._indexToSelect)===t._selectedIndex)for(var e=t._tabs.toArray(),n=0;n<e.length;n++)if(e[n].isActive){t._indexToSelect=t._selectedIndex=n;break}t._subscribeToTabLabels(),t._changeDetectorRef.markForCheck()})},e.prototype.ngOnDestroy=function(){this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()},e.prototype.realignInkBar=function(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()},e.prototype._focusChanged=function(t){this.focusChange.emit(this._createChangeEvent(t))},e.prototype._createChangeEvent=function(t){var e=new j;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e},e.prototype._subscribeToTabLabels=function(){var t=this;this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=h.a.apply(void 0,this._tabs.map(function(t){return t._stateChanges})).subscribe(function(){return t._changeDetectorRef.markForCheck()})},e.prototype._clampTabIndex=function(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))},e.prototype._getTabLabelId=function(t){return"mat-tab-label-"+this._groupId+"-"+t},e.prototype._getTabContentId=function(t){return"mat-tab-content-"+this._groupId+"-"+t},e.prototype._setTabBodyWrapperHeight=function(t){if(this._dynamicHeight&&this._tabBodyWrapperHeight){var e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}},e.prototype._removeTabBodyWrapperHeight=function(){this._tabBodyWrapperHeight=this._tabBodyWrapper.nativeElement.clientHeight,this._tabBodyWrapper.nativeElement.style.height="",this.animationDone.emit()},e.prototype._handleClick=function(t,e,n){t.disabled||(this.selectedIndex=e.focusIndex=n)},e.prototype._getTabIndex=function(t,e){return t.disabled?null:this.selectedIndex===e?0:-1},e}(Object(u.i)(Object(u.j)(E),"primary")),R=function(){return function(){}}(),H=n("Ip0R"),F=n("M2Lx"),W=n("Fzqc"),M=n("ZYjt"),q=n("dWZg"),B=n("wFw1"),z=n("qAlS"),$=i.pb({encapsulation:2,styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media screen and (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media screen and (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media screen and (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{padding:0 12px}}@media (max-width:959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],data:{}});function Y(t){return i.Hb(0,[(t()(),i.ib(0,null,null,0))],null,null)}function Z(t){return i.Hb(0,[(t()(),i.ib(16777216,null,null,1,null,Y)),i.qb(1,212992,null,0,c.c,[i.j,i.R],{portal:[0,"portal"]},null),(t()(),i.ib(0,null,null,0))],function(t,e){t(e,1,0,e.parent.context.$implicit.templateLabel)},null)}function V(t){return i.Hb(0,[(t()(),i.Fb(0,null,["",""]))],null,function(t,e){t(e,0,0,e.parent.context.$implicit.textLabel)})}function G(t){return i.Hb(0,[(t()(),i.rb(0,0,null,null,8,"div",[["cdkMonitorElementFocus",""],["class","mat-tab-label mat-ripple"],["mat-ripple",""],["matTabLabelWrapper",""],["role","tab"]],[[8,"id",0],[1,"tabIndex",0],[1,"aria-posinset",0],[1,"aria-setsize",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[2,"mat-tab-label-active",null],[2,"mat-ripple-unbounded",null],[2,"mat-tab-disabled",null],[1,"aria-disabled",0]],[[null,"click"]],function(t,e,n){var a=!0;return"click"===e&&(a=!1!==t.component._handleClick(t.context.$implicit,i.Ab(t.parent,3),t.context.index)&&a),a},null,null)),i.qb(1,212992,null,0,u.f,[i.k,i.A,q.a,[2,u.d],[2,B.a]],{disabled:[0,"disabled"]},null),i.qb(2,147456,null,0,y.c,[i.k,y.e],null,null),i.qb(3,16384,[[3,4]],0,D,[i.k],{disabled:[0,"disabled"]},null),(t()(),i.rb(4,0,null,null,4,"div",[["class","mat-tab-label-content"]],null,null,null,null,null)),(t()(),i.ib(16777216,null,null,1,null,Z)),i.qb(6,16384,null,0,H.k,[i.R,i.O],{ngIf:[0,"ngIf"]},null),(t()(),i.ib(16777216,null,null,1,null,V)),i.qb(8,16384,null,0,H.k,[i.R,i.O],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,1,0,e.context.$implicit.disabled||e.component.disableRipple),t(e,3,0,e.context.$implicit.disabled),t(e,6,0,e.context.$implicit.templateLabel),t(e,8,0,!e.context.$implicit.templateLabel)},function(t,e){var n=e.component;t(e,0,1,[n._getTabLabelId(e.context.index),n._getTabIndex(e.context.$implicit,e.context.index),e.context.index+1,n._tabs.length,n._getTabContentId(e.context.index),n.selectedIndex==e.context.index,e.context.$implicit.ariaLabel||null,!e.context.$implicit.ariaLabel&&e.context.$implicit.ariaLabelledby?e.context.$implicit.ariaLabelledby:null,n.selectedIndex==e.context.index,i.Ab(e,1).unbounded,i.Ab(e,3).disabled,!!i.Ab(e,3).disabled])})}function K(t){return i.Hb(0,[(t()(),i.rb(0,0,null,null,1,"mat-tab-body",[["class","mat-tab-body"],["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[2,"mat-tab-body-active",null]],[[null,"_onCentered"],[null,"_onCentering"]],function(t,e,n){var i=!0,a=t.component;return"_onCentered"===e&&(i=!1!==a._removeTabBodyWrapperHeight()&&i),"_onCentering"===e&&(i=!1!==a._setTabBodyWrapperHeight(n)&&i),i},U,X)),i.qb(1,245760,null,0,O,[i.k,[2,W.b],i.h],{_content:[0,"_content"],origin:[1,"origin"],position:[2,"position"]},{_onCentering:"_onCentering",_onCentered:"_onCentered"})],function(t,e){t(e,1,0,e.context.$implicit.content,e.context.$implicit.origin,e.context.$implicit.position)},function(t,e){var n=e.component;t(e,0,0,n._getTabContentId(e.context.index),n._getTabLabelId(e.context.index),n.selectedIndex==e.context.index)})}function N(t){return i.Hb(2,[i.Db(402653184,1,{_tabBodyWrapper:0}),i.Db(402653184,2,{_tabHeader:0}),(t()(),i.rb(2,0,null,null,4,"mat-tab-header",[["class","mat-tab-header"]],[[2,"mat-tab-header-pagination-controls-enabled",null],[2,"mat-tab-header-rtl",null]],[[null,"indexFocused"],[null,"selectFocusedIndex"]],function(t,e,n){var i=!0,a=t.component;return"indexFocused"===e&&(i=!1!==a._focusChanged(n)&&i),"selectFocusedIndex"===e&&(i=!1!==(a.selectedIndex=n)&&i),i},tt,Q)),i.qb(3,3325952,[[2,4],["tabHeader",4]],1,S,[i.k,i.h,z.e,[2,W.b],i.A],{disableRipple:[0,"disableRipple"],selectedIndex:[1,"selectedIndex"]},{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}),i.Db(603979776,3,{_labelWrappers:1}),(t()(),i.ib(16777216,null,0,1,null,G)),i.qb(6,278528,null,0,H.j,[i.R,i.O,i.t],{ngForOf:[0,"ngForOf"]},null),(t()(),i.rb(7,0,[[1,0],["tabBodyWrapper",1]],null,2,"div",[["class","mat-tab-body-wrapper"]],null,null,null,null,null)),(t()(),i.ib(16777216,null,null,1,null,K)),i.qb(9,278528,null,0,H.j,[i.R,i.O,i.t],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var n=e.component;t(e,3,0,n.disableRipple,n.selectedIndex),t(e,6,0,n._tabs),t(e,9,0,n._tabs)},function(t,e){t(e,2,0,i.Ab(e,3)._showPaginationControls,"rtl"==i.Ab(e,3)._getLayoutDirection())})}var X=i.pb({encapsulation:2,styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}"],data:{animation:[{type:7,name:"translateTab",definitions:[{type:0,name:"center, void, left-origin-center, right-origin-center",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:0,name:"left",styles:{type:6,styles:{transform:"translate3d(-100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:0,name:"right",styles:{type:6,styles:{transform:"translate3d(100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:1,expr:"* => left, * => right, left => center, right => center",animation:{type:4,styles:null,timings:"500ms cubic-bezier(0.35, 0, 0.25, 1)"},options:null},{type:1,expr:"void => left-origin-center",animation:[{type:6,styles:{transform:"translate3d(-100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"500ms cubic-bezier(0.35, 0, 0.25, 1)"}],options:null},{type:1,expr:"void => right-origin-center",animation:[{type:6,styles:{transform:"translate3d(100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"500ms cubic-bezier(0.35, 0, 0.25, 1)"}],options:null}],options:{}}]}});function J(t){return i.Hb(0,[(t()(),i.ib(0,null,null,0))],null,null)}function U(t){return i.Hb(2,[i.Db(402653184,1,{_portalHost:0}),(t()(),i.rb(1,0,[["content",1]],null,2,"div",[["class","mat-tab-body-content"]],[[24,"@translateTab",0]],[[null,"@translateTab.start"],[null,"@translateTab.done"]],function(t,e,n){var i=!0,a=t.component;return"@translateTab.start"===e&&(i=!1!==a._onTranslateTabStarted(n)&&i),"@translateTab.done"===e&&(i=!1!==a._onTranslateTabComplete(n)&&i),i},null,null)),(t()(),i.ib(16777216,null,null,1,null,J)),i.qb(3,212992,null,0,I,[i.j,i.R,O],null,null)],function(t,e){t(e,3,0)},function(t,e){t(e,1,0,e.component._position)})}var Q=i.pb({encapsulation:2,styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media screen and (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media screen and (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media screen and (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media screen and (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-header-pagination{position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}"],data:{}});function tt(t){return i.Hb(2,[i.Db(402653184,1,{_inkBar:0}),i.Db(402653184,2,{_tabListContainer:0}),i.Db(402653184,3,{_tabList:0}),(t()(),i.rb(3,0,null,null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component._scrollHeader("before")&&i),i},null,null)),i.qb(4,212992,null,0,u.f,[i.k,i.A,q.a,[2,u.d],[2,B.a]],{disabled:[0,"disabled"]},null),(t()(),i.rb(5,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null)),(t()(),i.rb(6,0,[[2,0],["tabListContainer",1]],null,6,"div",[["class","mat-tab-label-container"]],null,[[null,"keydown"]],function(t,e,n){var i=!0;return"keydown"===e&&(i=!1!==t.component._handleKeydown(n)&&i),i},null,null)),(t()(),i.rb(7,0,[[3,0],["tabList",1]],null,5,"div",[["class","mat-tab-list"],["role","tablist"]],null,[[null,"cdkObserveContent"]],function(t,e,n){var i=!0;return"cdkObserveContent"===e&&(i=!1!==t.component._onContentChanges()&&i),i},null,null)),i.qb(8,1196032,null,0,F.a,[F.b,i.k,i.A],null,{event:"cdkObserveContent"}),(t()(),i.rb(9,0,null,null,1,"div",[["class","mat-tab-labels"]],null,null,null,null,null)),i.zb(null,0),(t()(),i.rb(11,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),i.qb(12,16384,[[1,4]],0,v,[i.k,i.A,x],null,null),(t()(),i.rb(13,0,null,null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component._scrollHeader("after")&&i),i},null,null)),i.qb(14,212992,null,0,u.f,[i.k,i.A,q.a,[2,u.d],[2,B.a]],{disabled:[0,"disabled"]},null),(t()(),i.rb(15,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null))],function(t,e){var n=e.component;t(e,4,0,n._disableScrollBefore||n.disableRipple),t(e,14,0,n._disableScrollAfter||n.disableRipple)},function(t,e){var n=e.component;t(e,3,0,n._disableScrollBefore,i.Ab(e,4).unbounded),t(e,13,0,n._disableScrollAfter,i.Ab(e,14).unbounded)})}var et=i.pb({encapsulation:2,styles:[],data:{}});function nt(t){return i.Hb(0,[i.zb(null,0),(t()(),i.ib(0,null,null,0))],null,null)}function it(t){return i.Hb(2,[i.Db(402653184,1,{_implicitContent:0}),(t()(),i.ib(0,[[1,2]],null,0,null,nt))],null,null)}var at=n("6CTB"),ot=n("vARd"),rt=n("vVVL"),lt=n("/ck9"),st=n("vHPH"),ct=function(){return function(){}}(),ut=function(){return function(){}}(),bt=i.pb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-title{margin-bottom:8px}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function dt(t){return i.Hb(2,[i.zb(null,0),i.zb(null,1)],null,null)}var pt=i.pb({encapsulation:2,styles:[],data:{}});function ht(t){return i.Hb(0,[(t()(),i.rb(0,0,null,null,1,"span",[],[[8,"className",0]],null,null,null,null)),(t()(),i.Fb(1,null,["",""]))],null,function(t,e){t(e,0,0,i.tb(1,"",e.parent.context.$implicit.class,"")),t(e,1,0,e.parent.context.$implicit.header)})}function mt(t){return i.Hb(0,[(t()(),i.rb(0,16777216,null,null,7,"mat-tab",[["style","overflow-y: hidden;"]],null,null,null,it,et)),i.qb(1,770048,[[3,4]],2,w,[i.R],null,null),i.Db(335544320,4,{templateLabel:0}),i.Db(335544320,5,{_explicitContent:0}),(t()(),i.ib(16777216,null,0,1,null,ht)),i.qb(5,16384,[[4,4]],0,C,[i.O,i.R],null,null),(t()(),i.rb(6,0,null,0,1,"aio-code",[],[[8,"className",0]],null,null,l.c,l.b)),i.qb(7,573440,[[2,4]],0,at.a,[ot.b,rt.a,lt.a,st.a],{language:[0,"language"],linenums:[1,"linenums"],path:[2,"path"],region:[3,"region"],header:[4,"header"]},null),(t()(),i.ib(0,null,null,0))],function(t,e){t(e,1,0),t(e,7,0,e.context.$implicit.language,e.context.$implicit.linenums,e.context.$implicit.path,e.context.$implicit.region,e.context.$implicit.header)},function(t,e){t(e,6,0,i.tb(1,"",e.context.$implicit.class,""))})}function ft(t){return i.Hb(0,[i.Db(402653184,1,{content:0}),i.Db(671088640,2,{codeComponents:1}),(t()(),i.rb(2,0,[[1,0],["content",1]],null,1,"div",[["style","display: none"]],null,null,null,null,null)),i.zb(null,0),(t()(),i.rb(4,0,null,null,6,"mat-card",[["class","mat-card"]],null,null,null,dt,bt)),i.qb(5,49152,null,0,ct,[],null,null),(t()(),i.rb(6,0,null,0,4,"mat-tab-group",[["class","code-tab-group mat-tab-group"],["disableRipple",""]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,N,$)),i.qb(7,3325952,null,1,P,[i.k,i.h],{disableRipple:[0,"disableRipple"]},null),i.Db(603979776,3,{_tabs:1}),(t()(),i.ib(16777216,null,null,1,null,mt)),i.qb(10,278528,null,0,H.j,[i.R,i.O,i.t],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var n=e.component;t(e,7,0,""),t(e,10,0,n.tabs)},function(t,e){t(e,6,0,i.Ab(e,7).dynamicHeight,"below"===i.Ab(e,7).headerPosition)})}function gt(t){return i.Hb(0,[(t()(),i.rb(0,0,null,null,1,"code-tabs",[],null,null,null,ft,pt)),i.qb(1,4308992,null,0,a,[],null,null)],function(t,e){t(e,1,0)},null)}var _t=i.nb("code-tabs",a,gt,{linenums:"linenums"},{},["*"]),yt=n("eDkP"),xt=n("UodH"),vt=n("V90o");n.d(e,"CodeTabsModuleNgFactory",function(){return Ct});var Ct=i.ob(o,[],function(t){return i.xb([i.yb(512,i.j,i.db,[[8,[r.a,r.b,l.a,_t]],[3,i.j],i.y]),i.yb(4608,H.m,H.l,[i.v,[2,H.x]]),i.yb(4608,F.c,F.c,[]),i.yb(4608,yt.a,yt.a,[yt.g,yt.c,i.j,yt.f,yt.d,i.r,i.A,H.d,W.b,[2,H.g]]),i.yb(5120,yt.h,yt.i,[yt.a]),i.yb(4608,rt.a,rt.a,[st.a]),i.yb(4608,lt.a,lt.a,[]),i.yb(1073742336,H.c,H.c,[]),i.yb(1073742336,W.a,W.a,[]),i.yb(1073742336,u.e,u.e,[[2,u.b],[2,M.g]]),i.yb(1073742336,ut,ut,[]),i.yb(1073742336,c.g,c.g,[]),i.yb(1073742336,q.b,q.b,[]),i.yb(1073742336,u.g,u.g,[]),i.yb(1073742336,F.d,F.d,[]),i.yb(1073742336,y.a,y.a,[]),i.yb(1073742336,R,R,[]),i.yb(1073742336,z.c,z.c,[]),i.yb(1073742336,yt.e,yt.e,[]),i.yb(1073742336,xt.c,xt.c,[]),i.yb(1073742336,ot.e,ot.e,[]),i.yb(1073742336,vt.a,vt.a,[]),i.yb(1073742336,o,o,[])])})}}]);
//# sourceMappingURL=code-code-tabs-module-ngfactory.4135c1f27ffba527f24f.js.map