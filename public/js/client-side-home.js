//elements from the page

// const $homeLink = document.querySelector('#home-link')
const $timesTablesLink = document.querySelector('#times-tables-link')
const $divisionLink = document.querySelector('#division-link')
const $additionLink = document.querySelector('#addition-link')
const $subtractionLink = document.querySelector('#subtraction-link')
const $advancedLink = document.querySelector('#advanced-link')

//setting up links between the pages

// $homeLink.addEventListener('click', function (e) {
//     location.assign('/index.html')
// })

$timesTablesLink.addEventListener('click', function (e) {
    location.assign('times-tables.html')
})

$divisionLink.addEventListener('click', function (e) {
    location.assign('division.html')
})

$additionLink.addEventListener('click', function (e) {
    location.assign('addition.html') })


$subtractionLink.addEventListener('click', function (e) {
    location.assign('subtraction.html') })


$advancedLink.addEventListener('click', function (e) {
    location.assign('advanced.html')
})
