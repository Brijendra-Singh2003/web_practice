let currPage;
let main;
let head;
function initiate() {
    head = document.getElementById("header");
    main = document.getElementById("main");
    currPage = document.getElementById("home");
    currPage.style.borderBottom = '7px solid rgb(26, 255, 0)';
    currPage.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.196))';
    // home();
}

function pageChange(h) {
    currPage.style.borderBottom = 'none';
    currPage.style.backgroundImage = 'none';
    h.style.borderBottom = '7px solid rgb(26, 255, 0)';
    h.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.196))';
    currPage = h;
}


function home() {
    head.innerHTML = `
    <div class="menu_icon" onclick="myFunction(this)">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="home_menu menu">
    <a href="./images/Batman_logo_PNG13.png" target="_blank">Settings</a><hr>
    <a href="./images/Batman_logo_PNG13.png" target="_blank">About</a><hr>
    <a href="./images/Batman_logo_PNG13.png" target="_blank">Contact us</a>
    </div>
    </div>
    <div class="search flex">
    <input type="text" name="search" placeholder="search" id="search" onclick="tap(this)" class="search_bar">
    <button type="submit" class="search_button"></button>
    </div>
    <img src="./images/Batman_logo_PNG13.png" alt="profile" class="logo">
    `;
    main.innerHTML = `
        <div class="flex banner" class="main">
            <div class="prev"></div>
            <div class="recomend">
            <div class="slide slide1"></div>
            <div class="slide slide2"></div>
            <div class="slide slide3"></div>
            <div class="slide slide4"></div>
            <div class="dots">
            <div class="dot1"></div>
            <div class="dot2"></div>
            <div class="dot3"></div>
            <div class="dot4"></div>
            </div>
            </div>
            <div class="next"></div>
        </div>
    `;
}


function tochat() {
    const hd = document.getElementById("hd");
    hd.innerHTML = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styl.css">
    <script src="./main.js"></script>
    <title>anime</title>`;
    console.log(hd.innerHTML);
    const body = document.getElementById("body");
    body.innerHTML = `
    <div class="bg"></div>
  
    <header class="flex" id="header"></header>
      
    <main id="main"></main>

    <footer class="flex">
        <div class="home" id="home" onclick="home(), pageChange(this)"></div>
        <div class="feed" onclick="feed(), pageChange(this)"></div>
        <div class="notification" onclick="notification(), pageChange(this)"></div>
        <div class="chats" id="id" onclick="chats(), pageChange(this)"></div>
    </footer>
  `;
  initiate();
  pageChange(document.getElementById("id"));
  chats();
}

function chats() {
    head.innerHTML = `
        <h1 id="chat_header">Chats</h1>
        <div class="menu_icon" onclick="myFunction(this)">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="chat_menu menu">
                <a href="./images/Batman_logo_PNG13.png" target="_blank">Settings</a>
                <hr>
                <a href="./images/Batman_logo_PNG13.png" target="_blank">About</a>
                <hr>
                <a href="./images/Batman_logo_PNG13.png" target="_blank">Contact us</a>
            </div>
        </div>
        `;
        main.innerHTML = `<div class="chat_list flex">`;
        for(let i=1; i<=10; i++) {
            main.innerHTML += `
        <a class="chat" onclick="chatClick(this)">
        <div class="dp flex"><img src="./images/Batman_logo_PNG13.png" alt="dp"></div>
        <div class="name flex">Person-${i}</div>
        <div class="last_m">last massage with ${i}</div>
        </a>
        `;
    }
    main.innerHTML += `<div class="footer_placeholder"></div></div><div class="new_chat flex"><div class="bar b1"></div><div class="bar b2"></div></div></div>`;
}
//  href="./chat.html" target="_blank"
function feed() {
    head.innerHTML = `
    <h1 id="chat_header">Feed</h1>
    <div class="menu_icon" onclick="myFunction(this)">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="chat_menu menu">
          <a href="./images/Batman_logo_PNG13.png" target="_blank">Settings</a>
          <hr>
          <a href="./images/Batman_logo_PNG13.png" target="_blank">About</a>
          <hr>
          <a href="./images/Batman_logo_PNG13.png" target="_blank">Contact us</a>
        </div>
    </div>
    `;
    main.innerHTML = ``;
}
function notification() {
    head.innerHTML = `
    <h1 id="chat_header">Notifications</h1>
    <div class="menu_icon" onclick="myFunction(this)">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="chat_menu menu">
          <a href="./images/Batman_logo_PNG13.png" target="_blank">Settings</a>
          <hr>
          <a href="./images/Batman_logo_PNG13.png" target="_blank">About</a>
          <hr>
          <a href="./images/Batman_logo_PNG13.png" target="_blank">Contact us</a>
        </div>
    </div>
    `;
    main.innerHTML = ``;
}
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

function chatClick(chat) {
    const name = chat.childNodes[3].innerHTML;
    console.log(name);
    const hd = document.getElementById("hd");
    hd.innerHTML = `<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="chat.css">
    <script src="./main.js"></script>
    <title>anime</title>`;
    console.log(hd.innerHTML);
    const body = document.getElementById("body");
    body.innerHTML = `<header>
    <div class="back" onclick="tochat()"></div>
    <img src="../images/Batman_logo_PNG13.png" alt="" class="dp">
    <div class="name" id="name">${name}</div>
</header>
<main id="main"></main>
<footer>
    <input type="text" name="" id="input" class="input" onsubmit="send()" placeholder="Message">
    <button class="send input" onclick="send()"></button>
</footer>`;
}