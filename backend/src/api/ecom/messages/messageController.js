const express = require('express');
const MessageService = require('./messageService');

const router = express.Router();

const messageService = new MessageService();

router.get('/', (req, res) => {
  const { body } = req; // req.query if from Twilio
  const mess = messageService.validateIncomingMessag(body, ['from', 'messages']);
  res.send(mess);
});

module.exports = router;
