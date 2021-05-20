var cover  = document.getElementById('cover')
var image = document.getElementById('image')
var name_svg = document.getElementById('main_name')

cover.addEventListener('mousemove',(e)=>{
    image.style.transform = "translateX("+ - e.offsetX/30+"px) translateY("+ - e.offsetY/30+"px) "
    name_svg.style.transform = "translateX("+ - e.offsetX/60+"px) translateY("+ - e.offsetY/60+"px) rotateZ(-10deg) "


})