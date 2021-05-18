var nav = document.getElementById('navbar')
var animation = document.getElementById('animation')
var app1 =  document.getElementById('app1')
var body = document.getElementById('body')

window.addEventListener('scroll',()=>{
    if(window.scrollY>1000){
        nav.style.display = "none"
        animation.style.transform = 'translateX(100px)'
        animation.style.opacity = 0
        app1.style.transform = 'translateX(0px)'
        app1.style.opacity = 1
        body.style.backgroundColor = '#009719'

    }
    else if(window.scrollY<1000){
        nav.style.display = "block"
        animation.style.transform = 'translateX(0px)'
        animation.style.opacity = 1
        app1.style.transform = 'translateX(100px)'
        app1.style.opacity = 0
        body.style.backgroundColor = 'black'
    }
})