const assert = require('assert');
const app = require('../../src/app');

describe('\'user-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-data');

    assert.ok(service, 'Registered the service');
  });
});
