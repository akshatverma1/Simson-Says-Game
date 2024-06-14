let gameSeg = [];
let userSeq = [];
let level = 0;
let started = false;


let body = document.querySelector("body");
let heading = document.querySelector("h3");

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function levelUp(){
    level++;
    heading.innerText=`Level = ${level}`;
    flash();
}

body.addEventListener("keypress", function () {
    if (started == false) {
        heading.innerText = "Game Start";
        started = true;
        console.log("Game Started");
        levelUp();
    }
})