function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VXX1:function(t,e,i){t.exports=i.p+"release-butler.3136673fde1209d59efa.png"},dw5w:function(t,e,i){"use strict";i.r(e);var n,a,c=i("ofXK"),s=i("PCNd"),o=i("tyNb"),r=i("pKmL"),l=i("o0su"),u=i("fXoL"),d=i("3Pt+"),b=i("0IaG"),f=i("NFeN"),m=i("kmnG"),p=i("qFsG"),S=i("bTqV"),h=((n=function(){function t(e,i){_classCallCheck(this,t),this.dialogRef=e,this.formBuilder=i,this.createdStatistic=new u.n}return _createClass(t,[{key:"ngOnInit",value:function(){this.editStatisticForm=this.formBuilder.group({title:["New statistic",d.p.required],description:"",url:""})}},{key:"createStatistic",value:function(){this.newStatistic={title:this.formStatisticInput.title.value,description:this.formStatisticInput.description.value,url:this.formStatisticInput.url.value},this.createdStatistic.emit(this.newStatistic),this.dialogRef.close()}},{key:"onClose",value:function(){this.dialogRef.close()}},{key:"formStatisticInput",get:function(){return this.editStatisticForm.controls}}]),t}()).\u0275fac=function(t){return new(t||n)(u.Ob(b.c),u.Ob(d.c))},n.\u0275cmp=u.Ib({type:n,selectors:[["anms-create-statistic"]],decls:20,vars:2,consts:[[1,"close"],[3,"click"],["autocomplete","off",3,"formGroup"],[1,"title"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","rows","2","formControlName","description"],["matInput","","type","text","formControlName","url"],["mat-raised-button","","color","accent",3,"disabled","click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"mat-icon",1),u.bc("click",(function(t){return e.onClose()})),u.zc(2,"close"),u.Sb(),u.Sb(),u.Tb(3,"form",2),u.Tb(4,"mat-form-field",3),u.Tb(5,"mat-label"),u.zc(6,"Statistic title"),u.Sb(),u.Pb(7,"input",4),u.Tb(8,"mat-error"),u.zc(9," Please provide a valid title "),u.Sb(),u.Sb(),u.Tb(10,"mat-form-field"),u.Tb(11,"mat-label"),u.zc(12,"Statistic description"),u.Sb(),u.Pb(13,"textarea",5),u.Sb(),u.Tb(14,"mat-form-field"),u.Tb(15,"mat-label"),u.zc(16,"Statistic url"),u.Sb(),u.Pb(17,"input",6),u.Sb(),u.Tb(18,"button",7),u.bc("click",(function(t){return e.createStatistic()})),u.zc(19," Create statistic "),u.Sb(),u.Sb()),2&t&&(u.Bb(3),u.kc("formGroup",e.editStatisticForm),u.Bb(15),u.kc("disabled",e.editStatisticForm.invalid))},directives:[f.a,d.q,d.k,d.e,m.b,m.e,p.b,d.b,d.j,d.d,m.a,S.a],styles:[".close[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}mat-form-field[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem}"]}),n),g=i("cz58"),v=i("Wp6s"),C=((a=function(){function t(e,i,n){_classCallCheck(this,t),this.formBuilder=e,this.changeDetector=i,this.statisticsService=n,this.updatedStatistic=new u.n,this.deletedStatistic=new u.n,this.routeAnimationsElements=r.c}return _createClass(t,[{key:"ngOnInit",value:function(){this.editStatisticForm=this.formBuilder.group({title:[this.statistic.title,d.p.required],description:this.statistic.description,url:this.statistic.url})}},{key:"saveStatistic",value:function(){this.updatedStatistic.emit({id:this.statistic.id,title:this.formStatisticInput.title.value,description:this.formStatisticInput.description.value,url:this.formStatisticInput.url.value})}},{key:"deleteStatistic",value:function(){this.deletedStatistic.emit(this.statistic)}},{key:"formStatisticInput",get:function(){return this.editStatisticForm.controls}}]),t}()).\u0275fac=function(t){return new(t||a)(u.Ob(d.c),u.Ob(u.h),u.Ob(l.d))},a.\u0275cmp=u.Ib({type:a,selectors:[["anms-stat"]],inputs:{statistic:"statistic"},outputs:{updatedStatistic:"updatedStatistic",deletedStatistic:"deletedStatistic"},decls:24,vars:3,consts:[["autocomplete","off",3,"formGroup","ngClass"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","rows","2","formControlName","description"],["rtl",""],["matInput","","type","text","formControlName","url"],["mat-button","","color","accent",3,"disabled","click"],["mat-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"form",0),u.Tb(1,"mat-card"),u.Tb(2,"mat-card-title"),u.Tb(3,"mat-form-field"),u.Tb(4,"mat-label"),u.zc(5,"Statistic title"),u.Sb(),u.Pb(6,"input",1),u.Tb(7,"mat-error"),u.zc(8," Please provide a valid title "),u.Sb(),u.Sb(),u.Sb(),u.Tb(9,"mat-card-content"),u.Tb(10,"mat-form-field"),u.Tb(11,"mat-label"),u.zc(12,"Statistic description"),u.Sb(),u.Pb(13,"textarea",2),u.Sb(),u.Sb(),u.Tb(14,"mat-card-subtitle",3),u.Tb(15,"mat-form-field"),u.Tb(16,"mat-label"),u.zc(17,"Statistic url"),u.Sb(),u.Pb(18,"input",4),u.Sb(),u.Sb(),u.Tb(19,"mat-card-actions"),u.Tb(20,"button",5),u.bc("click",(function(t){return e.saveStatistic()})),u.zc(21,"Save"),u.Sb(),u.Tb(22,"button",6),u.bc("click",(function(t){return e.deleteStatistic()})),u.zc(23,"Delete"),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&t&&(u.kc("formGroup",e.editStatisticForm)("ngClass",e.routeAnimationsElements),u.Bb(20),u.kc("disabled",e.editStatisticForm.invalid))},directives:[d.q,d.k,d.e,c.i,v.a,v.g,m.b,m.e,p.b,d.b,d.j,d.d,m.a,v.c,v.f,g.a,v.b,S.a],styles:["mat-card[_ngcontent-%COMP%]{margin:10px 0}mat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;vertical-align:center;font-size:1rem;margin-bottom:1rem}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;padding:0}"],changeDetection:0}),a);function k(t,e){if(1&t){var i=u.Ub();u.Tb(0,"anms-stat",8),u.bc("updatedStatistic",(function(t){return u.rc(i),u.fc().onSaveStatistic(t)}))("deletedStatistic",(function(t){return u.rc(i),u.fc().onDeleteStatistic(t)})),u.Sb()}2&t&&u.kc("statistic",e.$implicit)}var y,_,T=[{path:"",component:(y=function(){function t(e,n,a){_classCallCheck(this,t),this.statisticsService=e,this.changeDetector=n,this.dialog=a,this.routeAnimationsElements=r.c,this.releaseButler=i("VXX1"),this.statistics=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.statisticsService.getStatistics().subscribe((function(e){t.statistics=e.data.statistics.reverse(),t.changeDetector.detectChanges(),console.log(e.data.statistics)}))}},{key:"openCreateStatWindow",value:function(){var t=this;this.dialog.open(h,{width:"700px"}).componentInstance.createdStatistic.subscribe((function(e){console.log("created statistic",e),t.statisticsService.createStatistic(e).subscribe({next:function(e){console.log(e.data.createStatistic.data),t.statistics=[e.data.createStatistic.data].concat(_toConsumableArray(t.statistics)),t.changeDetector.detectChanges()},error:function(t){console.log("error",t)}})}))}},{key:"onSaveStatistic",value:function(t){this.statisticsService.updateStatistic(t.id,{title:t.title,description:t.description,url:t.url}).subscribe({next:function(t){console.log(t.data.updateStatistic)},error:function(t){console.log("error",t)}})}},{key:"onDeleteStatistic",value:function(t){var e=this;this.statisticsService.deleteStatistic(t.id).subscribe({complete:function(){e.statistics=e.statistics.filter((function(e){return e.id!==t.id})),e.changeDetector.detectChanges()},error:function(t){console.log("error",t)}})}}]),t}(),y.\u0275fac=function(t){return new(t||y)(u.Ob(l.d),u.Ob(u.h),u.Ob(b.a))},y.\u0275cmp=u.Ib({type:y,selectors:[["anms-statistics"]],decls:10,vars:2,consts:[[1,"background"],[1,"gradient"],[1,"container",3,"ngClass"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],[3,"statistic","updatedStatistic","deletedStatistic",4,"ngFor","ngForOf"],[3,"statistic","updatedStatistic","deletedStatistic"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Tb(5,"h1",5),u.zc(6,"Statistics"),u.Sb(),u.Tb(7,"button",6),u.bc("click",(function(t){return e.openCreateStatWindow()})),u.zc(8,"Create new statistic"),u.Sb(),u.Sb(),u.Sb(),u.yc(9,k,1,1,"anms-stat",7),u.Sb(),u.Sb(),u.Sb()),2&t&&(u.Bb(2),u.kc("ngClass",e.routeAnimationsElements),u.Bb(7),u.kc("ngForOf",e.statistics))},directives:[c.i,g.a,S.a,c.j,C],styles:['h1[_ngcontent-%COMP%]{text-align:center;font-size:2.2em;text-transform:uppercase;font-weight:700}.background[_ngcontent-%COMP%]{height:100%;padding:50px 0 0;position:relative}.background[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;bottom:0;right:0;background:url(intro.f4e64f141d1a6a44b226.jpg) no-repeat top fixed;background-size:cover;opacity:.7;content:"";z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{position:fixed;top:51%;left:0;bottom:0;right:0;content:"";z-index:0}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;padding-bottom:50px}'],changeDetection:0}),y),data:{title:"anms.menu.statistics"}}],w=((_=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:_}),_.\u0275inj=u.Lb({factory:function(t){return new(t||_)},imports:[[o.l.forChild(T)],o.l]}),_);i.d(e,"StatisticsModule",(function(){return P}));var O,P=((O=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:O}),O.\u0275inj=u.Lb({factory:function(t){return new(t||O)},imports:[[c.c,s.a,w]]}),O)}}]);