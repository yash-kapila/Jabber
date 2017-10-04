import express from 'express';

import LoginModel from '../../models/login';
import constants from '../../services/constants';
import LoginService from '../../services/login';

const router = express.Router();

/*
** PATH(/) is relative to /login defined in pre-login index.js.
** This will match all requests for /login.
*/
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const login = new LoginModel({
        username,
        password
    });

    // check if username exists in 'Credentials' collection
    login.findExistingRecord()
        .then((record) => {
            if(!record) return res.status(401).json({ code: constants.codes.username_not_found });

            // check if incoming password matches hashed password stored in collection
            const passwordMatch = LoginService.matchPassword(password, record.password);

            if(passwordMatch) return res.status(200).json({ code: constants.codes.successful_login });

            return res.status(401).json({ code: constants.codes.incorrect_credentials });
        })
        .catch(err => LoginService.serverError(res, constants.codes.server_error));
});

export default router;