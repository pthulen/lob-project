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

if (process.env.NODE_ENV === "production") {
    // express will serve up production assets
    app.use(express.static('client/build'));

    //serves index.html for unknown routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }); 
} 

const PORT = process.env.PORT || 5000;
app.listen(PORT);

