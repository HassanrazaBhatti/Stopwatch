/*var msec =0;
var mcount= document.getElementById("msec");
var interval;
function timer(){
    msec++
    mcount.innerHTML = msec;
}

interval = setInterval(timer,10)
*/
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;
function timer(){
    msec++
msecHeading.innerHTML = msec;
if(msec >=100){
sec++
secHeading.innerHTML =sec
msec=0
}
else if(sec >=60){
    min++
    sec=0
    minHeading.innerHTML = min;
}
}
function start(){
interval = setInterval(timer,10) 
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML =min;
    secHeading.innerHTML =sec;
    msecHeading.innerHTML =msec;
    stop();
}
