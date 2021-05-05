
const moment = require('moment');

/* module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "vaccines",
    charset: "utf8",
    typeCast: function (field, next) {
      if (field.type == 'DATE') {
        return moment(field.string()).format('YYYY-MM-DD');
      }
      return next();
    }
  }
};
 */


module.exports = {
  client: "mysql",
  connection: {
    host: "us-cdbr-east-03.cleardb.com",
    user: "b14df3282afa9c",
    password: "ab91cdee",
    database: "heroku_20ee0b31fbee6c5",
    charset: "utf8",
    typeCast: function (field, next) {
      if (field.type == 'DATE') {
        return moment(field.string()).format('YYYY-MM-DD');
      }
      return next();
    }
  }
}; 