const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Aditya',
        likes: ['Video Games', 'Football']
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000);

