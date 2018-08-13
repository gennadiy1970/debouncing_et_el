const getScrollX = document.querySelector('.getScrollX')
const getScrollY = document.querySelector('.getScrollY')
const elemTXT = document.querySelector('.txtElem')
const positionTxtElem = document.querySelector('.positionTxtElem')
const positionWinY = document.querySelector('.positionWinY')
const sum = document.querySelector('.sum')
const scrollTo = document.getElementById('scrollTo')
const scrollByPlus = document.getElementById('scrollByPlus')
const scrollByMinus = document.getElementById('scrollByMinus')
const elem = document.querySelector('.showScrollOfElement')


function updateData () {
    getScrollX.textContent = window.pageXOffset;
    getScrollY.textContent = window.pageYOffset;
    positionTxtElem.textContent = elemTXT.getBoundingClientRect().top;
    positionWinY.textContent = window.pageYOffset;
    sum.textContent = elemTXT.getBoundingClientRect().top +  window.pageYOffset;
}

window.addEventListener('scroll', _.throttle(updateData, 100))
// window.addEventListener('scroll', _.debounce(updateData, 100))

updateData();

scrollByPlus.addEventListener('click', setByPlus, false);
scrollByMinus.addEventListener('click', setShiftMinus, false);

function setByPlus () {
    window.scrollBy({
        top: 10,
        behavior: "smooth"
    })
} 

function setShiftMinus () {
    window.scrollBy({
        top: -10,
        behavior: "smooth"
    })
} 

scrollTo.addEventListener('click',setShiftTo, false)

function setShiftTo () {
    window.scrollTo({
        top: 10,
        behavior: "smooth"
    })
}