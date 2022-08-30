const buttons = document.querySelectorAll('.tab');
//console.log(buttons);
const contents = document.querySelectorAll('.tab__content');
//console.log(content);
const navigator = document.querySelector('.tab__navigation');
//console.log(navigator);
const arrButtons = Array.from(buttons);
const arrContent = Array.from(contents);


buttons.forEach((button) => {
for(let i = 0; i < contents.length; i++) {
    func1 = function(e) {
    button.classList.add('tab_active');
    let content = contents[i];
    if(button.classList.contains('tab_active')) {
        content.classList.add('tab__content_active');
       //console.log(e.target)
    }
    
    }
}   

    button.addEventListener('click', func1);   

})   
   
    //button.addEventListener('click', func2);


