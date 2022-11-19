function solve() {
  const table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generate, buyBtn] = Array.from(document.querySelectorAll('button'));

  generate.addEventListener('click', generateTable);
  buyBtn.addEventListener('click', buy);

  const items = [];

  function generateTable(e) {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');

      row.appendChild(createCell('img', { src: item.img }));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      //row.appendChild(createCell('input', { type: 'checkbox' }));
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const checkCell = document.createElement('td');
      checkCell.appendChild(checkbox);
      row.appendChild(checkCell);

      items.push({
        element: row,
        isChecked,
        item
      });

      table.appendChild(row);

      function isChecked() {
        return checkbox.checked;
      }
    }
  }

  function createCell(nestedTag, properties, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for (let prop in properties) {
      nested[prop] = properties[prop];
    }
    if (content) {
      nested.textContent = content;
    }

    cell.appendChild(nested)
    return cell;
  }

  function buy(e) {
    const furniture = items.filter(i => i.isChecked())
      .reduce((acc, {item: c}, i, a) => {
        acc.names.push(c.name);
        acc.total += Number(c.price);
        acc.decFactor += Number(c.decFactor);
        return acc;
      }, { names: [], total: 0, decFactor: 0 });

    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${(furniture.decFactor / furniture.names.length)}`

    output.value = result;
  }
}