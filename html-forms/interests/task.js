const inputs = document.querySelectorAll('.interest__check');
/*
for(let input of inputs) {
    input.checked = false;
}
*/
inputs.forEach((input) => input.addEventListener('change', handler))

function handler(event)  {
    const parent = event.target.closest('.interest');
    console.log(parent);
    const children = Array.from(parent.querySelectorAll('.interest__check'));
    console.log(children);
    //console.log(event.target)
    //console.log(event.target.parentElement.textContent.trim());

    for(let child of children) {
        child.checked = this.checked;
        console.log(this); //input
    }
}

    