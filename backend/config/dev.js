/*
 * Copyright (c) Ubuntu Care 2022. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

module.exports = {

  api: {
    port: process.env.API_PORT,
    root: '/api',
  },

  frontEnd: {
    domain: process.env.WEBAPP_URL,
  },

  auth: {
    jwt: {
      accessTokenSecret: process.env.JWT_ACCESS_TOKEN,
      refreshTokenSecret: process.env.JWT_REFRESH_TOKEN,
      accessTokenLife: 3600,
      refreshTokenLife: 2592000,
    },
    resetPassword: {
      secret: process.env.RESET_PASSWORD_SECRET,
      ttl: 86400 * 1000, // 1 day
      algorithm: 'aes256',
      inputEncoding: 'utf8',
      outputEncoding: 'hex',
    },
  },

  db: {
    url: process.env.MONGODB_URL,
    name: 'bundle-node',
  },

  logger: {
    console: {
      level: 'debug',
    },
    file: {
      logDir: 'logs',
      logFile: 'bundle_node.log',
      level: 'debug',
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },
};
