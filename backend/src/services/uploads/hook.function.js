module.exports.fullImagePath = () => (hook) => {
  hook.result.fullpath = `http://localhost:3030/images/${hook.result.id}`;
};
