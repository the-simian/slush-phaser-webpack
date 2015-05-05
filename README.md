# slush-phaser-webpack

[![Build Status](https://secure.travis-ci.org/the-simian/slush-phaser-webpack.png?branch=master)](https://travis-ci.org/the-simian/slush-slush-phaser-webpack)

[![Code Climate](https://codeclimate.com/github/the-simian/slush-phaser-webpack/badges/gpa.svg)](https://codeclimate.com/github/the-simian/slush-phaser-webpack)

[![Coverage Status](https://coveralls.io/repos/the-simian/slush-phaser-webpack/badge.svg?branch=master)](https://coveralls.io/r/the-simian/slush-phaser-webpack?branch=master)

[![David-Dm](https://david-dm.org/the-simian/slush-phaser-webpack.svg)](https://david-dm.org/the-simian/slush-phaser-webpack)

###CURRENTLY IN DEVELOPMENT

> A slush generator for creating games that uses webpack and commonjs compliant modules. Gulp for build system. Tools to assist in development.

![Slush-Phaser-Webpack](http://i.imgur.com/8NYhldm.png)

## Getting Started

Install `slush-slush-phaser-webpack` globally:

```bash
$ npm install -g slush-phaser-webpack
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-phaser-webpack
```

Run the generator from within the new folder:

```bash
$ cd my-slush-phaser-webpack
$ slush phaser-webpack
```

Now you can build your project
####Note: This will eventually be automated

```sh
gulp build
```

This runs webpack, and puts the project, built into the dest folder.

You can run a very simple server with

```
node server

```

From the project root, but your project is entirely client side. That is simply a static express webserver... for now.

Your project will be running on, most likely port `3553`.

I made a repo with a little example of what this outputs, that can be checked out if you're curious
[Phaser Webpack Example Output](https://github.com/the-simian/phaser-webpack-output-example)

Expect this repo to change a lot, as I am actively working on it.


## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/the-simian/slush-phaser-webpack/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/the-simian/slush-phaser-webpack/issues).

## License

The MIT License

Copyright (c) 2015, Jesse Harlin <harlinjesse@gmail.com>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

