let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let btn = ["yellow","red","purple","green"];

let body = document.querySelector("body");
let heading = document.querySelector("h3");

function flash(btnm){
    btnm.classList.add("flash");
    setTimeout(function(){
        btnm.classList.remove("flash");
    },200);
}
function levelUp(){
    userSeq =[];
    level++;
    heading.innerText=`Level = ${level}`;
    let random = Math.floor(Math.random()*3);
    let randombtn = btn[random];
    let randomstr = document.querySelector(`.${randombtn}`); 
    console.log(randombtn);
    flash(randomstr);
    gameSeq.push(randombtn);
    console.log(gameSeq);
}

body.addEventListener("keypress", function () {
    if (started == false) {
        heading.innerText = "Game Start";
        started = true;
        console.log("Game Started");
        levelUp();
    }
})

function checkAns(){
    let inx =level-1;
    if(userSeq[inx]===gameSeq[inx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
        console.log("succes");
        console.log("succes");
    }else{
        heading.innerText="Game Over";
        console.log("Better Luck Next Time");
        console.log("Akshat Verma");
        console.log("For Git Commit");
        reset();
    }
}
function buttonPress(){
    console.log("Button Press");
    let fl = this;
    flash(fl);
    idd = fl.getAttribute("id");
    userSeq.push(idd);
    console.log(userSeq)
    checkAns();
}
let allbtn = document.querySelectorAll(".block");
for(nnn of allbtn){
    nnn.addEventListener("click",buttonPress);
}
function reset(){
    let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
console.log("reset invoked");
}