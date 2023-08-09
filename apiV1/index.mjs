import express from "express";
let router = express.Router();

import feedbackRouter from './route/feedback.mjs'

router.use(feedbackRouter);

export default router;