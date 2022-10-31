let stars = document.getElementById('star')
let moon = document.getElementById('moon')
let mountains_front = document.getElementById('mountains_front')
let mountains_behind = document.getElementById('mountains_back')
let hi_there = document.getElementById('header-text')
let btn = document.getElementById('btn')

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    moon.style.top = (scroll * .9) + 'px'
    stars.style.left = scroll + 'px'
    mountains_behind.style.top = (scroll * .2) + 'px'
    hi_there.style.marginRight = (scroll * 2.3) + 'px'
    btn.style.marginTop = (scroll * 1.5) + 'px'
})


