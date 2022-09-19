const icon = document.querySelector('.close_img')
const menu = document.querySelector('.nav_menu')
const nav = document.querySelector('.nav')

icon.addEventListener('click', ()=>{
    menu.classList.toggle('open')
    icon.classList.toggle('turn')
    nav.classList.toggle('bg')
})