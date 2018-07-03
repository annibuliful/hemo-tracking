const assert = require('assert');
const app = require('../../src/app');

describe('\'injuries\' service', () => {
  it('registered the service', () => {
    const service = app.service('injuries');

    assert.ok(service, 'Registered the service');
  });
});
