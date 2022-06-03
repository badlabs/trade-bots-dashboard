"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[209],{9209:(t,e,o)=>{o.r(e),o.d(e,{default:()=>mt});var n=o(9835),l=o(6970);const r={class:"q-pa-md"},a={class:"q-gutter-sm"},u={class:"row justify-between"};function i(t,e,o,i,s,c){const d=(0,n.up)("q-btn"),p=(0,n.up)("RobotLogsModal"),m=(0,n.up)("PortfolioStatistics"),h=(0,n.up)("AlgosList");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",a,[(0,n.Wm)(d,{color:"primary",to:"/robots",label:"< Robots"})]),(0,n._)("div",u,[(0,n._)("h4",null,"Robot "+(0,l.zw)(t.robot.name),1),(0,n._)("div",null,[(0,n.Wm)(p,{robot:t.robot},null,8,["robot"])])]),(0,n.Wm)(m,{robot:t.robot,portfolio:t.portfolio},null,8,["robot","portfolio"]),(0,n.Wm)(h,{algorithms:t.algorithms,robot:t.robot},null,8,["algorithms","robot"])])}var s=o(1623),c=o(7363),d=o(3260),p=o(4501);const m={class:"bg-black text-white q-pa-md",style:{"max-width":"600px","max-height":"400px",overflow:"auto"}},h=(0,n.Uk)("Close"),g=(0,n.Uk)("Logs");function b(t,e,o,r,a,u){const i=(0,n.up)("q-card-section"),s=(0,n.up)("q-btn"),c=(0,n.up)("q-card-actions"),d=(0,n.up)("q-card"),p=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p,{modelValue:t.show,"onUpdate:modelValue":e[1]||(e[1]=e=>t.show=e),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{"min-width":"400px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Logs "+(0,l.zw)(t.robot.name),1)])),_:1}),(0,n._)("code",null,[(0,n._)("pre",m,(0,l.zw)(t.logs),1)]),(0,n.Wm)(c,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{color:"red",onClick:e[0]||(e[0]=e=>t.show=!t.show)},{default:(0,n.w5)((()=>[h])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(s,{onClick:e[2]||(e[2]=e=>t.show=!t.show),color:"primary"},{default:(0,n.w5)((()=>[g])),_:1})],64)}var w=o(3819);const f=(0,n.aZ)({name:"RobotLogsModal",props:{robot:{type:d.n,required:!0}},data(){return{show:!1,connection:null,logs:""}},created(){const t=`${this.robot.url}`;this.connection=(0,w.io)(t),this.connection.on("log",(t=>{console.log(t),this.logs+=t+"\n"}))},beforeDestroy(){var t;null===(t=this.connection)||void 0===t||t.close()}});var y=o(1639),_=o(7743),v=o(4458),q=o(3190),V=o(1821),Z=o(4455),W=o(9984),k=o.n(W);const A=(0,y.Z)(f,[["render",b]]),Q=A;k()(f,"components",{QDialog:_.Z,QCard:v.Z,QCardSection:q.Z,QCardActions:V.Z,QBtn:Z.Z});const C=(0,n.Uk)(" Algorithms ");function I(t,e,o,l,r,a){const u=(0,n.up)("q-card-section"),i=(0,n.up)("AlgorithmItem"),s=(0,n.up)("q-list"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{class:"q-pa-md q-my-lg q-mx-auto",style:{"max-width":"800px",background:"lightblue","border-radius":"5px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-h3"},{default:(0,n.w5)((()=>[C])),_:1}),(0,n.Wm)(s,{style:{"max-height":"300px","overflow-y":"auto"},separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.algorithms,((e,o)=>((0,n.wg)(),(0,n.j4)(i,{key:o,robot:t.robot,algorithm:e,dense:""},null,8,["robot","algorithm"])))),128))])),_:1})])),_:1})}function x(t,e,o,r,a,u){const i=(0,n.up)("q-card-section"),s=(0,n.up)("q-item-section"),c=(0,n.up)("q-chip"),d=(0,n.up)("q-item-label"),p=(0,n.up)("q-item"),m=(0,n.up)("q-list"),h=(0,n.up)("RunAlgoModal"),g=(0,n.up)("q-card-actions"),b=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(p,{dense:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"q-pa-sm q-my-sm"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"my-card",style:{"max-height":"300px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"text-h5"},{default:(0,n.w5)((()=>[(0,n.Uk)("Algorithm "+(0,l.zw)(t.algorithm.name),1)])),_:1}),(0,n.Wm)(m,{separator:"",class:"bg-white"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.inputs,((t,e)=>((0,n.wg)(),(0,n.j4)(p,{key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e),1)])),_:2},1024),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n._)("code",null,(0,l.zw)(t),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,n.Wm)(g,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{robot:t.robot,algorithm:t.algorithm},null,8,["robot","algorithm"])])),_:1})])),_:1})])),_:1})])),_:1})}var O=o(1957);const j=(0,n.Uk)(" Start "),U=(0,n.Uk)("Cancel"),D=(0,n.Uk)("Run");function S(t,e,o,l,r,a){const u=(0,n.up)("q-input"),i=(0,n.up)("OrderOptionsInput"),s=(0,n.up)("q-card-section"),c=(0,n.up)("q-btn"),d=(0,n.up)("q-card-actions"),p=(0,n.up)("q-form"),m=(0,n.up)("q-card"),h=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(h,{modelValue:t.show,"onUpdate:modelValue":e[1]||(e[1]=e=>t.show=e),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{style:{"min-width":"400px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{onSubmit:(0,O.iM)(t.startAlgo,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.fields,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.name},["number"===t.type?((0,n.wg)(),(0,n.j4)(u,{key:0,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,type:"number",label:t.name},null,8,["modelValue","onUpdate:modelValue","label"])):"OrderDetails"===t.type?((0,n.wg)(),(0,n.j4)(i,{key:1,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,label:t.name},null,8,["modelValue","onUpdate:modelValue","label"])):(0,n.kq)("",!0)])))),128))])),_:1}),(0,n.Wm)(d,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{color:"primary",type:"submit",loading:t.loading},{default:(0,n.w5)((()=>[j])),_:1},8,["loading"]),(0,n.Wm)(c,{color:"red",onClick:e[0]||(e[0]=e=>t.show=!t.show)},{default:(0,n.w5)((()=>[U])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(c,{onClick:e[2]||(e[2]=e=>t.show=!t.show),color:"primary"},{default:(0,n.w5)((()=>[D])),_:1})],64)}function R(t,e,o,r,a,u){const i=(0,n.up)("q-input"),s=(0,n.up)("q-select"),c=(0,n.up)("q-card-section"),d=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"row justify-between"},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(t.label||"OrderDetails"),1),(0,n._)("div",null,[(0,n.Wm)(i,{modelValue:t.currentValue.ticker,"onUpdate:modelValue":e[0]||(e[0]=e=>t.currentValue.ticker=e),label:"Ticker",onInput:t.input},null,8,["modelValue","onInput"]),(0,n.Wm)(s,{modelValue:t.currentValue.operation,"onUpdate:modelValue":e[1]||(e[1]=e=>t.currentValue.operation=e),options:t.operationTypes,label:"Operation",onInput:t.input},null,8,["modelValue","options","onInput"]),(0,n.Wm)(i,{modelValue:t.currentValue.price,"onUpdate:modelValue":e[2]||(e[2]=e=>t.currentValue.price=e),type:"number",label:"Price",onInput:t.input},null,8,["modelValue","onInput"]),(0,n.Wm)(i,{modelValue:t.currentValue.lots,"onUpdate:modelValue":e[3]||(e[3]=e=>t.currentValue.lots=e),type:"number",label:"Lots",onInput:t.input},null,8,["modelValue","onInput"])])])),_:1})])),_:1})}const L=(0,n.aZ)({name:"OrderOptionsInput",props:{label:String,modelValue:{type:Object,required:!0}},data(){return{currentValue:this.modelValue,operationTypes:["buy","sell","buy_or_cancel","sell_or_cancel"]}},methods:{input(){this.$emit("update:modelValue",this.currentValue)},onValueChange(t){this.currentValue=t,this.input()}},watch:{value(t){this.onValueChange(t)}}});var P=o(6611),T=o(8542);const z=(0,y.Z)(L,[["render",R]]),H=z;k()(L,"components",{QCard:v.Z,QCardSection:q.Z,QInput:P.Z,QSelect:T.Z});var M=o(9981),$=o.n(M),Y=function(t,e,o,n){function l(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,r){function a(t){try{i(n.next(t))}catch(e){r(e)}}function u(t){try{i(n["throw"](t))}catch(e){r(e)}}function i(t){t.done?o(t.value):l(t.value).then(a,u)}i((n=n.apply(t,e||[])).next())}))};const B=(0,c.Q_)("algorithmsActions",{state:()=>({}),getters:{},actions:{getAlgorithms(t){return Y(this,void 0,void 0,(function*(){const{data:e}=yield $().get(`${t.url}/api/algos`,{headers:t.authHeader});return e}))},runAlgorithm(t,e,o){return Y(this,void 0,void 0,(function*(){const{data:n}=yield $().post(`${t.url}/api/algos/${e}`,o,{headers:t.authHeader});return n}))},getAlgorithmInputsTypes(t){return JSON.parse(t.input_types)}}});var K=function(t,e,o,n){function l(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,r){function a(t){try{i(n.next(t))}catch(e){r(e)}}function u(t){try{i(n["throw"](t))}catch(e){r(e)}}function i(t){t.done?o(t.value):l(t.value).then(a,u)}i((n=n.apply(t,e||[])).next())}))};const E=(0,n.aZ)({name:"RunAlgoModal",props:{algorithm:{type:Object,required:!0},robot:{type:d.n,required:!0}},components:{OrderOptionsInput:H},data(){return{show:!1,loading:!1,fields:[]}},methods:Object.assign(Object.assign({},(0,c.nv)(B,["runAlgorithm","getAlgorithmInputsTypes"])),{startAlgo(){return K(this,void 0,void 0,(function*(){this.loading=!0;const t={};this.fields.forEach((e=>{t[e.name]=e.value})),yield this.runAlgorithm(this.robot,this.algorithm.name,t),this.loading=!1,this.show=!1}))}}),created(){const t=this.getAlgorithmInputsTypes(this.algorithm);this.fields=Object.keys(t).map((e=>{let o=t[e],n=0;switch(o){case"number":n=0;break;case"OrderDetails":n={lots:0,operation:"limit_buy",price:0,ticker:""}}return{name:e,type:o,value:n}}))}});var F=o(8326);const J=(0,y.Z)(E,[["render",S]]),N=J;k()(E,"components",{QDialog:_.Z,QCard:v.Z,QForm:F.Z,QCardSection:q.Z,QInput:P.Z,QCardActions:V.Z,QBtn:Z.Z});const G=(0,n.aZ)({name:"AlgorithmItem",props:{algorithm:{type:Object,required:!0},robot:{type:d.n,required:!0}},components:{RunAlgoModal:N},computed:{inputs(){return this.getAlgorithmInputsTypes(this.algorithm)}},methods:Object.assign({},(0,c.nv)(B,["getAlgorithmInputsTypes"]))});var X=o(490),tt=o(1233),et=o(3246),ot=o(3115),nt=o(7691);const lt=(0,y.Z)(G,[["render",x]]),rt=lt;k()(G,"components",{QItem:X.Z,QItemSection:tt.Z,QCard:v.Z,QCardSection:q.Z,QList:et.Z,QItemLabel:ot.Z,QChip:nt.Z,QCardActions:V.Z});const at=(0,n.aZ)({name:"AlgosList",props:{algorithms:{type:Array,required:!0},robot:{type:d.n,required:!0}},methods:{},components:{AlgorithmItem:rt}}),ut=(0,y.Z)(at,[["render",I]]),it=ut;k()(at,"components",{QCard:v.Z,QCardSection:q.Z,QList:et.Z});var st=o(3043),ct=function(t,e,o,n){function l(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,r){function a(t){try{i(n.next(t))}catch(e){r(e)}}function u(t){try{i(n["throw"](t))}catch(e){r(e)}}function i(t){t.done?o(t.value):l(t.value).then(a,u)}i((n=n.apply(t,e||[])).next())}))};const dt=(0,n.aZ)({name:"RobotScreen",components:{PortfolioStatistics:p.Z,AlgosList:it,RobotLogsModal:Q},data(){return{portfolio:[],algorithms:[]}},computed:Object.assign(Object.assign({},(0,c.rn)(s.V,["robots"])),{robot(){const t=this.robots.find((t=>t.name===this.$route.params.robot));return t||(this.$router.push("/"),new d.n({name:"",host:"",port:0,token:""}))}}),methods:Object.assign(Object.assign(Object.assign({},(0,c.nv)(st.a,["getPortfolio"])),(0,c.nv)(B,["getAlgorithms"])),{updateRobotData(){return ct(this,void 0,void 0,(function*(){this.portfolio=yield this.getPortfolio(this.robot),this.algorithms=yield this.getAlgorithms(this.robot)}))}}),watch:{robot(){this.updateRobotData()}},created(){this.updateRobotData()}}),pt=(0,y.Z)(dt,[["render",i]]),mt=pt;k()(dt,"components",{QBtn:Z.Z})}}]);