// Initializes the `life` service on path `/life`
const createService = require('feathers-mongoose');
const createModel = require('../../models/life.model');
const hooks = require('./life.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/life', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('life');

  service.hooks(hooks);
};
