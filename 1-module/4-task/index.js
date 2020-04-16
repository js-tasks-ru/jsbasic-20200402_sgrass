/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let stopWords = ['1xbet', 'xxx'];
  for (let word of stopWords) {
    if (str.toLowerCase().indexOf(word) > -1) return true;
  }
  return false;
}
