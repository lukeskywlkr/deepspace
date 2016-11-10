const Promise = require ('bluebird');
const Openstack = require('./openstack.js');

exports = module.exports = {};

exports.greetings = function (request, reply) {
  var prom = new Promise(function(resolve,reject) {
    j = 0;
    for(i=0; i < 200000; i++) {
      j++;
    };
    if(true)
      resolve('200 Ok res: ' + j + ' times hello world');
    else {
      reject ('error');
    }
  });
  prom.then((result) => {
    reply({response: result});
  });
  prom.catch((err) => {
    console.log(err);
    reply('500 Internal Server Error');
  });
}

exports.upload = function (request, reply) {
  var prom = new Promise(function(resolve, reject){
    var writeStream = Openstack.swift.upload({
      container: 'trial-container',
      remote: 'remote-file.txt'
    });

    writeStream.on('error', function(err) {
      reject('500 Error: something wrong with the upload');
    });

    writeStream.on('success', function(file) {
      //Returns the information about the just uploaded file.
      resolve('201 Created');
    })

    request.payload["upldFile"].pipe(writeStream);
  });

  prom.then((result) => {
    //Handle the result;
    reply(/*something*/);
  });
  prom.catch((err) => {
    //Handle the error;
    reply('500 Internal Server Error: Something has gone wrong with the upload');
  });
}
