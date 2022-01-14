/*
All twilio calls go here-
 */

const camelCase = require('camelcase-keys');
/* Create server */
const logger = require('../../../utils/logger');

class TwilioService {
  constructor() {
    // test messages
    this.messages = [{
      id: 1,

      ToCountry: 'US',
      ToState: 'MI',
      SmsMessageSid: 'SMfcd7c4707fe321094db57bb127cf48e5',
      NumMedia: '0',
      ToCity: 'Auckland',
      FromZip: '5344',
      SmsSid: 'SMfcd7c4707fe321094db57bb127cf48e5',
      FromState: 'Ohai',
      SmsStatus: 'received',
      FromCity: 'Mumbai',
      Body: 'Please see a doctor ',
      FromCountry: 'NZ',
      To: '+12312448941',
      ToZip: '2834',
      NumSegments: '1',
      MessageSid: 'SMfcd7c4707fe321094db57bb127cf48e5',
      AccountSid: 'ACa63d326f5a1632c3069a5b57774eb791',
      From: '+64212176188',
      ApiVersion: '2010-04-01',

    },
    {
      id: 2,
      SmsStatus: 'new',
      FromCity: 'Mumbai',
      Body: 'Please see a doctor ',
    },
    {
      id: 3,
      SmsStatus: 'new',
      FromCity: 'Mumbai',
      Body: 'Please see a doctor ',
    }];
  }

  fetchNewMessages() {
    return this.messages.filter(message => message.SmsStatus === 'new');
  }

  validateIncomingMessag(message, requiredFields = ['from', 'body', 'messageSid', 'smsStatus']) {
    requiredFields.every(field => {
      if (!message[field]) {
        logger.warn(`Message missing required field "${field}": ${JSON.stringify(message)}`);
      }
    });
    return camelCase(message);
  }
}

module.exports = TwilioService;
