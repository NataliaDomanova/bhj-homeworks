const buttons = Array.from(document.querySelectorAll('.tab'));
console.log(buttons);
const contents = Array.from(document.querySelectorAll('.tab__content'));
console.log(contents);
const navigator = document.querySelector('.tab__navigation');

handler = function(event) { 
    buttons.forEach((button) => {
        if(button.classList.contains('tab_active'))
        button.classList.remove('tab_active');
    })
    contents.forEach((content) => {
        if(content.classList.contains('tab__content_active'))
        content.classList.remove('tab__content_active'); 
    })
    event.target.classList.add('tab_active');   
    //console.log(event.target)
    //console.log(event.target.className);    
    let index = buttons.indexOf(event.target);
    //console.log(index);
    contents[index].classList.add('tab__content_active')
    //console.log(contents[index]);
}

buttons.forEach((button) => {
    button.addEventListener('click', handler)
})


