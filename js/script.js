let $ = document
let menu = $.querySelector('.context-menu')

window.addEventListener('contextmenu',function (event) {
    event.preventDefault()
    console.log(event);
    menu.style.display= 'block'
    menu.style.top = event.pageY + 'px'
    menu.style.left = event.pageX + 'px'
})
window.addEventListener('click' ,function(){
    menu.style.display= 'none'
})
window.addEventListener('keydown' ,function(event){
    if (event.which === 27) {
        menu.style.display= 'none'
    }
})