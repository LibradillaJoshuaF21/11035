let nodeDoList = document.getElementsByTagName("li");
let i;

for (i = 0; i < nodeDoList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("Remove");
    span.className = "removeBtn";
    span.appendChild(txt);
    nodeDoList[i].appendChild(span);
}

let removeItem = document.getElementsByClassName("removeBtn");
for (i = 0; i < removeItem.length; i++) {
    removeItem[i].onclick = function () {
        let div = this.parentElement();
        div.style.display = "none";
    }
}

let theList = document.querySelector('ul');
theList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked");
    }
}, false);


function newItem() {
    let item = document.createElement("li");
    let input = document.getElementById("inputBox").value;
    let txt = document.createTextNode(input);
    item.appendChild(txt);
    if (input === '' || !input.replace(/\s/g, '').length) {
        alert("What? Nothing to do?");
    } else {
        document.getElementById("doList").appendChild(item);
    }
    document.getElementById("inputBox").value = "";

    let span = document.createElement("span");
    let txt2 = document.createTextNode("Remove");
    span.className = "removeBtn";
    span.appendChild(txt2);
    item.appendChild(span);

    for (i = 0; i < removeItem.length; i++) {
        removeItem[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
