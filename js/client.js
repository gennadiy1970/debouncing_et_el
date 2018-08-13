const box = document.querySelector(".box");
const boxHeight = document.querySelector(".box-height");
const boxWidth = document.querySelector(".box-width");
const boxTop = document.querySelector(".box-top");
const boxLeft = document.querySelector(".box-left");

function setData() {
    boxHeight.textContent = box.clientHeight;
    boxWidth.textContent = box.clientWidth;
    boxTop.textContent = box.clientTop;
    boxLeft.textContent = box.clientLeft;
}

setData();

window.addEventListener('resize', setData)
window.addEventListener('scroll', setData)