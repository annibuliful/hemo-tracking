// injectings-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema,
  } = mongooseClient;
  const injectings = new Schema({
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
    reasonInjection: {
      type: String,
      required: true,
    },
    whoInjecting: {
      type: String,
      required: true,
    },
    medicine: {
      name: {
        type: String,
        required: true,
      },
      volume: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    },
    otherMedicines: [{
      name: {
        type: String,
        required: true,
      },
      volume: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
    }],
    injuryPartsAndCause: {
      type: String,
      required: true,
    },
    injectionNumber: {
      type: Number,
      required: true,
    },
    otherTakeCare: {
      type: String,
    },
    effect: {
      type: String,
    },
    remark: {
      type: String,
    },
  }, {
    timestamps: true,
    versionKey: false,
  });

  return mongooseClient.model('injectings', injectings);
};
