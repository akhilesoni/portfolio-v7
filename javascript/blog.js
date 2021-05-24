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

var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')


/*
boy.addEventListener('mousemove',(e)=>{
    boy_shadow.style.transform = " skewX("+ - e.offsetY/30+"deg) "

})*/

window.onscroll = () =>{
    if(window.scrollY>100){
        menu.style.backgroundColor = "white"
        a.style.color = "black"
        b.style.color = "black"
        c.style.color = "black"


    }else{
        menu.style.backgroundColor = "transparent"
        a.style.color = "white"
        b.style.color = "white"
        c.style.color = "white"

    }
}
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
