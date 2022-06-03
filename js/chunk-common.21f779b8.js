"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[64],{3260:(t,e,r)=>{r.d(e,{n:()=>i});class i{constructor({name:t,host:e,port:r,token:i}){this.name=t,this.host=e,this.port=r,this.token=i}get url(){return`http://${this.host}:${this.port}`}get authHeader(){return{Authorization:`Bearer ${this.token}`}}}},3043:(t,e,r)=>{r.d(e,{a:()=>u});var i=r(7363),n=r(1623),o=r(9981),c=r.n(o),s=function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function c(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):n(t.value).then(c,s)}u((i=i.apply(t,e||[])).next())}))};const u=(0,i.Q_)("portfolioActions",{state:()=>({}),getters:{},actions:{getPortfolio(t){return s(this,void 0,void 0,(function*(){const{data:e}=yield c().get(`${t.url}/api/state/portfolio`,{headers:t.authHeader});return e}))},getCurrenciesBalance(t){return s(this,void 0,void 0,(function*(){const{data:e}=yield c().get(`${t.url}/api/state/currencies/balance`,{headers:t.authHeader});return e}))},updatePortfolio(t){return s(this,void 0,void 0,(function*(){const{data:e}=yield c().post(`${t.url}/api/state/portfolio`,{},{headers:t.authHeader});return e}))},getAverageBuyPrice(t,e){return s(this,void 0,void 0,(function*(){const{data:r}=yield c().get(`${t.url}/api/state/portfolio/${e}/average-buy-price`,{headers:t.authHeader});return r}))},getUnitedPortfolio(){return s(this,void 0,void 0,(function*(){const t=(0,n.V)(),e=t.robots,r=e.map((t=>s(this,void 0,void 0,(function*(){return yield this.getPortfolio(t)})))),i=yield Promise.all(r),o=i.reduce(((t,e)=>(e.forEach((e=>{const r=t.find((t=>t.security_ticker==e.security_ticker));r?r.amount+=e.amount:t.push(e)})),t)),[]);return o}))},getUnitedBalance(){return s(this,void 0,void 0,(function*(){const t=(0,n.V)(),e=t.robots,r=e.map((t=>s(this,void 0,void 0,(function*(){return yield this.getCurrenciesBalance(t)})))),i=yield Promise.all(r),o=i.reduce(((t,e)=>(e.forEach((e=>{const r=t.find((t=>t.currency_ticker==e.currency_ticker));r?r.balance+=e.balance:t.push(e)})),t)),[]);return o}))}}})},1354:(t,e,r)=>{r.d(e,{R:()=>u});var i=r(7363),n=r(7898),o=r(9981),c=r.n(o),s=function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function c(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):n(t.value).then(c,s)}u((i=i.apply(t,e||[])).next())}))};const u=(0,i.Q_)("robotActions",{state:()=>({}),getters:{},actions:{getSecurities(t){return s(this,void 0,void 0,(function*(){const e=(0,n.$)(),{data:r}=yield c().get(`${t.url}/api/state/securities`,{headers:t.authHeader});return e.updateSecurities(r),r}))},updateSecurities(t){return s(this,void 0,void 0,(function*(){const e=(0,n.$)(),{data:r}=yield c().post(`${t.url}/api/state/securities`,{},{headers:t.authHeader});return e.updateSecurities(r),r}))},getCurrencies(t){return s(this,void 0,void 0,(function*(){const{data:e}=yield c().get(`${t.url}/api/state/currencies`,{headers:t.authHeader});return e}))},updateCurrencies(t){return s(this,void 0,void 0,(function*(){const{data:e}=yield c().post(`${t.url}/api/state/currencies`,{},{headers:t.authHeader});return e}))}}})},1623:(t,e,r)=>{r.d(e,{V:()=>d});var i=r(7363),n=r(3260),o=r(9981),c=r.n(o),s=r(1354),u=r(3043),a=function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function c(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):n(t.value).then(c,s)}u((i=i.apply(t,e||[])).next())}))};const d=(0,i.Q_)("robots",{state:()=>({robots:[]}),getters:{},actions:{checkRobotAuth(t){return a(this,void 0,void 0,(function*(){try{const e=new n.n(t),{data:r}=yield c().get(`${e.url}/api/auth/check`,{headers:e.authHeader});return r.auth}catch(e){return!1}}))},addRobot(t){return a(this,void 0,void 0,(function*(){const e=(0,s.R)(),r=(0,u.a)();if(!this.checkExistingRobot(t)){const i=new n.n(t);yield e.updateSecurities(i),yield r.updatePortfolio(i),this.robots.push(i)}}))},checkExistingRobot(t){const e=new n.n(t);return this.robots.some((t=>t.url===e.url))}}})},7898:(t,e,r)=>{r.d(e,{$:()=>n});var i=r(7363);const n=(0,i.Q_)("securities",{state:()=>({securities:[]}),getters:{},actions:{updateSecurities(t){t.forEach((t=>{const e=this.securities.find((e=>e.ticker===t.ticker));e?e.price=t.price:this.securities.push(t)}))},getSecurity(t){return this.securities.find((e=>e.ticker===t))}}})},576:(t,e,r)=>{r.d(e,{Z:()=>p});var i=r(9835),n=r(6970);function o(t,e,r,o,c,s){const u=(0,i.up)("q-avatar");return(0,i.wg)(),(0,i.j4)(u,{size:"30px",color:t.color,class:"text-white"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.firstLetter),1)])),_:1},8,["color"])}const c=r(5168),s=(0,i.aZ)({name:"RobotAvatar",props:{name:{type:String,required:!0}},data(){return{colors:["red","blue","orange","green","teal","purple","deep-purple","indigo","brown"],rand:c(this.name)}},computed:{color(){return this.colors[this.rand(this.colors.length)]},firstLetter(){return this.name.substring(0,1)}}});var u=r(1639),a=r(1357),d=r(9984),l=r.n(d);const h=(0,u.Z)(s,[["render",o]]),p=h;l()(s,"components",{QAvatar:a.Z})},9388:(t,e,r)=>{r.d(e,{Z:()=>C});var i=r(9835),n=r(6970);const o={class:"q-px-md q-my-lg q-mx-auto",style:{"max-width":"800px",background:"lightgray","border-radius":"5px"}},c=(0,i.Uk)("Portfolio");function s(t,e,r,s,u,a){const d=(0,i.up)("q-card-section"),l=(0,i.up)("CurrencySign"),h=(0,i.up)("PortfolioItem"),p=(0,i.up)("q-list");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(d,{class:"text-h4"},{default:(0,i.w5)((()=>[(0,i.WI)(t.$slots,"default",{},(()=>[c]))])),_:3}),t.balance?((0,i.wg)(),(0,i.j4)(d,{key:0,class:"bg-white q-mx-md rounded-borders"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.balance,(t=>((0,i.wg)(),(0,i.iD)("span",{key:t.currency_ticker,class:"q-mr-md"},[(0,i.Uk)((0,n.zw)(t.balance.toLocaleString("de-DE")),1),(0,i.Wm)(l,{ticker:t.currency_ticker,class:"text-bold"},null,8,["ticker"])])))),128))])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(d,{class:"q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{separator:"",style:{"max-height":"300px","overflow-y":"auto"},class:"bg-white rounded-borders"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.portfolio,((e,r)=>((0,i.wg)(),(0,i.j4)(h,{key:r,"portfolio-position":e,robot:t.robot},null,8,["portfolio-position","robot"])))),128))])),_:1})])),_:1})])}var u=r(3043),a=r(7363);function d(t,e,r,o,c,s){const u=(0,i.up)("q-item-label"),a=(0,i.up)("q-item-section"),d=(0,i.up)("CurrencySign"),l=(0,i.up)("q-item");return(0,i.wg)(),(0,i.j4)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{style:{"font-size":"18px","font-weight":"bold"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.security.name),1)])),_:1}),(0,i.Wm)(u,{caption:"",style:{"font-size":"14px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.portfolioPosition.security_ticker)+" x"+(0,n.zw)(t.portfolioPosition.amount),1)])),_:1})])),_:1}),(0,i.Wm)(a,{side:"",top:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{caption:"",style:{"font-size":"16px","font-weight":"bold"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.security.price)+" ",1),(0,i.Wm)(d,{ticker:t.security.currency_ticker},null,8,["ticker"])])),_:1}),t.robot?((0,i.wg)(),(0,i.j4)(u,{key:0,caption:"",class:(0,n.C_)("text-"+(t.growth?"green":"red")),style:{"font-size":"14px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.growth?"↑":"↓")+(0,n.zw)(t.buyPrice.price)+" ",1),(0,i.Wm)(d,{ticker:t.security.currency_ticker},null,8,["ticker"]),(0,i.Uk)(" ("+(0,n.zw)(t.diffRelative)+" %) ",1)])),_:1},8,["class"])):(0,i.kq)("",!0)])),_:1})])),_:1})}var l=r(3260),h=r(7898);function p(t,e,r,o,c,s){return(0,i.wg)(),(0,i.iD)("span",null,(0,n.zw)(t.sign),1)}const f=(0,i.aZ)({name:"CurrencySign",props:{ticker:{type:String,required:!0}},computed:{sign(){switch(this.ticker){case"USD":return"$";case"RUB":return"₽";case"EUR":return"€";default:return"M"}}}});var y=r(1639);const g=(0,y.Z)(f,[["render",p]]),v=g;var b=function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function c(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):n(t.value).then(c,s)}u((i=i.apply(t,e||[])).next())}))};const m=(0,i.aZ)({name:"PortfolioItem",components:{CurrencySign:v},props:{portfolioPosition:{type:Object,required:!0},robot:{type:l.n,required:!1}},data(){return{buyPrice:{ticker:"",price:0},loading:!0}},methods:Object.assign(Object.assign({},(0,a.nv)(u.a,["getAverageBuyPrice"])),(0,a.nv)(h.$,["getSecurity"])),computed:Object.assign(Object.assign({},(0,a.rn)(h.$,["securities"])),{security(){return this.getSecurity(this.portfolioPosition.security_ticker)},growth(){var t;return((null===(t=this.security)||void 0===t?void 0:t.price)||0)>this.buyPrice.price},diffAbsolute(){var t;let e=Math.abs(((null===(t=this.security)||void 0===t?void 0:t.price)||0)-this.buyPrice.price);return Math.round(100*e)/100},diffRelative(){let t=this.diffAbsolute/this.buyPrice.price*100;return Math.round(100*t)/100}}),created(){return b(this,void 0,void 0,(function*(){this.loading=!0,this.robot&&(this.buyPrice=yield this.getAverageBuyPrice(this.robot,this.portfolioPosition.security_ticker)),this.loading=!1}))}});var w=r(490),k=r(1233),_=r(3115),P=r(9984),x=r.n(P);const q=(0,y.Z)(m,[["render",d]]),S=q;x()(m,"components",{QItem:w.Z,QItemSection:k.Z,QItemLabel:_.Z});const $=(0,i.aZ)({name:"PortfolioView",components:{CurrencySign:v,PortfolioItem:S},props:{portfolio:{type:Array,required:!0},balance:{type:Array,required:!1},robot:{type:Object,required:!1}},computed:{},methods:Object.assign({},(0,a.nv)(u.a,["getAverageBuyPrice"]))});var z=r(3190),Z=r(3246);const A=(0,y.Z)($,[["render",s]]),C=A;x()($,"components",{QCardSection:z.Z,QList:Z.Z})}}]);