import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class LoginService {
    static hashPassword(plainTextPassword, saltRounds) {
        return bcrypt.hashSync(plainTextPassword, saltRounds);
    };

    static matchPassword(incomingPassword, storedPasswordHash) {
        return bcrypt.compareSync(incomingPassword, storedPasswordHash);
    };

    static serverError(res, code) {
        return res.status(500).json({ code });
    };

    static signJWT(payload, key, options) {
        return jwt.sign(payload, key, options);
    };
}
