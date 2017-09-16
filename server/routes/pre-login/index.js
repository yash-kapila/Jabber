import express from 'express';

import login from './login';
import register from './register';

const router = express.Router();

/*
** For all /login requests, redirect to login router.
*/
router.use('/login', login);

/*
** For all /register requests, redirect to register router.
*/
router.use('/register', register);

export default router;