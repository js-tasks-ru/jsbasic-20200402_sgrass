/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let item in salaries) {
    if ( !isNaN(salaries[item]) ) sum += salaries[item];
  }
  return sum;
}
