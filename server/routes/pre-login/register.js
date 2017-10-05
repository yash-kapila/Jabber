import express from 'express';

import config from '../../config/dev';
import LoginModel from '../../models/login';
import UserModel from '../../models/user';
import constants from '../../services/constants';
import LoginService from '../../services/login';

const router = express.Router();

/*
** The PATH(/) is relative to /register defined in pre-login index.js.
** This will match all requests for /register.
*/
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = LoginService.hashPassword(req.body.password, config.bcrypt.saltRounds);
    const email = req.body.email;

    const login = new LoginModel({
        username,
        password,
    });

    // Before registration, check if username already exists in 'Credentials' collection
    login.findExistingRecord()
        .then((record) => {
            if(!!record)
                return res.status(403).json({
                    code: constants.codes.existing_record
                });

            // If username is new, save it in 'Credentials' collection
            login.createNewUser()
                .then((login) => {
                    const user = new UserModel({
                        credentials: login._id,
                        email,
                    });

                    // Save email and _ID from 'Credentials' in User collection
                    user.saveRecord()
                        .then((record) => {
                            const payload = { username: login.username };
                            const options = { expiresIn: config.jwt.expiresIn };

                            const token = LoginService.signJWT(payload, config.jwt.key, options);

                            // set jwt in the response cookie
                            res.cookie('jabber', token, { httpOnly: true });

                            return res.status(200).json({
                                code: constants.codes.record_created,
                                username: login.username
                            })
                        })
                        .catch(err => LoginService.serverError(res, constants.codes.server_error));
                })
                .catch(err => LoginService.serverError(res, constants.codes.server_error));
        })
        .catch(err => LoginService.serverError(res, constants.codes.server_error));
});

export default router;