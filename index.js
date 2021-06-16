const express = require('express');
const axios= require('axios')
const keys = require('./config/keys');

const app = express();

app.get('/api', async (req, res) => {

    try {
        let response = await axios.get('https://api.lob.com/v1/addresses',
        { auth: {
            username: keys.lobTestKey,
            password: ''
          }})
        .then(function (response) {
            return response.data.data;
        });
        res.status(200).send(response);
    } catch (error) {
        res.send(error);
    }
})


const PORT = process.env.PORT || 5000;
console.log(`App listening on ${PORT}`)
app.listen(PORT);

