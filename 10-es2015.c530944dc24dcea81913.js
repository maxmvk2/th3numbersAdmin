(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MrTC:function(t,n,e){"use strict";e.r(n);var i=e("ofXK"),o=e("PCNd"),a=e("tyNb"),c=e("mrSG"),s=e("pKmL"),r=e("o0su"),l=e("fXoL"),d=e("Xa2L"),g=e("cz58"),b=e("bTqV"),m=e("Wp6s"),h=e("sYmb");function p(t,n){if(1&t){const t=l.Ub();l.Tb(0,"div",8),l.Tb(1,"mat-card"),l.Tb(2,"mat-card-title"),l.Tb(3,"h6"),l.zc(4),l.Sb(),l.Sb(),l.Tb(5,"mat-card-content"),l.Pb(6,"img",9),l.Sb(),l.Tb(7,"mat-card-subtitle",5),l.zc(8),l.Sb(),l.Tb(9,"mat-card-actions",10),l.Tb(10,"button",11),l.bc("click",(function(e){l.rc(t);const i=n.$implicit;return l.fc().navigateShow(i.id)})),l.zc(11,"Edit"),l.Sb(),l.Tb(12,"button",12),l.bc("click",(function(e){l.rc(t);const i=n.$implicit;return l.fc().deleteShow(i)})),l.zc(13,"Delete"),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=n.$implicit,e=l.fc();l.kc("ngClass",e.routeAnimationsElements),l.Bb(4),l.Ac(t.title),l.Bb(2),l.kc("src",t.image?t.image.url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",l.tc),l.Bb(2),l.Bc(" ",t.description," ")}}const u=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.router=t,this.showsService=n,this.changeDetector=e,this.imagesService=i,this.routeAnimationsElements=s.c,this.shows=[],this.loading=!1}ngOnInit(){this.startLoadingIndicator(),this.getShowsSub=this.showsService.getShows().subscribe({next:t=>{this.shows=t.data.shows,console.log(t.data),this.stopLoadingIndicator(null)},error:t=>{console.log("error",t),this.stopLoadingIndicator(null)}})}openLink(t){window.open(t,"_blank")}navigateShow(t){this.router.navigate(["podcast/"+t])}deleteShow(t){this.startLoadingIndicator(),t.image&&this.imagesService.deleteImage(t.image.url).subscribe({complete:()=>{console.log("Image deleted")},error:t=>{console.log("error",t)}}),Promise.all(t.episodes.map(t=>Object(c.b)(this,void 0,void 0,(function*(){t.images.map(t=>Object(c.b)(this,void 0,void 0,(function*(){this.imagesService.deleteImage(t.url).subscribe({complete:()=>{console.log("Image of episode deleted")},error:t=>{console.log("error",t)}})})))})))).then(()=>{this.showsService.deleteShow(t.id).subscribe({complete:()=>{this.shows=this.shows.filter(n=>n.id!==t.id),this.changeDetector.detectChanges(),this.stopLoadingIndicator(null)},error:t=>{this.stopLoadingIndicator(null),console.log("error",t)}})})}startLoadingIndicator(){this.loading=!0,this.changeDetector.detectChanges()}stopLoadingIndicator(t){this.loading=!1,this.changeDetector.detectChanges()}}return t.\u0275fac=function(n){return new(n||t)(l.Ob(a.h),l.Ob(r.c),l.Ob(l.h),l.Ob(r.b))},t.\u0275cmp=l.Ib({type:t,selectors:[["anms-feature-list"]],decls:12,vars:9,consts:[[1,"loading-indicator-container"],[1,"loading-indicator"],[1,"container",3,"ngClass"],[1,"row"],[1,"col-md-12","main-heading"],["rtl",""],["mat-raised-button","","color","accent",3,"click"],["class","col-md-6 col-lg-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-3",3,"ngClass"],["mat-card-image","","alt","Show image",3,"src"],["align","start"],["mat-button","","color","accent",3,"click"],["mat-button","","color","warn","align","end",3,"click"]],template:function(t,n){1&t&&(l.Tb(0,"div",0),l.Pb(1,"mat-spinner",1),l.Sb(),l.Tb(2,"div",2),l.Tb(3,"div",3),l.Tb(4,"div",4),l.Tb(5,"h1",5),l.zc(6),l.gc(7,"translate"),l.Sb(),l.Tb(8,"button",6),l.bc("click",(function(t){return n.navigateShow("create")})),l.zc(9,"Create new show"),l.Sb(),l.Sb(),l.Sb(),l.Tb(10,"div",3),l.yc(11,p,14,4,"div",7),l.Sb(),l.Sb()),2&t&&(l.xc("display",n.loading?"flex":"none"),l.Bb(2),l.xc("display",n.loading?"none":"block"),l.kc("ngClass",n.routeAnimationsElements),l.Bb(4),l.Ac(l.hc(7,7,"anms.shows.title")),l.Bb(5),l.kc("ngForOf",n.shows))},directives:[d.b,i.i,g.a,b.a,i.j,m.a,m.g,m.c,m.d,m.f,m.b],pipes:[h.c],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.main-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 0 8px}mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative;margin-bottom:1.1rem;text-transform:uppercase;vertical-align:center}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{vertical-align:center;position:absolute;top:.3rem;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0;padding:0}@media(max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}.loading-indicator-container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.loading-indicator[_ngcontent-%COMP%]{margin:3.7em}"],changeDetection:0}),t})(),data:{title:"anms.menu.components"}}];let w=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(n){return new(n||t)},imports:[[a.l.forChild(u)],a.l]}),t})();e.d(n,"ShowsModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(n){return new(n||t)},imports:[[i.c,o.a,w]]}),t})()}}]);