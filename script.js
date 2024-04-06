let score=0;
var hitrn;
function makebubble(){
let clutter="";

for (let i = 0; i <= 170; i++) {
    let a=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

let timer=60;
function runTimer(){
  var time=  setInterval(() => {
        if(timer>0){

            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>&nbsp;<h2>Your score is ${score}</h2>`;
        }
    }, 1000);
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;

}
function increaseScore(){
    score +=10;
    document.querySelector("#score").textContent=score;
}
function decreaseScore(){
    score -=5;
    document.querySelector("#score").textContent=score;
}

document.querySelector("#pbtm").addEventListener('click',function(dets){
    let clickedNumber=Number(dets.target.textContent);
  
    if(clickedNumber==hitrn){
        increaseScore();
        getNewHit();
        makebubble();
    }
    else{
            decreaseScore();
    }
})





getNewHit(); 
runTimer();
makebubble();
// increaseScore()