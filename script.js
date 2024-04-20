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

    // Отправка запроса к API GPT
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-32323-29SWBUEQyj1Jx9346eG4T3BlbkFJOXxLTCXjZCoQlOQvrxVZ', // Замените на свой ключ API GPT
        },
        body: JSON.stringify({
            prompt: userMessage,
            model: 'text-davinci-003', // Здесь можно указать нужную модель GPT
            max_tokens: 50 // Максимальное количество токенов в ответе
        })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].text.trim();
        appendMessage(botMessage, 'Bot');
        displayBotResponse(botMessage); // Отображаем ответ бота
    })
    .catch(error => console.error('Error:', error));
}
