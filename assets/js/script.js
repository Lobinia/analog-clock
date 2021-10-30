let digitalElement = document.querySelector('.digital');
let sPointer = document.querySelector('.p_s');
let mPointer = document.querySelector('.p_m');
let hPointer = document.querySelector('.p_h');

function updateClock(){
    let actualTime = new Date();
    let formattedTime = actualTime.toLocaleTimeString();
    let seconds = actualTime.getSeconds();
    let minutes = actualTime.getMinutes();
    let hours = actualTime.getHours();
    
    
    digitalElement.innerHTML = formattedTime;

    sPointer.style.transform = `rotate(${seconds*6-90}deg)`;
    mPointer.style.transform = `rotate(${minutes*6-90}deg)`;
    hPointer.style.transform = `rotate(${hours*30-90}deg)`;

}


updateClock();

let clockTick = setInterval(updateClock, 1000);