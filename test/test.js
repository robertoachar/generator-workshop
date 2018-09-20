const path = require('path');
const test = require('yeoman-test');

describe('TESTS', () => {
  describe('Generator Tests', () => {
    beforeAll((done) => {
      test.run(path.join(__dirname, '../generators/app')).on('end', done);
    });

    it('should run', (done) => {
      done();
    });
  });
});
