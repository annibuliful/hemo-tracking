// doctor-data-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const doctorData = new Schema({
    approved: {
      type: String,
      default: 'waiting',
      enum: ['waiting', 'rejected', 'approved'],
    },
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    hospitalName: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('doctorData', doctorData);
};
