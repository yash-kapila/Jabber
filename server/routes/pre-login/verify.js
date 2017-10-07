import express from 'express';

import config from '../../config/dev';
import constants from '../../services/constants';
import LoginService from '../../services/login';

const router = express.Router();

/*
** PATH(/) is relative to /verify defined in pre-login index.js.
** This will match all requests for /verify.
** Verify whether JWT in cookie is valid or not.
*/
router.get('/', (req, res) => {
    const token = req.cookies.jabber;
    // invalid token - synchronous
    try {
        const status = LoginService.verifyJWT(token, config.jwt.key);
        // If token valid, return status: true
        return res.status(200).json({
            status: true,
            username: token.username,
            code: constants.codes.session_valid
        });
    } catch(err) {
        // If token invalid, return status: false
        return res.status(401).json({
            status: false,
            code: constants.codes.expired_session
        });
    }
});

export default router;