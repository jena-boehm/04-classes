const express = require('express');
const app = express();
const { stripInput, linter } = require('./utils.js');
const { Stack } = require('./stack/stack.js');

app.use(express.json());

app.post('/lint', (req, res) => {
    const results = linter(req.body.code);
    // const stack = new Stack();

    res.send(results);

    // console.log(onlyBrackets, stack);

});

app.listen(7890, () => {
    console.log('started on 7890');
});
