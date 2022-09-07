let isInViewport = function() {
    const div = document.querySelectorAll('.reveal');
    div.forEach((element) => {
    const {top, bottom} = element.getBoundingClientRect();
    
    console.log(top, bottom);
    console.log(window.innerHeight);                  

    if(top < window.innerHeight && bottom > 0) {        
            element.classList.add('reveal_active');  
        } else {
            element.classList.remove('reveal_active');
        }
    })
}
window.addEventListener('scroll', isInViewport)