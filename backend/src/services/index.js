const injectings = require('./injectings/injectings.service.js');
const users = require('./users/users.service.js');
const userData = require('./user-data/user-data.service.js');
const uploads = require('./uploads/uploads.service.js');
const injuries = require('./injuries/injuries.service.js');
const life = require('./life/life.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(injectings);
  app.configure(users);
  app.configure(userData);
  app.configure(uploads);
  app.configure(injuries);
  app.configure(life);
};
