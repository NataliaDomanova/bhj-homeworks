const input = document.getElementById('task__input');
const tasksList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add")

handler = function(event) {
    event.preventDefault();
    
    if(input.value.trim().length > 0) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.innerHTML = `
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        `;
        input.value = '';
        tasksList.appendChild(task);
        console.log(task);
        const buttonClose = task.querySelector('.task__remove');
        console.log(buttonClose);

        buttonClose.addEventListener('click', (e) => {
            e.target.closest('.task').remove();
            //task.remove();
        })
    }
}

button.onclick = handler;
input.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        handler(event);  
    }  
});
