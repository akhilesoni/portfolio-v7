var cover  = document.getElementById('cover')
var image = document.getElementById('image')
var name_svg = document.getElementById('main_name')

var menu = document.getElementById('menu')

var pg = document.getElementById('pg')
var boy = document.getElementById('boy')

var mobile = document.getElementById('mobile')
var exit = document.getElementById('exit')
var open = document.getElementById('open_mobile')
var connectname = document.getElementById('connect_name')
cover.addEventListener('mousemove',(e)=>{
    image.style.transform = "translateX("+ - e.offsetX/30+"px) translateY("+ - e.offsetY/30+"px) "
    name_svg.style.transform = "translateX("+ - e.offsetX/60+"px) translateY("+ - e.offsetY/60+"px) rotateZ(-10deg) "


})

open.addEventListener('click',()=>{

    mobile.style.transform = "scale(1) translateY(0px)"
    mobile.style.opacity = 1
  

})
window.onload = () => {
    mobile.style.transform = "scale(0) translateY(250px)"
  
}
exit.addEventListener('click',()=>{
    mobile.style.transform = "scale(0) translateY(250px)"
    mobile.style.opacity = 0

})
window.addEventListener('scroll',()=>{
    if(window.scrollY<window.screen.height-200){
        pg.style.opacity = 0
        pg.style.transform = "translateY(100px)"
        menu.style.visibility = 'visible'



    }else{
        pg.style.opacity = 1
        pg.style.transform = "translateY(0px)"
        menu.style.visibility ='hidden'



    }

    if(window.scrollY<window.screen.height+300){
        boy.style.opacity = 0
        boy.style.transform = "scale(0)"

   
     
    }else{
        boy.style.opacity = 1
        boy.style.transform = "scale(1)"




       
    }




})