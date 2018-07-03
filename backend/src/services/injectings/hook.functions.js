const jwt = require('jsonwebtoken');

module.exports.checkUserId = () => (hook) => {
  const { userId } = jwt.decode(hook.params.headers.authorization.split('Bearer ')[1]);
  hook.data.userId = userId;
};
