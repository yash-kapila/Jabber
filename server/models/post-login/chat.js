import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let chatSchema = new Schema({
  participants: [{
    type: String
  }],
  messages: [{
    sender: String,
    text: String,
    date: Date
  }]
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

export default mongoose.model('Chat', chatSchema);
