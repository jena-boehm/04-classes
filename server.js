const express = require('express');
const app = express();
const { stripInput } = require('./utils.js');

app.use(express.json());

app.post('/api/v1/lint', (req, res) => {
    const onlyBrackets = stripInput(req.body.lint);
    const stack = newStack();

    res.send(stack);

    // onlyBrackets.forEach(bracket => {
    //     if(bracket === '{' || '[' || '(') {
    //         stack.push(bracket);
    //     } else {
    //         const top = stack.peek();
    //         if(top === '{' && bracket === '}') {
    //             stack.pop();
    //         } else if(top === '[' && bracket === ']') {
    //             stack.pop();
    //         } else stack.push(bracket);
    //     }
    // });

    console.log(onlyBrackets, stack);

});

app.listen(7890, () => {
    console.log('started on 7890');
});