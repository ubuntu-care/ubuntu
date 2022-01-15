const logger = require('../utils/logger');

module.exports = (io) => {
  io.on('connection', socket => {
    logger.info('new connection');
    // io.emit('fetchMessage', { name: 'bede', age: 90 });

    socket.on('disconnect', () => logger.warn('disconnected'));
  });
};
