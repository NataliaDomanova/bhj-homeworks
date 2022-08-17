const elementLeft = document.querySelector(".slider__arrow_prev");
//console.log(elementLeft);
const elementRight = document.querySelector(".slider__arrow_next");
//console.log(elementRight);

let i = 0;
elementRight.onclick = function() {
    const elementItems = document.querySelectorAll(".slider__item");
    const arr = Array.from(elementItems); 
    arr[i].classList.remove("slider__item_active");
    i ++;
    if(i == arr.length) {
        i = 0;   
    }
    
    arr[i].classList.add("slider__item_active");
    //console.log(i);
} 

elementLeft.onclick = function() {
    const elementItems = document.querySelectorAll(".slider__item");
    const arr = Array.from(elementItems);
    arr[i].classList.remove("slider__item_active");
    i --;  
    if(i < 0) {
        i = arr.length - 1;   
    }
    
    arr[i].classList.add("slider__item_active");
//    console.log(i);

}
