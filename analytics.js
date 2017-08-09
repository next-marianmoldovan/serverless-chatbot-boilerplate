'use strict';

const Promise = require('bluebird');

module.exports.saveOutgoing = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> analytics.outgoing');
    resolve(message);
  });
}

module.exports.saveIncoming = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> analytics.incoming');
    resolve(message);
  });
}
