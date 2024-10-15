const search = document.querySelector('.search')
const close = document.querySelector('#close')

search.addEventListener("click", function() {
    document.querySelector('.child_5_content').style.display = "block"
})

close.addEventListener("click", function () {
    document.querySelector('.child_5_content').style.display = "none"
})