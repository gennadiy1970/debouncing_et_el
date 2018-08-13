const box = document.querySelector('.box')
const box__width = document.querySelector('.box__width')
const box__height = document.querySelector('.box__height')


box__width.textContent = window.getComputedStyle(box).width;
box__height.textContent = window.getComputedStyle(box).height;