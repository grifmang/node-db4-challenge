const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const recipeRouter = require('./api/recipes/recipeRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.get('/', (req, res) => {
    res.send('<h2>Server up and running</h2>');
});

server.use('/api/recipes', recipeRouter);

function logger(req, res, next) {
    const { method, originalUrl } = req;
    console.log(`${method} to ${originalUrl} at ${Date.now()}`);
  
    next();
}

module.exports = server;