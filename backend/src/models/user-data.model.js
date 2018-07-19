// user-data-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const userData = new Schema({
    approved: {
      type: String,
      default: 'waiting',
      enum: ['waiting', 'rejected', 'approved'],
    },
    userId: {
      type: String,
      required: true,
    },
    permissionTreatment: {
      type: String,
    },
    doctor: {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      hospital: {
        type: String,
      },
    },
    patientInformation: {
      name: {
        type: String,
      },
      birthDate: {
        type: Date,
      },
      telephoneNumber: {
        type: Number,
      },
      sex: {
        type: String,
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
