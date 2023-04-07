let currPage;
let main;
let head;
function initiate() {
    head = document.getElementById("header");
    main = document.getElementById("main");
    currPage = document.getElementById("home");
    currPage.style.borderBottom = '7px solid rgb(26, 255, 0)';
    currPage.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.196))';
    home();
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
            <div class="menu">
                <a href="./images/Batman_logo_PNG13.png" target="_blank">Settings</a><hr>
                <a href="./images/Batman_logo_PNG13.png" target="_blank">About</a><hr>
                <a href="./images/Batman_logo_PNG13.png" target="_blank">Contact us</a>
            </div>
        </div>
        <div class="search flex">
            <input type="text" name="search" plceolder="Search" id="search" onclick="tap(this)" class="search_bar">
            <button type="submit" class="search_button"></button>
        </div>
        <img src="./images/Batman_logo_PNG13.png" alt="profile" class="logo">
    `;
    main.innerHTML = `
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
    `;
}

function chats() {
    head.innerHTML = ``;
    main.innerHTML = ``;
}
function feed() {
    head.innerHTML = ``;
    main.innerHTML = ``;
}
function notification() {
    head.innerHTML = ``;
    main.innerHTML = ``;
}