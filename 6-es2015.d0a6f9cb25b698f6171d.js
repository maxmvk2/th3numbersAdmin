(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{VXX1:function(t,i,e){t.exports=e.p+"release-butler.3136673fde1209d59efa.png"},dw5w:function(t,i,e){"use strict";e.r(i);var n=e("ofXK"),a=e("PCNd"),c=e("tyNb"),s=e("pKmL"),o=e("o0su"),r=e("fXoL"),l=e("3Pt+"),d=e("0IaG"),b=e("NFeN"),u=e("kmnG"),g=e("qFsG"),m=e("bTqV");let p=(()=>{class t{constructor(t,i){this.dialogRef=t,this.formBuilder=i,this.createdStatistic=new r.n}ngOnInit(){this.editStatisticForm=this.formBuilder.group({title:["New statistic",l.p.required],description:"",url:""})}get formStatisticInput(){return this.editStatisticForm.controls}createStatistic(){this.newStatistic={title:this.formStatisticInput.title.value,description:this.formStatisticInput.description.value,url:this.formStatisticInput.url.value},this.createdStatistic.emit(this.newStatistic),this.dialogRef.close()}onClose(){this.dialogRef.close()}}return t.\u0275fac=function(i){return new(i||t)(r.Ob(d.c),r.Ob(l.c))},t.\u0275cmp=r.Ib({type:t,selectors:[["anms-create-statistic"]],decls:20,vars:2,consts:[[1,"close"],[3,"click"],["autocomplete","off",3,"formGroup"],[1,"title"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","rows","2","formControlName","description"],["matInput","","type","text","formControlName","url"],["mat-raised-button","","color","accent",3,"disabled","click"]],template:function(t,i){1&t&&(r.Tb(0,"div",0),r.Tb(1,"mat-icon",1),r.bc("click",(function(t){return i.onClose()})),r.zc(2,"close"),r.Sb(),r.Sb(),r.Tb(3,"form",2),r.Tb(4,"mat-form-field",3),r.Tb(5,"mat-label"),r.zc(6,"Statistic title"),r.Sb(),r.Pb(7,"input",4),r.Tb(8,"mat-error"),r.zc(9," Please provide a valid title "),r.Sb(),r.Sb(),r.Tb(10,"mat-form-field"),r.Tb(11,"mat-label"),r.zc(12,"Statistic description"),r.Sb(),r.Pb(13,"textarea",5),r.Sb(),r.Tb(14,"mat-form-field"),r.Tb(15,"mat-label"),r.zc(16,"Statistic url"),r.Sb(),r.Pb(17,"input",6),r.Sb(),r.Tb(18,"button",7),r.bc("click",(function(t){return i.createStatistic()})),r.zc(19," Create statistic "),r.Sb(),r.Sb()),2&t&&(r.Bb(3),r.kc("formGroup",i.editStatisticForm),r.Bb(15),r.kc("disabled",i.editStatisticForm.invalid))},directives:[b.a,l.q,l.k,l.e,u.b,u.e,g.b,l.b,l.j,l.d,u.a,m.a],styles:[".close[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}mat-form-field[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem}"]}),t})();var h=e("Xa2L"),S=e("cz58"),f=e("Wp6s");let P=(()=>{class t{constructor(t,i,e){this.formBuilder=t,this.changeDetector=i,this.statisticsService=e,this.updatedStatistic=new r.n,this.deletedStatistic=new r.n,this.routeAnimationsElements=s.c}ngOnInit(){this.editStatisticForm=this.formBuilder.group({title:[this.statistic.title,l.p.required],description:this.statistic.description,url:this.statistic.url})}get formStatisticInput(){return this.editStatisticForm.controls}saveStatistic(){this.updatedStatistic.emit({id:this.statistic.id,title:this.formStatisticInput.title.value,description:this.formStatisticInput.description.value,url:this.formStatisticInput.url.value})}deleteStatistic(){this.deletedStatistic.emit(this.statistic)}}return t.\u0275fac=function(i){return new(i||t)(r.Ob(l.c),r.Ob(r.h),r.Ob(o.d))},t.\u0275cmp=r.Ib({type:t,selectors:[["anms-stat"]],inputs:{statistic:"statistic"},outputs:{updatedStatistic:"updatedStatistic",deletedStatistic:"deletedStatistic"},decls:24,vars:3,consts:[["autocomplete","off",3,"formGroup","ngClass"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","rows","2","formControlName","description"],["rtl",""],["matInput","","type","text","formControlName","url"],["mat-button","","color","accent",3,"disabled","click"],["mat-button","","color","warn",3,"click"]],template:function(t,i){1&t&&(r.Tb(0,"form",0),r.Tb(1,"mat-card"),r.Tb(2,"mat-card-title"),r.Tb(3,"mat-form-field"),r.Tb(4,"mat-label"),r.zc(5,"Statistic title"),r.Sb(),r.Pb(6,"input",1),r.Tb(7,"mat-error"),r.zc(8," Please provide a valid title "),r.Sb(),r.Sb(),r.Sb(),r.Tb(9,"mat-card-content"),r.Tb(10,"mat-form-field"),r.Tb(11,"mat-label"),r.zc(12,"Statistic description"),r.Sb(),r.Pb(13,"textarea",2),r.Sb(),r.Sb(),r.Tb(14,"mat-card-subtitle",3),r.Tb(15,"mat-form-field"),r.Tb(16,"mat-label"),r.zc(17,"Statistic url"),r.Sb(),r.Pb(18,"input",4),r.Sb(),r.Sb(),r.Tb(19,"mat-card-actions"),r.Tb(20,"button",5),r.bc("click",(function(t){return i.saveStatistic()})),r.zc(21,"Save"),r.Sb(),r.Tb(22,"button",6),r.bc("click",(function(t){return i.deleteStatistic()})),r.zc(23,"Delete"),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.kc("formGroup",i.editStatisticForm)("ngClass",i.routeAnimationsElements),r.Bb(20),r.kc("disabled",i.editStatisticForm.invalid))},directives:[l.q,l.k,l.e,n.i,f.a,f.g,u.b,u.e,g.b,l.b,l.j,l.d,u.a,f.c,f.f,S.a,f.b,m.a],styles:["mat-card[_ngcontent-%COMP%]{margin:10px 0}mat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;vertical-align:center;font-size:1rem;margin-bottom:1rem}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;padding:0}"],changeDetection:0}),t})();function C(t,i){if(1&t){const t=r.Ub();r.Tb(0,"anms-stat",12),r.bc("updatedStatistic",(function(i){return r.rc(t),r.fc().onSaveStatistic(i)}))("deletedStatistic",(function(i){return r.rc(t),r.fc().onDeleteStatistic(i)})),r.Sb()}2&t&&r.kc("statistic",i.$implicit)}const k=[{path:"",component:(()=>{class t{constructor(t,i,n){this.statisticsService=t,this.changeDetector=i,this.dialog=n,this.routeAnimationsElements=s.c,this.releaseButler=e("VXX1"),this.statistics=[],this.currentPage=1,this.endPage=1,this.pageSize=5,this.loading=!1}ngOnInit(){this.getAllStatistics(this.currentPage)}getAllStatistics(t){this.startLoadingIndicator(),this.statisticsService.getStatistics(t,this.pageSize).subscribe({next:t=>{this.statistics=t.data.statistics.data,this.totalStatisticsCount=t.data.statistics.totalCount,this.endPage=Math.ceil(this.totalStatisticsCount/this.pageSize),this.stopLoadingIndicator(null),this.changeDetector.detectChanges()},error:t=>{console.log("error",t),this.stopLoadingIndicator(null)}})}openCreateStatWindow(){this.dialog.open(p,{width:"700px"}).componentInstance.createdStatistic.subscribe(t=>{this.startLoadingIndicator(),this.statisticsService.createStatistic(t).subscribe({complete:()=>{this.currentPage=1,this.changeDetector.detectChanges(),this.getAllStatistics(this.currentPage)},error:t=>{console.log("error",t),this.stopLoadingIndicator(null)}})})}onSaveStatistic(t){this.startLoadingIndicator(),this.statisticsService.updateStatistic(t.id,{title:t.title,description:t.description,url:t.url}).subscribe({complete:()=>{this.stopLoadingIndicator(null)},error:t=>{this.stopLoadingIndicator(null),console.log("error",t)}})}onDeleteStatistic(t){this.startLoadingIndicator(),this.statisticsService.deleteStatistic(t.id).subscribe({complete:()=>{this.getAllStatistics(this.currentPage)},error:t=>{this.stopLoadingIndicator(null),console.log("error",t)}})}changePage(t){this.currentPage=t,this.changeDetector.detectChanges(),this.getAllStatistics(t)}startLoadingIndicator(){this.loading=!0,this.changeDetector.detectChanges()}stopLoadingIndicator(t){this.loading=!1,this.changeDetector.detectChanges()}}return t.\u0275fac=function(i){return new(i||t)(r.Ob(o.d),r.Ob(r.h),r.Ob(d.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["anms-statistics"]],decls:21,vars:9,consts:[[1,"background"],[1,"loading-indicator-container"],[1,"loading-indicator"],[1,"gradient"],[1,"container",3,"ngClass"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],[3,"statistic","updatedStatistic","deletedStatistic",4,"ngFor","ngForOf"],[1,"pages"],["mat-button","","color","accent",3,"disabled","click"],[3,"statistic","updatedStatistic","deletedStatistic"]],template:function(t,i){1&t&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Pb(2,"mat-spinner",2),r.Sb(),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Tb(5,"div",5),r.Tb(6,"div",6),r.Tb(7,"h1",7),r.zc(8,"Statistics"),r.Sb(),r.Tb(9,"button",8),r.bc("click",(function(t){return i.openCreateStatWindow()})),r.zc(10,"Create new statistic"),r.Sb(),r.Sb(),r.Sb(),r.yc(11,C,1,1,"anms-stat",9),r.Tb(12,"div",10),r.Tb(13,"button",11),r.bc("click",(function(t){return i.changePage(i.currentPage-1)})),r.Tb(14,"mat-icon"),r.zc(15,"keyboard_arrow_left"),r.Sb(),r.Sb(),r.Tb(16,"div"),r.zc(17),r.Sb(),r.Tb(18,"button",11),r.bc("click",(function(t){return i.changePage(i.currentPage+1)})),r.Tb(19,"mat-icon"),r.zc(20,"keyboard_arrow_right"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Bb(1),r.xc("display",i.loading?"flex":"none"),r.Bb(3),r.xc("display",i.loading?"none":"block"),r.kc("ngClass",i.routeAnimationsElements),r.Bb(7),r.kc("ngForOf",i.statistics),r.Bb(2),r.kc("disabled",i.currentPage<=1),r.Bb(4),r.Ac(i.currentPage),r.Bb(1),r.kc("disabled",i.currentPage>=i.endPage))},directives:[h.b,n.i,S.a,m.a,n.j,b.a,P],styles:['h1[_ngcontent-%COMP%]{text-align:center;font-size:2.2em;text-transform:uppercase;font-weight:700}.background[_ngcontent-%COMP%]{height:100%;padding:50px 0 0;position:relative}.background[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;bottom:0;right:0;background:url(intro.f4e64f141d1a6a44b226.jpg) no-repeat top fixed;background-size:cover;opacity:.7;content:"";z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{position:fixed;top:51%;left:0;bottom:0;right:0;content:"";z-index:0}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;padding-bottom:50px}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:32px;margin:12px;padding:6px}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:32px;font-size:30px;height:32px}.background[_ngcontent-%COMP%]   .loading-indicator-container[_ngcontent-%COMP%]{height:90%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.background[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]{margin:3.7em}'],changeDetection:0}),t})(),data:{title:"anms.menu.statistics"}}];let O=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(i){return new(i||t)},imports:[[c.l.forChild(k)],c.l]}),t})();e.d(i,"StatisticsModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(i){return new(i||t)},imports:[[n.c,a.a,O]]}),t})()}}]);