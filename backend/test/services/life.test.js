const assert = require('assert');
const app = require('../../src/app');

describe('\'life\' service', () => {
  it('registered the service', () => {
    const service = app.service('life');

    assert.ok(service, 'Registered the service');
  });
});
