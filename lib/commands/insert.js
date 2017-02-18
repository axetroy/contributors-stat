/**
 * Created by axetroy on 17-2-18.
 */
const process = require('process');
const path = require('path');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const generate = require('../md-generate');
const rawParse = require('../raw-parse');
const gitParse = require('../git-parse');

function* insert(file, options) {
  const stats = yield gitParse(options);
  const markdownPath = path.resolve(process.cwd(), file);
  const markdownRaw = yield fs.readFileAsync(markdownPath, 'utf8');

  const statInfo = generate(stats);

  const blocks = yield rawParse(markdownRaw);

  // replace markdown
  const result = markdownRaw.split('\n')
    .map(function (raw, line) {
      line += 1;
      blocks.forEach(block => {
        if (line > block.start && line < block.end) {
          if (line === block.start + 1) {
            raw = statInfo;
          } else {
            raw = '## dead zone ##'
          }
        }
      });
      return raw;
    })
    .filter(raw => raw !== '## dead zone ##')
    .join('\n');

  yield fs.writeFileAsync(markdownPath, result);

  console.log('generate done');

}

module.exports = function (file, options) {
  return insert(file, options);
};