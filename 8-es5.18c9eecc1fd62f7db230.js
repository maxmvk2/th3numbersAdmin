function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{uibO:function(e,t,i){"use strict";i.r(t);var o=i("ofXK"),n=i("PCNd"),s=i("tyNb"),a=i("pKmL"),r=i("o0su"),d=i("3Pt+"),c=i("fXoL"),l=i("dNgK"),p=i("Xa2L"),u=i("bTqV"),m=i("kmnG"),h=i("qFsG"),g=i("ihCf"),b=i("mrSG"),f=(i("VHTt"),i("bYFv")),w=i("iadO"),v=i("NFeN"),C=["rteNotes"];function k(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",25),c.bc("click",(function(e){return c.rc(i),c.fc().updateEpisode()})),c.zc(1," Update Episode "),c.Sb()}if(2&e){var o=c.fc();c.kc("disabled",o.editEpisodeForm.invalid||!o.showEpisodeButton())}}function P(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",25),c.bc("click",(function(e){return c.rc(i),c.fc().saveEpisode()})),c.zc(1," Save Episode "),c.Sb()}if(2&e){var o=c.fc();c.kc("disabled",o.editEpisodeForm.invalid)}}function O(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",26),c.bc("click",(function(e){return c.rc(i),c.fc().deleteEpisode()})),c.zc(1," Delete Episode "),c.Sb()}}function _(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",26),c.bc("click",(function(e){return c.rc(i),c.fc().cancelEpisode()})),c.zc(1," Cancel "),c.Sb()}}function I(e,t){if(1&e){var i=c.Ub();c.Tb(0,"div",27),c.Tb(1,"button",26),c.bc("click",(function(e){c.rc(i);var o=t.$implicit;return c.fc().deleteEpisodeImage(o)})),c.zc(2,"Delete image"),c.Sb(),c.Pb(3,"img",28),c.Sb()}if(2&e){var o=t.$implicit;c.Bb(3),c.kc("src",o.url,c.tc)}}var M,y=((M=function(){function e(t,i,o,n,s){_classCallCheck(this,e),this.formBuilder=t,this.changeDetector=i,this.imagesService=o,this.audioService=n,this.pdfService=s,this.savedEpisode=new c.n,this.updatedEpisode=new c.n,this.deletedEpisode=new c.n,this.deletedImage=new c.n,this.deletedAudio=new c.n,this.deletedPDF=new c.n,this.canceledEpisode=new c.n,this.routeAnimationsElements=a.c,this.episodeImages=[],this.tools={items:["CreateLink"]}}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t;this.editEpisodeForm=this.formBuilder.group({title:[this.episode.title,d.p.required],number:[this.episode.number,d.p.required],date:this.episode.date||null,author:this.episode.author||null,audio:this.episode.audio||null,pdf:this.episode.pdf||null}),this.episodeImages=this.episode.images,this.changeDetector.detectChanges(),this.loadedEpisodeInfoText=null===(e=this.rteObj)||void 0===e?void 0:e.contentModule.getText(),this.currentEpisodeInfoText=null===(t=this.rteObj)||void 0===t?void 0:t.contentModule.getText(),this.changeDetector.detectChanges()}},{key:"showEpisodeButton",value:function(){return Boolean(this.formEpisodeInput.number.value!==this.episode.number||this.formEpisodeInput.title.value!==this.episode.title||(this.formEpisodeInput.date.value||null)!==this.episode.date||(this.formEpisodeInput.author.value||null)!==this.episode.author||(this.formEpisodeInput.audio.value||null)!==this.episode.audio||(this.formEpisodeInput.pdf.value||null)!==this.episode.pdf||this.currentEpisodeInfoText!==this.loadedEpisodeInfoText||JSON.stringify(this.episodeImages)!==JSON.stringify(this.episode.images))}},{key:"saveEpisode",value:function(){var e,t;return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this.episode.number=this.formEpisodeInput.number.value,this.episode.title=this.formEpisodeInput.title.value,this.episode.date=this.formEpisodeInput.date.value||null,this.episode.author=this.formEpisodeInput.author.value||null,this.episode.info=this.rteObj.getHtml(),this.loadedEpisodeInfoText=null===(e=this.rteObj)||void 0===e?void 0:e.contentModule.getText(),this.currentEpisodeInfoText=null===(t=this.rteObj)||void 0===t?void 0:t.contentModule.getText(),this.episode.audio=this.formEpisodeInput.audio.value||null,this.episode.audio&&this.episode.audio.match("www.dropbox.com")&&(this.episode.audio=this.episode.audio.replace("dl=0","dl=1")),this.episode.pdf=this.formEpisodeInput.pdf.value||null,this.episode.pdf&&this.episode.pdf.match("www.dropbox.com")&&(this.episode.pdf=this.episode.pdf.replace("dl=0","dl=1")),this.episode.id=Math.random(),this.episodeImages=this.episode.images,this.episode.images?this.episode.images&&Promise.all(this.episode.images.map((function(e){return Object(b.b)(o,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.file||null!==e.url.match("res.cloudinary.com")){t.next=5;break}return t.next=3,this.imagesService.uploadImage(e.file).toPromise();case 3:i=t.sent,e.url=i.data.uploadImage;case 5:case"end":return t.stop()}}),t,this)})))}))).then((function(){o.episode.imageUrls=_toConsumableArray(o.episode.images.map((function(e){return e.url}))),o.savedEpisode.emit(o.episode)})):this.savedEpisode.emit(this.episode);case 1:case"end":return i.stop()}}),i,this)})))}},{key:"updateEpisode",value:function(){var e,t;return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this.episode.number=this.formEpisodeInput.number.value,this.episode.title=this.formEpisodeInput.title.value,this.episode.date=this.formEpisodeInput.date.value||null,this.episode.author=this.formEpisodeInput.author.value||null,this.episode.audio=this.formEpisodeInput.audio.value||null,this.episode.audio&&this.episode.audio.match("www.dropbox.com")&&(this.episode.audio=this.episode.audio.replace("dl=0","dl=1")),this.episode.pdf=this.formEpisodeInput.pdf.value||null,this.episode.pdf&&this.episode.pdf.match("www.dropbox.com")&&(this.episode.pdf=this.episode.pdf.replace("dl=0","dl=1")),this.episode.info=this.rteObj.getHtml(),this.loadedEpisodeInfoText=null===(e=this.rteObj)||void 0===e?void 0:e.contentModule.getText(),this.currentEpisodeInfoText=null===(t=this.rteObj)||void 0===t?void 0:t.contentModule.getText(),this.episodeImages=this.episode.images,this.episode.images||this.episode.audio||this.episode.pdf?this.episode.images&&Promise.all(this.episode.images.map((function(e){return Object(b.b)(o,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.file||null!==e.url.match("res.cloudinary.com")){t.next=5;break}return t.next=3,this.imagesService.uploadImage(e.file).toPromise();case 3:i=t.sent,e.url=i.data.uploadImage;case 5:case"end":return t.stop()}}),t,this)})))}))).then((function(){o.episode.imageUrls=_toConsumableArray(o.episode.images.map((function(e){return e.url}))),o.updatedEpisode.emit(o.episode)})):this.updatedEpisode.emit(this.episode);case 1:case"end":return i.stop()}}),i,this)})))}},{key:"cancelEpisode",value:function(){this.canceledEpisode.emit(this.episode)}},{key:"deleteEpisode",value:function(){this.deletedEpisode.emit(this.episode)}},{key:"deleteEpisodeImage",value:function(e){this.episode.images=this.episode.images.filter((function(t){return t.id!==e.id})),this.changeDetector.detectChanges(),this.deletedImage.emit(e)}},{key:"handleImagesInput",value:function(e){var t=this,i=new FileReader;e[0]&&e[0].type.includes("image/")&&(i.readAsDataURL(e[0]),i.onload=function(o){t.episode.images=[{id:Math.random(),url:i.result,file:e[0]}].concat(_toConsumableArray(t.episode.images)),t.changeDetector.detectChanges()})}},{key:"resetSelectedFile",value:function(e){e.target.value=""}},{key:"setNotesText",value:function(e){this.currentEpisodeInfoText=this.rteObj.contentModule.getText()}},{key:"formEpisodeInput",get:function(){return this.editEpisodeForm.controls}}]),e}()).\u0275fac=function(e){return new(e||M)(c.Ob(d.c),c.Ob(c.h),c.Ob(r.d),c.Ob(r.a),c.Ob(r.e))},M.\u0275cmp=c.Ib({type:M,selectors:[["anms-episode"]],viewQuery:function(e,t){var i;1&e&&c.Dc(C,!0),2&e&&c.oc(i=c.cc())&&(t.rteObj=i.first)},inputs:{episode:"episode"},outputs:{savedEpisode:"savedEpisode",updatedEpisode:"updatedEpisode",deletedEpisode:"deletedEpisode",deletedImage:"deletedImage",deletedAudio:"deletedAudio",deletedPDF:"deletedPDF",canceledEpisode:"canceledEpisode"},features:[c.Ab([f.f,f.c,f.b,f.a])],decls:55,vars:12,consts:[["autocomplete","off",1,"episode-content",3,"formGroup"],[1,"episode-buttons"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[1,"episode-number"],["matInput","","type","number","min","0","oninput","validity.valid||(value='');","formControlName","number"],[1,"episode-detailed"],[1,"episode-fields"],[1,"full-width"],["matInput","","type","text","formControlName","title"],[1,"datepicker"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["matDatepickerToggleIcon",""],["picker",""],["matInput","","type","text","formControlName","author"],["matInput","","type","text","formControlName","audio"],["matInput","","type","text","formControlName","pdf"],[1,"rteTool",3,"toolbarSettings","value","valueChange","input"],["rteNotes",""],["mat-raised-button","","color","primary"],[1,"select-image",3,"for"],["type","file","accept","image/*",2,"visibility","hidden",3,"id","click","change"],[1,"episode-images"],["class","episode-img",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"],[1,"episode-img"],["alt","Episode image",3,"src"]],template:function(e,t){if(1&e&&(c.Tb(0,"form",0),c.Tb(1,"div",1),c.yc(2,k,2,1,"button",2),c.yc(3,P,2,1,"button",2),c.yc(4,O,2,0,"button",3),c.yc(5,_,2,0,"button",3),c.Sb(),c.Tb(6,"div",4),c.Tb(7,"h5"),c.zc(8,"Episode number"),c.Sb(),c.Tb(9,"mat-form-field"),c.Pb(10,"input",5),c.Tb(11,"mat-error"),c.zc(12," Please fill a number "),c.Sb(),c.Sb(),c.Sb(),c.Tb(13,"div",6),c.Tb(14,"div",7),c.Tb(15,"mat-form-field",8),c.Tb(16,"h5"),c.zc(17,"Title"),c.Sb(),c.Pb(18,"input",9),c.Tb(19,"mat-error"),c.zc(20," Please provide a valid title "),c.Sb(),c.Sb(),c.Tb(21,"div",10),c.Tb(22,"h5"),c.zc(23,"Date"),c.Sb(),c.Tb(24,"mat-form-field"),c.Pb(25,"input",11),c.Tb(26,"mat-datepicker-toggle",12),c.Tb(27,"mat-icon",13),c.zc(28,"today"),c.Sb(),c.Sb(),c.Pb(29,"mat-datepicker",null,14),c.Sb(),c.Sb(),c.Tb(31,"mat-form-field",8),c.Tb(32,"h5"),c.zc(33,"Author"),c.Sb(),c.Pb(34,"input",15),c.Sb(),c.Sb(),c.Tb(35,"div",7),c.Tb(36,"mat-form-field",8),c.Tb(37,"h5"),c.zc(38,"Audio"),c.Sb(),c.Pb(39,"input",16),c.Sb(),c.Tb(40,"mat-form-field",8),c.Tb(41,"h5"),c.zc(42,"PDF link"),c.Sb(),c.Pb(43,"input",17),c.Sb(),c.Tb(44,"div",8),c.Tb(45,"h5"),c.zc(46,"Notes"),c.Sb(),c.Tb(47,"ejs-richtexteditor",18,19),c.bc("valueChange",(function(e){return t.episode.info=e}))("input",(function(e){return t.setNotesText(e.target.innerHTML)})),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(49,"button",20),c.Tb(50,"label",21),c.zc(51,"Add Image"),c.Sb(),c.Sb(),c.Tb(52,"input",22),c.bc("click",(function(e){return t.resetSelectedFile(e)}))("change",(function(e){return t.handleImagesInput(e.target.files)})),c.Sb(),c.Tb(53,"div",23),c.yc(54,I,4,1,"div",24),c.Sb(),c.Sb()),2&e){var i=c.pc(30);c.kc("formGroup",t.editEpisodeForm),c.Bb(2),c.kc("ngIf",t.episode.id),c.Bb(1),c.kc("ngIf",!t.episode.id),c.Bb(1),c.kc("ngIf",t.episode.id),c.Bb(1),c.kc("ngIf",!t.episode.id),c.Bb(20),c.kc("matDatepicker",i),c.Bb(1),c.kc("for",i),c.Bb(21),c.kc("toolbarSettings",t.tools)("value",t.episode.info),c.Bb(3),c.kc("for",t.episode.id),c.Bb(2),c.kc("id",t.episode.id),c.Bb(2),c.kc("ngForOf",t.episode.images)}},directives:[d.q,d.k,d.e,o.k,m.b,h.b,d.n,d.b,d.j,d.d,m.a,w.b,w.d,m.g,v.a,w.e,w.a,f.d,u.a,o.j],styles:[".episode-content[_ngcontent-%COMP%]{padding:1.5rem;background-color:#adadad;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start;margin-bottom:2rem;-webkit-animation:fade-animation 1s;animation:fade-animation 1s}.episode-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:2rem}.episode-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.2rem .5rem;margin:0;font-size:1.2rem;border:2px solid grey;color:grey;white-space:nowrap}.episode-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1rem;margin-bottom:.5rem}.episode-number[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;margin-top:.5rem}.episode-number[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem;margin-right:1rem}.episode-number[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:20%}.episode-number[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .episode-number[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.episode-detailed[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-self:stretch;flex-wrap:wrap}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]{width:50%;min-width:280px}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]   .datepicker[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:-20px}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:80%;margin-bottom:2rem}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]   .rteTool[_ngcontent-%COMP%]{background-color:transparent;z-index:0}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]   .rteTool[_ngcontent-%COMP%]   .e-toolbar-wrapper[_ngcontent-%COMP%]{min-height:42px}.episode-detailed[_ngcontent-%COMP%]   .episode-fields[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.episode-detailed[_ngcontent-%COMP%]   p.caption[_ngcontent-%COMP%]{color:#fff;margin:0}.episode-detailed[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem}.episode-detailed[_ngcontent-%COMP%]   p.detailed[_ngcontent-%COMP%]{margin:0}.select-image[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.episode-images[_ngcontent-%COMP%]{-webkit-box-orient:horizontal;flex-direction:row;flex-wrap:wrap}.episode-images[_ngcontent-%COMP%], .episode-images[_ngcontent-%COMP%]   .episode-img[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.episode-images[_ngcontent-%COMP%]   .episode-img[_ngcontent-%COMP%]{-webkit-box-orient:vertical;flex-direction:column;-webkit-box-align:center;align-items:center}.episode-images[_ngcontent-%COMP%]   .episode-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px;max-height:200px;margin:.5rem}@-webkit-keyframes fade-animation{0%{opacity:0;-webkit-transition:all .35s cubic-bezier(1,.01,0,.99);transition:all .35s cubic-bezier(1,.01,0,.99)}to{opacity:1}}@keyframes fade-animation{0%{opacity:0;-webkit-transition:all .35s cubic-bezier(1,.01,0,.99);transition:all .35s cubic-bezier(1,.01,0,.99)}to{opacity:1}}"],changeDetection:0}),M);function S(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",25),c.bc("click",(function(e){return c.rc(i),c.fc().saveAndUpdate()})),c.zc(1," Save Show "),c.Sb()}if(2&e){var o=c.fc();c.kc("disabled",o.editForm.invalid||!o.showPodcastButton())}}function E(e,t){if(1&e){var i=c.Ub();c.Tb(0,"button",25),c.bc("click",(function(e){return c.rc(i),c.fc().saveAndCreate()})),c.zc(1," Create Show "),c.Sb()}if(2&e){var o=c.fc();c.kc("disabled",o.editForm.invalid)}}function x(e,t){if(1&e){var i=c.Ub();c.Tb(0,"anms-episode",26),c.bc("savedEpisode",(function(e){return c.rc(i),c.fc().onSaveEpisode(e)}))("updatedEpisode",(function(e){return c.rc(i),c.fc().onUpdateEpisode(e)}))("canceledEpisode",(function(e){return c.rc(i),c.fc().onCancelEpisode(e)}))("deletedEpisode",(function(e){return c.rc(i),c.fc().onDeleteEpisode(e)}))("deletedImage",(function(e){return c.rc(i),c.fc().onDeleteEpImage(e)})),c.Sb()}2&e&&c.kc("episode",t.$implicit)}var T,z,A=[{path:"",component:(T=function(){function e(t,o,n,s,r,d,c,l){_classCallCheck(this,e),this.route=t,this.formBuilder=o,this.router=n,this.showsService=s,this.imagesService=r,this.episodesService=d,this.changeDetector=c,this._snackBar=l,this.routeAnimationsElements=a.c,this.show={title:"",description:"",episodes:[]},this.imageUrl=null,this.imagesNotSaved=[],this.imagesToDelete=[],this.loading=!1,this.titleError=null,this.noImage=i("YuY8")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.podcastId=this.route.snapshot.params.id,this.editForm=this.formBuilder.group({title:["New Title",d.p.required],description:["New Description",d.p.required],linkApplePodcasts:null,linkSpotify:null}),"create"!==this.route.snapshot.params.id&&(this.startLoadingIndicator(),this.showsService.getSelectedShow(+this.podcastId).subscribe((function(t){e.show=t.data.showById,e.show.image&&(e.imageUrl=e.show.image.url,e.previousShowImage=e.show.image.url),e.editForm=e.formBuilder.group({title:[e.show.title,d.p.required],description:[e.show.description,d.p.required],linkApplePodcasts:e.show.linkApplePodcasts,linkSpotify:e.show.linkSpotify}),e.changeDetector.detectChanges(),e.stopLoadingIndicator(null)})))}},{key:"createEpisode",value:function(){this.show.episodes=[{title:"New episode",number:this.show.episodes.length+1,images:[]}].concat(_toConsumableArray(this.show.episodes)),this.changeDetector.detectChanges()}},{key:"onDeleteEpisode",value:function(e){var t=this;e.images.length>0&&e.images.forEach((function(e){t.imagesToDelete.push(e.url)})),this.episodesService.deleteEpisodeFromShow(+this.podcastId,e.id).subscribe({complete:function(){console.log("Episode is deleted")},error:function(e){console.log("error",e)}}),this.show.episodes=this.show.episodes.filter((function(t){return t.id!==e.id})),this.changeDetector.detectChanges()}},{key:"onSaveEpisode",value:function(e){this.episodesService.addEpisodeToShow(+this.podcastId,{title:e.title,number:e.number,date:e.date,author:e.author,audio:e.audio,pdf:e.pdf,info:e.info,imageUrls:e.imageUrls}).subscribe((function(t){var i=t.data.addEpisodeToShow.data.episodes;e.id=i[i.length-1].id}))}},{key:"onUpdateEpisode",value:function(e){this.deleteEpisodeImages(this.imagesToDelete),this.episodesService.updateEpisode(+e.id,{title:e.title,number:e.number,date:e.date,author:e.author,audio:e.audio,pdf:e.pdf,info:e.info,imageUrls:e.imageUrls}).subscribe({complete:function(){console.log("Episode is updated")},error:function(e){console.log("error",e)}})}},{key:"saveAndCreate",value:function(){var e=this;this.deleteEpisodeImages(this.imagesToDelete),this.show={title:this.formInput.title.value,description:this.formInput.description.value,imageUrl:this.imageUrl,linkApplePodcasts:this.formInput.linkApplePodcasts.value||null,linkSpotify:this.formInput.linkSpotify.value||null},this.podcastImage?(this.startLoadingIndicator(),this.imagesService.uploadImage(this.podcastImage).subscribe({next:function(t){e.show.imageUrl=t.data.uploadImage},complete:function(){e.createNewShow()},error:function(t){e.stopLoadingIndicator(null),console.log("error",t)}})):this.createNewShow()}},{key:"createNewShow",value:function(){var e=this;this.startLoadingIndicator(),this.showsService.createShow(this.show).subscribe({complete:function(){e.router.navigate(["shows"])},error:function(t){var i,o=(null===(i=t)||void 0===i?void 0:i.graphQLErrors[0].message)||"Unknown server error";e.errorMessage(o),e.stopLoadingIndicator(o)}})}},{key:"saveAndUpdate",value:function(){var e=this;this.deleteEpisodeImages(this.imagesToDelete);var t={title:this.formInput.title.value,description:this.formInput.description.value,imageUrl:this.imageUrl?this.imageUrl:this.noImage,linkApplePodcasts:this.formInput.linkApplePodcasts.value||null,linkSpotify:this.formInput.linkSpotify.value||null};this.show.image&&this.imageUrl!==this.show.image.url&&this.imagesService.deleteImage(this.show.image.url).subscribe({complete:function(){console.log("Image deleted")},error:function(e){console.log("error",e)}}),this.changeDetector.detectChanges(),this.podcastImage?(this.startLoadingIndicator(),this.imagesService.uploadImage(this.podcastImage).subscribe({next:function(e){t.imageUrl=e.data.uploadImage},complete:function(){e.updateCurrentShow(t)},error:function(t){e.stopLoadingIndicator(null),console.log("error",t)}})):this.updateCurrentShow(t)}},{key:"deleteImage",value:function(){this.previousShowImage=this.imageUrl,this.podcastImage=null,this.imageUrl=null,this.show.image=null,this.changeDetector.detectChanges()}},{key:"resetPodcastChanges",value:function(){var e,t;document.getElementById("poscast-title").src=(null===(e=this.show.image)||void 0===e?void 0:e.url)?this.show.image.url:this.previousShowImage||this.noImage,this.formInput.title.setValue(this.show.title),this.formInput.description.setValue(this.show.description),this.formInput.linkApplePodcasts.setValue(this.show.linkApplePodcasts),this.formInput.linkSpotify.setValue(this.show.linkSpotify),this.imageUrl=(null===(t=this.show.image)||void 0===t?void 0:t.url)?this.show.image.url:this.previousShowImage||this.noImage,this.podcastImage=null}},{key:"updateCurrentShow",value:function(e){var t=this;this.startLoadingIndicator(),this.showsService.updateShow(this.show.id,e).subscribe({complete:function(){t.router.navigate(["shows"])},error:function(e){var i,o=(null===(i=e)||void 0===i?void 0:i.graphQLErrors[0].message)||"Unknown server error";t.errorMessage(o),t.stopLoadingIndicator(o)}})}},{key:"handleFileInput",value:function(e){var t,i=this,o=new FileReader;e[0]&&e[0].type.includes("image/")?(this.podcastImage=e[0],o.readAsDataURL(e[0]),o.onload=function(e){i.imageUrl=o.result,i.changeDetector.detectChanges()}):document.getElementById("poscast-title").src=(null===(t=this.show.image)||void 0===t?void 0:t.url)?this.show.image.url:this.previousShowImage||this.noImage}},{key:"onDeleteEpImage",value:function(e){this.imagesToDelete.push(e.url)}},{key:"deleteEpisodeImages",value:function(e){e.length>0&&this.imagesService.deleteManyImages(e).subscribe({complete:function(){console.log("Images deleted")},error:function(e){console.log("error",e)}})}},{key:"startLoadingIndicator",value:function(){this.loading=!0,this.changeDetector.detectChanges()}},{key:"stopLoadingIndicator",value:function(e){this.loading=!1,this.titleError=e,this.changeDetector.detectChanges()}},{key:"errorMessage",value:function(e){this._snackBar.open(e,"",{panelClass:["mat-toolbar","mat-warn"]})}},{key:"ngOnDestroy",value:function(){this.deleteEpisodeImages(this.imagesNotSaved),this.imagesToDelete=[]}},{key:"showPodcastButton",value:function(){return Boolean(this.formInput.title.value!==this.show.title||this.formInput.description.value!==this.show.description||this.formInput.linkApplePodcasts.value!==this.show.linkApplePodcasts||this.formInput.linkSpotify.value!==this.show.linkSpotify||this.imageUrl!==this.previousShowImage)}},{key:"onCancelEpisode",value:function(e){this.show.episodes=this.show.episodes.filter((function(t){return t.id!==e.id})),this.changeDetector.detectChanges()}},{key:"formInput",get:function(){return this.editForm.controls}}]),e}(),T.\u0275fac=function(e){return new(e||T)(c.Ob(s.a),c.Ob(d.c),c.Ob(s.h),c.Ob(r.f),c.Ob(r.d),c.Ob(r.c),c.Ob(c.h),c.Ob(l.b))},T.\u0275cmp=c.Ib({type:T,selectors:[["anms-podcast"]],decls:49,vars:10,consts:[[1,"loading-indicator-container"],[1,"loading-indicator"],["autocomplete","off",1,"wrapper",3,"formGroup"],[1,"podcast-save"],["mat-raised-button","","color","accent",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"podcast-container"],[1,"podcast-image"],["id","poscast-title","alt","Show image",3,"src"],["mat-raised-button","","color","accent",3,"click"],["for","files","mat-raised-button","","color","primary"],["for","files",1,"select-image"],["type","file","accept","image/*","id","files",2,"visibility","hidden",3,"change"],[1,"podcast-info"],[1,"podcast-detailed"],[1,"full-width"],["matInput","","type","text","formControlName","title"],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","8","formControlName","description",2,"padding","0"],["autosize","cdkTextareaAutosize"],[1,"podcast-links"],["matInput","","type","text","formControlName","linkApplePodcasts"],["matInput","","type","text","formControlName","linkSpotify"],[1,"episodes"],[1,"episodes-panel"],[3,"episode","savedEpisode","updatedEpisode","canceledEpisode","deletedEpisode","deletedImage",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"episode","savedEpisode","updatedEpisode","canceledEpisode","deletedEpisode","deletedImage"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Pb(1,"mat-spinner",1),c.Sb(),c.Tb(2,"form",2),c.Tb(3,"div",3),c.yc(4,S,2,1,"button",4),c.yc(5,E,2,1,"button",4),c.Tb(6,"button",5),c.bc("click",(function(e){return t.resetPodcastChanges()})),c.zc(7," Discards changes "),c.Sb(),c.Sb(),c.Tb(8,"div",6),c.Tb(9,"div",7),c.Pb(10,"img",8),c.Tb(11,"button",9),c.bc("click",(function(e){return t.deleteImage()})),c.zc(12,"Delete image"),c.Sb(),c.Tb(13,"button",10),c.Tb(14,"label",11),c.zc(15,"Select Image"),c.Sb(),c.Sb(),c.Tb(16,"input",12),c.bc("change",(function(e){return t.handleFileInput(e.target.files)})),c.Sb(),c.Sb(),c.Tb(17,"div",13),c.Tb(18,"div",14),c.Tb(19,"mat-form-field",15),c.Tb(20,"h3"),c.zc(21,"Title"),c.Sb(),c.Pb(22,"input",16),c.Tb(23,"mat-error"),c.zc(24," Please provide a valid title "),c.Sb(),c.Sb(),c.Tb(25,"mat-form-field",15),c.Tb(26,"h5"),c.zc(27,"About"),c.Sb(),c.Tb(28,"textarea",17,18),c.zc(30,"                    "),c.Sb(),c.Tb(31,"mat-error"),c.zc(32," Please provide a valid description "),c.Sb(),c.Sb(),c.Sb(),c.Tb(33,"div",19),c.Tb(34,"mat-form-field",15),c.Tb(35,"h5"),c.zc(36,"Apple podcasts link"),c.Sb(),c.Pb(37,"input",20),c.Sb(),c.Tb(38,"mat-form-field",15),c.Tb(39,"h5"),c.zc(40,"Spotify link"),c.Sb(),c.Pb(41,"input",21),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(42,"div",22),c.Tb(43,"div",23),c.Tb(44,"h3"),c.zc(45,"Episodes"),c.Sb(),c.Tb(46,"button",9),c.bc("click",(function(e){return t.createEpisode()})),c.zc(47," Create Episode "),c.Sb(),c.Sb(),c.yc(48,x,1,1,"anms-episode",24),c.Sb(),c.Sb()),2&e&&(c.xc("display",t.loading?"flex":"none"),c.Bb(2),c.xc("display",t.loading?"none":"block"),c.kc("formGroup",t.editForm),c.Bb(2),c.kc("ngIf","create"!==t.podcastId),c.Bb(1),c.kc("ngIf","create"===t.podcastId),c.Bb(1),c.kc("disabled",t.editForm.invalid||!t.showPodcastButton()),c.Bb(4),c.kc("src",t.imageUrl?t.imageUrl:t.noImage,c.tc),c.Bb(38),c.kc("ngForOf",t.show.episodes))},directives:[p.b,d.q,d.k,d.e,o.k,u.a,m.b,h.b,d.b,d.j,d.d,m.a,g.b,o.j,y],styles:[".wrapper[_ngcontent-%COMP%]{padding:2rem 3rem}.wrapper[_ngcontent-%COMP%]   .podcast-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .podcast-save[_ngcontent-%COMP%]   button[color=primary][_ngcontent-%COMP%]{margin-left:1rem}.wrapper[_ngcontent-%COMP%]   .podcast-image[_ngcontent-%COMP%]{width:20%;min-width:250px}.wrapper[_ngcontent-%COMP%]   .podcast-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:200px;display:block;margin-bottom:.5rem}.wrapper[_ngcontent-%COMP%]   .podcast-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:200px;padding:0;margin-top:.5rem}.wrapper[_ngcontent-%COMP%]   .podcast-image[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .select-image[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .podcast-info[_ngcontent-%COMP%]{width:75%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]{width:55%;min-width:280px}.wrapper[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:80%}.wrapper[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:0;font-weight:700;font-size:2rem}.wrapper[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:.5rem 0;font-weight:700;font-size:1.5rem}.wrapper[_ngcontent-%COMP%]   .podcast-links[_ngcontent-%COMP%]{width:35%;min-width:280px}.wrapper[_ngcontent-%COMP%]   .podcast-links[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:80%;padding:.3rem 0}.wrapper[_ngcontent-%COMP%]   .podcast-links[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]   mat-input-element[_ngcontent-%COMP%]{padding:0}.wrapper[_ngcontent-%COMP%]   .podcast-links[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding:.5rem 0;font-weight:700;font-size:1rem}.wrapper[_ngcontent-%COMP%]   .podcast-save[_ngcontent-%COMP%]{width:100%;padding-bottom:2rem}.wrapper[_ngcontent-%COMP%]   .podcast-save[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:150px}.wrapper[_ngcontent-%COMP%]   .podcast-subscribe[_ngcontent-%COMP%]{padding:1rem 0}.wrapper[_ngcontent-%COMP%]   .podcast-subscribe[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.3rem .8rem;border-color:transparent;border-radius:5px;cursor:pointer;color:#fff;background-color:grey}.wrapper[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]{margin-top:3rem}.wrapper[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   .episodes-panel[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-bottom:1rem}.wrapper[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   .episodes-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;margin-bottom:0}.wrapper[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   .episodes-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:.5rem .5rem .5rem 2rem}.wrapper.mobile[_ngcontent-%COMP%]{padding:1.5rem}.wrapper.mobile[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]{padding:1rem 0}.wrapper.mobile[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.wrapper.mobile[_ngcontent-%COMP%]   .podcast-detailed[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem}.wrapper.mobile[_ngcontent-%COMP%]   .podcast-subscribe[_ngcontent-%COMP%]{padding:0}.loading-indicator-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{margin:3.7em}"],changeDetection:0}),T),data:{title:"anms.menu.podcast"}}],D=((z=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:z}),z.\u0275inj=c.Lb({factory:function(e){return new(e||z)},imports:[[s.l.forChild(A)],s.l]}),z);i.d(t,"PodcastModule",(function(){return B}));var U,B=((U=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:U}),U.\u0275inj=c.Lb({factory:function(e){return new(e||U)},imports:[[o.c,n.a,D,f.e]]}),U)}}]);