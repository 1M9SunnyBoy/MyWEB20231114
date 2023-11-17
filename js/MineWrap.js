let draggablebox;

window.addEventListener ('DOMContentLoaded', function () {
    const dragElements = document.querySelectorAll('.draggablebox');
    console.log(dragElements);

    for (let i = 0; i < dragElements.length; i++){
        draggablebox = dragElements[i];
        console.log(draggablebox);
        draggablebox.addEventListener("mousedown", () => {
            document.addEventListener("mousemove", onDrag);
            document.addEventListener("mouseup", ()=>{
                document.removeEventListener("mousemove", onDrag);               
            })
        })         
    }
})

function onDrag(e){
    // const draggableboxs = d;
    console.log(draggablebox);

    let oddStyle = window.getComputedStyle(draggablebox);

    let left = parseFloat(oddStyle.left);
    let top = parseFloat(oddStyle.top);
    draggablebox.style.left = `${left+e.movementX}px`
    draggablebox.style.top = `${top+e.movementY}px`

    console.log(left ,'=', top);
}