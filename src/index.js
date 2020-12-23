import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('YAY, from express');
})

app.get('/tasks', (req, res) => {
    res.send('this is tasks page');
})


app.listen(3002);