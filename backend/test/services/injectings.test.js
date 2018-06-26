const assert = require('assert');
const app = require('../../src/app');

describe('\'injectings\' service', () => {
  it('registered the service', () => {
    const service = app.service('injectings');

    assert.ok(service, 'Registered the service');
  });
});
