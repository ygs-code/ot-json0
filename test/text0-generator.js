var genRandomOp, randomReal, randomWord, text0, _ref;

_ref = require('ot-fuzzer'), randomReal = _ref.randomReal, randomWord = _ref.randomWord;

text0 = require('../lib/text0');

module.exports = genRandomOp = function (docStr) {
  var length, op, pct, pos, str;
  pct = 0.9;
  op = [];
  while (randomReal() < pct) {
    pct /= 2;
    if (randomReal() > 0.5) {
      pos = Math.floor(randomReal() * (docStr.length + 1));
      str = randomWord() + ' ';
      text0._append(op, {
        i: str,
        p: pos
      });
      docStr = docStr.slice(0, pos) + str + docStr.slice(pos);
    } else {
      pos = Math.floor(randomReal() * docStr.length);
      length = Math.min(Math.floor(randomReal() * 4), docStr.length - pos);
      text0._append(op, {
        d: docStr.slice(pos, pos + length),
        p: pos
      });
      docStr = docStr.slice(0, pos) + docStr.slice(pos + length);
    }
  }
  return [op, docStr];
};