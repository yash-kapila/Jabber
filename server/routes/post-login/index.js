import express from 'express';

import profile from './profile';

const router = express.Router();

/*
** For all /login requests, redirect to login router.
*/
router.use('/profile', profile);

export default router;
