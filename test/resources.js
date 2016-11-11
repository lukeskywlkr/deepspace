import test from 'ava';
const server = require('../server.js').server;

test('endpoint test | GET /resources | empty request => 200 Ok', t => {
  const request = Object.assign({}, {
    method: 'GET',
    url: '/resources',
    payload: {}
  });
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 200, 'status code is 200');
  });
});

test('endpoint test | POST /resources | empty request => 400 Bad Request', t => {
  const request = Object.assign({}, {
    method: 'POST',
    url: '/resources'
  });
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
  });
});

test('endpoint test | POST /resources | empty request => 400 Bad Request', t => {
  const request = Object.assign({}, {
    method: 'POST',
    url: '/resources',
    payload: {}
  });
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
  });
});

test('endpoint test | GET /resources/{resourceUUID} | wrong uuid format => 400 Bad Request', t => {
  const request = Object.assign({}, {
    method: 'GET',
    url: '/resources/123e4567-e89b-1d3-a456-4266550000'
  });
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 400, 'status code is 400');
  });
});

test('endpoint test | GET /resources/{resourceUUID} | correct uuid format => 200 Ok', t => {
  const request = Object.assign({}, {
    method: 'GET',
    url: '/resources/123e4567-e89b-12d3-a456-426655440000'
  });
  return server.inject(request)
  .then(response => {
    t.is(response.statusCode, 200, 'status code is 200');
  });
});
