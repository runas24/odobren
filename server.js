const express = require('express');
const bodyParser = require('body-parser');
const { GPT3 } = require('gpt-3');

const app = express();
const PORT = process.env.PORT || 3000;

// Инициализация API GPT
const gpt3 = new GPT3({ apiKey: 'sk-32323-29SWBUEQyj1Jx9346eG4T3BlbkFJOXxLTCXjZCoQlOQvrxVZ' });

app.use(bodyParser.json());

// Обработка запроса от клиента
app.post('/sendMessage', async (req, res) => {
    const userMessage = req.body.message;
    try {
        // Генерация ответа с помощью API GPT
        const botResponse = await gpt3.send(userMessage);
        res.json({ message: botResponse });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

       
