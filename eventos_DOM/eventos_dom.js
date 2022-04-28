// Función para encontrar la posicion del mouse y mostrarla
document.addEventListener('mousemove', (event) => {
    const mouse_pos = document.getElementById("mousePosition");
    mouse_pos.textContent = 'X: ' + event.clientX + '  Y: ' + event.clientY;
});


// Función para conseguir y mostrar el texto dentro de los forms de nombre
function getFormValue() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    document.getElementById("test-p").innerHTML = firstName + " " + lastName;
}

// Función para insertar una fila a la tabla
function insertNewRow() {
    let usedTable = document.getElementById("sampleTable");
    let newRow = usedTable.insertRow();
    for (let i = 0; i < usedTable.rows[0].cells.length; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerHTML = "Row " + usedTable.rows.length + "Column " + (i + 1);
    }
}

// Función para insertar una columna a la tabla
function insertColumn() {
    let usedTable = document.getElementById("sampleTable");
    for (let i = 0; i < usedTable.rows.length; i++) {
        let newCell = usedTable.rows[i].insertCell();
        newCell.innerHTML = 'Row ' + i + ' column ' + (usedTable.rows[i].cells.length);
    }
}


// Función para cambiar el contenido de una celda en una tabla
function changeContent() {
    const nCol = parseInt(document.getElementById("tcol").value, 10);
    const nRow = parseInt(document.getElementsById("trow").value, 10);
    const newContent = document.getElementById("tcon").value;
    document.getElementById("myTable").rows[nCol].cells[nRow].innerHTML = newContent;
}

// Función para agregar un elemento a la lista de colores
function addColor() {
    let colorValue = randomColorHex();
    let newOption = new Option(colorValue, colorValue);
    document.getElementById("colorSelect").add(newOption, undefined)
}

// Función para generar un color random
function randomColorHex() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

// Función para remover el primer elemento de la lista de colores
function removeColor() {
    document.getElementById("colorSelect").remove(0);
}

// Función para cambiar una imagen con un tamaño aleatorio entre 300 y 600
function changeImage() {
    let x = Math.floor(Math.random() * 301) + 300;
    let y = Math.floor(Math.random() * 301) + 300;
    document.getElementById("sampleImage").src="http://placekitten.com/"+x+"/"+y;
}