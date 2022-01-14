/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const express = require('express');
const twilio = require('twilio');
const webPush = require('web-push');

const values = require('object.values');

const MessageService = require('./messageService');
const logger = require('../../../utils/logger');
const config = require('../../../../config/default');

const router = express.Router();

const messageService = new MessageService();

// application requires
// const config = require("../config");

const client = twilio(config.twilio.accountSid, config.twilio.authToken);
const phone = config.twilio.phoneNumber;

let pushSubscription;

router.get('/message', (req, res) => { // instant message
  logger.info(req.method, req.url);
  const { body } = req; // req.query if from Twilio
  const mess = messageService.validateIncomingMessag(body, ['from', 'messages']);
  res.send(mess);
});

router.get('/send/:receiver', (req, res) => { // sending to number
  logger.info(req.params);
  client.messages
    .create({ body: 'Hi there. Testing Twilio sms api with receiver params', from: phone, to: req.params.receiver })
    .then(message => res.send(message.sid)).catch(error => logger.error(error));
});

function inbox(res, req) {
  client.messages.list({ to: phone }).then((messages) => {
    logger.info('messges..', messages);
    // messages = messages.reduce((accumulator, currentMessage) => {
    //   if (!accumulator[currentMessage.from]) {
    //     accumulator[currentMessage.from] = currentMessage;
    //   }
    //   return accumulator;
    // }, {});
    // messages = values(messages);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
  }).catch(error => logger.error(error));
}

function outbox(req, res) {
  client.messages.list({ from: phone }).then((messages) => {
    messages = messages.reduce((accumulator, currentMessage) => {
      if (!accumulator[currentMessage.to]) {
        accumulator[currentMessage.to] = currentMessage;
      }
      return accumulator;
    }, {});
    messages = values(messages);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
  });
}

router.get('/inbox', (req, res, next) => {
  logger.info(req.method, req.url);
  inbox();
});

router.get('/outbox', (req, res, next) => {
  outbox(req, res);
});

router.post('/messages', (req, res, next) => {
  const numbers = req.body.phoneNumber.split(',').map((number) => { return number.trim(); });
  Promise.all(numbers.map((number) => {
    return client.messages.create({
      from: phone,
      to: number,
      body: req.body.body,
    });
  })).then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ result: 'success' }));
  }).catch((err) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(err.status).send(JSON.stringify(err));
  });
});

router.get('/messages/:phoneNumber', (req, res, next) => {
  const incoming = client.messages.list({
    from: req.params.phoneNumber,
    to: phone,
  });
  const outgoing = client.messages.list({
    from: phone,
    to: req.params.phoneNumber,
  });
  Promise.all([incoming, outgoing]).then((values) => {
    let allMessages = values[0].concat(values[1]);
    allMessages.sort((a, b) => {
      const date1 = Date.parse(a.dateCreated);
      const date2 = Date.parse(b.dateCreated);
      if (date1 === date2) { return 0; } return date1 < date2 ? -1 : 1;
    });
    allMessages = allMessages.map((message) => {
      message.isInbound = message.direction === 'inbound';
      message.isOutbound = message.direction.startsWith('outbound');
      return message;
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      messages: allMessages,
      phoneNumber: req.params.phoneNumber,
    }));
  });
});

router.post('/subscription', (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    pushSubscription = null;
  } else {
    pushSubscription = req.body;
  }
  res.status(200);
  res.send();
});

// router.post('/webhooks/message', (req, res, next) => {
//   try {
//     const data = JSON.stringify({
//       notification: {
//         title: `New message from ${req.body.From}`,
//         body: req.body.Body,
//       },
//     });
//     const options = {
//       vapidDetails: {
//         subject: 'mailto:philnash@twilio.com',
//         publicKey: process.env.WEB_PUSH_PUBLIC_KEY,
//         privateKey: process.env.WEB_PUSH_PRIVATE_KEY,
//       },
//     };
//     if (pushSubscription) {
//       webPush.sendNotification(pushSubscription, data, options)
//         .then(yay => logger.info(yay))
//         .catch(err => logger.error(err));
//     }
//   } catch (error) {
//     logger.error(error);
//   }
//   res.set('Content-Type', 'application/xml');
//   res.send('<Response/>');
// });
module.exports = router;
