import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let loginSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    previousPasswords: {
        type: Array
    }
});

const model = mongoose.model('Login', loginSchema);

export {
    loginSchema,
    model
};