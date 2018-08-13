const btn = document.querySelector('.box__to-zero')
const resize = document.querySelector('.box__resize')
const scroll = document.querySelector('.box__scroll')

const current = {
    resize: 0,
    scroll: 0
}    

window.addEventListener('resize', function(){
    current.resize += 1;
    resize.textContent = current.resize;
})    
window.addEventListener('scroll', function(){
    current.scroll += 1;
    scroll.textContent = current.scroll;
})    

btn.addEventListener('click', function() {
    current.resize = 0;
    current.scroll = 0;
    resize.textContent = current.resize;
    scroll.textContent = current.scroll;
})