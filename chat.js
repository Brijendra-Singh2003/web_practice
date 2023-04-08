function send() {
    const d = document.getElementById("input").value;
    if(d == '') return;
    document.getElementById("input").value = '';
    const temp = document.getElementById("main");
    temp.innerHTML += `<div class="massage sent">${d}</div>`;
    temp.scrollTo(0,temp.scrollHeight);
}

function scrol() {
    const temp = document.getElementById("main");
    temp.scrollTo(0,temp.scrollHeight);
}