const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;
app.use(bodyParser.json());

const arrayOfnumbersTolog = [];

app.get('/', (req, res) => {
    res.send('log to console');
});

app.post('/', (req, res) => {
    let reversedArr = req.body.arrayOfNumbers;
    console.log("The number that was sent is " + req.body.number);
    console.log("The reversed array is " + reversedArr);
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});