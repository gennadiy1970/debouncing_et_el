const box__ih = document.querySelector(".box__ih");
const box__iw = document.querySelector(".box__iw");
const box__oh = document.querySelector(".box__oh");
const box__ow = document.querySelector(".box__ow");

function setData() {
    box__ih.textContent = window.innerHeight;
    box__iw.textContent = window.innerWidth;
    box__oh.textContent = window.outerHeight;
    box__ow.textContent = window.outerWidth;
}

setData();

window.addEventListener('resize', setData)