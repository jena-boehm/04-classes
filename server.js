const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(console.log('hello'))
});

app.listen(7890, () => {
    console.log('started on 7890');
});