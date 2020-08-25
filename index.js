const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./router/route');

const app = express();
const PORT = 7000;

app.use(bodyParser.json());

app.use('/employee', router);

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))