'use strict';

const botBuilder = require('claudia-bot-builder'),
      Promise = require('bluebird'),
      nlu = require('./nlu'),
      dialog = require('./dialog'),
      memory = require('./memory'),
      analytics = require('./analytics');

function respond(message){
  return new Promise(function(resolve, reject) {
    resolve(message.response);
  });
}

function flow(response) {
  return analytics.saveIncoming(response).then(memory.fetch)
      .then(nlu).then(dialog)
      .then(memory.save).then(analytics.saveOutgoing).then(respond);
}

module.exports = botBuilder(flow);

flow({'text': 'Hola', 'sender': 'test'}).then(console.log)
