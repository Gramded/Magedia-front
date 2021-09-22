let parentBlock = document.getElementById('parent-block');
let selectorsParent = document.getElementsByClassName('js-parent-selector');
let selectorsChild = document.getElementsByClassName('js-child-selector');
let btnAddBlock = document.getElementById('add-block');

[...selectorsChild].forEach( select => {
   select.addEventListener("change", changeStyle);
});

[...selectorsParent].forEach( select => {
    select.addEventListener("change", changeStyle);
});

btnAddBlock.addEventListener("click", addBlockFun);

function addBlockFun() {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('child-block');

    let span = document.createElement("span");

    let delBtn = document.createElement("button");
    delBtn.innerText = 'X';
    delBtn.classList.add('del-btn');
    delBtn.addEventListener("click", delBlockFun);

    parentBlock.append(blockDiv);
    blockDiv.append(span);

    let children = [...parentBlock.children];

    span.innerText = children.length;
    blockDiv.append(delBtn)
}

function changeStyle(event) {
    let parent = event.target;
    let child = document.querySelector(`[data-child='${parent.dataset.parent}']`)

    addStyleValue(child, parent.dataset.style, parent.value)
}

function addStyleValue(el, style, value) {
    el.style[style] = value
}

function delBlockFun(event) {
    parentBlock.removeChild(event.target.parentElement)
    newNumberFun()
}

function newNumberFun() {
    [...parentBlock.children].forEach( block => {
        block.firstChild.innerText = [...parentBlock.children].indexOf(block) + 1
    })
}