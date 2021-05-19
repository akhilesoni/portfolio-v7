var nav = document.getElementById('navbar')
var animation = document.getElementById('animation')
var app1 =  document.getElementById('app1')
var body = document.getElementById('body')


var description = document.getElementById('description')
var button = document.getElementById('open_mobile_button')


var is_open = false
button.addEventListener('click',()=>{
    if(is_open){
        description.style.transform = "translateY(500px)"
    
        button.style.backgroundColor = "white"
        button.style.color = "black"
        button.innerText = "Don't Touch It"
        is_open = false
    }else{
        description.style.transform = "translateY(0px)"
    
        button.style.backgroundColor = "red"
        button.style.color = "white"
        button.innerText = "please I request"
        is_open =true
    }
    
})

window.addEventListener('scroll',()=>{
    if(window.scrollY>1000){
        nav.style.opacity = 0
        animation.style.transform = 'translateX(100px)'
        animation.style.opacity = 0
        app1.style.transform = 'translateX(0px)'
        app1.style.opacity = 1

    }
    else if(window.scrollY<1000){
        nav.style.opacity = 1
        animation.style.transform = 'translateX(0px)'
        animation.style.opacity = 1
        app1.style.transform = 'translateX(100px)'
        app1.style.opacity = 0
    }

    
})