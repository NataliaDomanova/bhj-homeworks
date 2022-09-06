  
let i = 0;
let func = function() {
    const elements = document.querySelectorAll('.rotator__case');
        elements[i].classList.remove('rotator__case_active');
        i++;
        if(i == elements.length) {
            i = 0;   
        }
        console.log(i)   
        elements[i].classList.add('rotator__case_active');        
    }
   
setInterval(func, 1000)
