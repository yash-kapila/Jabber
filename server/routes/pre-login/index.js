import express from 'express';

import login from './login';
import register from './register';
import verify from './verify';

const router = express.Router();

/*
** For all /login requests, redirect to login router.
*/
router.use('/login', login);

/*
** For all /register requests, redirect to register router.
*/
router.use('/register', register);

/*
** For all /verify requests, redirect to verify router.
*/
router.use('/verify', verify);

export default router;