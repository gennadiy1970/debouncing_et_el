const getScrollYD = document.querySelector('.getScrollYD')
const getScrollYN = document.querySelector('.getScrollYN')

function updateData () {
    getScrollYD.textContent = window.pageYOffset;
}
function updateDataDefault () {
    getScrollYN.textContent = window.pageYOffset;
}
window.addEventListener('scroll', _.debounce(updateData, 100))
window.addEventListener('scroll', updateDataDefault)

updateData();
updateDataDefault();