window.addEventListener.onload('DOMContentLoaded', function(){
    const draggableboxs = document.querySelectorAll('.draggablebox')

    for(let i = 0; i < draggableboxs.length; i++){

        console.log(draggableboxs[i] + '  ' + draggableboxs[i].style.top)
        draggableboxs[i].style.top = `${Math.random(-30, 30)}px`
    }    
})