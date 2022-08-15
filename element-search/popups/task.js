
const elementMain = document.getElementById("modal_main");
elementMain.classList.add("modal_active");

const elementSuccess = document.querySelector(".show-success");

const elementClose = document.querySelectorAll(".modal__close");

elementClose.forEach((item) => 
item.onclick = function() {
    if(item.closest(".modal_active")) {
        item.closest(".modal_active").classList.remove("modal_active") 
        }
    }
)

elementSuccess.onclick = function() {
    const modalSuccess = document.getElementById("modal_success");
    elementMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");    
 console.log(modalSuccess.classList); 
}