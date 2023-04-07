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

function chatClick(chat) {
    let info = chat.childNodes;
    console.log(info[1]);
    let name = chat.childNodes[3].innerHTML;
    console.log(name);
    head.style.height = "10vh";
    head.innerHTML = `
        <div class="dp flex">${info[1].innerHTML}</div>
        <div class="search flex">${name}</div>
    `;
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
    main.innerHTML = `
    <div class="chat_list flex">
        <div class="chat" onclick="chatClick(this)">
            <div class="dp flex"><img src="./images/Batman_logo_PNG13.png" alt="dp"></div>
            <div class="name flex">Brijendra</div>
            <div class="last_m">last massage</div>
        </div>
        
        <div class="chat" onclick="chatClick(this)">
            <div class="dp flex"><img src="#" alt="dp"></div>
            <div class="name flex">Uttam</div>
            <div class="last_m">last massage</div>
        </div>
        
        <div class="chat" onclick="chatClick(this)">
            <div class="dp flex"><img src="#" alt="dp"></div>
            <div class="name flex">Paras</div>
            <div class="last_m">last massage</div>
        </div>
        
        <div class="chat" onclick="chatClick(this)">
            <div class="dp flex"><img src="#" alt="dp"></div>
            <div class="name flex">Harshad</div>
            <div class="last_m">last massage</div>
        </div>
        
    </div>

    <div class="new_chat"></div>
    `;
}
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