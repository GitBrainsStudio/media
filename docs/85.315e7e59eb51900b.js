"use strict";(self.webpackChunkGITBRAINSSTUDIO_BLOG=self.webpackChunkGITBRAINSSTUDIO_BLOG||[]).push([[85],{1085:(B,c,s)=>{s.r(c),s.d(c,{PostDetailsPageModule:()=>S});var r=s(9808),l=s(983),p=s(4707),d=s(5577),g=s(2722),m=s(9646),t=s(1223),u=s(541),f=s(906),h=s(4866),v=s(9354);const P=function(o){return{"post-viewer--hidden":o}};function C(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"markdown",2),t.NdJ("load",function(){return t.CHM(e),t.oxw().onLoad()})("error",function(){return t.CHM(e),t.oxw().onError()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("src",e.src)("ngClass",t.VKq(3,P,e.isLoading))("@opacityAnimation",void 0)}}let y=(()=>{class o{constructor(e){this.router=e,this.src=null,this.isLoading=!0}ngOnInit(){}onLoad(){this.isLoading=!1}onError(){this.router.navigate(["/"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-viewer"]],inputs:{src:"src"},decls:2,vars:1,consts:[[1,"post-viewer"],[3,"src","ngClass","load","error",4,"ngIf"],[3,"src","ngClass","load","error"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,C,1,5,"markdown",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.src))},directives:[r.O5,v.lF,r.mk],styles:[".post-viewer--hidden[_ngcontent-%COMP%]{display:none}"],data:{animation:[h.x]}}),o})();var T=s(6842),Z=s(785);function D(o,a){1&o&&(t.TgZ(0,"h4",7),t._uU(1,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"),t.qZA())}const A=[{path:"",component:(()=>{class o{constructor(e,n){this.activatedRoute=e,this.categoryService=n,this.destroy=new p.t(1),this.src=`assets/posts/${this.id}/${this.id}.md`,this.categories=null}get id(){return this.activatedRoute.snapshot.params.id}ngOnDestroy(){this.destroy.next(null),this.destroy.complete()}ngOnInit(){this.categoryService.getAll().pipe((0,d.z)(e=>this.filterCategories(e))).pipe((0,g.R)(this.destroy)).subscribe(e=>{this.categories=e})}filterCategories(e){let n=[];return e.forEach(i=>{i.posts=i.posts.filter(R=>R.id!=this.id),i.posts.length>0&&n.push(i)}),(0,m.of)(n)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(u.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-details-page"]],decls:10,vars:3,consts:[[1,"page"],[1,"page-section"],[1,"container","page-section"],[3,"src"],["class","page-section__title page-section__title--small",4,"ngIf"],[1,"page-section__content"],[3,"categories"],[1,"page-section__title","page-section__title--small"]],template:function(e,n){1&e&&(t.TgZ(0,"main",0)(1,"div",1),t._UZ(2,"app-header"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-post-viewer",3),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,D,2,0,"h4",4),t.TgZ(7,"div",5),t._UZ(8,"app-category-collection",6),t.qZA()()(),t._UZ(9,"app-footer")),2&e&&(t.xp6(4),t.Q6J("src",n.src),t.xp6(2),t.Q6J("ngIf",n.categories&&n.categories.length>0),t.xp6(2),t.Q6J("categories",n.categories))},directives:[f.G,y,r.O5,T.S,Z.c],styles:[""]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),o})();var w=s(1916),I=s(404),M=s(4631),O=s(3992);let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,x,w.M,I.O,M._,O.A]]}),o})()}}]);