import express from 'express';

import preLoginRouter from './routes/pre-login/index';

const app = express();

/*
** Can set process.env.PORT through command line to override default 3000 port value
*/
const port = process.env.PORT || 3000;

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