/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let filteredData = data.filter(item => (+item['age'] <= age));
  filteredData = filteredData.map(item => `${item.name}, ${item.balance}`);
  return filteredData.join('\n');
}
