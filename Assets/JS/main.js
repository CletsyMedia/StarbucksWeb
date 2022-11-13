// Header background
const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scroll-header', window.scrollY > 0)
  })

// Mobile Menu
let menu = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');
let nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.add('active')
})
close.addEventListener('click', () => {
    nav.classList.remove('active')
})



function imgSlider(slides){
    document.querySelector('.starbucks').src = slides;
}
// Change the colors too
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
