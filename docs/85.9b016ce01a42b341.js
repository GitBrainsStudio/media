"use strict";(self.webpackChunkGITBRAINSSTUDIO_BLOG=self.webpackChunkGITBRAINSSTUDIO_BLOG||[]).push([[85],{1085:(S,l,s)=>{s.r(l),s.d(l,{PostDetailsPageModule:()=>M});var r=s(9808),c=s(983),p=s(5577),g=s(9646),t=s(1223),d=s(541),u=s(906),m=s(4866),f=s(9354);const v=function(o){return{"post-viewer--hidden":o}};function h(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"markdown",2),t.NdJ("load",function(){return t.CHM(e),t.oxw().onLoad()})("error",function(){return t.CHM(e),t.oxw().onError()}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("src",e.src)("ngClass",t.VKq(3,v,e.isLoading))("@opacityAnimation",void 0)}}let P=(()=>{class o{constructor(e){this.router=e,this.src=null,this.isLoading=!0}ngOnInit(){}onLoad(){this.isLoading=!1}onError(){this.router.navigate(["/"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-viewer"]],inputs:{src:"src"},decls:2,vars:1,consts:[[1,"post-viewer"],[3,"src","ngClass","load","error",4,"ngIf"],[3,"src","ngClass","load","error"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,h,1,5,"markdown",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.src))},directives:[r.O5,f.lF,r.mk],styles:[".post-viewer--hidden[_ngcontent-%COMP%]{display:none}"],data:{animation:[m.x]}}),o})();var C=s(6842),y=s(785);function T(o,a){1&o&&(t.TgZ(0,"h4",7),t._uU(1,"\u0414\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"),t.qZA())}const Z=[{path:"",component:(()=>{class o{constructor(e,n){this.activatedRoute=e,this.categoryService=n,this.src=`assets/posts/${this.id}/${this.id}.md`,this.categories=null}get id(){return this.activatedRoute.snapshot.params.id}ngOnInit(){this.categoryService.getAll().pipe((0,p.z)(e=>this.filterCategories(e))).subscribe(e=>{this.categories=e})}filterCategories(e){let n=[];return e.forEach(i=>{i.posts=i.posts.filter(O=>O.id!=this.id),i.posts.length>0&&n.push(i)}),(0,g.of)(n)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(d.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-details-page"]],decls:10,vars:3,consts:[[1,"page"],[1,"page-section"],[1,"container","page-section"],[3,"src"],["class","page-section__title page-section__title--small",4,"ngIf"],[1,"page-section__content"],[3,"categories"],[1,"page-section__title","page-section__title--small"]],template:function(e,n){1&e&&(t.TgZ(0,"main",0)(1,"div",1),t._UZ(2,"app-header"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-post-viewer",3),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,T,2,0,"h4",4),t.TgZ(7,"div",5),t._UZ(8,"app-category-collection",6),t.qZA()()(),t._UZ(9,"app-footer")),2&e&&(t.xp6(4),t.Q6J("src",n.src),t.xp6(2),t.Q6J("ngIf",n.categories&&n.categories.length>0),t.xp6(2),t.Q6J("categories",n.categories))},directives:[u.G,P,r.O5,C.S,y.c],styles:[""]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),o})();var A=s(1916),w=s(404),x=s(4631),I=s(3992);let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,D,A.M,w.O,x._,I.A]]}),o})()}}]);