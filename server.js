const express = require('express');
const app = express();
import { stripInput } from './utils.js';

app.use(express.json());

app.post('/lint', (req, res) => {
    const onlyBrackets = stripInput(req.body);
    const stack = newStack();

    //logic to check brackets
    // push pop peek

    //send response
    res.send(stack);
});

app.listen(7890, () => {
    console.log('started on 7890');
});