"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[389],{8389:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Re});var a=o(9835),l=o(6970);const n={class:"q-pa-md"},r={class:"row justify-between"},i=(0,a.Uk)(" Robot "),u=(0,a.Uk)(" Orders "),s=(0,a.Uk)(" Operations ");function m(e,t,o,m,d,c){const p=(0,a.up)("q-breadcrumbs-el"),h=(0,a.up)("q-breadcrumbs"),g=(0,a.up)("RobotAvatar"),b=(0,a.up)("RobotLogsModal"),w=(0,a.up)("q-icon"),f=(0,a.up)("q-btn"),y=(0,a.up)("q-btn-group"),_=(0,a.up)("PortfolioStatistics"),V=(0,a.up)("AlgosList");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(h,{class:"q-ma-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{label:"Home",icon:"home",to:"/"}),(0,a.Wm)(p,{label:"Robots",icon:"widgets",to:"/robots"}),(0,a.Wm)(p,{label:e.robot.name,icon:"precision_manufacturing",class:"text-primary"},null,8,["label"])])),_:1}),(0,a._)("div",r,[(0,a._)("h4",null,[(0,a.Wm)(g,{name:e.robot.name},null,8,["name"]),i,(0,a._)("code",null,(0,l.zw)(e.robot.name),1)])]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{robot:e.robot},null,8,["robot"]),(0,a.Wm)(f,{to:`/robots/${e.robot.name}/orders`,color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"list_alt"}),u])),_:1},8,["to"]),(0,a.Wm)(f,{to:`/robots/${e.robot.name}/operations`,color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"pending_actions"}),s])),_:1},8,["to"])])),_:1}),(0,a.Wm)(_,{robot:e.robot},null,8,["robot"]),(0,a.Wm)(V,{robot:e.robot},null,8,["robot"])])}var d=o(7363),c=o(1018);const p=(0,a.Uk)("Minimize"),h=(0,a.Uk)("Maximize"),g=(0,a.Uk)("Close"),b=(0,a.Uk)(" Logs ");function w(e,t,o,n,r,i){const u=(0,a.up)("q-icon"),s=(0,a.up)("q-space"),m=(0,a.up)("q-tooltip"),d=(0,a.up)("q-btn"),c=(0,a.up)("q-bar"),w=(0,a.up)("RobotLogs"),f=(0,a.up)("q-card"),y=(0,a.up)("q-dialog"),_=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(y,{modelValue:e.show,"onUpdate:modelValue":t[2]||(t[2]=t=>e.show=t),persistent:"",maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{style:(0,l.j5)({maxHeight:e.maximizedToggle?void 0:"50vh"}),class:"bg-black text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"bg-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"notes"}),(0,a.Uk)(" Logs "+(0,l.zw)(e.robot.name)+" ",1),(0,a.Wm)(s),(0,a.Wm)(d,{dense:"",flat:"",icon:"minimize",onClick:t[0]||(t[0]=t=>e.maximizedToggle=!1),disable:!e.maximizedToggle},{default:(0,a.w5)((()=>[e.maximizedToggle?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0)])),_:1},8,["disable"]),(0,a.Wm)(d,{dense:"",flat:"",icon:"crop_square",onClick:t[1]||(t[1]=t=>e.maximizedToggle=!0),disable:e.maximizedToggle},{default:(0,a.w5)((()=>[e.maximizedToggle?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,class:"bg-white text-primary"},{default:(0,a.w5)((()=>[h])),_:1}))])),_:1},8,["disable"]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{dense:"",flat:"",icon:"close"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"bg-white text-primary"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1})),[[_]])])),_:1}),(0,a.Wm)(w,{robot:e.robot},null,8,["robot"])])),_:1},8,["style"])])),_:1},8,["modelValue","maximized"]),(0,a.Wm)(d,{onClick:t[3]||(t[3]=t=>e.show=!e.show),color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"notes"}),b])),_:1})],64)}var f=o(3260),y=o(1852);const _=(0,a.aZ)({name:"RobotLogsModal",components:{RobotLogs:y.Z},props:{robot:{type:f.n,required:!0}},data(){return{show:!1,maximizedToggle:!0}}});var V=o(1639),v=o(7743),q=o(4458),Z=o(4526),W=o(2857),k=o(136),Q=o(8879),x=o(6858),U=o(2146),I=o(9984),D=o.n(I);const j=(0,V.Z)(_,[["render",w]]),C=j;D()(_,"components",{QDialog:v.Z,QCard:q.Z,QBar:Z.Z,QIcon:W.Z,QSpace:k.Z,QBtn:Q.Z,QTooltip:x.Z}),D()(_,"directives",{ClosePopup:U.Z});const A=(0,a.Uk)(" Algorithms ");function z(e,t,o,l,n,r){const i=(0,a.up)("q-card-section"),u=(0,a.up)("AlgorithmItem"),s=(0,a.up)("q-list"),m=(0,a.up)("q-spinner-ball"),d=(0,a.up)("q-inner-loading"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(c,{class:"q-pa-md q-my-lg q-mx-auto",style:{"max-width":"800px",background:"lightblue","border-radius":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{class:"text-h3"},{default:(0,a.w5)((()=>[A])),_:1}),(0,a.Wm)(s,{style:{"max-height":"70vh","overflow-y":"auto"},separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.algorithms,((t,o)=>((0,a.wg)(),(0,a.j4)(u,{key:o,robot:e.robot,algorithm:t,dense:""},null,8,["robot","algorithm"])))),128))])),_:1}),(0,a.Wm)(d,{showing:e.loading},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{size:"50px",color:"primary"})])),_:1},8,["showing"])])),_:1})}const O=(0,a.Uk)("Algorithm ");function R(e,t,o,n,r,i){const u=(0,a.up)("q-card-section"),s=(0,a.up)("q-item-section"),m=(0,a.up)("q-chip"),d=(0,a.up)("q-item-label"),c=(0,a.up)("q-item"),p=(0,a.up)("q-list"),h=(0,a.up)("q-btn"),g=(0,a.up)("RunAlgoModal"),b=(0,a.up)("q-card-actions"),w=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(c,{dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"q-pa-sm q-my-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-h5"},{default:(0,a.w5)((()=>[O,(0,a._)("code",null,(0,l.zw)(e.algorithm.name),1)])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.algorithm.description.split("\n"),((e,t)=>((0,a.wg)(),(0,a.iD)("p",{key:t},(0,l.zw)(e),1)))),128))])),_:1}),(0,a.Wm)(p,{separator:"",class:"bg-white"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.inputs,((e,t)=>((0,a.wg)(),(0,a.j4)(c,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t),1)])),_:2},1024),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"font-monospace"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,a.Wm)(b,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{color:"primary",to:`/robots/${e.robot.name}/algorithms/${e.algorithm.name}`,label:"Runs"},null,8,["to"]),(0,a.Wm)(g,{robot:e.robot,algorithm:e.algorithm},null,8,["robot","algorithm"])])),_:1})])),_:1})])),_:1})])),_:1})}var T=o(1957);const M={class:"q-ma-md"},S=(0,a.Uk)(" Run algorithm "),L=(0,a.Uk)(" for "),Y=(0,a.Uk)(" Start "),H=(0,a.Uk)("Cancel"),B=(0,a.Uk)("Run");function P(e,t,o,n,r,i){const u=(0,a.up)("q-bar"),s=(0,a.up)("q-input"),m=(0,a.up)("OrderOptionsInput"),d=(0,a.up)("DateTimeInput"),c=(0,a.up)("q-card-section"),p=(0,a.up)("q-btn"),h=(0,a.up)("q-card-actions"),g=(0,a.up)("q-form"),b=(0,a.up)("q-card"),w=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{modelValue:e.show,"onUpdate:modelValue":t[1]||(t[1]=t=>e.show=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{style:{"min-width":"400px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a._)("div",M,[S,(0,a._)("code",null,(0,l.zw)(e.algorithm.name),1),L,(0,a._)("code",null,(0,l.zw)(e.robot.name),1)])])),_:1}),(0,a.Wm)(g,{onSubmit:(0,T.iM)(e.startAlgo,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.fields,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.name},["number"===e.type?((0,a.wg)(),(0,a.j4)(s,{key:0,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,modelModifiers:{number:!0},type:"number",label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])):"OrderDetails"===e.type?((0,a.wg)(),(0,a.j4)(m,{key:1,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])):"string"===e.type?((0,a.wg)(),(0,a.j4)(s,{key:2,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])):"Date"===e.type?((0,a.wg)(),(0,a.j4)(d,{key:3,modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,label:e.name},null,8,["modelValue","onUpdate:modelValue","label"])):(0,a.kq)("",!0)])))),128))])),_:1}),(0,a.Wm)(h,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{color:"primary",type:"submit",loading:e.loading},{default:(0,a.w5)((()=>[Y])),_:1},8,["loading"]),(0,a.Wm)(p,{color:"red",onClick:t[0]||(t[0]=t=>e.show=!e.show)},{default:(0,a.w5)((()=>[H])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(p,{onClick:t[2]||(t[2]=t=>e.show=!e.show),color:"primary"},{default:(0,a.w5)((()=>[B])),_:1})],64)}function $(e,t,o,n,r,i){const u=(0,a.up)("q-input"),s=(0,a.up)("q-select"),m=(0,a.up)("q-card-section"),d=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"row justify-between"},{default:(0,a.w5)((()=>[(0,a._)("div",null,(0,l.zw)(e.label||"OrderDetails"),1),(0,a._)("div",null,[(0,a.Wm)(u,{modelValue:e.currentValue.ticker,"onUpdate:modelValue":t[0]||(t[0]=t=>e.currentValue.ticker=t),label:"Ticker",onInput:e.input},null,8,["modelValue","onInput"]),(0,a.Wm)(s,{modelValue:e.currentValue.operation,"onUpdate:modelValue":t[1]||(t[1]=t=>e.currentValue.operation=t),options:e.operationTypes,label:"Operation",onInput:e.input},null,8,["modelValue","options","onInput"]),(0,a.Wm)(u,{modelValue:e.currentValue.price,"onUpdate:modelValue":t[2]||(t[2]=t=>e.currentValue.price=t),modelModifiers:{number:!0},type:"number",label:"Price",onInput:e.input},null,8,["modelValue","onInput"]),(0,a.Wm)(u,{modelValue:e.currentValue.lots,"onUpdate:modelValue":t[3]||(t[3]=t=>e.currentValue.lots=t),modelModifiers:{number:!0},type:"number",label:"Lots",onInput:e.input},null,8,["modelValue","onInput"])])])),_:1})])),_:1})}const K=(0,a.aZ)({name:"OrderOptionsInput",props:{label:String,modelValue:{type:Object,required:!0}},data(){return{currentValue:this.modelValue,operationTypes:["limit_buy","limit_sell","market_buy","market_sell","buy_or_cancel","sell_or_cancel"]}},methods:{input(){this.$emit("update:modelValue",this.currentValue)},onValueChange(e){this.currentValue=e,this.input()}},watch:{value(e){this.onValueChange(e)}}});var E=o(3190),F=o(6611),G=o(6384);const J=(0,V.Z)(K,[["render",$]]),N=J;D()(K,"components",{QCard:q.Z,QCardSection:E.Z,QInput:F.Z,QSelect:G.Z});var X=o(1291);const ee={class:"row items-center justify-end"},te={class:"row items-center justify-end"};function oe(e,t,o,l,n,r){const i=(0,a.up)("q-btn"),u=(0,a.up)("q-date"),s=(0,a.up)("q-popup-proxy"),m=(0,a.up)("q-icon"),d=(0,a.up)("q-time"),c=(0,a.up)("q-input"),p=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(c,{modelValue:e.date,"onUpdate:modelValue":t[2]||(t[2]=t=>e.date=t),label:e.label},{prepend:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),mask:"YYYY-MM-DD HH:mm"},{default:(0,a.w5)((()=>[(0,a._)("div",ee,[(0,a.wy)((0,a.Wm)(i,{label:"Close",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"access_time",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:e.date,"onUpdate:modelValue":t[1]||(t[1]=t=>e.date=t),mask:"YYYY-MM-DD HH:mm",format24h:""},{default:(0,a.w5)((()=>[(0,a._)("div",te,[(0,a.wy)((0,a.Wm)(i,{label:"Close",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])}const ae=(0,a.aZ)({name:"DateTimeInput",props:{label:String,modelValue:{type:Date,required:!0}},data(){return{currentValue:this.modelValue,date:this.modelValue}},methods:{input(){this.$emit("update:modelValue",this.currentValue)},onValueChange(e){this.currentValue=e,this.input()}},watch:{date(e){this.currentValue=new Date(this.date),this.input()},value(e){this.onValueChange(e)}}});var le=o(2765),ne=o(2952),re=o(357);const ie=(0,V.Z)(ae,[["render",oe]]),ue=ie;D()(ae,"components",{QInput:F.Z,QIcon:W.Z,QPopupProxy:le.Z,QDate:ne.Z,QBtn:Q.Z,QTime:re.Z}),D()(ae,"directives",{ClosePopup:U.Z});var se=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function r(e){try{u(a.next(e))}catch(t){n(t)}}function i(e){try{u(a["throw"](e))}catch(t){n(t)}}function u(e){e.done?o(e.value):l(e.value).then(r,i)}u((a=a.apply(e,t||[])).next())}))};const me=(0,a.aZ)({name:"RunAlgoModal",props:{algorithm:{type:Object,required:!0},robot:{type:f.n,required:!0}},components:{DateTimeInput:ue,OrderOptionsInput:N},data(){return{show:!1,loading:!1,fields:[]}},methods:Object.assign(Object.assign({},(0,d.nv)(X.R,["runAlgorithm","getAlgorithmInputsTypes"])),{startAlgo(){return se(this,void 0,void 0,(function*(){this.loading=!0;const e={};this.fields.forEach((t=>{e[t.name]=t.value})),yield this.runAlgorithm(this.robot,this.algorithm.name,e),this.loading=!1,this.show=!1}))}}),created(){const e=this.getAlgorithmInputsTypes(this.algorithm);this.fields=Object.keys(e).map((t=>{let o=e[t],a=0;switch(o){case"number":a=0;break;case"string":a="";break;case"Date":a=new Date;break;case"OrderDetails":a={lots:0,operation:"limit_buy",price:0,ticker:""}}return{name:t,type:o,value:a}}))}});var de=o(8326),ce=o(1821);const pe=(0,V.Z)(me,[["render",P]]),he=pe;D()(me,"components",{QDialog:v.Z,QCard:q.Z,QBar:Z.Z,QForm:de.Z,QCardSection:E.Z,QInput:F.Z,QCardActions:ce.Z,QBtn:Q.Z});const ge=(0,a.aZ)({name:"AlgorithmItem",props:{algorithm:{type:Object,required:!0},robot:{type:f.n,required:!0}},components:{RunAlgoModal:he},computed:{inputs(){return this.getAlgorithmInputsTypes(this.algorithm)}},methods:Object.assign({},(0,d.nv)(X.R,["getAlgorithmInputsTypes"]))});var be=o(490),we=o(1233),fe=o(3246),ye=o(3115),_e=o(7691);const Ve=(0,V.Z)(ge,[["render",R]]),ve=Ve;D()(ge,"components",{QItem:be.Z,QItemSection:we.Z,QCard:q.Z,QCardSection:E.Z,QList:fe.Z,QItemLabel:ye.Z,QChip:_e.Z,QCardActions:ce.Z,QBtn:Q.Z});var qe=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function r(e){try{u(a.next(e))}catch(t){n(t)}}function i(e){try{u(a["throw"](e))}catch(t){n(t)}}function u(e){e.done?o(e.value):l(e.value).then(r,i)}u((a=a.apply(e,t||[])).next())}))};const Ze=(0,a.aZ)({name:"AlgosList",props:{robot:{type:f.n,required:!0}},data(){return{algorithms:[],loading:!1}},methods:Object.assign(Object.assign({},(0,d.nv)(X.R,["getAlgorithms"])),{fetch(){return qe(this,void 0,void 0,(function*(){this.loading=!0;try{this.algorithms=yield this.getAlgorithms(this.robot)}catch(e){this.algorithms=[]}this.loading=!1}))}}),components:{AlgorithmItem:ve},mounted(){return qe(this,void 0,void 0,(function*(){this.fetch()}))},watch:{robot(){this.fetch()}}});var We=o(854),ke=o(5304);const Qe=(0,V.Z)(Ze,[["render",z]]),xe=Qe;D()(Ze,"components",{QCard:q.Z,QCardSection:E.Z,QList:fe.Z,QInnerLoading:We.Z,QSpinnerBall:ke.Z});var Ue=o(5619),Ie=o(6194),De=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function r(e){try{u(a.next(e))}catch(t){n(t)}}function i(e){try{u(a["throw"](e))}catch(t){n(t)}}function u(e){e.done?o(e.value):l(e.value).then(r,i)}u((a=a.apply(e,t||[])).next())}))};const je=(0,a.aZ)({name:"RobotScreen",components:{RobotAvatar:Ie.Z,PortfolioStatistics:c.Z,AlgosList:xe,RobotLogsModal:C},data(){return{}},mixins:[Ue.yY],methods:Object.assign(Object.assign({},(0,d.nv)(X.R,["getAlgorithms"])),{updateRobotData(){return De(this,void 0,void 0,(function*(){}))}}),watch:{robot(){this.updateRobotData()}},created(){this.updateRobotData()}});var Ce=o(2605),Ae=o(8052),ze=o(7236);const Oe=(0,V.Z)(je,[["render",m]]),Re=Oe;D()(je,"components",{QBreadcrumbs:Ce.Z,QBreadcrumbsEl:Ae.Z,QBtnGroup:ze.Z,QBtn:Q.Z,QIcon:W.Z})}}]);