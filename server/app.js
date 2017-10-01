import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import dev from './config/dev';
import preLoginRouter from './routes/pre-login/index';

const app = express();

mongoose.connect(dev.dbURL, {
    useMongoClient: true
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
    mongoose.connection.close(function () { 
        console.log('Mongoose connection disconnected through app termination'); 
        process.exit(0); 
    }); 
}); 

/*
** Set process.env.PORT through command line to override default 3000 port value
*/
const port = process.env.PORT || 3000;

/*
** Middlewares .json() and .urlencoded() exposed by bodyParser
** to parse content-types: application/json & application/x-www-form-urlencoded respectively
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
** Redirect request to post-login if request has 'user' in URL
*/
// app.use('/user', postLoginRouter);

/*
** Redirect request to pre-login if request has no 'user' in URL
*/
app.use('/', preLoginRouter);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});