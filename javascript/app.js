var nav = document.getElementById('navbar')
var animation = document.getElementById('animation')


window.addEventListener('scroll',()=>{
    if(window.scrollY>1000){
        nav.style.display = "none"
        animation.style.transform = 'translateX(100px)'
        animation.style.opacity = 0
    }else{
        nav.style.display = "block"
        animation.style.transform = 'translateX(0px)'
        animation.style.opacity = 1
    }
})