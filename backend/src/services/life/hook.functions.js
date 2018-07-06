const jwt = require('jsonwebtoken');

module.exports.checkUserId = () => (hook) => {
  const { userId } = jwt.decode(hook.data.jwt);
  hook.data.userId = userId;
};

module.exports.findInjectingsByJwtToken = () => (hook) => {
  hook.params.query.userId = hook.params.payload.userId;
};
