//모바일환경 서브메뉴 호버이벤트 제거
function onSizeChange(){
    
   if(window.innerWidth<1025){
    header.removeEventListener("mouseover",onMouseOver)
   }else{
    header.addEventListener("mouseover",onMouseOver)
   }
    
}
window.addEventListener("resize",onSizeChange) // 제거 end

const hambergerBtn = document.querySelector(".hamberger_btn")
const mobileGnb = document.querySelector(".mobile_gnb")
const closeBtn = document.querySelector(".close_btn")
const gnbMenuTitle = document.querySelectorAll(".mobile_nav_title")
const gnbSubMenu = document.querySelectorAll(".mobile_nav_submenu")


gnbMenuTitle.forEach((el,index)=>{
   el.addEventListener("click",function(e){
      const arrow = e.target.children
      arrow[0].classList.toggle("active")
      gnbSubMenu[index].classList.toggle("active")
   })
})
function onHbtnClick(){
   mobileGnb.classList.add("active")
}
hambergerBtn.addEventListener("click",onHbtnClick)
function onCbtnClick(){
   mobileGnb.classList.remove("active")
}
closeBtn.addEventListener("click",onCbtnClick)