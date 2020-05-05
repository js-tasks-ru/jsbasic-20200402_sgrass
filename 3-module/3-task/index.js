/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // let arr = str.split('-');
  // for (let i = 1; i < arr.length; i++) {
  //   arr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1);
  // }
  // return arr.join('');

  let arr = str.split('-');
  let capitalized = arr.slice(1);
  capitalized = capitalized.map(item => (item.charAt(0).toUpperCase() + item.slice(1)));
  return arr[0] + capitalized.join('');
}
