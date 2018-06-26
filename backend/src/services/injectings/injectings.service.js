// Initializes the `injectings` service on path `/injectings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/injectings.model');
const hooks = require('./injectings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/injectings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('injectings');

  service.hooks(hooks);
};
