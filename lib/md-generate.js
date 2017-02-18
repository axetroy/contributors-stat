/**
 * Created by axetroy on 17-2-18.
 */
const _ = require('lodash');

function generate(stats, options) {

  const tbody = _.map(stats, function (stat) {
    return `<tr>
  <td><a href="https://www.github.com/${stat.author}">${stat.author}</a></td>
  <td>${stat.commit}</td>
  <td>+${stat.add}(${stat.addPercent}%)</td>
  <td>-${stat.remove}(${stat.removePercent}%)</td>
  <td>${stat.changes}(${stat.changesPercent}%)</td>
</tr>`
  }).join('\n');


  let table = `<table>
<thead>
  <td>Contributors</td>
  <td>Commit</td>
  <td>Add Code</td>
  <td>Remove Code</td>
  <td>Total Changes</td>
</th>
</thead>
<tbody>
${tbody}
</tbody>
</table>`;

  return table.replace(/\s+$/, '');

  // let result = `| Author | Add | Remove | Changes | \n| --- | --- | ---| --- |\n`;
  // _.each(stats, function (stat, author) {
  //   result += `| ${author} | +${stat.add}(${stat.addPercent}%) | -${stat.remove}(${stat.removePercent}%) | ${stat.changes}(${stat.changesPercent}%) |\n`
  // });
  // return result.replace(/\s+$/, '');
}

module.exports = function (stats, options) {
  return generate(stats, options);
};