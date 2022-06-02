"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[222],{3260:(t,o,e)=>{e.d(o,{n:()=>n});class n{constructor({name:t,host:o,port:e,token:n}){this.name=t,this.host=o,this.port=e,this.token=n}get url(){return`http://${this.host}:${this.port}`}get authHeader(){return{Authorization:`Bearer ${this.token}`}}}},410:(t,o,e)=>{e.d(o,{I:()=>c});var n=e(7363),i=e(7898),r=e(1623),s=e(1354),a=function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(n.next(t))}catch(o){r(o)}}function a(t){try{c(n["throw"](t))}catch(o){r(o)}}function c(t){t.done?e(t.value):i(t.value).then(s,a)}c((n=n.apply(t,o||[])).next())}))};const c=(0,n.Q_)("robotStatisticsActions",{state:()=>({}),getters:{},actions:{getPositionStatistics(t){(0,i.$)();return{buyPrice:0,price:0,growth:!0,diffAbs:0,diffPer:0}},getPortfolioStatistics(t){(0,i.$)();return{buyPriceAll:0,priceAll:0,growth:!0,diffAbs:0,diffPer:0}},getUnitePortfolioStatistics(){return a(this,void 0,void 0,(function*(){(0,i.$)();const t=(0,r.V)(),o=(0,s.R)(),e=t.robots,n=e.map((t=>a(this,void 0,void 0,(function*(){return yield o.getPortfolio(t)})))),c=yield Promise.all(n),u=c.reduce(((t,o)=>(o.forEach((o=>{const e=t.find((t=>t.security_ticker==o.security_ticker));e?e.amount+=o.amount:t.push(o)})),t)),[]);return{unitedPortfolio:u,unitedPortfolioStatistics:this.getPortfolioStatistics(u)}}))}}})},1354:(t,o,e)=>{e.d(o,{R:()=>c});var n=e(7363),i=e(7898),r=e(9981),s=e.n(r),a=function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(n.next(t))}catch(o){r(o)}}function a(t){try{c(n["throw"](t))}catch(o){r(o)}}function c(t){t.done?e(t.value):i(t.value).then(s,a)}c((n=n.apply(t,o||[])).next())}))};const c=(0,n.Q_)("robotActions",{state:()=>({}),getters:{},actions:{getSecurities(t){return a(this,void 0,void 0,(function*(){const o=(0,i.$)(),{data:e}=yield s().get(`${t.url}/api/state/securities`,{headers:t.authHeader});return o.updateSecurities(e),e}))},updateSecurities(t){return a(this,void 0,void 0,(function*(){const o=(0,i.$)(),{data:e}=yield s().post(`${t.url}/api/state/securities`,{},{headers:t.authHeader});return o.updateSecurities(e),e}))},getPortfolio(t){return a(this,void 0,void 0,(function*(){const{data:o}=yield s().get(`${t.url}/api/state/portfolio`,{headers:t.authHeader});return o}))},updatePortfolio(t){return a(this,void 0,void 0,(function*(){const{data:o}=yield s().post(`${t.url}/api/state/portfolio`,{},{headers:t.authHeader});return o}))},getCurrencies(t){return a(this,void 0,void 0,(function*(){const{data:o}=yield s().get(`${t.url}/api/state/currencies`,{headers:t.authHeader});return o}))},updateCurrencies(t){return a(this,void 0,void 0,(function*(){const{data:o}=yield s().post(`${t.url}/api/state/currencies`,{},{headers:t.authHeader});return o}))}}})},1623:(t,o,e)=>{e.d(o,{V:()=>u});var n=e(7363),i=e(3260),r=e(9981),s=e.n(r),a=e(1354),c=function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(n.next(t))}catch(o){r(o)}}function a(t){try{c(n["throw"](t))}catch(o){r(o)}}function c(t){t.done?e(t.value):i(t.value).then(s,a)}c((n=n.apply(t,o||[])).next())}))};const u=(0,n.Q_)("robots",{state:()=>({robots:[]}),getters:{},actions:{checkRobotAuth(t){return c(this,void 0,void 0,(function*(){try{const o=new i.n(t),{data:e}=yield s().get(`${o.url}/api/auth/check`,{headers:o.authHeader});return e.auth}catch(o){return!1}}))},addRobot(t){return c(this,void 0,void 0,(function*(){const o=(0,a.R)();if(!this.checkExistingRobot(t)){const e=new i.n(t);yield o.updateSecurities(e),yield o.updatePortfolio(e),this.robots.push(e)}}))},checkExistingRobot(t){const o=new i.n(t);return this.robots.some((t=>t.url===o.url))}}})},7898:(t,o,e)=>{e.d(o,{$:()=>i});var n=e(7363);const i=(0,n.Q_)("securities",{state:()=>({securities:[]}),getters:{},actions:{updateSecurities(t){t.forEach((t=>{const o=this.securities.find((o=>o.ticker===t.ticker));o?o.price=t.price:this.securities.push(t)}))},getSecurity(t){return this.securities.find((o=>o.ticker===t))}}})},5222:(t,o,e)=>{e.r(o),e.d(o,{default:()=>Y});var n=e(9835);const i={class:"q-pa-md"},r={class:"q-gutter-sm"},s={class:"row justify-between"},a=(0,n._)("h4",null,"List of Robots",-1);function c(t,o,e,c,u,l){const d=(0,n.up)("q-btn"),h=(0,n.up)("ConnectRobotModal"),f=(0,n.up)("RobotTile");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",r,[(0,n.Wm)(d,{color:"primary",href:"#/",label:"< Main"})]),(0,n._)("div",s,[a,(0,n._)("div",null,[(0,n.Wm)(h)])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.robotsStore.robots,((t,o)=>((0,n.wg)(),(0,n.j4)(f,{key:o,robot:t,class:"q-my-sm"},null,8,["robot"])))),128))])}var u=e(1957);const l=(0,n.Uk)("Connect"),d=(0,n.Uk)(" Check "),h=(0,n.Uk)("Cancel");function f(t,o,e,i,r,s){const a=(0,n.up)("q-input"),c=(0,n.up)("q-card-section"),f=(0,n.up)("q-btn"),p=(0,n.up)("q-card-actions"),m=(0,n.up)("q-form"),b=(0,n.up)("q-card"),w=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(w,{modelValue:t.show,"onUpdate:modelValue":o[5]||(o[5]=o=>t.show=o),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{style:{"min-width":"400px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{onSubmit:(0,u.iM)(t.checkRobot,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(a,{modelValue:t.robotOptions.name,"onUpdate:modelValue":o[0]||(o[0]=o=>t.robotOptions.name=o),label:"Name*"},null,8,["modelValue"]),(0,n.Wm)(a,{modelValue:t.robotOptions.host,"onUpdate:modelValue":o[1]||(o[1]=o=>t.robotOptions.host=o),label:"Host*"},null,8,["modelValue"]),(0,n.Wm)(a,{modelValue:t.robotOptions.port,"onUpdate:modelValue":o[2]||(o[2]=o=>t.robotOptions.port=o),type:"number",label:"Port*"},null,8,["modelValue"]),(0,n.Wm)(a,{modelValue:t.robotOptions.token,"onUpdate:modelValue":o[3]||(o[3]=o=>t.robotOptions.token=o),label:"Token"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(p,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{color:"primary",onClick:t.connectRobot,disable:"success"!==t.checkStatus},{default:(0,n.w5)((()=>[l])),_:1},8,["onClick","disable"]),(0,n.Wm)(f,{color:"success"===t.checkStatus?"green":"error"===t.checkStatus?"red":"primary",type:"submit",loading:t.loading},{default:(0,n.w5)((()=>[d])),_:1},8,["color","loading"]),(0,n.Wm)(f,{color:"red",onClick:o[4]||(o[4]=o=>t.show=!t.show)},{default:(0,n.w5)((()=>[h])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(f,{onClick:o[6]||(o[6]=o=>t.show=!t.show),round:"",color:"primary",icon:"add"})],64)}var p=e(1623),m=function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(n.next(t))}catch(o){r(o)}}function a(t){try{c(n["throw"](t))}catch(o){r(o)}}function c(t){t.done?e(t.value):i(t.value).then(s,a)}c((n=n.apply(t,o||[])).next())}))};const b=(0,n.aZ)({name:"ConnectRobotModal",setup(){return{store:(0,p.V)()}},data(){return{show:!1,loading:!1,checkStatus:null,robotOptions:{name:"",host:"localhost",token:"",port:4268}}},methods:{checkRobot(){return m(this,void 0,void 0,(function*(){this.loading=!0,(yield this.store.checkRobotAuth(this.robotOptions))?this.checkStatus="success":this.checkStatus="error",this.loading=!1}))},connectRobot(){this.store.addRobot(this.robotOptions),this.robotOptions={name:"",host:"localhost",token:"",port:4268},this.checkStatus=null,this.show=!1}}});var w=e(1639),v=e(7743),g=e(4458),y=e(8326),k=e(3190),S=e(6611),_=e(1821),P=e(4455),C=e(9984),R=e.n(C);const W=(0,w.Z)(b,[["render",f]]),x=W;R()(b,"components",{QDialog:v.Z,QCard:g.Z,QForm:y.Z,QCardSection:k.Z,QInput:S.Z,QCardActions:_.Z,QBtn:P.Z});var Z=e(6970);const q={class:"row justify-between"},V={class:"text-h6"},$=(0,n.Uk)("active"),Q=(0,n.Uk)(" For logs "),O=(0,n.Uk)(" More ");function U(t,o,e,i,r,s){const a=(0,n.up)("q-chip"),c=(0,n.up)("q-item-label"),u=(0,n.up)("q-card-section"),l=(0,n.up)("q-btn"),d=(0,n.up)("q-card-actions"),h=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(h,{style:{"max-width":"600px"},class:"q-mx-auto"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("div",q,[(0,n._)("div",V,(0,Z.zw)(t.robot.name),1),(0,n.Wm)(a,{dense:"",dark:"",color:"blue"},{default:(0,n.w5)((()=>[$])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(c,{caption:"",style:{"font-size":"16px","font-weight":"bold"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,Z.zw)(t.portfolioStatistics.priceAll)+" $",1)])),_:1}),(0,n.Wm)(c,{caption:"",class:(0,Z.C_)("text-"+(t.portfolioStatistics.growth?"green":"red")),style:{"font-size":"14px"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,Z.zw)(t.portfolioStatistics.growth?"↑":"↓")+(0,Z.zw)(t.portfolioStatistics.diffAbs)+" $ ("+(0,Z.zw)(t.portfolioStatistics.diffPer)+" %) ",1)])),_:1},8,["class"])])])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[Q])),_:1}),(0,n.Wm)(d,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{color:"blue",dark:"",to:`/robot/${t.robot.name}`},{default:(0,n.w5)((()=>[O])),_:1},8,["to"])])),_:1})])),_:1})}var A=e(3260),H=e(7363),z=e(1354),j=e(410),M=function(t,o,e,n){function i(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function s(t){try{c(n.next(t))}catch(o){r(o)}}function a(t){try{c(n["throw"](t))}catch(o){r(o)}}function c(t){t.done?e(t.value):i(t.value).then(s,a)}c((n=n.apply(t,o||[])).next())}))};const B=(0,n.aZ)({name:"RobotTile",props:{robot:{type:A.n,required:!0}},data(){return{portfolio:[]}},computed:{portfolioStatistics(){return this.getPortfolioStatistics(this.portfolio)}},methods:Object.assign(Object.assign({},(0,H.nv)(j.I,["getPortfolioStatistics"])),(0,H.nv)(z.R,["getPortfolio","getSecurities"])),watch:{robot(t){return M(this,void 0,void 0,(function*(){this.portfolio=yield this.getPortfolio(t)}))}},created(){return M(this,void 0,void 0,(function*(){yield this.getSecurities(this.robot),this.portfolio=yield this.getPortfolio(this.robot)}))}});var D=e(7691),E=e(3115);const I=(0,w.Z)(B,[["render",U]]),T=I;R()(B,"components",{QCard:g.Z,QCardSection:k.Z,QChip:D.Z,QItemLabel:E.Z,QCardActions:_.Z,QBtn:P.Z});const L=(0,n.aZ)({name:"RobotsListScreen",setup(){const t=(0,p.V)();return{robotsStore:t}},components:{ConnectRobotModal:x,RobotTile:T}}),F=(0,w.Z)(L,[["render",c]]),Y=F;R()(L,"components",{QBtn:P.Z})}}]);