const container = document.getElementById("sketch-container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseenter', () => cell.classList.add('black'));
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);