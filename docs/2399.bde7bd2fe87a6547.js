"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2399],{2399:(O,d,s)=>{s.r(d),s.d(d,{LoginPage:()=>j});var u=s(467),n=s(4438),m=s(177),c=s(4341),t=s(4742),h=s(2902),b=s(8313),f=s(5079),C=s(5873),M=s(9684);function _(l,g){if(1&l){const r=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.bIt("click",function(){n.eBV(r);const e=n.XpG();return n.Njj(e.openModalChange.emit(!1))}),n.nrm(4,"ion-icon",3),n.k0s()(),n.j41(5,"ion-buttons",4)(6,"ion-button",5),n.bIt("click",function(){n.eBV(r);const e=n.XpG();return n.Njj(e.botaoConfirmar())}),n.EFF(7,"Confirmar"),n.k0s()()()(),n.j41(8,"ion-content",6)(9,"ion-row")(10,"ion-col",7)(11,"h2"),n.EFF(12,"Configura\xe7\xf5es"),n.k0s(),n.j41(13,"ion-item")(14,"ion-label",8),n.EFF(15,"Caminho Api"),n.k0s(),n.j41(16,"ion-input",9),n.mxI("ngModelChange",function(e){n.eBV(r);const i=n.XpG();return n.DH7(i.config.baseApi,e)||(i.config.baseApi=e),n.Njj(e)}),n.k0s()(),n.j41(17,"ion-item")(18,"ion-select",10),n.mxI("ngModelChange",function(e){n.eBV(r);const i=n.XpG();return n.DH7(i.config.camera,e)||(i.config.camera=e),n.Njj(e)}),n.j41(19,"ion-select-option",11),n.EFF(20,"Traseira"),n.k0s(),n.j41(21,"ion-select-option",12),n.EFF(22,"Frontal"),n.k0s()()()()()()}if(2&l){const r=n.XpG();n.R7$(6),n.Y8G("disabled",!r.config)("strong",!0),n.R7$(10),n.R50("ngModel",r.config.baseApi),n.R7$(2),n.R50("ngModel",r.config.camera)}}let P=(()=>{var l;class g{constructor(o){this.baseApi=o,this.openModalChange=new n.bkB,this.config={baseApi:"",camera:""},(0,f.a)({arrowBack:C.$$C})}ngOnInit(){this.baseApi.baseUrl$.subscribe(o=>{this.config.baseApi=o}),this.baseApi.positionCamera$.subscribe(o=>{this.config.camera=o})}botaoConfirmar(){this.baseApi.setBaseUrl(this.config.baseApi),this.baseApi.setPositionCamera(this.config.camera),this.openModalChange.emit(!1)}}return(l=g).\u0275fac=function(o){return new(o||l)(n.rXU(M.v))},l.\u0275cmp=n.VBU({type:l,selectors:[["app-config"]],inputs:{openModal:"openModal"},outputs:{openModalChange:"openModalChange"},standalone:!0,features:[n.aNF],decls:2,vars:1,consts:[[3,"isOpen","backdropDismiss"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back","color","light"],["slot","end"],[3,"click","disabled","strong"],[1,"ion-padding"],["size","12"],["color","darking","position","stacked"],["placeholder","10.0.0.0:88","aria-label","Caminho Api",3,"ngModelChange","ngModel"],["label","Selecionar Camera","placeholder","Selecionar Camera",3,"ngModelChange","ngModel"],["value","rear"],["value","front"]],template:function(o,e){1&o&&(n.j41(0,"ion-modal",0),n.DNE(1,_,23,4,"ng-template"),n.k0s()),2&o&&n.Y8G("isOpen",e.openModal)},dependencies:[t.bv,t.Jm,t.QW,t.hU,t.W9,t.eU,t.iq,t.$w,t.uz,t.he,t.ln,t.Nm,t.Ip,t.ai,t.Sb,t.Je,t.Gw,m.MD,c.YN,c.BC,c.vS]}),g})();var k=s(5784),v=s(9313);let j=(()=>{var l;class g{constructor(o,e,i,a){this.auth=o,this.loaddingCtrl=e,this.alert=i,this.router=a,this.appRoutes=k.S,this.credentials=(0,n.vPA)({}),this.loading=!1,this.viewPassword=!1,this.configOpen=!1,(0,f.a)({settingsOutline:C.s8q})}submit(){var o=this;return(0,u.A)(function*(){const{id:e,senha:i}=o.credentials();var a;void 0!==e&&void 0!==i&&null!==e&&null!==i&&(yield(0,b.h)(o.loaddingCtrl,o.alert,{mainAction:(a=(0,u.A)(function*(){yield o.auth.login(Number(e),i),o.credentials.set({})}),function(){return a.apply(this,arguments)}),onAfterTryDismiss:()=>{o.router.navigate([o.appRoutes.home.path])},onError:a=>{console.error(a),o.credentials.update(p=>(p.senha=null,p))}}))})()}abrirConfiguracoes(){this.configOpen=!0}openModalChange(o){this.configOpen=o}}return(l=g).\u0275fac=function(o){return new(o||l)(n.rXU(v.H),n.rXU(t.Xi),n.rXU(t.hG),n.rXU(h.Ix))},l.\u0275cmp=n.VBU({type:l,selectors:[["app-login"]],standalone:!0,features:[n.aNF],decls:17,vars:7,consts:[[3,"fullscreen"],[2,"height","95vh","display","flex","align-items","center","justify-content","space-between","flex-direction","column"],["size","12",1,"ion-text-center"],["src","assets/icon-controle-frota.svg",1,"icon-app"],["fill","outline","label","C\xf3digo",3,"ngModelChange","type","labelPlacement","ngModel"],["fill","outline","label","Senha","type","password",3,"ngModelChange","labelPlacement","ngModel"],["expand","block","size","default","fill","solid","color","primary",1,"button-edit",3,"click"],[1,"logo-footer"],["src","assets/logo.png",1,"logo",3,"click"],[3,"openModalChange","openModal"]],template:function(o,e){1&o&&(n.j41(0,"ion-content",0)(1,"ion-grid",1)(2,"ion-row")(3,"ion-col",2),n.nrm(4,"ion-img",3),n.k0s()(),n.j41(5,"ion-row")(6,"ion-col",2)(7,"ion-input",4),n.mxI("ngModelChange",function(a){return n.DH7(e.credentials().id,a)||(e.credentials().id=a),a}),n.k0s()(),n.j41(8,"ion-col",2)(9,"ion-input",5),n.mxI("ngModelChange",function(a){return n.DH7(e.credentials().senha,a)||(e.credentials().senha=a),a}),n.k0s()(),n.j41(10,"ion-col",2)(11,"ion-button",6),n.bIt("click",function(){return e.submit()}),n.EFF(12,"Entrar"),n.k0s()()(),n.j41(13,"ion-row")(14,"div",7)(15,"ion-img",8),n.bIt("click",function(){return e.abrirConfiguracoes()}),n.k0s()()()()(),n.j41(16,"app-config",9),n.bIt("openModalChange",function(a){return e.openModalChange(a)}),n.k0s()),2&o&&(n.Y8G("fullscreen",!0),n.R7$(7),n.Y8G("type","number")("labelPlacement","stacked"),n.R50("ngModel",e.credentials().id),n.R7$(2),n.Y8G("labelPlacement","stacked"),n.R50("ngModel",e.credentials().senha),n.R7$(7),n.Y8G("openModal",e.configOpen))},dependencies:[t.bv,t.Jm,t.hU,t.W9,t.lO,t.KW,t.$w,t.ln,t.Gw,m.MD,c.YN,c.BC,c.vS,h.iI,P],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}[_nghost-%COMP%]   ion-img.logo[_ngcontent-%COMP%]{max-width:300px;width:66%;margin:0 auto}[_nghost-%COMP%]   ion-img.icon-app[_ngcontent-%COMP%]{position:relative;top:75px;width:120px}[_nghost-%COMP%]   .header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type{--border-width: 0 0 0}[_nghost-%COMP%]   .header-md[_ngcontent-%COMP%]{box-shadow:none!important}[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]{padding-top:2em;padding-bottom:2em;box-shadow:none;background-color:var(--ion-background-color)}"]}),g})()}}]);