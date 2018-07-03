// injuries-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const injuries = new Schema({
    userId: {
      type: String,
      required: true,
    },
    injuryDate: {
      type: Date,
      required: true,
    },
    injuryTime: {
      type: String,
      required: true,
    },
    injuryParts: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
    },
    activity: {
      type: String,
    },
    painDetail: {
      type: String,
    },
    painLevel: {
      type: Number,
      required: true,
    },
    injuryImage: {
      type: Array,
    },
    remark: {
      type: String,
    },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('injuries', injuries);
};
