const header = document.querySelector("header")
const subMenu = document.querySelector(".submenu")
const gnbBackground = document.querySelector(".submenu_background")
const a = document.querySelectorAll(".swiper a")
console.log(a)
function onMouseOver(){
    console.log(subMenu)
    console.log(gnbBackground)
    subMenu.style.display="flex"
    gnbBackground.style.display="block"
}
function onMouseOut(){
    subMenu.style.display="none"
    gnbBackground.style.display="none"
}

for(var i = 0;i<a.length;i++){
    a[i].addEventListener("click",(e)=>{
        e.preventDefault()
    })
}
header.addEventListener("mouseover",onMouseOver)
header.addEventListener("mouseout",onMouseOut)




