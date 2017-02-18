/**
 * Created by axetroy on 17-2-18.
 */
const spawn = require('child_process').spawn;

const _ = require('lodash');
const Promise = require('bluebird');

function* parse() {
  return yield new Promise(function (resolve, reject) {
    let logStream = spawn('git', ['log', '--pretty=format:"%cn"', '--stat'], {
      cwd: process.cwd(),
      timeout: 10000
    });

    let data = '';

    logStream.stdout.on('data', function (chunk) {
      data += chunk;
    });

    logStream.stdout.on('close', function () {
      let totalChanges = 0;
      let totalAdd = 0;
      let totalRemove = 0;
      let stats = _.chain(data.split('\n\n'))
        .map(function (stat) {
          let arr = _.chain(stat.split('\n'))
            .filter(v => !!v)
            .value();

          let authorRaw = arr[0].trim().replace(/^[\'\"]|[\'\"]$/g, '');
          let changeRaw = _.last(arr).trim();
          let insertion = changeRaw.match(/\d+(?=\sinsertion)/g) || [0];
          let deletion = changeRaw.match(/\d+(?=\sdeletion)/g) || [0];

          // stat
          totalChanges += +insertion + +deletion;
          totalAdd += +insertion;
          totalRemove += +deletion;
          return {
            author: authorRaw,
            add: +insertion[0] || 0,
            remove: +deletion[0] || 0
          };
        })
        .value();

      const result = {};
      const resultArray = [];

      _.each(stats, function (stat) {
        result[stat.author] = result[stat.author] || {commit: 0, add: 0, remove: 0, changes: 0};
        result[stat.author].avatar = ``;
        result[stat.author].commit += 1;
        result[stat.author].add += stat.add;
        result[stat.author].remove += stat.remove;
        result[stat.author].changes += stat.add + stat.remove;
      });

      _.each(result, function (stat, author) {
        stat.addPercent = (100 * (stat.add / totalChanges)).toFixed(2);
        stat.removePercent = (100 * (stat.remove / totalChanges)).toFixed(2);
        stat.changesPercent = (100 * (stat.changes / totalChanges)).toFixed(2);
        stat.author = author;
        resultArray.push(stat);
      });

      resolve(resultArray.sort(v => -v.changes));

    });
  });
}

module.exports = function () {
  return parse();
};