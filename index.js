var minutes=00;
var seconds=00;
var tens=00;
var outputTens=document.getElementById("tens");
var outputSeconds=document.getElementById("seconds");
var outputMinutes=document.getElementById("minutes");
var buttonStart=document.getElementById("button-start");
var buttonStop=document.getElementById("button-stop");
var buttonReset=document.getElementById("button-reset");
var interval;
function startTimer() {
    tens++;
    if(tens<9){
        outputTens.innerHTML="0"+tens;
    }
    if(tens>9){
        outputTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        outputSeconds.innerHTML="0" + seconds;
        tens="0";
        outputTens.innerHTML="0" + 0;
    }
    if(seconds>9){
        outputSeconds.innerHTML=seconds;
    }
    if(seconds>60){
        minutes++;
        outputMinutes.innerHTML="0" + minutes;
        seconds="0";
        tens="0";
        outputSeconds.innerHTML="0" +seconds;
        outputTens.innerHTML="0" + tens;
    }
    if(minutes>60){
        outputMinutes.innerHTML=minutes;
    }
}
buttonStart.onclick=function(){
    interval= setInterval(startTimer);
        };
        buttonStop.onclick=function(){
          clearInterval(interval);
        }
        buttonReset.onclick=function(){
            clearInterval(interval);
            tens="00";
            seconds="00";
            outputSeconds.innerHTML=seconds;
            outputTens.innerHTML=tens;
        }



