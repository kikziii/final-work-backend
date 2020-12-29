import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import chatRoutes from './routes/chat.js';
import articlesRoutes from './routes/articles.js';
import userRegistrationRoutes from './routes/userRegistration.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/chat', chatRoutes);
app.use('/articles', articlesRoutes);
app.use('/register', userRegistrationRoutes);

app.get('/', (req, res) => {
    res.send('Yay from express');
});

// app.get('/chat', (req, res) => {
//     res.send('This is chat page!');
// });

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if (err) {
            console.log('there was an error', err);
        } else {
            console.log('Connection successfull');
        }
    }
);

app.listen(process.env.PORT);
