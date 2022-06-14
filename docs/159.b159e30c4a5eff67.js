"use strict";(self.webpackChunkGITBRAINSSTUDIO_BLOG=self.webpackChunkGITBRAINSSTUDIO_BLOG||[]).push([[159],{8159:(N,s,n)=>{n.r(s),n.d(s,{HomePageModule:()=>B});var i=n(9808),l=n(4346),m=n(4707),d=n(2722),e=n(1223),_=n(541),v=n(5419),g=n(6770);let u=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,g.hx.forRoot()]]}),t})();var j=n(520);let f=(()=>{class t{constructor(o){this.http=o,this.baseEndpoint="./assets/projects"}getAll(){return this.http.get(`${this.baseEndpoint}/projects.json`).pipe((0,v.g)(1e3))}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(j.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:u}),t})();var w=n(906),h=n(6842),x=n(4866);function C(t,r){1&t&&(e.TgZ(0,"span",18),e._uU(1,"+"),e.qZA())}function P(t,r){if(1&t&&(e.TgZ(0,"div",15),e._UZ(1,"img",16),e.YNc(2,C,2,0,"span",17),e.qZA()),2&t){const o=r.$implicit,c=r.index,a=e.oxw(2);e.xp6(1),e.Q6J("src",o.url,e.LSH),e.xp6(1),e.Q6J("ngIf",c!=a.project.threads.length-1)}}function y(t,r){if(1&t&&(e.TgZ(0,"p",19),e._uU(1),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.hij(" ",o.project.shortDescription," ")}}function O(t,r){if(1&t&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.hij(" ",o.name," ")}}function Z(t,r){if(1&t&&(e.TgZ(0,"a",13),e._uU(1," \u0414\u0435\u043c\u043e "),e.qZA()),2&t){const o=e.oxw(2);e.Q6J("href",o.project.demo,e.LSH)}}function M(t,r){if(1&t&&(e.TgZ(0,"article",1)(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"div",4)(4,"div",5)(5,"div",6),e.YNc(6,P,3,2,"div",7),e.qZA(),e.TgZ(7,"div",6)(8,"h3",8),e._uU(9),e.qZA()(),e.YNc(10,y,2,1,"p",9),e.TgZ(11,"div",10),e.YNc(12,O,2,1,"span",11),e.qZA(),e.TgZ(13,"div",12)(14,"a",13),e._uU(15," \u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 "),e.qZA(),e.YNc(16,Z,2,1,"a",14),e.qZA()()()()()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("src",o.project.image,e.LSH),e.xp6(4),e.Q6J("ngForOf",o.project.threads),e.xp6(3),e.hij(" ",o.project.name," "),e.xp6(1),e.Q6J("ngIf",o.project.shortDescription),e.xp6(2),e.Q6J("ngForOf",o.project.tags),e.xp6(2),e.Q6J("href",o.project.repository,e.LSH),e.xp6(2),e.Q6J("ngIf",o.project.demo)}}let A=(()=>{class t{constructor(){this.project=null}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-project-preview-card"]],inputs:{project:"project"},decls:1,vars:1,consts:[["class","project-preview-card",4,"ngIf"],[1,"project-preview-card"],[1,"project-preview-card__image-wrapper"],[1,"project-preview-card__image",3,"src"],[1,"project-preview-card__info"],[1,"project-preview-card__info-wrapper"],[1,"project-preview-card__row"],["class","project-preview-card__image-thread-wrapper",4,"ngFor","ngForOf"],[1,"project-preview-card__name"],["class","project-preview-card__short-description",4,"ngIf"],[1,"project-preview-card__tags"],["class","tag project-preview-card__tag",4,"ngFor","ngForOf"],[1,"project-preview-card__links"],["href","#","target","_blank",1,"project-preview-card__link",3,"href"],["href","#","class","project-preview-card__link","target","_blank",3,"href",4,"ngIf"],[1,"project-preview-card__image-thread-wrapper"],[1,"project-preview-card__image-thread",3,"src"],["class","project-preview-card__image-thread-plus",4,"ngIf"],[1,"project-preview-card__image-thread-plus"],[1,"project-preview-card__short-description"],[1,"tag","project-preview-card__tag"]],template:function(o,c){1&o&&e.YNc(0,M,17,7,"article",0),2&o&&e.Q6J("ngIf",c.project)},directives:[i.O5,i.sg],styles:[".project-preview-card[_ngcontent-%COMP%]{border-radius:15px;width:300px;display:flex;flex-direction:column;transition:width .8s ease;position:relative}.project-preview-card__tags[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:10px}.project-preview-card__tag[_ngcontent-%COMP%]{margin-right:5px;margin-bottom:5px}.project-preview-card__image-wrapper[_ngcontent-%COMP%]{overflow:hidden;margin-bottom:10px;border-radius:15px;position:relative;max-height:400px}.project-preview-card__image[_ngcontent-%COMP%]{width:100%;transition:transform .5s ease,opacity .5s ease}.project-preview-card__info[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);opacity:0;transition:opacity .2s ease;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;padding:5px}.project-preview-card__image-thread[_ngcontent-%COMP%]{width:60px}.project-preview-card__image-thread-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.project-preview-card__image-thread-plus[_ngcontent-%COMP%]{font-weight:600;font-size:14px;margin:0 5px;pointer-events:none}.project-preview-card__image-thread[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.project-preview-card__short-description[_ngcontent-%COMP%]{margin:0 0 10px;line-height:1.3em}.project-preview-card__info-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;padding:10px}.project-preview-card__short-description[_ngcontent-%COMP%], .project-preview-card__tags[_ngcontent-%COMP%]{display:flex;justify-content:center;pointer-events:none;text-align:center}.project-preview-card__row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-bottom:10px;pointer-events:none}.project-preview-card__github-logo[_ngcontent-%COMP%]{width:20px;height:20px}.project-preview-card[_ngcontent-%COMP%]:hover   .project-preview-card__image[_ngcontent-%COMP%]{transform:scale(1.5);opacity:.03}.project-preview-card[_ngcontent-%COMP%]:hover   .project-preview-card__info[_ngcontent-%COMP%]{opacity:1}.project-preview-card__link[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.project-preview-card__links[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}@media screen and (max-width: 576px){.project-preview-card[_ngcontent-%COMP%]{width:100%}.project-preview-card__image[_ngcontent-%COMP%]{opacity:.1}.project-preview-card__info[_ngcontent-%COMP%]{opacity:1}}"]}),t})();function T(t,r){if(1&t&&(e.TgZ(0,"li",4),e._UZ(1,"app-project-preview-card",5),e.qZA()),2&t){const o=r.$implicit;e.xp6(1),e.Q6J("project",o)}}function F(t,r){if(1&t&&(e.TgZ(0,"ul",2),e.YNc(1,T,2,1,"li",3),e.qZA()),2&t){const o=e.oxw();e.Q6J("@opacityAnimation",void 0),e.xp6(1),e.Q6J("ngForOf",o.projects)}}const p=function(){return{width:"100%","border-radius":"15px",height:"420px","margin-bottom":"0"}};function J(t,r){1&t&&(e.TgZ(0,"ul",2)(1,"li",6),e._UZ(2,"ngx-skeleton-loader",7),e.qZA(),e.TgZ(3,"li",6),e._UZ(4,"ngx-skeleton-loader",7),e.qZA(),e.TgZ(5,"li",6),e._UZ(6,"ngx-skeleton-loader",7),e.qZA()()),2&t&&(e.Q6J("@opacityAnimation",void 0),e.xp6(2),e.Q6J("theme",e.DdM(4,p)),e.xp6(2),e.Q6J("theme",e.DdM(5,p)),e.xp6(2),e.Q6J("theme",e.DdM(6,p)))}let U=(()=>{class t{constructor(){this.projects=null}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-project-preview-card-collection"]],inputs:{projects:"projects"},decls:3,vars:2,consts:[["class","project-preview-card-collection",4,"ngIf","ngIfElse"],["skeleton",""],[1,"project-preview-card-collection"],["class","project-preview-card-collection__item",4,"ngFor","ngForOf"],[1,"project-preview-card-collection__item"],[3,"project"],[1,"project-preview-card-collection__item","project-preview-card-collection__item--skeleton"],[3,"theme"]],template:function(o,c){if(1&o&&(e.YNc(0,F,2,2,"ul",0),e.YNc(1,J,7,7,"ng-template",null,1,e.W1O)),2&o){const a=e.MAs(2);e.Q6J("ngIf",c.projects)("ngIfElse",a)}},directives:[i.O5,i.sg,A,g.xr],styles:[".project-preview-card-collection[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;flex-wrap:wrap}.project-preview-card-collection__item[_ngcontent-%COMP%]{margin-right:20px;margin-bottom:10px}.project-preview-card-collection__item--skeleton[_ngcontent-%COMP%]{width:310px}@media screen and (max-width: 576px){.project-preview-card-collection__item--skeleton[_ngcontent-%COMP%]{width:100%}.project-preview-card-collection__item[_ngcontent-%COMP%]{margin-right:0;width:100%}}"],data:{animation:[x.x]}}),t})();var I=n(785);const E=[{path:"",component:(()=>{class t{constructor(o,c){this.categoryService=o,this.projectService=c,this.destroy=new m.t(1),this.categories=null,this.projects=null}ngOnDestroy(){this.destroy.next(null),this.destroy.complete()}ngOnInit(){this.categoryService.getAll().pipe((0,d.R)(this.destroy)).subscribe(o=>{this.categories=o}),this.projectService.getAll().pipe((0,d.R)(this.destroy)).subscribe(o=>{this.projects=o})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(_.H),e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-page"]],decls:18,vars:2,consts:[[1,"page"],[1,"page-section"],[1,"container","page-section","page-section--mobile"],[1,"page-section__title"],[1,"page-section__description"],[1,"page-section__content"],[3,"categories"],[3,"projects"]],template:function(o,c){1&o&&(e.TgZ(0,"main",0)(1,"div",1),e._UZ(2,"app-header"),e.qZA(),e.TgZ(3,"section",2)(4,"h1",3),e._uU(5,"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"),e.qZA(),e.TgZ(6,"p",4),e._uU(7,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0441\u044e\u0434\u0430 \u0447\u0442\u043e-\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u{1f44b}"),e.qZA(),e.TgZ(8,"div",5),e._UZ(9,"app-category-collection",6),e.qZA()(),e.TgZ(10,"section",2)(11,"h1",3),e._uU(12,"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"),e.qZA(),e.TgZ(13,"p",4),e._uU(14,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u044f \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u{1f529}"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"app-project-preview-card-collection",7),e.qZA()()(),e._UZ(17,"app-footer")),2&o&&(e.xp6(9),e.Q6J("categories",c.categories),e.xp6(7),e.Q6J("projects",c.projects))},directives:[w.G,h.S,U,I.c],styles:[".page-section__description[_ngcontent-%COMP%]{margin:0 0 10px}@media screen and (max-width: 576px){.page-section__content[_ngcontent-%COMP%]{width:100%}.page-section__title[_ngcontent-%COMP%], .page-section__description[_ngcontent-%COMP%]{text-align:center}.page-section--mobile[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.page-section__content[_ngcontent-%COMP%]     .category{justify-content:center;align-items:center;width:100%}.page-section__content[_ngcontent-%COMP%]     .category__post-preview-cards{justify-content:center;align-items:center;text-align:center}}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(E)],l.Bz]}),t})();var S=n(404),D=n(4631),H=n(3992);let B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,Q,H.A,S.O,D._,u]]}),t})()}}]);