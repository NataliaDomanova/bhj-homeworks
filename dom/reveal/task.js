let isInViewport = function() {
    const div = document.querySelectorAll('.reveal');
    div.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    //console.log(top);
    //console.log(window.innerHeight);    
        if(top < window.innerHeight) {        
            element.classList.add('reveal_active');  
        } else {
            element.classList.remove('reveal_active');
        }
    })
}
window.addEventListener('scroll', isInViewport)