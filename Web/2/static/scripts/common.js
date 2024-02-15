var navBtns = document.getElementsByClassName("navbtn");
var navHidden = false;

function Unhide(){
    let hamburgerBtn = document.getElementById("hamburger");
    let navbar = document.getElementById("navbar");
    if(navHidden){
        navbar.style.flexDirection = "row";
        for (i=0; i<= navBtns.length - 1; i++){
            navbutton = navBtns[i];
            navbutton.style.display = "none";
            navbutton.style.width = "50%";
            navbutton.removeAttribute("style");
        }
        hamburgerBtn.innerHTML = "☰";
        navHidden = false;
    }
    else{
        navbar.style.flexDirection = "column";
        for (i=0; i<= navBtns.length - 1; i++){
            navbutton = navBtns[i];
            navbutton.style.display = "block";
        }
        hamburgerBtn.innerHTML = "✖";
        navHidden = true;
    }
}