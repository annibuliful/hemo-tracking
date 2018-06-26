// user-data-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userData = new Schema({
    userId: {
      type: String,
      required: true,
    },
    patientData: {
      name: {
        type: String,
      },
      birthDate: {
        type: String,
      },
      telephoneNumber: {
        type: Number,
      },
    },
    parentData: {
      name: {
        type: String,
      },
      birthDate: {
        type: String,
      },
    },
    patientIdCard: {
      number: {
        type: String,
      },
      imageURL: {
        type: String,
      },
    },
    emergencyTelephone: {
      type: Number,
    },
  }, {
    timestamps: true,
    versionKeys: false,
  });

  return mongooseClient.model('userData', userData);
};
