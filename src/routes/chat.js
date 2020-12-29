import express from 'express';
import Chat from '../models/Chat.js';

const router = express.Router();

// GET /chat 
router.get('/', async (req, res) => {
    try {
        const query = Chat.find({});
        const chatMessages = await query.exec();
        res.json(chatMessages);    
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// POST /chat
// {
//     "username": "foo",
//     "message": "foo"
//     "createdAt":
// }
router.post('/', async (req, res) => {
    const chatMessage = new Chat({
        username: req.body.username,
        message: req.body.message,
        createdAt: new Date()
    });

    try {
        const data = await chatMessage.save();
        res.json(data);    
    } catch(err) {
        res.json({message: err});
    }
});

export default router;