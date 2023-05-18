const turnOn= document.getElementById ("turnOn");
const turnOoff= document.getElementById ("turnOff");
const lamp= document.getElementById ("lamp");

function isLampBroken () {
    return lamp.src.indexOf ("quebrada") -1
}


function lampO () {
    if (isLampBroken () ) { 
        lamp.scr="./.img/ligada.jpg";   
    }
}

function lampOff () {
    if (isLampBroken () ) {
        lamp.scr="./.img/desligada.jpg";
    }
 }

function lampBroken () {
        lamp.src = "./img/quebrada.jpg";
}


turnOn.addEventListener ("click", lampOn);
turnOoff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ('dblclick ', lampBroken);