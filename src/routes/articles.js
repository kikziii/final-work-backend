import express from 'express';
import Article from '../models/Article.js';

const router = express.Router();

// GET /articles 
router.get('/', async (req, res) => {
    try {
        const query = Article.find({});
        const articles = await query.exec();
        res.json(articles);    
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

// GET /articles/:articleId 
router.get('/:articleId', async (req, res) => {
    try {
        const query = Article.findById(req.params.articleId);
        const article = await query.exec();
        res.json(article);
    } catch(err) {
        res.json({message: 'Something went wrong'});
    }
});

export default router;