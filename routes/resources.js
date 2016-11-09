const logic = require('../logic/resources.js');
module.exports = [
  { method: 'POST', path: '/resources', handler: function(request, reply){
    return reply('Ok');
  }},
  { method: 'GET', path: '/resources', handler: function(request, reply) {
    return reply(logic.greetings());
  }}
];
