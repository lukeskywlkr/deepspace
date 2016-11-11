'use strict'
const Hapi = require('hapi');
const logger = require('./logger.js');
const server = new Hapi.Server();
const routes = require('./routes');

server.connection({
  host: 'localhost',
  port: 8080
});

server.route(routes);

server.start((err) => {

  if (err) {
    throw err;
  }
  logger.info('Server running at: ' + server.info.uri, {timestamp: new Date().toJSON(), pid: process.pid});
});

module.exports.server = server;
