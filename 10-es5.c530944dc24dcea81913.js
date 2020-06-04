function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MrTC:function(t,n,e){"use strict";e.r(n);var i=e("ofXK"),o=e("PCNd"),a=e("tyNb"),c=e("mrSG"),r=e("pKmL"),s=e("o0su"),l=e("fXoL"),d=e("Xa2L"),g=e("cz58"),b=e("bTqV"),u=e("Wp6s"),m=e("sYmb");function p(t,n){if(1&t){var e=l.Ub();l.Tb(0,"div",8),l.Tb(1,"mat-card"),l.Tb(2,"mat-card-title"),l.Tb(3,"h6"),l.zc(4),l.Sb(),l.Sb(),l.Tb(5,"mat-card-content"),l.Pb(6,"img",9),l.Sb(),l.Tb(7,"mat-card-subtitle",5),l.zc(8),l.Sb(),l.Tb(9,"mat-card-actions",10),l.Tb(10,"button",11),l.bc("click",(function(t){l.rc(e);var i=n.$implicit;return l.fc().navigateShow(i.id)})),l.zc(11,"Edit"),l.Sb(),l.Tb(12,"button",12),l.bc("click",(function(t){l.rc(e);var i=n.$implicit;return l.fc().deleteShow(i)})),l.zc(13,"Delete"),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&t){var i=n.$implicit,o=l.fc();l.kc("ngClass",o.routeAnimationsElements),l.Bb(4),l.Ac(i.title),l.Bb(2),l.kc("src",i.image?i.image.url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",l.tc),l.Bb(2),l.Bc(" ",i.description," ")}}var h,f,w=[{path:"",component:(h=function(){function t(n,e,i,o){_classCallCheck(this,t),this.router=n,this.showsService=e,this.changeDetector=i,this.imagesService=o,this.routeAnimationsElements=r.c,this.shows=[],this.loading=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.startLoadingIndicator(),this.getShowsSub=this.showsService.getShows().subscribe({next:function(n){t.shows=n.data.shows,console.log(n.data),t.stopLoadingIndicator(null)},error:function(n){console.log("error",n),t.stopLoadingIndicator(null)}})}},{key:"openLink",value:function(t){window.open(t,"_blank")}},{key:"navigateShow",value:function(t){this.router.navigate(["podcast/"+t])}},{key:"deleteShow",value:function(t){var n=this;this.startLoadingIndicator(),t.image&&this.imagesService.deleteImage(t.image.url).subscribe({complete:function(){console.log("Image deleted")},error:function(t){console.log("error",t)}}),Promise.all(t.episodes.map((function(t){return Object(c.b)(n,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.images.map((function(t){return Object(c.b)(e,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.imagesService.deleteImage(t.url).subscribe({complete:function(){console.log("Image of episode deleted")},error:function(t){console.log("error",t)}});case 1:case"end":return n.stop()}}),n,this)})))}));case 1:case"end":return n.stop()}}),n)})))}))).then((function(){n.showsService.deleteShow(t.id).subscribe({complete:function(){n.shows=n.shows.filter((function(n){return n.id!==t.id})),n.changeDetector.detectChanges(),n.stopLoadingIndicator(null)},error:function(t){n.stopLoadingIndicator(null),console.log("error",t)}})}))}},{key:"startLoadingIndicator",value:function(){this.loading=!0,this.changeDetector.detectChanges()}},{key:"stopLoadingIndicator",value:function(t){this.loading=!1,this.changeDetector.detectChanges()}}]),t}(),h.\u0275fac=function(t){return new(t||h)(l.Ob(a.h),l.Ob(s.c),l.Ob(l.h),l.Ob(s.b))},h.\u0275cmp=l.Ib({type:h,selectors:[["anms-feature-list"]],decls:12,vars:9,consts:[[1,"loading-indicator-container"],[1,"loading-indicator"],[1,"container",3,"ngClass"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],["class","col-md-6 col-lg-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-3",3,"ngClass"],["mat-card-image","","alt","Show image",3,"src"],["align","start"],["mat-button","","color","accent",3,"click"],["mat-button","","color","warn","align","end",3,"click"]],template:function(t,n){1&t&&(l.Tb(0,"div",0),l.Pb(1,"mat-spinner",1),l.Sb(),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Tb(4,"div",4),l.Tb(5,"h1",5),l.zc(6),l.gc(7,"translate"),l.Sb(),l.Tb(8,"button",6),l.bc("click",(function(t){return n.navigateShow("create")})),l.zc(9,"Create new show"),l.Sb(),l.Sb(),l.Sb(),l.Tb(10,"div",3),l.yc(11,p,14,4,"div",7),l.Sb(),l.Sb()),2&t&&(l.xc("display",n.loading?"flex":"none"),l.Bb(2),l.xc("display",n.loading?"none":"block"),l.kc("ngClass",n.routeAnimationsElements),l.Bb(4),l.Ac(l.hc(7,7,"anms.shows.title")),l.Bb(5),l.kc("ngForOf",n.shows))},directives:[d.b,i.i,g.a,b.a,i.j,u.a,u.g,u.c,u.d,u.f,u.b],pipes:[m.c],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.main-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 0 8px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;margin-bottom:1.1rem;text-transform:uppercase;vertical-align:center}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{vertical-align:center;position:absolute;top:.3rem;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0;padding:0}@media(max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}.loading-indicator-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{margin:3.7em}"],changeDetection:0}),h),data:{title:"anms.menu.components"}}],v=((f=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:f}),f.\u0275inj=l.Lb({factory:function(t){return new(t||f)},imports:[[a.l.forChild(w)],a.l]}),f);e.d(n,"ShowsModule",(function(){return k}));var C,k=((C=function t(){_classCallCheck(this,t)}).\u0275mod=l.Mb({type:C}),C.\u0275inj=l.Lb({factory:function(t){return new(t||C)},imports:[[i.c,o.a,v]]}),C)}}]);