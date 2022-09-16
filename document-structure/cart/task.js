const cart = document.querySelector(".cart__products");
const product = Array.from(document.querySelectorAll(".product"));
let arr = product.map((elem) => elem.getAttribute("data-id"));
//console.log(arr);

getInfoAboutItem = (item) => {

    const productControls = item.querySelector(".product__controls");    
    const quantityValue = productControls.querySelector(".product__quantity-value");    
    const ProductImage = item.querySelector(".product__image").src;
    const quantityControls = item.querySelectorAll(".product__quantity-control");
    const dataId = item.getAttribute("data-id");

    quantityControls.forEach((item) => {
        item.addEventListener('click', (event) => {
            if(event.target.classList.contains("product__quantity-control_dec")) {
            if(quantityValue.textContent > 1) { 
                quantityValue.innerHTML = +quantityValue.textContent - 1;
            } 
            } else {
                quantityValue.innerHTML = +quantityValue.textContent + 1; // почему + ?
            }
            });
        });

    const btnAdd = productControls.querySelector(".product__add");
    btnAdd.addEventListener('click', (event) => {
        const div = document.createElement("div");
        div.classList.add("cart__product");
        div.setAttribute("id", dataId);
        div.innerHTML = `
            <img class="cart__product-image" src=${ProductImage}>
            <div class="cart__product-count">${quantityValue.textContent}</div>
        `;

        const elemId = arr.find((elem) => elem === dataId)
        if(document.getElementById(elemId)) {
            const foundElem = document.getElementById(elemId);
            console.log(foundElem)
            const prevValue = foundElem.querySelector(".cart__product-count").textContent;
            console.log(prevValue);
            foundElem.querySelector(".cart__product-count").innerHTML = +quantityValue.textContent + (+prevValue);            
        } else {
            cart.appendChild(div);
        }
    });
};

product.forEach((item) => {
    getInfoAboutItem(item);
});

