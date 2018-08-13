const element = document.querySelector(".scroll-elem__wrapper");
const elements = document.querySelectorAll(".scroll-elem__wrapper img");

const elementsTops = Array.from(
  elements,
  el => el.getBoundingClientRect().top
).map((el, i, arr) => el - arr[0]);
const current = {
  i: 0
};

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

function next() {
  current.i = (current.i + 1) % elementsTops.length;
  element.scrollTop = elementsTops[current.i];

}
function prev() {
  if (current.i > 0) {
    current.i = (current.i - 1) % elementsTops.length;
    element.scrollTop = elementsTops[current.i];
  }
}


