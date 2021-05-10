const moment = require('moment');
require('dotenv').config({path: '.env'});

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    charset: "utf8",
    typeCast: function (field, next) {
      if (field.type == 'DATE') {
        return moment(field.string()).format('YYYY-MM-DD');
      }
      return next();
    }
  }
};
