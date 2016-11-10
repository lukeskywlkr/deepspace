const logic = require('../logic/resources.js');
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
            return logic.upload(request, reply);
          }
        }
    }, {
        method: 'GET',
        path: '/resources',
        handler: function(request, reply) {
            return logic.greetings(request, reply);
        }
    }
];
