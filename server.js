'use strict';

const express = require('express');

const PORT=8085;
const HOST='0.0.0.0';

const app = express();
app.get('/', (req,req) =>{
    res.send('<h2 style="color: purple"> java home docker app <h2>');
});

app.listen(PORT,HOST);
console.log('Running on http://${HOST}:${PORT}');