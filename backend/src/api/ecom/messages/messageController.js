const express = require('express');
const MessageService = require('./messageService');

const router = express.Router();

const messageService = new MessageService();

router.get('/', (req, res) => {
  const body = req.body; //req.query if from Twilio
  res.send(messageService.validateIncomingMessag(body, ['from', 'messages']))
});

module.exports = router;