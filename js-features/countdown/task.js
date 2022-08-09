function countdown() {
    let elementTimer = document.getElementById("timer");
    
    if (elementTimer.textContent > 0) {
        elementTimer.textContent --;
    } else {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
   } 
   
}

let timer = setInterval(countdown, 1000);


