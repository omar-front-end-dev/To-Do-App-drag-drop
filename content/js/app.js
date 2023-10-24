const formElement = document.querySelector(".formElement");
const btnAdd = document.querySelector(".add_task");
const inputAdd = document.querySelector(".input_add");
const boxes = document.querySelectorAll(".box__content");
const boxText = document.querySelectorAll(".box__text");
let drag = null;

formElement.addEventListener("submit", (e) =>{
    e.preventDefault(e)
    if(inputAdd.value !=""){
        boxText[0].innerHTML+= `<p class="item" draggable="true">${inputAdd.value}</p>`
    }
    inputAdd.value="";
    dragItem()
})




function dragItem() {
    let items = document.querySelectorAll(".item");
    items.forEach(p =>{
        p.addEventListener("dragstart", () =>{
            drag = p
            p.style.opacity = "0.5"
        })
        p.addEventListener("dragend", () =>{
            drag = null
            p.style.opacity = "1"
        })
    })
    boxes.forEach(box=>{
        box.addEventListener("dragover", (e) =>{
            e.preventDefault()
            box.style.background = "#000"
            box.style.color = "#fff"
        })
        box.addEventListener("dragleave", () =>{
            box.style.background = "#fff"
            box.style.color = "#000"
        })
        box.addEventListener("drop", () =>{
            box.append(drag)
            drag.style.background = "linear-gradient(to left, #9317ff, #e100ff)";
            drag.style.padding = "20px 10px";
            drag.style.margin = "10px 0";
            box.style.background = "#fff"
            box.style.color = "#000"
        })
    })
}