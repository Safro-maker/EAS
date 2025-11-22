const boxes = document.querySelector("div");
const btn = document.querySelector("button");
boxes.style.width = "640px";
boxes.style.height = "640px";
for(let i=0;i<16*16;i++){
    const square = document.createElement("div")
    square.style.width = `40px`;
    square.style.height = `40px`;
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    boxes.appendChild(square);
}
btn.textContent = "Quantity";
btn.addEventListener("click", () => {
    let p=Number(prompt("Quantity?(1-100)", " "))
    if (p>0&&p<101) {boxes.innerHTML = "";
    let z=parseInt(boxes.style.width, 10);
    while(z%p!==0) {
        z+=1;
        boxes.style.width = z + `px`;
        boxes.style.height = z + `px`;
    }
    const cellSize=z/p;
    for(let i=0;i<p*p;i++){
    const square = document.createElement("div")
    square.style.width = cellSize + `px`;
    square.style.height = cellSize + `px`;
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    boxes.appendChild(square);
    }
    }
});