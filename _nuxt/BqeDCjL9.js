import{_ as c,v as d,z as l,A as p,T as u,t as n,x as s,O as _,Q as h,R as w,C as m,D as v}from"./BPlLbM8z.js";const f={data(){return{password:"",showLogin:!0}},methods:{checkPassword(){this.password==="marts202020"?(this.showLogin=!1,setTimeout(()=>{this.$router.push("/home")},1e3)):alert("Invalid password!")}}},r=e=>(m("data-v-0c1ba93a"),e=e(),v(),e),x={class:"cont"},b={key:0,class:"login-box"},g=r(()=>s("h2",{"data-v-inspector":"pages/index.vue:4:7","data-v-02281a80":""},"Login",-1)),k={class:"user-box"},I=r(()=>s("label",null,"Password",-1)),C={class:"d-flex justify-content-center"};function L(e,o,S,T,t,i){return n(),d("div",x,[l(u,{name:"fade"},{default:p(()=>[t.showLogin?(n(),d("div",b,[s("form",null,[g,s("div",k,[_(s("input",{type:"password","onUpdate:modelValue":o[0]||(o[0]=a=>t.password=a),required:""},null,512),[[h,t.password]]),I]),s("div",C,[s("a",{onClick:o[1]||(o[1]=a=>i.checkPassword())}," Submit ")])])])):w("",!0)]),_:1})])}const y=c(f,[["render",L],["__scopeId","data-v-0c1ba93a"]]);export{y as default};
