const box = document.querySelector(".box");
const box__top = document.querySelector(".box__top");
const box__right = document.querySelector(".box__right");
const box__bottom = document.querySelector(".box__bottom");
const box__left = document.querySelector(".box__left");
const box__width = document.querySelector(".box__width");
const box__height = document.querySelector(".box__height");

function setData() {
  box__top.textContent = box.getBoundingClientRect().top;
  box__right.textContent = box.getBoundingClientRect().right;
  box__bottom.textContent = box.getBoundingClientRect().bottom;
  box__left.textContent = box.getBoundingClientRect().left;
  box__width.textContent = box.getBoundingClientRect().width;
  box__height.textContent = box.getBoundingClientRect().height;
}

setData();

window.addEventListener('resize', setData)
window.addEventListener('scroll', setData)