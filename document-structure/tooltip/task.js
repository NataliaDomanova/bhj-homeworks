const a = Array.from(document.querySelectorAll('.has-tooltip')); 
a.forEach((elem) => {
    elem.insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>');
    const div = Array.from(document.querySelectorAll('.tooltip'));

    const position = elem.getBoundingClientRect();
    console.log(position.left, position.top);

    elem.nextElementSibling.setAttribute('style', `left: ${position.left}px; top: ${position.top + 20}px`)
    elem.nextSibling.textContent = elem.title;     
    
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        if(elem.nextSibling.classList.contains('tooltip_active')) {
        elem.nextSibling.classList.remove('tooltip_active')
    } else if(document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').classList.remove('tooltip_active')
        elem.nextSibling.classList.add('tooltip_active')
    } else {
        elem.nextSibling.classList.add('tooltip_active')
    }
    })
});


    