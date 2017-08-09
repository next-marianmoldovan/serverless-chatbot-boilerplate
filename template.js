'use strict';

const Promise = require('bluebird');
const botBuilder = require('claudia-bot-builder');
const apiai = require('apiai-promise');
  const nlu = apiai('cd3229d540044dafa836c859f239d728');
const moment = require('moment');

function respond(response) {
  console.log(response);
  return new Promise(function(resolve, reject){
    console.log(response.result.fulfillment)
    if(response.result.fulfillment.messages.length > 0 && response.result.fulfillment.messages.length > 0){
      // devolver texto
      resolve("fullfilment");
    }
    else {
      if(response.result.metadata.intentName == 'faster.go'){

      }
      else resolve('Your message is very important to us, but ' + excuse.get())
    }
  });
}

function understand(request) {
  return new Promise(function(resolve, reject) {
    nlu.textRequest(request.text, {sessionId: request.sender}).then(function(response){
      resolve(response);
    }).catch(function(error) {
      console.error(error);
      reject('We fucked it up!');
    });
  });
}

module.exports = botBuilder(function (request) {
  return understand(request).then(respond);
});


understand({text: 'Alcorcon, calle serrano', sender: '980788625353983'}).then(respond).then(console.log)
