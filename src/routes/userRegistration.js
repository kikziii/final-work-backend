import express from 'express';
import Register from '../models/Register.js';

const router = express.Router();

// POST /register

router.post('/', async (req, res) => {
    const userData = new Register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        country: req.body.country,
        zip: req.body.zip,
        registeredAt: new Date()
    });

    try {
        const data = await userData.save();
        res.json(data);    
    } catch(err) {
        res.json({message: err});
    }
});

export default router;