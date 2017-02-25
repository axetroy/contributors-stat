const process = require('process');
const path = require('path');
const crypto = require('crypto');

const co = require('co');
const _ = require('lodash');
const program = require('commander');
require('colors');
const pkg = require('../package.json');
const generate = require('./md-generate');

function bootstrapWrapper(func) {
  return function () {
    program.__bootstrap__ = true;
    func.apply(this, arguments);
  }
}

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('<options>');

program
  .command('insert [file]')
  .alias('i')
  .action(bootstrapWrapper(function (file, options) {
    co(require('./commands/insert')(file, options))
      .catch(function (err) {
        console.error(err);
      });
  }));

program.parse(process.argv);

if (!program.args.length || !program.__bootstrap__) program.help();