import express from 'express';

const router = express.Router();

/*
** The PATH(/) is relative to /register defined in pre-login index.js.
** This will match all requests for /register.
*/
router.post('/', (req, res) => {
    console.log('Inside register request');
    res.send();
});

export default router;