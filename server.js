const express = require('express');
const app = express();

app.use(express.json());

app.post('/lint', (req, res) => {
    const onlyBrackets = strip(req.body.code);
    const stack = newStack();

    //logic to check brackets
    // push pop peek

    //send response
});

app.listen(7890, () => {
    console.log('started on 7890');
});