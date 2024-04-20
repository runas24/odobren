const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
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
    })
    .catch(error => console.error('Error:', error));
}
