(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{dw5w:function(t,i,e){"use strict";e.r(i);var a=e("ofXK"),s=e("PCNd"),n=e("tyNb"),c=e("mrSG"),o=e("o0su"),r=e("fXoL"),l=e("3Pt+"),d=e("4GOx"),m=e("0IaG"),b=e("NFeN"),g=e("bTqV"),u=e("kmnG"),h=e("qFsG"),p=e("d3UM"),f=e("FKr1");function U(t,i){if(1&t&&(r.Vb(0,"mat-option",21),r.Dc(1),r.Ub()),2&t){const t=i.$implicit;r.mc("value",t.id),r.Cb(1),r.Ec(t.statisticThemeName)}}function v(t,i){if(1&t){const t=r.Wb();r.Vb(0,"div",22),r.Vb(1,"mat-form-field"),r.Vb(2,"mat-label"),r.Dc(3,"Statistics url"),r.Ub(),r.Rb(4,"input",23),r.Ub(),r.Vb(5,"button",24),r.dc("click",(function(e){r.vc(t);const a=i.index;return r.hc().removeUrl(a)})),r.Vb(6,"mat-icon"),r.Dc(7,"remove"),r.Ub(),r.Ub(),r.Ub()}if(2&t){const t=i.index,e=r.hc();r.Cb(4),r.nc("formControlName",t),r.Cb(1),r.mc("disabled",e.editStatisticForm.value.statisticsUrls.length<2)}}let C=(()=>{class t{constructor(t,i,e){this.dialogRef=t,this._formBuilder=i,this._imagesService=e,this.statisticsThemes=[],this.createdStatistic=new r.n,this.initialUrls=[""],this.imageUrl=null,this.noImage="assets/podcast-symbol-clipart.jpg"}ngOnInit(){this.editStatisticForm=this._formBuilder.group({title:["New statistic",l.r.required],subTitle:"",description:"",statisticsThemeId:this.statisticsThemes[0].id,statisticsUrls:this._formBuilder.array(this.initialUrls)}),this.currentUrls=this.editStatisticForm.controls.statisticsUrls}addNewUrl(){this.currentUrls=this.editStatisticForm.controls.statisticsUrls,this.currentUrls.push(new l.e(""))}removeUrl(t){this.currentUrls.removeAt(t)}createStatistic(){var t;return Object(c.b)(this,void 0,void 0,(function*(){let i;this._statisticsImage&&(i=yield this.uploadStatisticsImage(this._statisticsImage)),this._newStatistic={title:this.editStatisticForm.value.title,subTitle:this.editStatisticForm.value.subTitle,description:this.editStatisticForm.value.description,statisticsUrls:this.editStatisticForm.value.statisticsUrls.map(t=>({url:t})),imageUrl:(null===(t=i)||void 0===t?void 0:t.data.uploadImage)||"",statisticsThemeId:this.editStatisticForm.value.statisticsThemeId},this.createdStatistic.emit(this._newStatistic),this.dialogRef.close()}))}onClose(){this.dialogRef.close()}handleFileInput(t){const i=new FileReader;t[0]&&t[0].type.includes("image/")&&(this._statisticsImage=t[0],i.readAsDataURL(t[0]),i.onload=()=>{this.imageUrl=i.result})}deleteImage(){this._statisticsImage=null,this.imageUrl=this.noImage}resetSelectedFile(t){t.target.value=""}uploadStatisticsImage(t){return Object(c.b)(this,void 0,void 0,(function*(){try{return yield this._imagesService.uploadImage(t).toPromise()}catch(i){d.a.error(i)}}))}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(m.d),r.Qb(l.d),r.Qb(o.c))},t.\u0275cmp=r.Kb({type:t,selectors:[["anms-create-statistic"]],inputs:{statisticsThemes:"statisticsThemes"},decls:39,vars:7,consts:[[1,"create-modal"],[1,"close"],[3,"click"],["mat-dialog-content","",1,"row","content"],[1,"col-lg-5","stat-image"],["id","podcast-title","alt","Show image",3,"src"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","primary"],["for","files",1,"select-image"],["type","file","accept","image/*","id","files",3,"click","change"],["autocomplete","off",1,"col-lg-7",3,"formGroup"],[1,"title"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","formControlName","subTitle"],["matInput","","type","text","rows","2","formControlName","description"],["appearance","fill"],["formControlName","statisticsThemeId"],[3,"value",4,"ngFor","ngForOf"],["class","url","formArrayName","statisticsUrls",4,"ngFor","ngForOf"],["mat-mini-fab","","color","accent",3,"disabled","click"],["mat-raised-button","","color","accent",1,"button-create",3,"disabled","click"],[3,"value"],["formArrayName","statisticsUrls",1,"url"],["matInput","","type","text",3,"formControlName"],["mat-mini-fab","","color","primary",3,"disabled","click"]],template:function(t,i){1&t&&(r.Vb(0,"div",0),r.Vb(1,"div",1),r.Vb(2,"mat-icon",2),r.dc("click",(function(t){return i.onClose()})),r.Dc(3,"close"),r.Ub(),r.Ub(),r.Vb(4,"div",3),r.Vb(5,"div",4),r.Rb(6,"img",5),r.Vb(7,"button",6),r.dc("click",(function(t){return i.deleteImage()})),r.Dc(8," Delete image "),r.Ub(),r.Vb(9,"button",7),r.Vb(10,"label",8),r.Dc(11,"Select image"),r.Ub(),r.Ub(),r.Vb(12,"input",9),r.dc("click",(function(t){return i.resetSelectedFile(t)}))("change",(function(t){return i.handleFileInput(t.target.files)})),r.Ub(),r.Ub(),r.Vb(13,"form",10),r.Vb(14,"mat-form-field",11),r.Vb(15,"mat-label"),r.Dc(16,"Statistics title"),r.Ub(),r.Rb(17,"input",12),r.Vb(18,"mat-error"),r.Dc(19,"Please provide a valid title"),r.Ub(),r.Ub(),r.Vb(20,"mat-form-field"),r.Vb(21,"mat-label"),r.Dc(22,"Statistics subtitle"),r.Ub(),r.Rb(23,"input",13),r.Ub(),r.Vb(24,"mat-form-field"),r.Vb(25,"mat-label"),r.Dc(26,"Statistics description"),r.Ub(),r.Rb(27,"textarea",14),r.Ub(),r.Vb(28,"mat-form-field",15),r.Vb(29,"mat-label"),r.Dc(30,"Statistics theme"),r.Ub(),r.Vb(31,"mat-select",16),r.Cc(32,U,2,2,"mat-option",17),r.Ub(),r.Ub(),r.Cc(33,v,8,2,"div",18),r.Vb(34,"button",19),r.dc("click",(function(t){return i.addNewUrl()})),r.Vb(35,"mat-icon"),r.Dc(36,"add"),r.Ub(),r.Ub(),r.Vb(37,"button",20),r.dc("click",(function(t){return i.createStatistic()})),r.Dc(38," Create statistic "),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Cb(6),r.mc("src",i.imageUrl?i.imageUrl:i.noImage,r.xc),r.Cb(1),r.mc("disabled",i.imageUrl===i.noImage),r.Cb(6),r.mc("formGroup",i.editStatisticForm),r.Cb(19),r.mc("ngForOf",i.statisticsThemes),r.Cb(1),r.mc("ngForOf",i.editStatisticForm.controls.statisticsUrls.controls),r.Cb(1),r.mc("disabled",i.editStatisticForm.value.statisticsUrls.length>4),r.Cb(3),r.mc("disabled",i.editStatisticForm.invalid))},directives:[b.a,m.b,g.a,l.s,l.m,l.g,u.b,u.e,h.b,l.b,l.l,l.f,u.a,p.a,a.j,f.l,l.c],styles:[".create-modal[_ngcontent-%COMP%]{max-width:650px;width:65vw}.close[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-bottom:20px}.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.content[_ngcontent-%COMP%]{display:-webkit-box!important;display:flex!important;margin:0 -24px 0 0!important;padding:0 24px 0 0!important;-webkit-box-pack:center;justify-content:center}.stat-image[_ngcontent-%COMP%]{width:200px;padding:0!important}.stat-image[_ngcontent-%COMP%]   #files[_ngcontent-%COMP%]{visibility:hidden;width:100px;overflow:hidden}.stat-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:200px;display:block;margin-bottom:.5rem}.stat-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:200px;padding:0;margin-top:.5rem}.stat-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .select-image[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}form[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;padding:0!important}mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:120px}.title[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem}.url[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.url[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center;margin-left:30px}.button-create[_ngcontent-%COMP%]{margin-top:40px;width:100%;max-width:200px;align-self:center}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:0!important;-webkit-transform:none!important;transform:none!important}  .mat-form-field-appearance-fill .mat-select-arrow-wrapper{-webkit-transform:none!important;transform:none!important}"]}),t})();var S=e("Xa2L"),_=e("cz58"),O=(e("VHTt"),e("pKmL")),w=e("Wp6s");function P(t,i){if(1&t&&(r.Vb(0,"mat-option",20),r.Dc(1),r.Ub()),2&t){const t=i.$implicit;r.mc("value",t.id),r.Cb(1),r.Ec(t.statisticThemeName)}}function y(t,i){if(1&t){const t=r.Wb();r.Vb(0,"div",21),r.Vb(1,"mat-form-field"),r.Vb(2,"mat-label"),r.Dc(3,"Statistics url"),r.Ub(),r.Rb(4,"input",22),r.Ub(),r.Vb(5,"button",23),r.dc("click",(function(e){r.vc(t);const a=i.index;return r.hc().removeUrl(a)})),r.Vb(6,"mat-icon"),r.Dc(7,"remove"),r.Ub(),r.Ub(),r.Ub()}if(2&t){const t=i.index,e=r.hc();r.Cb(4),r.nc("formControlName",t),r.Cb(1),r.mc("disabled",e.editStatisticForm.value.statisticsUrls.length<2)}}const x=function(t,i){return{"not-published":t,published:i}};let k=(()=>{class t{constructor(t,i,e){this._formBuilder=t,this.changeDetector=i,this._imagesService=e,this.statisticsThemes=[],this.updatedStatistic=new r.n,this.deletedStatistic=new r.n,this.routeAnimationsElements=O.c,this.imageUrl=null,this.noImage="assets/podcast-symbol-clipart.jpg"}ngOnInit(){this.editStatisticForm=this._formBuilder.group({title:[this.statistic.title,l.r.required],subTitle:this.statistic.subTitle,description:this.statistic.description,statisticsUrls:this._formBuilder.array(this.statistic.statisticsUrls.map(t=>t.url)),imageUrl:this.statistic.imageUrl,statisticsThemeId:this.statistic.statisticsTheme.id}),this.imageUrl=this.statistic.imageUrl,this.currentUrls=this.editStatisticForm.controls.statisticsUrls}addNewUrl(){this.currentUrls=this.editStatisticForm.controls.statisticsUrls,this.currentUrls.push(new l.e(""))}removeUrl(t){this.currentUrls.removeAt(t)}saveStatistic(){var t;return Object(c.b)(this,void 0,void 0,(function*(){let i;yield this.deleteStatisticsImage(),this._statisticsImage&&(i=yield this.uploadStatisticsImage(this._statisticsImage));const e={id:this.statistic.id,title:this.editStatisticForm.value.title,subTitle:this.editStatisticForm.value.subTitle,description:this.editStatisticForm.value.description,statisticsUrls:this.editStatisticForm.value.statisticsUrls.map(t=>({url:t})),imageUrl:(null===(t=i)||void 0===t?void 0:t.data.uploadImage)||this.statistic.imageUrl,statisticsThemeId:this.editStatisticForm.value.statisticsThemeId};this.updatedStatistic.emit(e)}))}deleteStatistic(){return Object(c.b)(this,void 0,void 0,(function*(){this.imageUrl=this.noImage,yield this.deleteStatisticsImage(),this.deletedStatistic.emit(this.statistic)}))}handleFileInput(t){const i=new FileReader;t[0]&&t[0].type.includes("image/")&&(this._statisticsImage=t[0],i.readAsDataURL(t[0]),i.onload=()=>{this.imageUrl=i.result,this.changeDetector.detectChanges()})}deleteImage(){this._statisticsImage=null,this.imageUrl=this.noImage,this.changeDetector.detectChanges()}resetSelectedFile(t){t.target.value=""}uploadStatisticsImage(t){return Object(c.b)(this,void 0,void 0,(function*(){try{return yield this._imagesService.uploadImage(t).toPromise()}catch(i){d.a.error(i)}}))}deleteStatisticsImage(){return Object(c.b)(this,void 0,void 0,(function*(){if(this.imageUrl!==this.statistic.imageUrl)try{yield this._imagesService.deleteImage(this.statistic.imageUrl).toPromise(),this.statistic.imageUrl=""}catch(t){d.a.error(t)}}))}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(l.d),r.Qb(r.h),r.Qb(o.c))},t.\u0275cmp=r.Kb({type:t,selectors:[["anms-stat"]],inputs:{statistic:"statistic",statisticsThemes:"statisticsThemes"},outputs:{updatedStatistic:"updatedStatistic",deletedStatistic:"deletedStatistic"},decls:42,vars:14,consts:[["autocomplete","off",3,"formGroup","ngClass"],[3,"ngClass"],[1,"row"],[1,"col-lg-3","stat-image"],["id","podcast-title","alt","Show image",3,"src"],["mat-raised-button","","color","accent",3,"disabled","click"],["mat-raised-button","","color","primary"],[1,"select-image",3,"for"],["type","file","accept","image/*",1,"hidden",3,"id","click","change"],[1,"col-lg-9"],["matInput","","type","text","formControlName","title"],["matInput","","type","text","formControlName","subTitle"],["matInput","","type","text","rows","2","formControlName","description"],["appearance","fill"],["formControlName","statisticsThemeId"],[3,"value",4,"ngFor","ngForOf"],["class","url","formArrayName","statisticsUrls",4,"ngFor","ngForOf"],["mat-mini-fab","","color","accent",3,"disabled","click"],["mat-button","","color","accent",3,"disabled","click"],["mat-button","","color","warn",3,"click"],[3,"value"],["formArrayName","statisticsUrls",1,"url"],["matInput","","type","text",3,"formControlName"],["mat-mini-fab","","color","primary",3,"disabled","click"]],template:function(t,i){1&t&&(r.Vb(0,"form",0),r.Vb(1,"mat-card",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Rb(4,"img",4),r.Vb(5,"button",5),r.dc("click",(function(t){return i.deleteImage()})),r.Dc(6," Delete image "),r.Ub(),r.Vb(7,"button",6),r.Vb(8,"label",7),r.Dc(9,"Select image"),r.Ub(),r.Ub(),r.Vb(10,"input",8),r.dc("click",(function(t){return i.resetSelectedFile(t)}))("change",(function(t){return i.handleFileInput(t.target.files)})),r.Ub(),r.Ub(),r.Vb(11,"div",9),r.Vb(12,"mat-card-title"),r.Vb(13,"mat-form-field"),r.Vb(14,"mat-label"),r.Dc(15,"Statistic title"),r.Ub(),r.Rb(16,"input",10),r.Vb(17,"mat-error"),r.Dc(18,"Please provide a valid title"),r.Ub(),r.Ub(),r.Ub(),r.Vb(19,"mat-form-field"),r.Vb(20,"mat-label"),r.Dc(21,"Statistics subtitle"),r.Ub(),r.Rb(22,"input",11),r.Ub(),r.Vb(23,"mat-card-content"),r.Vb(24,"mat-form-field"),r.Vb(25,"mat-label"),r.Dc(26,"Statistic description"),r.Ub(),r.Rb(27,"textarea",12),r.Ub(),r.Ub(),r.Vb(28,"mat-form-field",13),r.Vb(29,"mat-label"),r.Dc(30,"Statistics theme"),r.Ub(),r.Vb(31,"mat-select",14),r.Cc(32,P,2,2,"mat-option",15),r.Ub(),r.Ub(),r.Cc(33,y,8,2,"div",16),r.Vb(34,"button",17),r.dc("click",(function(t){return i.addNewUrl()})),r.Vb(35,"mat-icon"),r.Dc(36,"add"),r.Ub(),r.Ub(),r.Vb(37,"mat-card-actions"),r.Vb(38,"button",18),r.dc("click",(function(t){return i.saveStatistic()})),r.Dc(39," Save "),r.Ub(),r.Vb(40,"button",19),r.dc("click",(function(t){return i.deleteStatistic()})),r.Dc(41,"Delete"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.mc("formGroup",i.editStatisticForm)("ngClass",i.routeAnimationsElements),r.Cb(1),r.mc("ngClass",r.qc(11,x,!i.statistic.viewed,i.statistic.viewed)),r.Cb(3),r.mc("src",i.imageUrl?i.imageUrl:i.noImage,r.xc),r.Cb(1),r.mc("disabled",i.imageUrl===i.noImage),r.Cb(3),r.mc("for",i.statistic.id),r.Cb(2),r.mc("id",i.statistic.id),r.Cb(22),r.mc("ngForOf",i.statisticsThemes),r.Cb(1),r.mc("ngForOf",i.editStatisticForm.controls.statisticsUrls.controls),r.Cb(1),r.mc("disabled",i.editStatisticForm.value.statisticsUrls.length>4),r.Cb(4),r.mc("disabled",i.editStatisticForm.invalid))},directives:[l.s,l.m,l.g,a.i,w.a,g.a,w.g,u.b,u.e,h.b,l.b,l.l,l.f,u.a,w.c,p.a,a.j,b.a,w.b,f.l,l.c],styles:["mat-card[_ngcontent-%COMP%]{margin:10px 0}mat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:120px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;vertical-align:center;font-size:1rem;margin-bottom:1rem;display:-webkit-box;display:flex}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:20px 0 0;padding:0}.stat-image[_ngcontent-%COMP%]{width:200px}.stat-image[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{visibility:hidden;width:100px;overflow:hidden}.stat-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:200px;display:block;margin-bottom:.5rem}.stat-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;max-width:200px;padding:0;margin-top:.5rem}.stat-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .select-image[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.url[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.url[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center;margin-left:30px}.published[_ngcontent-%COMP%]{border-top:10px solid #00ba00}.not-published[_ngcontent-%COMP%]{border-top:10px solid #fa0}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:0!important;-webkit-transform:none!important;transform:none!important}  .mat-form-field-appearance-fill .mat-select-arrow-wrapper{-webkit-transform:none!important;transform:none!important}"],changeDetection:0}),t})();function V(t,i){if(1&t){const t=r.Wb();r.Vb(0,"anms-stat",12),r.dc("updatedStatistic",(function(i){return r.vc(t),r.hc().onSaveStatistic(i)}))("deletedStatistic",(function(i){return r.vc(t),r.hc().onDeleteStatistic(i)})),r.Ub()}if(2&t){const t=i.$implicit,e=r.hc();r.mc("statistic",t)("statisticsThemes",e.statisticsThemes)}}const I=[{path:"",component:(()=>{class t{constructor(t,i,e,a){this.dialog=t,this._statisticsService=i,this._themesService=e,this._changeDetector=a,this.statistics=[],this.statisticsThemes=[],this.currentPage=1,this.endPage=1,this.loading=!1,this._pageSize=5}ngOnInit(){return Object(c.b)(this,void 0,void 0,(function*(){yield this.getAllStatistics(this.currentPage)}))}ngOnDestroy(){var t;null===(t=this._createStatisticSubscription)||void 0===t||t.unsubscribe()}getAllStatistics(t){return Object(c.b)(this,void 0,void 0,(function*(){this.startLoadingIndicator();try{const i=yield this._statisticsService.getStatistics(t,this._pageSize).toPromise();this.statistics=i.data.statistics.data,this._totalStatisticsCount=i.data.statistics.totalCount,this.endPage=Math.ceil(this._totalStatisticsCount/this._pageSize),this.getStatisticsThemes()}catch(i){this.stopLoadingIndicator(),d.a.error(i)}}))}getStatisticsThemes(){return Object(c.b)(this,void 0,void 0,(function*(){try{const t=yield this._themesService.getStatisticsThemes().toPromise();this.statisticsThemes=t.data.getStatisticsThemes,this._changeDetector.detectChanges(),this.stopLoadingIndicator()}catch(t){this.stopLoadingIndicator(),d.a.error(t)}}))}openCreateStatWindow(){return Object(c.b)(this,void 0,void 0,(function*(){const t=this.dialog.open(C);t.componentInstance.statisticsThemes=this.statisticsThemes,this._createStatisticSubscription=t.componentInstance.createdStatistic.subscribe(t=>Object(c.b)(this,void 0,void 0,(function*(){this.startLoadingIndicator();try{yield this._statisticsService.createStatistic(t).toPromise(),this.currentPage=1,this._changeDetector.detectChanges(),yield this.getAllStatistics(this.currentPage)}catch(i){this.stopLoadingIndicator(),d.a.error(i)}})),t=>d.a.error(t))}))}onSaveStatistic(t){return Object(c.b)(this,void 0,void 0,(function*(){this.startLoadingIndicator();const i={title:t.title,subTitle:t.subTitle,description:t.description,statisticsUrls:t.statisticsUrls,imageUrl:t.imageUrl,statisticsThemeId:t.statisticsThemeId};try{yield this._statisticsService.updateStatistic(t.id,i).toPromise(),this.stopLoadingIndicator()}catch(e){d.a.error(e)}}))}onDeleteStatistic(t){return Object(c.b)(this,void 0,void 0,(function*(){this.startLoadingIndicator();try{yield this._statisticsService.deleteStatistic(t.id).toPromise(),yield this.getAllStatistics(this.currentPage)}catch(i){this.stopLoadingIndicator(),d.a.error(i)}}))}changePage(t){return Object(c.b)(this,void 0,void 0,(function*(){this.currentPage=t,this._changeDetector.detectChanges(),yield this.getAllStatistics(t)}))}startLoadingIndicator(){this.loading=!0,this._changeDetector.detectChanges()}stopLoadingIndicator(){this.loading=!1,this._changeDetector.detectChanges()}}return t.\u0275fac=function(i){return new(i||t)(r.Qb(m.a),r.Qb(o.e),r.Qb(o.f),r.Qb(r.h))},t.\u0275cmp=r.Kb({type:t,selectors:[["anms-statistics"]],decls:21,vars:8,consts:[[1,"loading-indicator-container"],[1,"loading-indicator"],[1,"background"],[1,"gradient"],[1,"container"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],[3,"statistic","statisticsThemes","updatedStatistic","deletedStatistic",4,"ngFor","ngForOf"],[1,"pages"],["mat-button","","color","accent",3,"disabled","click"],[3,"statistic","statisticsThemes","updatedStatistic","deletedStatistic"]],template:function(t,i){1&t&&(r.Vb(0,"div",0),r.Rb(1,"mat-spinner",1),r.Ub(),r.Vb(2,"div",2),r.Rb(3,"div",3),r.Vb(4,"div",4),r.Vb(5,"div",5),r.Vb(6,"div",6),r.Vb(7,"h1",7),r.Dc(8,"Statistics"),r.Ub(),r.Vb(9,"button",8),r.dc("click",(function(t){return i.openCreateStatWindow()})),r.Dc(10," Create new statistic "),r.Ub(),r.Ub(),r.Ub(),r.Cc(11,V,1,2,"anms-stat",9),r.Vb(12,"div",10),r.Vb(13,"button",11),r.dc("click",(function(t){return i.changePage(i.currentPage-1)})),r.Vb(14,"mat-icon"),r.Dc(15,"keyboard_arrow_left"),r.Ub(),r.Ub(),r.Vb(16,"div"),r.Dc(17),r.Ub(),r.Vb(18,"button",11),r.dc("click",(function(t){return i.changePage(i.currentPage+1)})),r.Vb(19,"mat-icon"),r.Dc(20,"keyboard_arrow_right"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Bc("display",i.loading?"flex":"none"),r.Cb(2),r.Bc("display",i.loading?"none":"block"),r.Cb(9),r.mc("ngForOf",i.statistics),r.Cb(2),r.mc("disabled",i.currentPage<=1),r.Cb(4),r.Ec(i.currentPage),r.Cb(1),r.mc("disabled",i.currentPage>=i.endPage))},directives:[S.b,_.a,g.a,a.j,b.a,k],styles:['h1[_ngcontent-%COMP%]{text-align:center;font-size:2.2em;text-transform:uppercase;font-weight:700}.background[_ngcontent-%COMP%]{height:100%;padding:50px 0 0;position:relative}.background[_ngcontent-%COMP%]:before{background:url(intro.f4e64f141d1a6a44b226.jpg) no-repeat top fixed;background-size:cover;opacity:.7;content:""}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%], .background[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;bottom:0;right:0;z-index:0}.background[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:-webkit-gradient(linear,left top,left bottom,color-stop(50%,rgba(48,48,48,0)),to(#303030)) fixed;background:linear-gradient(180deg,rgba(48,48,48,0) 50%,#303030) fixed}.background[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;padding-bottom:50px}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:32px;margin:12px;padding:6px}.background[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:32px;font-size:30px;height:32px}.loading-indicator-container[_ngcontent-%COMP%]{height:90%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{margin:3.7em}mat-dialog-container[_ngcontent-%COMP%]{width:700px}'],changeDetection:0}),t})(),data:{title:"anms.menu.statistics"}}];let M=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(i){return new(i||t)},imports:[[n.l.forChild(I)],n.l]}),t})();e.d(i,"StatisticsModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(i){return new(i||t)},imports:[[a.c,s.a,M]]}),t})()}}]);