document.getElementById("button").addEventListener("click", show_menu);
document.getElementById("back_menu").addEventListener("click", hide_menu);
document.getElementById("btn_menu").addEventListener("click", show_navbar);


table = document.getElementById("table");
background_menu = document.getElementById("back_menu");
const nav = document.getElementById("navbarul");

var activate = false;

function show_navbar() {

    if(activate==false) {
        nav.style.display="block";
        activate=true;
    }
    else {
        nav.style.display="none";
        activate=false;
    }
    
}

function show_menu() {
    if(window.matchMedia("(max-width: 700px)").matches) {
        nav.style.display="none";
    }
    table.style.right = "0px";
    background_menu.style.display="block";
}

function hide_menu() {
    table.style.right = "-350px";
    background_menu.style.display="none";
    if(window.matchMedia("(max-width: 700px)").matches) {
        nav.style.display="none";
    }
}

