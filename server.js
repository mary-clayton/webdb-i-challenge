// Imports
const express = require('express');

// Router
const accountRouter = require('./accountRouter');

//server
const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

server.get('/', (req,res) => {
    res.send('<h3>Welcome to the account API</h3>')
});

//exports
module.exports = server;