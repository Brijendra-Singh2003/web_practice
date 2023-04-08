function send() {
    const d = document.getElementById("input").value;
    if(d == '') return;
    document.getElementById("input").value = '';
    const temp = document.getElementById("main");
    temp.innerHTML += `<div class="massage sent">${d}</div>`;
    temp.scrollTo(0,temp.scrollHeight);
}

function key(t) {
    if(t.keyCode == 13) 
    send();
}

function load() {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
    // Retrieve
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    } else {
    document.getElementById("result").innerHTML = "Browser does not support Web Storage.";
    }
    const temp = document.getElementById("main");
    temp.scrollTo(0,temp.scrollHeight);
}