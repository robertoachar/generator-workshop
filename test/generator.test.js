const assert = require('yeoman-assert');
const test = require('yeoman-test');
const path = require('path');

const files = require('../generators/app/files');

describe('Generator Tests', () => {
  beforeAll((done) => {
    test
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        workshop: 'awesome-workshop',
        description: 'An awesome workshop',
        name: 'Roberto Achar',
        email: 'robertoachar@gmail.com',
        username: 'robertoachar'
      })
      .on('end', done);
  });

  it('should create a workshop', (done) => {
    files.forEach((file) => {
      assert.file(file);
    });

    done();
  });
});
