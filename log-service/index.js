const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;
app.use(bodyParser.json());

const arrayOfnumbersTolog = [];

app.get('/log', (req, res) => {
    res.send('log to console');
});

app.post('/log', (req, res) => {
    let reversedArr = req.body.arrayOfNumbers;
    console.log("reversedArr is " + reversedArr);
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});