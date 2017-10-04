import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let credentialSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

credentialSchema.methods.findExistingRecord = function() {
    return this.model('Credential').findOne({
        'username': this.username
    });
};

credentialSchema.methods.createNewUser = function () {
    return this.model('Credential').create({
        username: this.username,
        password: this.password
    });
};

export default mongoose.model('Credential', credentialSchema);