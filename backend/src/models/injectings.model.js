// injectings-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const injectings = new Schema({
    userId: {
      type: String,
      required: true,
    },
    injuryDate: {
      type: Date,
      required: true,
    },
    injectionDate: {
      type: Date,
      required: true,
    },
    injuryparts: {
      type: Array,
      required: true,
    },
    remark: {
      type: String,
      default: '',
    },
  }, {
    timestamps: true,
    versionKey: false,
  });

  return mongooseClient.model('injectings', injectings);
};
