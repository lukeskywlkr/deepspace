import test from 'ava';
const server = require('../server.js').server;

const requestDefaults = {
  method: 'GET',
  url: '/resources',
  payload: {}
}

test('endpoint test | GET /resources | empty request => 200 Ok', t => {
  const request = Object.assign({}, requestDefaults);
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 200, 'status code is 200');
  });
});

test('endpoint test | POST /resources | empty request => 400 Bad Request', t => {
  const request = Object.assign({}, requestDefaults);
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
  });
});
