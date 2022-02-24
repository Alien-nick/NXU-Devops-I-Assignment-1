'use strict';

const express = require('express');
const { append } = require('express/lib/response');

const PORT = 8080;
const HOST = '0.0.0.0';

const server = express();

server.get('/', (res) => {
    res.send('Hello Docker');
});

server.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);