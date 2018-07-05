const { authenticate } = require('@feathersjs/authentication').hooks;
const { checkUserId, findInjectingsByJwtToken } = require('./hook.functions');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [
      findInjectingsByJwtToken(),
    ],
    get: [],
    create: [
      checkUserId(),
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
