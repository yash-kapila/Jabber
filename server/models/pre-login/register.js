import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let registerSchema = new Schema({
    credentials: { type: Schema.Types.ObjectId, ref: 'Credential' },
    email: String,
});

registerSchema.methods.saveRecord = function () {
    return this.model('Register').create({
        credentials: this.credentials,
        email: this.email
    });
};

export default mongoose.model('Register', registerSchema);
