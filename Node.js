// proxy-server.js
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const apiUrl = req.body.url;
  const options = req.body.options;

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(port, () => {
  console.log(`Сервер прокси запущен на порту ${port}`);
});
