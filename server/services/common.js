import jwt from 'jsonwebtoken';

export default class LoginService {
    static verifyJWT(token, key) {
        return jwt.verify(token, key);
    };
}
