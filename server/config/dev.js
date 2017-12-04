export default {
    dbURL: "mongodb://yash:yash@ds111885.mlab.com:11885/jabber",
    jwt: {
        key: "jabber-chat-app",
        expiresIn: 86400,
    },
    bcrypt: {
        saltRounds: 10,
    }
}