// Initializes the `injuries` service on path `/injuries`
const createService = require('feathers-mongoose');
const createModel = require('../../models/injuries.model');
const hooks = require('./injuries.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/injuries', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('injuries');

  service.hooks(hooks);
};
