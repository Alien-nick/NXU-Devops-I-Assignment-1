'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Docker');
});

server.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);