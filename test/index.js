import assert from 'assert';
import catatonicCircle from '../lib';

describe('catatonic-circle', function () {
  it('should have a version number!', function () {
    assert(typeof catatonicCircle.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
