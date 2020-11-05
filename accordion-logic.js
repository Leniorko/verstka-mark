var accordionBtns = document.getElementsByClassName("FAQ__accordion-btn")
var i

for (var i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', function(){
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
}