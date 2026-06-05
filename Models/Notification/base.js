function showNotification(message){
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
  
        container.appendChild(notification); //notification add to the page.

        // shows the notification on the screen.
        setTimeout(() => {
            notification.classList.add('show');
        },10)

        // removes the notification on the screen after 3000
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            },300)
        },3000)
    }
