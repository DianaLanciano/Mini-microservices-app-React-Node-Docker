const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;
let arrayOfNumbers = [];

app.get('/', (req, res) => {
    res.send("Array service")
});

app.post('/', (req, res) => {
    const number = req.body.number;
    if(number <= 1 || number > 1000){
        res.send("Choose a number from 1-1000");
    } else {
        arrayOfNumbers = [];
        for(let i = number - 1; i > 0; i--){
            arrayOfNumbers.push(i);
        }

       axios.post(`http://logs:5001`, {
         arrayOfNumbers, number }
       );

        res.status(201).send(arrayOfNumbers);

    }
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});