import express from 'express';

import config from '../../config/dev';
import RegisterModel from '../../models/pre-login/user';
import constants from '../../services/constants';
import LoginService from '../../services/login';

const router = express.Router();

/*
** Middleware for /user/profile to extract username from token
*/
router.use('/', (req, res, next) => {
    const token = req.cookies.jabber;
    // invalid token - synchronous
    try {
        const status = LoginService.verifyJWT(token, config.jwt.key);
        res.locals.username = status.username;
        next();
    } catch(err) {
        LoginService.serverError(res, constants.codes.server_error)
    }
});

/*
** The PATH(/) is relative to /profile defined in post-login index.js.
** This will match all requests for /user/profile.
*/
router.get('/', (req, res) => {
    const username = res.locals.username;

    const user = new RegisterModel({
        username
    });

    user.findUserDetails()
        .then((record) => {
            return res.status(200).json({
                username,
                email: record.email || null,
                name: record.name || null,
                dob: record.dob || null
            });
        })
        .catch(err => LoginService.serverError(res, constants.codes.server_error));
});

export default router;
