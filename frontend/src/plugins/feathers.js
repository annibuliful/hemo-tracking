const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const auth = require('@feathersjs/authentication-client');

const socket = io('http://localhost:3030/', {
  transports: ['websocket']
});
const client = feathers();

export default client
  .configure(socketio(socket))
  .configure(auth({
    storage: localStorage,
  }));
export const userService = client.service('users');
export const injectionService = client.service('injectings');
export const uploadService = client.service('uploads');
export const userInformation = client.service('user-data');
export const injuryService = client.service('injuries');
