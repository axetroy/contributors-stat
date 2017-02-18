/**
 * Created by axetroy on 17-2-18.
 */

function getTags(raw) {
  const comments = [];
  raw.split('\n')
    .forEach(function (lineCode, lineNum) {
      lineNum += 1;
      lineCode = lineCode.trim();
      if (/^\<\!--/.test(lineCode) && /--\>$/.test(lineCode)) {
        // star
        if (/\@stat-start/.test(lineCode)) {
          comments.push({
            raw: lineCode,
            line: lineNum,
            start: true,
            end: false
          })
        }
        // end
        else if (/\@stat-end/.test(lineCode)) {
          comments.push({
            raw: lineCode,
            line: lineNum,
            start: false,
            end: true
          });
        }
      }
    });
  return comments;
}

function* parseMarkdown(raw, options) {

  const comments = getTags(raw);

  const blocks = [];
  const starts = comments.filter(v => v.start).map(v => v.line).reverse();
  const ends = comments.filter(v => v.end).map(v => v.line);

  ends.forEach(function (endLine) {
    let block = {};

    starts.forEach(function (startLine) {
      if (block.start === void 0 && startLine < endLine) {
        block.start = startLine;
      }
    });
    block.end = endLine;
    blocks.push(block);
  });

  return blocks;
}

module.exports = function (raw, options) {
  return parseMarkdown(raw, options);
};