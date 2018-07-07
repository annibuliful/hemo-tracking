const assert = require('assert');
const app = require('../../src/app');

describe('\'doctor-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('doctor-data');

    assert.ok(service, 'Registered the service');
  });
});
