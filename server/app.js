import express from 'express';

const app = express();

/*
** Can set process.env.PORT through command line to override default 3000 port value
*/
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
});