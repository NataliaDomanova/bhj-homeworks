const links = Array.from(document.querySelectorAll('.font-size'));

handler = function(event) {

    links.forEach((link) => {
        if(link.classList.contains('font-size_active')) {
            link.classList.remove('font-size_active')  
        }
    })
    event.target.classList.add('font-size_active');
    event.preventDefault();
    //console.log(event.target);
    //console.log(event.target.closest('#book'));

    event.target.closest('#book').classList.remove('book_fs-big');
    event.target.closest('#book').classList.remove('book_fs-small');

    if(event.target.classList.contains('font-size_small')){
        event.target.closest('#book').classList.remove('book_fs-big');
        event.target.closest('#book').classList.add('book_fs-small');
    }
    
    if(event.target.classList.contains('font-size_big')){
        event.target.closest('#book').classList.remove('book_fs-small');
        event.target.closest('#book').classList.add('book_fs-big');
    }    
}

links.forEach((link) => {
    link.addEventListener('click', handler)
})