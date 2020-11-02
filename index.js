function addNewList() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    if(inputValue === ' ') {
        alert("YUM BICHEECHEE!!!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    li.appendChild(t);
    document.getElementById("myInput").value = " ";
}

function deleteElem() {
    
}