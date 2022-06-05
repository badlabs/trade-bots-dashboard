"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[630],{7630:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var n=o(9835);const r={class:"q-pa-md"},a=(0,n.Uk)(" Filters "),i={class:"q-mr-sm full-width col-sm"},l={class:"full-width col-sm"},s=(0,n.Uk)("Refresh");function u(e,t,o,u,d,c){const m=(0,n.up)("q-breadcrumbs-el"),p=(0,n.up)("q-breadcrumbs"),f=(0,n.up)("q-card-section"),h=(0,n.up)("q-date"),b=(0,n.up)("q-input"),y=(0,n.up)("q-select"),v=(0,n.up)("q-space"),_=(0,n.up)("q-icon"),g=(0,n.up)("q-btn"),w=(0,n.up)("q-card"),T=(0,n.up)("q-table");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(p,{class:"q-ma-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"Home",icon:"home",to:"/"}),(0,n.Wm)(m,{label:"Robots",icon:"widgets",to:"/robots"}),(0,n.Wm)(m,{label:e.robot.name,icon:"precision_manufacturing",to:`/robots/${e.robot.name}`},null,8,["label","to"]),(0,n.Wm)(m,{label:"Orders",icon:"list_alt",class:"text-primary"})])),_:1}),(0,n.Wm)(w,{class:"q-mb-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"text-h6"},{default:(0,n.w5)((()=>[a])),_:1}),(0,n.Wm)(f,{class:"row"},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(h,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),range:"","today-btn":"",subtitle:"Time range"},null,8,["modelValue"])]),(0,n._)("div",l,[(0,n.Wm)(b,{modelValue:e.securityTicker,"onUpdate:modelValue":t[1]||(t[1]=t=>e.securityTicker=t),label:"Security Ticker"},null,8,["modelValue"]),(0,n.Wm)(b,{modelValue:e.runId,"onUpdate:modelValue":t[2]||(t[2]=t=>e.runId=t),type:"number",label:"Run id"},null,8,["modelValue"]),(0,n.Wm)(y,{modelValue:e.operationType,"onUpdate:modelValue":t[3]||(t[3]=t=>e.operationType=t),clearable:"",options:e.operationTypes,label:"Operation"},null,8,["modelValue","options"])])])),_:1}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v),(0,n.Wm)(g,{color:"primary",onClick:t[4]||(t[4]=t=>e.fetch())},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{name:"refresh"}),s])),_:1})])),_:1})])),_:1}),(0,n.Wm)(T,{rows:e.orders,"row-key":"created_at",loading:e.loading},null,8,["rows","loading"])])}var d=o(7363),c=o(9981),m=o.n(c),p=function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function l(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):r(e.value).then(i,l)}s((n=n.apply(e,t||[])).next())}))};const f=(0,d.Q_)("ordersActions",{state:()=>({}),getters:{},actions:{getOrders(e,t){var o,n;return p(this,void 0,void 0,(function*(){const r=(null===(o=t.from)||void 0===o?void 0:o.toUTCString())||"",a=(null===(n=t.to)||void 0===n?void 0:n.toUTCString())||"",i=t.securityTicker||"",l=t.operation||"",{data:s}=yield m().get(`${e.url}/api/state/orders?from=${r}&to=${a}&securityTicker=${i}&operation=${l}&runId=${t.runId||""}`,{headers:e.authHeader});return s}))}}});var h=o(5619),b=function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function l(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?o(e.value):r(e.value).then(i,l)}s((n=n.apply(e,t||[])).next())}))};const y=(0,n.aZ)({name:"OrdersScreen",data(){return{orders:[],loading:!1,date:null,securityTicker:void 0,runId:void 0,operationType:void 0,operationTypes:["limit_buy","limit_sell","market_buy","market_sell","buy_or_cancel","sell_or_cancel"]}},mixins:[h.yY,h.bH],methods:Object.assign(Object.assign({},(0,d.nv)(f,["getOrders"])),{fetch(){return b(this,void 0,void 0,(function*(){this.loading=!0;try{const{from:e,to:t}=this.getDayBoundsFromTimeRange(this.date);this.orders=yield this.getOrders(this.robot,{from:e,to:t,operation:this.operationType,runId:this.runId,securityTicker:this.securityTicker})}catch(e){this.orders=[]}this.loading=!1}))}}),mounted(){return b(this,void 0,void 0,(function*(){yield this.fetch()}))}});var v=o(1639),_=o(2605),g=o(8052),w=o(4458),T=o(3190),k=o(2952),W=o(6611),q=o(6384),Z=o(136),Q=o(8879),V=o(2857),I=o(3066),O=o(9984),U=o.n(O);const x=(0,v.Z)(y,[["render",u]]),C=x;U()(y,"components",{QBreadcrumbs:_.Z,QBreadcrumbsEl:g.Z,QCard:w.Z,QCardSection:T.Z,QDate:k.Z,QInput:W.Z,QSelect:q.Z,QSpace:Z.Z,QBtn:Q.Z,QIcon:V.Z,QTable:I.Z})}}]);