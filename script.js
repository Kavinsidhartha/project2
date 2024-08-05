function addRow() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameCell.appendChild(nameInput);

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageCell.appendChild(ageInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };
    actionCell.appendChild(deleteButton);
}
