import express from 'express';
import { client } from './../../mongoDb.mjs'

const db = client.db("gamingWeb");
const col = db.collection('feedbacks');
console.log("Database is created");

const router = express.Router();


router.post('/feedback', async (req, res, next) => {
    try {
        const insertResponse = await col.insertOne({
            email: req.body.email,
            message: req.body.message
        });
        console.log("insertResponse", insertResponse);
        res.send('Thank You For your Feedback');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error please try again later');
    }
})

export default router