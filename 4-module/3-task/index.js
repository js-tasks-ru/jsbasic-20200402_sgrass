/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.tBodies[0].rows;

  for (let row of rows) {
    // Check availability
    let availability = row.cells[3].getAttribute('data-available');

    if (availability === null) {
      row.setAttribute('hidden', 'hidden');
    }
    else {
      row.classList.add( {'true': 'available', 'false': 'unavailable' }[availability] );
    }

    // Check gender
    let gender = {'m':'male', 'f':'female'}[row.cells[2].textContent];
    row.classList.add(gender);

    // Check underage
    let age = +row.cells[1].textContent;
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
