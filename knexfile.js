
const moment = require('moment');

module.exports = {
  client: "mysql",
  connection: {
    host: "***REMOVED***",
    user: "***REMOVED***",
    password: "***REMOVED***",
    database: "***REMOVED***",
    charset: "utf8",
    typeCast: function (field, next) {
      if (field.type == 'DATE') {
        return moment(field.string()).format('YYYY-MM-DD');
      }
      return next();
    }
  }
};


