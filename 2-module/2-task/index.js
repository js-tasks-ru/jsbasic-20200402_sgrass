/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let len = 0;
  for (let item in obj) {
    len += 1;
  }
  return !len;
}
