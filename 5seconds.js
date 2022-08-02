let counter = 5;
let intervalId = null;
let c = 0;
let clicks = 0;
let cps = 0;

function cpss(){
    cps = Math.round(clicks/c*100)/100;
    document.getElementById('CPS').innerHTML = "CPS: " + cps;
}

function finish() {
    clearInterval(intervalId);	
    document.getElementById("bip").innerHTML = counter + "s";
    window.lesClics = undefined;
    document.getElementById("end").innerHTML = 'End';
}
function bip() {
    counter--;
    c++;
    if(counter == 0){
        finish();
    }
    else {	
        document.getElementById("bip").innerHTML = counter + "s";
    }	
}
function start(obj){
    bip();
    intervalId = setInterval(bip, 1000);
    obj.onclick = "";
    setInterval(cpss,100)
}	
function finit(){
    window.location.reload();
}

function lesClics(){
    clicks+=1;
    document.getElementById('clicks').innerHTML = "Clicks: " + clicks;
}




