'use strict';

const express = require('express');
const path = require('path');

const PORT = 8082;
const HOST = '0.0.0.0';

const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

server.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);