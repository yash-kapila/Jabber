import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let registerSchema = new Schema({
    credentials: { type: Schema.Types.ObjectId, ref: 'Credential' },
    email: String,
    name: String,
    dob: Date
});

registerSchema.methods.createUserRecord = function () {
    return this.model('Register').create({
        credentials: this.credentials,
        email: this.email
    });
};

registerSchema.methods.findUserDetails = function () {
    return this.model('Register').findOne({
        username: this.username
    });
};

registerSchema.methods.updateUserRecord = function () {
    return this.model('Register').findOneAndUpdate({

    });
};

export default mongoose.model('Register', registerSchema);
