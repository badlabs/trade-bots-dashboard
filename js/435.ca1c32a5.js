"use strict";(self["webpackChunktrade_bots_dashboard"]=self["webpackChunktrade_bots_dashboard"]||[]).push([[435],{6435:(t,o,e)=>{e.r(o),e.d(o,{default:()=>U});var a=e(9835),l=e(6970);const r=t=>((0,a.dD)("data-v-d0a589de"),t=t(),(0,a.Cn)(),t),s={class:"q-pa-md"},n={key:0,class:"row justify-center q-pa-lg"},d={key:1,class:"q-pa-md q-my-lg q-mx-auto",style:{"max-width":"800px",background:"lightblue","border-radius":"5px"}},i=r((()=>(0,a._)("div",{style:{"text-align":"center","font-size":"16px","font-weight":"bold"}},"Connected robots: Info",-1))),m={class:"text-bold"},u=(0,a.Uk)(" United Portfolio "),c={key:3,class:"q-pa-md q-my-lg q-mx-auto",style:{"max-width":"800px",background:"lightblue","border-radius":"5px"}},b=(0,a.Uk)(" Algorithm 1234 "),p=r((()=>(0,a._)("div",{class:"q-pa-md"},null,-1)));function w(t,o,e,r,w,g){const h=(0,a.up)("q-breadcrumbs-el"),f=(0,a.up)("q-breadcrumbs"),q=(0,a.up)("q-btn"),_=(0,a.up)("ConnectRobotModal"),y=(0,a.up)("q-btn-group"),k=(0,a.up)("q-spinner-ball"),x=(0,a.up)("RobotAvatar"),v=(0,a.up)("q-item-section"),W=(0,a.up)("RobotStatus"),Z=(0,a.up)("q-item"),Q=(0,a.up)("q-list"),S=(0,a.up)("PortfolioView"),R=(0,a.up)("q-card-section"),C=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(f,{class:"text-primary q-ma-md","active-color":"white"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{label:"Main",icon:"home",class:"text-primary"})])),_:1}),(0,a.Wm)(y,{spread:""},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{icon:"widgets",color:"primary",to:"/robots",label:"Robots"}),t.robots.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(_,{key:0,onAddRobot:o[0]||(o[0]=o=>t.showSpinner=!0),onRobotAdded:o[1]||(o[1]=o=>t.showSpinner=!1)})),(0,a.Wm)(q,{icon:"format_list_numbered",color:"primary",to:"/algorithms",label:"Algorithms"})])),_:1}),t.showSpinner&&!t.robots.length?((0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(k,{size:"200px",color:"primary"})])):(0,a.kq)("",!0),t.robots.length?((0,a.wg)(),(0,a.iD)("div",d,[i,(0,a.Wm)(Q,{separator:"",class:"connected-robots__items q-my-md rounded-borders"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.robots,((t,o)=>((0,a.wg)(),(0,a.j4)(Z,{key:o,to:`/robots/${t.name}`},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Wm)(x,{name:t.name,class:"q-mr-md"},null,8,["name"]),(0,a.Uk)(" "+(0,l.zw)(t.name),1)])])),_:2},1024),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(t.algorithm||"used algorithm"),1)])),_:2},1024),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(W,{robot:t},null,8,["robot"])])])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:1}),(0,a._)("div",null,[(0,a.Wm)(q,{color:"primary",href:"#/robots",label:"More",style:{"font-size":"12px"}})])])):(0,a.kq)("",!0),t.robots.length?((0,a.wg)(),(0,a.j4)(S,{key:2},{default:(0,a.w5)((()=>[u])),_:1})):(0,a.kq)("",!0),t.robots.length?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(Q,{style:{"max-height":"300px","overflow-y":"auto"},separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.algos,((t,o)=>((0,a.wg)(),(0,a.j4)(Z,{key:o,dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"q-pa-sm q-my-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"my-card",style:{"max-height":"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(R,null,{default:(0,a.w5)((()=>[b])),_:1}),p])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1})])):(0,a.kq)("",!0)])}var g=e(1623),h=e(7363),f=e(1018),q=e(8242),_=e(5321),y=e(6256);const k=(0,a.aZ)({name:"MainScreen",data(){return{algos:[1,2,3,4,5],securities:[1,2,3,4,5],showSpinner:!1,unitedPortfolio:[],unitedBalance:[]}},components:{RobotAvatar:q.Z,PortfolioView:f.Z,ConnectRobotModal:_.Z,RobotStatus:y.Z},methods:{},computed:Object.assign({},(0,h.rn)(g.V,["robots"]))});var x=e(1639),v=e(2605),W=e(8052),Z=e(7236),Q=e(8879),S=e(5304),R=e(3246),C=e(490),D=e(1233),j=e(4458),A=e(3190),B=e(9984),z=e.n(B);const M=(0,x.Z)(k,[["render",w],["__scopeId","data-v-d0a589de"]]),U=M;z()(k,"components",{QBreadcrumbs:v.Z,QBreadcrumbsEl:W.Z,QBtnGroup:Z.Z,QBtn:Q.Z,QSpinnerBall:S.Z,QList:R.Z,QItem:C.Z,QItemSection:D.Z,QCard:j.Z,QCardSection:A.Z})}}]);