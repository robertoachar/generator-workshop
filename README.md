# generator-workshop

> Yeoman generator for my workshops.

[![Travis Status][travis-badge]][travis-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![NPM Version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

This generator provides the following features:

- **VuePress** as a static site generator.
- **docs** folder as a starter point to build your workshop.
- **PWA** ready.
- **CC-BY-NC-SA-4.0 License** to help protect your content.
- and more...

## Project files

```text
.
|--- docs
|    |--- .vuepress
|    |    |--- public
|    |    |    |--- android-chrome-192x192.png
|    |    |    |--- android-chrome-512x512.png
|    |    |    |--- apple-touch-icon.png
|    |    |    |--- browserconfig.xml
|    |    |    |--- favicon-16x16.png
|    |    |    |--- favicon-32x32.png
|    |    |    |--- favicon.ico
|    |    |    |--- mstile-150x150.png
|    |    |    |--- safari-pinned-tab.svg
|    |    |    |--- site.webmanifest
|    |    |--- config.js
|    |    |--- head.js
|    |    |--- override.styl
|    |    |--- style.styl
|    |    workshop
|    |    |--- README.md
|    |--- README.md
|--- .editorconfig
|--- .eslintignore
|--- .eslintrc.json
|--- .gitattributes
|--- .gitignore
|--- .npmrc
|--- .prettierrc
|--- CHANGELOG.md
|--- LICENSE
|--- package.json
|--- README.md
```

## Installation

- Install Yeoman

```bash
$ npm install -g yo
```

- Install Generator

```bash
$ npm install -g @robertoachar/generator-workshop
```

## Usage

- Creating a workshop

```bash
# Create a directory for your workshop
$ mkdir awesome-workshop

# Change into directory
$ cd awesome-workshop

# Generate a workshop
$ yo @robertoachar/workshop
```

- Running workshop

| Action                 | Usage           |
| ---------------------- | --------------- |
| Start development mode | `npm start`     |
| Lint code              | `npm run lint`  |
| Build for production   | `npm run build` |

## Development

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)
- Install Yeoman CLI

```bash
$ npm install -g yo
```

### Clone the repo

```bash
$ git clone https://github.com/robertoachar/generator-workshop.git
```

### Run generator

```bash
# Change into directory
$ cd generator-workshop

# Link generator
$ npm link

# Run generator
$ yo @robertoachar/workshop
```

## Author

[Roberto Achar](https://twitter.com/robertoachar)

## License

[MIT](https://github.com/robertoachar/generator-workshop/blob/master/LICENSE)

[travis-badge]: https://travis-ci.org/robertoachar/generator-workshop.svg?branch=master
[travis-url]: https://travis-ci.org/robertoachar/generator-workshop
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/robertoachar/generator-workshop?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/robertoachar/generator-workshop
[circleci-badge]: https://circleci.com/gh/robertoachar/generator-workshop/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/robertoachar/generator-workshop
[coveralls-badge]: https://coveralls.io/repos/github/robertoachar/generator-workshop/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/robertoachar/generator-workshop?branch=master
[npm-badge]: https://img.shields.io/npm/v/@robertoachar/generator-workshop.svg
[npm-url]: https://www.npmjs.com/package/@robertoachar/generator-workshop
[license-badge]: https://img.shields.io/github/license/robertoachar/generator-workshop.svg
[license-url]: https://opensource.org/licenses/MIT
