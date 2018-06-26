const injectings = require('./injectings/injectings.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(injectings);
  app.configure(users);
};
