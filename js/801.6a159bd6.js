"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[801],{9801:(t,o,e)=>{e.r(o),e.d(o,{default:()=>Y});var n=e(9835);const a={class:"q-pa-md"},s=(0,n._)("div",{class:"row justify-between"},[(0,n._)("span",{class:"text-h4 q-my-md"},"List of Robots")],-1);function r(t,o,e,r,l,u){const i=(0,n.up)("q-breadcrumbs-el"),c=(0,n.up)("q-breadcrumbs"),d=(0,n.up)("ConnectRobotModal"),m=(0,n.up)("RobotSkeleton"),b=(0,n.up)("RobotTile");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(c,{class:"q-ma-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"Main",icon:"home",to:"/"}),(0,n.Wm)(i,{label:"Robots",icon:"widgets",class:"text-primary"})])),_:1}),s,(0,n.Wm)(d,{onAddRobot:o[0]||(o[0]=o=>t.showSkeleton=!0),onRobotAdded:o[1]||(o[1]=o=>t.showSkeleton=!1)}),t.showSkeleton?((0,n.wg)(),(0,n.j4)(m,{key:0,class:"q-my-sm q-mx-auto"})):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.robots,((t,o)=>((0,n.wg)(),(0,n.j4)(b,{key:o,robot:t,class:"q-my-sm"},null,8,["robot"])))),128))])}var l=e(5321),u=e(1623),i=e(6970);const c={class:"row justify-between"},d={class:"text-h6"},m=(0,n.Uk)(),b=(0,n.Uk)("active"),p=(0,n._)("div",null,"Last logs:",-1),f=(0,n.Uk)(" More ");function w(t,o,e,a,s,r){const l=(0,n.up)("RobotAvatar"),u=(0,n.up)("q-chip"),w=(0,n.up)("q-card-section"),h=(0,n.up)("RobotLogs"),g=(0,n.up)("q-btn"),q=(0,n.up)("q-card-actions"),v=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(v,{style:{"max-width":"600px"},class:"q-mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n._)("div",d,[(0,n.Wm)(l,{name:t.robot.name},null,8,["name"]),m,(0,n._)("code",null,(0,i.zw)(t.robot.name),1)]),(0,n.Wm)(u,{dense:"",dark:"",color:"blue"},{default:(0,n.w5)((()=>[b])),_:1})])])),_:1}),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[p,(0,n.Wm)(h,{class:"rounded-borders","single-line":"",robot:t.robot},null,8,["robot"])])),_:1}),(0,n.Wm)(q,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{color:"blue",dark:"",to:`/robots/${t.robot.name}`},{default:(0,n.w5)((()=>[f])),_:1},8,["to"])])),_:1})])),_:1})}var h=e(3260),g=e(7363),q=e(1354),v=e(3043),_=e(6194),W=e(1852),Z=function(t,o,e,n){function a(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,s){function r(t){try{u(n.next(t))}catch(o){s(o)}}function l(t){try{u(n["throw"](t))}catch(o){s(o)}}function u(t){t.done?e(t.value):a(t.value).then(r,l)}u((n=n.apply(t,o||[])).next())}))};const k=(0,n.aZ)({name:"RobotTile",components:{RobotLogs:W.Z,RobotAvatar:_.Z},props:{robot:{type:h.n,required:!0}},data(){return{portfolio:[]}},computed:{},methods:Object.assign(Object.assign({},(0,g.nv)(v.a,["getPortfolio"])),(0,g.nv)(q.R,["getSecurities"])),watch:{robot(t){return Z(this,void 0,void 0,(function*(){this.portfolio=yield this.getPortfolio(t)}))}},created(){return Z(this,void 0,void 0,(function*(){yield this.getSecurities(this.robot),this.portfolio=yield this.getPortfolio(this.robot)}))}});var y=e(1639),R=e(4458),Q=e(3190),x=e(7691),S=e(3115),C=e(1821),j=e(8879),A=e(9984),L=e.n(A);const P=(0,y.Z)(k,[["render",w]]),B=P;function I(t,o,e,a,s,r){const l=(0,n.up)("q-skeleton"),u=(0,n.up)("q-item-section"),i=(0,n.up)("q-item-label"),c=(0,n.up)("q-item"),d=(0,n.up)("q-card-actions"),m=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(m,{style:{"max-width":"300px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"QAvatar"})])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"text"})])),_:1}),(0,n.Wm)(i,{caption:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"text"})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(l,{height:"200px",square:""}),(0,n.Wm)(d,{align:"right",class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{type:"QBtn"})])),_:1})])),_:1})}L()(k,"components",{QCard:R.Z,QCardSection:Q.Z,QChip:x.Z,QItemLabel:S.Z,QCardActions:C.Z,QBtn:j.Z});const M={name:"RoborSkeleton"};var O=e(490),T=e(1233),U=e(7133);const D=(0,y.Z)(M,[["render",I]]),z=D;L()(M,"components",{QCard:R.Z,QItem:O.Z,QItemSection:T.Z,QSkeleton:U.ZP,QItemLabel:S.Z,QCardActions:C.Z});const E=(0,n.aZ)({name:"RobotsListScreen",data(){return{showSkeleton:!1}},computed:Object.assign({},(0,g.rn)(u.V,["robots"])),components:{ConnectRobotModal:l.Z,RobotTile:B,RobotSkeleton:z}});var H=e(2605),K=e(8052);const V=(0,y.Z)(E,[["render",r]]),Y=V;L()(E,"components",{QBreadcrumbs:H.Z,QBreadcrumbsEl:K.Z})}}]);