const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const botResponse = document.getElementById('bot-response');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
}

function displayBotResponse(message) {
    const responseElement = document.createElement('div');
    responseElement.innerText = `Bot: ${message}`;
    botResponse.innerHTML = ''; // Очищаем предыдущий ответ
    botResponse.appendChild(responseElement);
}

function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = '';
    appendMessage(userMessage, 'You');
    fetch('/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage(data.message, 'Bot');
        displayBotResponse(data.message); // Отображаем ответ бота
    })
    .catch(error => console.error('Error:', error));
}
