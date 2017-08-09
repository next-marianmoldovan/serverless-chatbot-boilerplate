'use strict';

const Promise = require('bluebird');

// Dialog manager

module.exports = function(message) {
  return new Promise(function(resolve, reject){
    console.log('-> dialog');
    if(message.nlu.intentName === 'hello'){
      message.response = 'Hellosis!'
    }
    else message.response = 'I don\' know the anwser to that';
    resolve(message);
  });
}
