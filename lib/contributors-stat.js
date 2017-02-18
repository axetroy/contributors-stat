const process = require('process');
const path = require('path');
const crypto = require('crypto');

const co = require('co');
const _ = require('lodash');
const program = require('commander');
require('colors');
const pkg = require('../package.json');
const generate = require('./md-generate');

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('<options>');

program
  .command('insert [file]')
  .alias('i')
  .action(function (file, options) {
    co(require('./commands/insert')(file, options)).catch(function (err) {
      console.error(err);
    });
  });

program.parse(process.argv);