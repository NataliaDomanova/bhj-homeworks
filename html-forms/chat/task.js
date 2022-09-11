const widgetButton = document.querySelector('.chat-widget__side');

widgetButton.addEventListener('click', () => {
  document.querySelector(".chat-widget").classList.add('chat-widget_active'); 
})

const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

input.addEventListener('keyup', function(event) {
  if (event.code === 'Enter') 
  
    {  
      const robotMes = ['Здравствуйте!', 'Всего хорошего!!!', 'До свидания!','Как дела?', 'Ну привет!', 'Я - робот', 'Всё отлично!'];  
      const randomMes = robotMes[Math.floor(Math.random() * robotMes.length)];     
      messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">` + new Date().toLocaleTimeString() + `</div>
        <div class="message__text">` + input.value + `</div>
      </div>  
      <div class="message">
        <div class="message__time">` + new Date().toLocaleTimeString() + `</div>
        <div class="message__text">` + randomMes + `</div>
      </div>   
    `           
      input.value = '';  
    }
  }) 
    
  
  
  


