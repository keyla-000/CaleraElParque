(function(){
const openButton = document.querySelector(".nav_menu");
const menu = document.querySelector(".nav_link");
const closeMenu = document.querySelector(".nav_close");


openButton.addEventListener("click",()=>{
menu.classList.add("nav_link--show");
});
closeMenu.addEventListener("click", ()=>{
    menu.classList.remove("nav_link--show")
})
})()



// window.addEventListener("scroll",function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("abajo",this.window.scrollY > 0);

// })
// function alternar(){
//    var header = document.querySelector("header");
//    header.classList.toggle("active") 
// }