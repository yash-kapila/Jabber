import express from 'express';

const router = express.Router();

/*
** The PATH(/) is relative to /login defined in pre-login index.js.
** This will match all requests for /login.
*/
router.post('/', (req, res) => {
    console.log('Inside login request');
    res.send();
});

export default router;