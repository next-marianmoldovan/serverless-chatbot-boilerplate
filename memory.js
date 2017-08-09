'use strict';

const Promise = require('bluebird');

// Module though to fetch and save user data from a key value db
module.exports.fetch = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> memory.fetch');
    resolve(message);
  });
}

module.exports.save = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> memory.save');
    resolve(message);
  });
}
