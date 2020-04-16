/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];
  for (let user of users) {
    if (user.name !== undefined) {
      names.push(user.name);
    }
  }
  return names;
}
