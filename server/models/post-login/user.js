import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String
    }
});

// credentialSchema.methods.findExistingRecord = function() {
//     return this.model('Credential').findOne({
//         'username': this.username
//     });
// };
//
// credentialSchema.methods.createNewUser = function () {
//     return this.model('Credential').create({
//         username: this.username,
//         password: this.password
//     });
// };

export default mongoose.model('User', userSchema);
