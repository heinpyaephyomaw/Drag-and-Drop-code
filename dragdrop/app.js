const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


// fill listner
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//Drag function
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}


//loop empties and call drag event
for (let x of empties) {
    x.addEventListener('dragover', dragOver);
    x.addEventListener('dragenter', dragEnter);
    x.addEventListener('dragleave', dragLeave);
    x.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
    console.log("over");
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(e) {
    e.preventDefault();
    this.className = 'empty';
}

function dragDrop(e) {
    e.preventDefault();
    this.className = 'empty';
    this.append(fill);
    console.log("drop");
}