
const image = document.getElementById("cookie");
const elementCookieCounter = document.getElementById("clicker__counter");

image.width = 200;

function changeSizes() {
    elementCookieCounter.textContent ++; 
    if(elementCookieCounter.textContent%2 === 0) {
    image.width = 200;
    
    } else {
        image.width = 250;
        }
}
image.onclick = changeSizes;

