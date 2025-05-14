function generateTable() {
  const rows = document.getElementById('rows').value;
  const cols = document.getElementById('cols').value;
  const container = document.getElementById('table-container');

  let tableHTML = '<table>';
  for (let i = 0; i < rows; i++) {
    tableHTML += '<tr>';
    for (let j = 0; j < cols; j++) {
      tableHTML += `<td>Row ${i + 1}, Col ${j + 1}</td>`;
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';

  container.innerHTML = tableHTML;
}
