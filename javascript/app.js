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


var boy_shadow = document.getElementById('boy_shadow')


cover.addEventListener('mousemove',(e)=>{
    image.style.transform = "translateX("+ - e.offsetX/30+"px) translateY("+ - e.offsetY/30+"px) "
    name_svg.style.transform = "translateX("+ - e.offsetX/60+"px) translateY("+ - e.offsetY/60+"px) rotateZ(-10deg) "


})

/*
boy.addEventListener('mousemove',(e)=>{
    boy_shadow.style.transform = " skewX("+ - e.offsetY/30+"deg) "

})*/
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
