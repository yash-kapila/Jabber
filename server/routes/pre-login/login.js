import express from 'express';

const router = express.Router();

/*
** PATH(/) is relative to /login defined in pre-login index.js.
** This will match all requests for /login.
*/
router.post('/', (req, res) => {
    console.log(req.body);
    res.send();
});

export default router;