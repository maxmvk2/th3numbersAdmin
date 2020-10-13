function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MrTC:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),a=n("PCNd"),r=n("tyNb"),o=n("mrSG"),c=n("o0su"),s=n("4GOx"),d=n("fXoL"),g=n("Xa2L"),l=n("cz58"),u=n("bTqV"),b=n("NFeN"),h=n("Wp6s"),m=n("sYmb");function p(t,e){if(1&t){var n=d.Wb();d.Vb(0,"div",10),d.Vb(1,"mat-card"),d.Vb(2,"mat-card-title"),d.Vb(3,"h6"),d.Dc(4),d.Ub(),d.Ub(),d.Vb(5,"mat-card-content"),d.Rb(6,"img",11),d.Ub(),d.Vb(7,"mat-card-subtitle",5),d.Dc(8),d.Ub(),d.Vb(9,"mat-card-actions",12),d.Vb(10,"button",13),d.dc("click",(function(t){d.vc(n);var i=e.$implicit;return d.hc().navigateShow(i.id.toString())})),d.Dc(11," Edit "),d.Ub(),d.Vb(12,"button",14),d.dc("click",(function(t){d.vc(n);var i=e.$implicit;return d.hc().deleteShow(i)})),d.Dc(13," Delete "),d.Ub(),d.Ub(),d.Ub(),d.Ub()}if(2&t){var i=e.$implicit,a=d.hc();d.Cb(4),d.Ec(i.title),d.Cb(2),d.mc("src",i.image?i.image.url:a.noImage,d.xc),d.Cb(2),d.Ec(i.description)}}var f,v,w=function(t,e){return{flexible:t,hidden:e}},C=function(t,e){return{hidden:t,block:e}},_=[{path:"",component:(f=function(){function t(e,i,a,r){_classCallCheck(this,t),this._router=e,this._showsService=i,this._changeDetector=a,this._imagesService=r,this.shows=[],this.currentPage=1,this.endPage=1,this.loading=!1,this.noImage=n("YuY8"),this._pageSize=8}return _createClass(t,[{key:"ngOnInit",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllShows(this.currentPage);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"getAllShows",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startLoadingIndicator(),e.prev=1,e.next=4,this._showsService.getShows(t,this._pageSize).toPromise();case 4:n=e.sent,this.shows=n.data.shows.data,this._totalShowCount=n.data.shows.totalCount,this.endPage=Math.ceil(this._totalShowCount/this._pageSize),this.stopLoadingIndicator(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.stopLoadingIndicator(),s.a.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})))}},{key:"navigateShow",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._router.navigate(["podcast/"+t]);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"deleteShow",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.startLoadingIndicator(),!t.image){e.next=10;break}return e.prev=1,e.next=4,this._imagesService.deleteImage(t.image.url).toPromise();case 4:s.a.log("Image was deleted."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s.a.error(e.t0);case 10:this.deleteAllEpisodeImagesOfShow(t);case 11:case"end":return e.stop()}}),e,this,[[1,7]])})))}},{key:"deleteAllEpisodeImagesOfShow",value:function(t){var e=this;Promise.all(t.episodes.map((function(t){return Object(o.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.images.map((function(t){return Object(o.b)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._imagesService.deleteImage(t.url).toPromise();case 3:s.a.log("Image was deleted."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s.a.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}));case 1:case"end":return e.stop()}}),e)})))}))).then((function(){return Object(o.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._showsService.deleteShow(t.id).toPromise();case 3:return e.next=5,this.getAllShows(this.currentPage);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.a.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}))}},{key:"startLoadingIndicator",value:function(){this.loading=!0,this._changeDetector.detectChanges()}},{key:"stopLoadingIndicator",value:function(){this.loading=!1,this._changeDetector.detectChanges()}},{key:"changePage",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startLoadingIndicator(),this.currentPage=t,this._changeDetector.detectChanges(),e.next=5,this.getAllShows(t);case 5:case"end":return e.stop()}}),e,this)})))}}]),t}(),f.\u0275fac=function(t){return new(t||f)(d.Qb(r.h),d.Qb(c.d),d.Qb(d.h),d.Qb(c.c))},f.\u0275cmp=d.Kb({type:f,selectors:[["anms-feature-list"]],decls:21,vars:15,consts:[[1,"loading-indicator-container",3,"ngClass"],[1,"loading-indicator"],[1,"container",3,"ngClass"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],["class","col-md-6 col-lg-3",4,"ngFor","ngForOf"],[1,"pages"],["mat-button","","color","accent",3,"disabled","click"],[1,"col-md-6","col-lg-3"],["mat-card-image","","alt","Show image",3,"src"],["align","start"],["mat-button","","color","accent",3,"click"],["mat-button","","color","warn","align","end",3,"click"]],template:function(t,e){1&t&&(d.Vb(0,"div",0),d.Rb(1,"mat-spinner",1),d.Ub(),d.Vb(2,"div",2),d.Vb(3,"div",3),d.Vb(4,"div",4),d.Vb(5,"h1",5),d.Dc(6),d.ic(7,"translate"),d.Ub(),d.Vb(8,"button",6),d.dc("click",(function(t){return e.navigateShow("create")})),d.Dc(9," Create new show "),d.Ub(),d.Ub(),d.Ub(),d.Vb(10,"div",3),d.Cc(11,p,14,3,"div",7),d.Ub(),d.Vb(12,"div",8),d.Vb(13,"button",9),d.dc("click",(function(t){return e.changePage(e.currentPage-1)})),d.Vb(14,"mat-icon"),d.Dc(15,"keyboard_arrow_left"),d.Ub(),d.Ub(),d.Vb(16,"div"),d.Dc(17),d.Ub(),d.Vb(18,"button",9),d.dc("click",(function(t){return e.changePage(e.currentPage+1)})),d.Vb(19,"mat-icon"),d.Dc(20,"keyboard_arrow_right"),d.Ub(),d.Ub(),d.Ub(),d.Ub()),2&t&&(d.mc("ngClass",d.qc(9,w,e.loading,!e.loading)),d.Cb(2),d.mc("ngClass",d.qc(12,C,e.loading,!e.loading)),d.Cb(4),d.Ec(d.jc(7,7,"anms.shows.title")),d.Cb(5),d.mc("ngForOf",e.shows),d.Cb(2),d.mc("disabled",e.currentPage<=1),d.Cb(4),d.Ec(e.currentPage),d.Cb(1),d.mc("disabled",e.currentPage>=e.endPage))},directives:[i.i,g.b,l.a,u.a,i.j,b.a,h.a,h.g,h.c,h.d,h.f,h.b],pipes:[m.c],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.main-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 0 8px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;margin-bottom:1.1rem;text-transform:uppercase;vertical-align:center}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{vertical-align:center;position:absolute;top:.3rem;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{height:250px}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0;padding:0}@media(max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}.pages[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:32px;margin:12px;padding:6px}.pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:32px;font-size:30px;height:32px}.loading-indicator-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{margin:3.7em}.hidden[_ngcontent-%COMP%]{display:none}.block[_ngcontent-%COMP%]{display:block}.flexible[_ngcontent-%COMP%]{display:-webkit-box;display:flex}"],changeDetection:0}),f),data:{title:"anms.menu.components"}}],P=((v=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ob({type:v}),v.\u0275inj=d.Nb({factory:function(t){return new(t||v)},imports:[[r.l.forChild(_)],r.l]}),v);n.d(e,"ShowsModule",(function(){return O}));var x,O=((x=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ob({type:x}),x.\u0275inj=d.Nb({factory:function(t){return new(t||x)},imports:[[i.c,a.a,P]]}),x)},YuY8:function(t,e,n){t.exports=n.p+"podcast-symbol-clipart.6f53ba8f52442aa30d75.jpg"}}]);