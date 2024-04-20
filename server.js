const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Обработка POST запроса на /generate
app.post('/generate', async (req, res) => {
    try {
        const { text } = req.body;

        // Здесь вам нужно будет использовать ваш ключ API для обращения к сервису GPT
        const apiKey = 'sk-32323-29SWBUEQyj1Jx9346eG4T3BlbkFJOXxLTCXjZCoQlOQvrxVZ';
        const apiUrl = 'https://api.openai.com/v1/completions';

        const response = await axios.post(apiUrl, {
            prompt: text,
            max_tokens: 100
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const generatedText = response.data.choices[0].text.trim();
        res.json({ generatedText });
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Произошла ошибка при генерации текста' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
