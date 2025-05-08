import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of vehicles');
});

export default router;