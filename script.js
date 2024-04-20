function generateText() {
    var inputText = document.getElementById('inputText').value;

    // Отправляем запрос к серверной части
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
        // Отображаем результат от сервера
        document.getElementById('output').innerText = data.generatedText;
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
