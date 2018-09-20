const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.log();
    this.log('Workshop Generator');
    this.log('❤️  Made with love by Roberto Achar');
    this.log();
  }

  prompting() {
    const done = this.async();

    done();
  }

  writing() {
    this.log();
    this.log('🚀  Generating workshop...');
    this.log();
  }

  install() {
    this.log();
    this.log('📦  Installing dependencies...');
    this.log();
  }

  end() {
    this.log();
    this.log('🎉  Successfully generated!');
  }
};
