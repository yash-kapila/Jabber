import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    credentials: { type: Schema.Types.ObjectId, ref: 'Credential' },
    email: String,
});

userSchema.methods.saveRecord = function () {
    return this.model('User').create({
        credentials: this.credentials,
        email: this.email
    });
};

export default mongoose.model('User', userSchema);