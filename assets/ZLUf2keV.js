import{_ as d,v as a,x as e,L as c,M as u,N as m,t as o,O as h,P as p,C as _,D as g}from"./DSNAAig_.js";const x=window.setInterval,v={data(){return{currentIndex:0,images:[{url:"1.jpg"},{url:"2.jpg"},{url:"3.jpg"},{url:"4.jpg"},{url:"5.jpeg"},{url:"6.jpeg"},{url:"7.jpeg"},{url:"8.jpeg"},{url:"9.jpeg"}],slideAnimation:"animate__animated animate__backInUp"}},methods:{toggle(){this.slideAnimation="animate__animated animate__backOutUp",this.$refs.slideshow.addEventListener("animationend",()=>{this.$router.push("/showroom")},{once:!0})},navigateTo({path:i}){},nextSlide(){this.currentIndex=(this.currentIndex+1)%this.images.length,this.resetAnimation()},prevSlide(){this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length,this.resetAnimation()},resetAnimation(){this.slideAnimation="",this.$nextTick(()=>{this.slideAnimation="animate__animated animate__backInUp"})}},mounted(){x(this.nextSlide,5e3)}},f=i=>(_("data-v-43638f9f"),i=i(),g(),i),w={class:"cont text-white"},I=f(()=>e("div",{class:"w-full justify-center text-start absolute top-[50px] left-[50px] cursor-pointer"}," Martina's Homepage ",-1)),j={class:"d-flex justify-content-center align-items-center vh-100"},S={class:"entire-content"},k={class:"content-slideshow",ref:"slideshow"},b=["src"];function A(i,t,C,y,r,n){return o(),a("div",w,[e("div",{class:"w-full justify-center text-end absolute bottom-[50px] right-[50px] cursor-pointer",onClick:t[0]||(t[0]=s=>n.toggle())}," Go to showroom → "),I,e("div",j,[e("section",{id:"slideshow",class:c(r.slideAnimation)},[e("div",S,[e("div",k,[(o(!0),a(u,null,m(r.images,(s,l)=>h((o(),a("figure",{class:"shadow",key:l},[e("img",{class:"imgPolaroid",src:`../assets/${s.url}`},null,8,b)])),[[p,l===r.currentIndex]])),128))],512)])],2)]),e("button",{onClick:t[1]||(t[1]=(...s)=>n.prevSlide&&n.prevSlide(...s))},"Prev"),e("button",{onClick:t[2]||(t[2]=(...s)=>n.nextSlide&&n.nextSlide(...s))},"Next")])}const L=d(v,[["render",A],["__scopeId","data-v-43638f9f"]]);export{L as default};