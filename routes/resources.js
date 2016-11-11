const logic = require('../logic/resources.js');
const Boom = require('boom');
const _ = require('lodash');
module.exports = [
    {
        method: 'POST',
        path: '/resources',
        config: {
          payload: {
            maxBytes: 209715200,
            output: 'stream',
            parse: true
          },
          handler: function(request, reply) {
            if(!_.has(request.headers, 'content-length')) {
              return reply(Boom.badRequest('No payload'));
            } else
              return logic.upload(request, reply);
          }
        }
    }, {
        method: 'GET',
        path: '/resources',
        handler: function(request, reply) {
            return logic.greetings(request, reply);
        }
    },
    {
       method: 'GET',
       path: '/resources/{resUUID}',
       handler: function(request, reply) {
           return logic.get(request, reply);
       }
   }
];
