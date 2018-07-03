// life-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

/**
 *
 * @param {*} app
 *
 * @enum {1 ,2 , 3, 4, 5} The level of problems  1 = no problems , 2 = have quite problem , 3 = have medium problem , 4 = have more problem , 5 = cannot do
 */
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const life = new Schema({
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    movement: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    takecare: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    activity: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    pain: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    stressed: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
  }, {
    timestamps: true,
  });

  return mongooseClient.model('life', life);
};
