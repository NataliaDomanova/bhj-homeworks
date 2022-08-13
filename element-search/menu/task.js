const links = document.querySelectorAll('.menu__link');
//console.log(links);

/*
for(let i=0; i< links.length; i++) {
    
    console.log(links[i].closest('.menu__item').querySelector('.menu_sub'));
}
console.log(Array.isArray(links));
*/
const arrLinks = Array.from(links);
//console.log(Array.isArray(arrLinks));

arrLinks.forEach((link) => {
    link.onclick = function() {
        if(link.closest('.menu__item').querySelector('.menu_sub')) {
            link.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
            return false;   
        }
    };
});
