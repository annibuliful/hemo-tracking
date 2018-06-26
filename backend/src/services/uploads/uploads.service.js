const blobService = require('feathers-blob');
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require('fs-blob-store');
const hooks = require('./uploads.hooks');

const blobStorage = fs(`${__dirname}/../../../uploads`);

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use('/uploads', blobService({ Model: blobStorage }));

  // Get our initialized service so that we can register hooks
  const service = app.service('uploads');

  service.hooks(hooks);
};
