import bcrypt from 'bcrypt';

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
}
