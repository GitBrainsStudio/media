"use strict";(self.webpackChunkGITBRAINSSTUDIO_BLOG=self.webpackChunkGITBRAINSSTUDIO_BLOG||[]).push([[711],{6711:(K,m,n)=>{n.r(m),n.d(m,{HomePageModule:()=>V});var i=n(9808),v=n(983),C=n(8306),P=n(4742),x=n(8421),_=n(3269),O=n(5403),y=n(3268),Z=n(1810),e=n(1223),A=n(541),T=n(9275),j=n(6770);let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,j.hx.forRoot()]]}),t})();var F=n(520);let J=(()=>{class t{constructor(o){this.http=o,this.baseEndpoint="./assets/projects"}getAll(){return this.http.get(`${this.baseEndpoint}/projects.json`).pipe((0,T.g)(1e3))}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(F.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:f}),t})();var S=n(906),U=n(6842),E=n(4866);function D(t,r){1&t&&e._UZ(0,"img",13),2&t&&e.Q6J("src",r.$implicit.url,e.LSH)}function I(t,r){if(1&t&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.name," ")}}function H(t,r){if(1&t&&(e.TgZ(0,"article",1)(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"div",4),e.YNc(4,D,1,1,"img",5),e.qZA()(),e.TgZ(5,"div",6)(6,"div",7)(7,"h3",8)(8,"a",9),e._uU(9),e.qZA()()(),e.TgZ(10,"p",10),e._uU(11),e.qZA(),e.TgZ(12,"div",11),e.YNc(13,I,2,1,"span",12),e.qZA()()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("src",o.project.image,e.LSH),e.xp6(2),e.Q6J("ngForOf",o.project.threads),e.xp6(4),e.Q6J("href",o.project.repository,e.LSH),e.xp6(1),e.hij(" ",o.project.name," "),e.xp6(2),e.hij(" ",o.project.shortDescription," "),e.xp6(2),e.Q6J("ngForOf",o.project.tags)}}let Q=(()=>{class t{constructor(){this.project=null}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-project-preview-card"]],inputs:{project:"project"},decls:1,vars:1,consts:[["class","project-preview-card",4,"ngIf"],[1,"project-preview-card"],[1,"project-preview-card__image-wrapper"],[1,"project-preview-card__image",3,"src"],[1,"project-preview-card__image-threads"],["class","project-preview-card__image-thread",3,"src",4,"ngFor","ngForOf"],[1,"project-preview-card__info-wrapper"],[1,"project-preview-card__row"],[1,"project-preview-card__name"],["href","#","target","_blank",1,"project-preview-card__repository-link",3,"href"],[1,"project-preview-card__short-description"],[1,"project-preview-card__tags"],["class","tag project-preview-card__tag",4,"ngFor","ngForOf"],[1,"project-preview-card__image-thread",3,"src"],[1,"tag","project-preview-card__tag"]],template:function(o,c){1&o&&e.YNc(0,H,14,6,"article",0),2&o&&e.Q6J("ngIf",c.project)},directives:[i.O5,i.sg],styles:['.project-preview-card[_ngcontent-%COMP%]{border-radius:15px;width:300px;display:flex;flex-direction:column;transition:width .8s ease;position:relative}.project-preview-card__tags[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.project-preview-card__tag[_ngcontent-%COMP%]{margin-right:5px;margin-bottom:5px}.project-preview-card__image-wrapper[_ngcontent-%COMP%]{overflow:hidden;margin-bottom:10px;border-radius:15px;position:relative;max-height:400px}.project-preview-card__image[_ngcontent-%COMP%]{width:100%;transition:transform .5s ease,opacity .5s ease}.project-preview-card__image-threads[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);opacity:0;transition:opacity .2s ease;display:flex;flex-direction:column;justify-content:center}.project-preview-card__image-thread[_ngcontent-%COMP%]{width:120px}.project-preview-card__image-thread[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.project-preview-card__short-description[_ngcontent-%COMP%]{margin:0 0 10px;line-height:1.3em}.project-preview-card__info-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:10px}.project-preview-card__short-description[_ngcontent-%COMP%], .project-preview-card__tags[_ngcontent-%COMP%]{pointer-events:none}.project-preview-card__row[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.project-preview-card__github-logo[_ngcontent-%COMP%]{width:20px;height:20px}.project-preview-card[_ngcontent-%COMP%]:hover   .project-preview-card__image[_ngcontent-%COMP%]{transform:scale(1.5);opacity:.1}.project-preview-card[_ngcontent-%COMP%]:hover   .project-preview-card__image-threads[_ngcontent-%COMP%]{opacity:1}.project-preview-card__repository-link[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;top:0;bottom:0}@media screen and (max-width: 576px){.project-preview-card[_ngcontent-%COMP%]{width:100%}}']}),t})();function B(t,r){if(1&t&&(e.TgZ(0,"li",4),e._UZ(1,"app-project-preview-card",5),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Q6J("project",o)}}function N(t,r){if(1&t&&(e.TgZ(0,"ul",2),e.YNc(1,B,2,1,"li",3),e.qZA()),2&t){const o=e.oxw();e.Q6J("@opacityAnimation",void 0),e.xp6(1),e.Q6J("ngForOf",o.projects)}}const g=function(){return{width:"300px","border-radius":"15px",height:"420px","margin-bottom":"0"}};function Y(t,r){1&t&&(e.TgZ(0,"ul",2)(1,"li",4),e._UZ(2,"ngx-skeleton-loader",6),e.qZA(),e.TgZ(3,"li",4),e._UZ(4,"ngx-skeleton-loader",6),e.qZA(),e.TgZ(5,"li",4),e._UZ(6,"ngx-skeleton-loader",6),e.qZA()()),2&t&&(e.Q6J("@opacityAnimation",void 0),e.xp6(2),e.Q6J("theme",e.DdM(4,g)),e.xp6(2),e.Q6J("theme",e.DdM(5,g)),e.xp6(2),e.Q6J("theme",e.DdM(6,g)))}let G=(()=>{class t{constructor(){this.projects=null}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-project-preview-card-collection"]],inputs:{projects:"projects"},decls:3,vars:2,consts:[["class","project-preview-card-collection",4,"ngIf","ngIfElse"],["skeleton",""],[1,"project-preview-card-collection"],["class","project-preview-card-collection__item",4,"ngFor","ngForOf"],[1,"project-preview-card-collection__item"],[3,"project"],[3,"theme"]],template:function(o,c){if(1&o&&(e.YNc(0,N,2,2,"ul",0),e.YNc(1,Y,7,7,"ng-template",null,1,e.W1O)),2&o){const p=e.MAs(2);e.Q6J("ngIf",c.projects)("ngIfElse",p)}},directives:[i.O5,i.sg,Q,j.xr],styles:[".project-preview-card-collection[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;flex-wrap:wrap}.project-preview-card-collection__item[_ngcontent-%COMP%]{margin-right:20px;margin-bottom:10px}"],data:{animation:[E.x]}}),t})();var L=n(785);const R=[{path:"",component:(()=>{class t{constructor(o,c){this.categoryService=o,this.projectService=c,this.categories=null,this.projects=null}ngOnInit(){(function M(...t){const r=(0,_.jO)(t),{args:o,keys:c}=(0,P.D)(t),p=new C.y(s=>{const{length:a}=o;if(!a)return void s.complete();const u=new Array(a);let h=a,w=a;for(let l=0;l<a;l++){let d=!1;(0,x.Xf)(o[l]).subscribe((0,O.x)(s,W=>{d||(d=!0,w--),u[l]=W},()=>h--,void 0,()=>{(!h||!d)&&(w||s.next(c?(0,Z.n)(c,u):u),s.complete())}))}});return r?p.pipe((0,y.Z)(r)):p})(this.categoryService.getAll(),this.projectService.getAll()).subscribe(([o,c])=>{this.categories=o,this.projects=c})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(A.H),e.Y36(J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-page"]],decls:18,vars:2,consts:[[1,"page"],[1,"page-section"],[1,"container","page-section"],[1,"page-section__title"],[1,"page-section__description"],[1,"page-section__content"],[3,"categories"],[3,"projects"]],template:function(o,c){1&o&&(e.TgZ(0,"main",0)(1,"div",1),e._UZ(2,"app-header"),e.qZA(),e.TgZ(3,"section",2)(4,"h1",3),e._uU(5,"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"),e.qZA(),e.TgZ(6,"p",4),e._uU(7,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0441\u044e\u0434\u0430 \u0447\u0442\u043e-\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u{1f44b}"),e.qZA(),e.TgZ(8,"div",5),e._UZ(9,"app-category-collection",6),e.qZA()(),e.TgZ(10,"section",2)(11,"h1",3),e._uU(12,"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"),e.qZA(),e.TgZ(13,"p",4),e._uU(14,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u044f \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u{1f529}"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"app-project-preview-card-collection",7),e.qZA()()(),e._UZ(17,"app-footer")),2&o&&(e.xp6(9),e.Q6J("categories",c.categories),e.xp6(7),e.Q6J("projects",c.projects))},directives:[S.G,U.S,G,L.c],styles:[".section__title[_ngcontent-%COMP%]{margin-bottom:5px}.page-section__description[_ngcontent-%COMP%]{margin:0 0 10px}@media screen and (max-width: 576px){.section__title[_ngcontent-%COMP%]{text-align:center}}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[v.Bz.forChild(R)],v.Bz]}),t})();var X=n(404),$=n(4631),b=n(3992);let V=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,z,b.A,X.O,$._,f]]}),t})()}}]);