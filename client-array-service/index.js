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
    //res.send(arrayOfNumbers);
    res.send("hello world!")
});

app.post('/', (req, res) => {
    const number = req.body.number;
    console.log("the number is " + number);
    if(number < 1 || number > 1000){
        res.send("Peek a number between 1-1000");
    } else {
        arrayOfNumbers = [];
        for(let i = number - 1; i > 0; i--){
            arrayOfNumbers.push(i);
        }

        //console.log({arrayOfNumbers});
       axios.post(`http://localhost:5001/log`, {
         arrayOfNumbers }
       );
        res.status(201).send(arrayOfNumbers);

    }
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});