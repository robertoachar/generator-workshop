const Generator = require('yeoman-generator');

const files = require('./files');
const validate = require('./validate');

module.exports = class extends Generator {
  initializing() {
    this.log();
    this.log('Workshop Generator');
    this.log('❤️  Made with love by Roberto Achar');
    this.log();
  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'workshop',
        message: 'Workshop name',
        default: 'awesome-workshop'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Workshop description',
        default: 'An awesome workshop'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: validate.validateName,
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: validate.validateEmail,
        store: true
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: validate.validateUsername,
        store: true
      }
    ];

    this.prompt(prompts).then((props) => {
      this.props = props;
      done();
    });
  }

  writing() {
    this.log();
    this.log('🚀  Generating workshop...');
    this.log();

    const { workshop, description, name, email, username } = this.props;

    const templates = {
      workshop,
      description,
      name,
      email,
      username,
      year: new Date().getFullYear()
    };

    files.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log('📦  Installing dependencies...');
    this.log();

    this.npmInstall(
      [
        'eslint',
        'eslint-config-airbnb-base',
        'eslint-config-prettier',
        'eslint-plugin-import',
        'eslint-plugin-prettier',
        'prettier',
        'vuepress'
      ],
      { 'save-dev': true }
    );
  }

  end() {
    this.log();
    this.log('🎉  Successfully generated!');
  }
};
