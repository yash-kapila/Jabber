export default {
    dbURL: "mongodb://localhost/Jabber",
    jwt: {
        key: "jabber-chat-app",
        expiresIn: 86400,
    },
    bcrypt: {
        saltRounds: 10,
    }
}