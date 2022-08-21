const val = document.querySelector('.dropdown__value');
//console.log(val);
const menu = document.querySelector('.dropdown__list');
//console.log(menu);
const items = document.querySelectorAll('.dropdown__item');
//console.log(items);
const links = document.querySelectorAll('.dropdown__link');
//console.log(links);


function buttonClick1() {
    //menu.classList.add('dropdown__list_active');
    menu.classList.toggle('dropdown__list_active'); 
    
}
val.addEventListener('click', buttonClick1);



links.forEach((link) => {
    func1 = function(event) {
        val.textContent = link.textContent;
        event.preventDefault();
    }
    
    func2 = function() {
        menu.classList.remove('dropdown__list_active');
    }
    
    link.closest('.dropdown__item').addEventListener('click', func1);

    link.closest('.dropdown__item').addEventListener('click', func2);
})   


