'use strict';

const Promise = require('bluebird');

// NLU Module

module.exports = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> nlu');
    message.nlu = {intentName: 'hello'};
    resolve(message);
  });
}
