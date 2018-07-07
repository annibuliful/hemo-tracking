// Initializes the `doctor-data` service on path `/doctor-data`
const createService = require('feathers-mongoose');
const createModel = require('../../models/doctor-data.model');
const hooks = require('./doctor-data.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/doctor-data', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('doctor-data');

  service.hooks(hooks);
};
