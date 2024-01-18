var data = ["Thoriq", "Komeng", "Siti", "Micko", "Alif"];

// (C) CREATE TABLE ROWS & CELLS
var table = document.getElementById("demo"),
  row = table.insertRow(),
  cell,
  perrow = 2,
  cells = 0;

data.forEach((value, i) => {
  // (C1) ADD CELL
  cell = row.insertCell();
  cell.innerHTML = value;

  // (C2) CLICK ON CELL TO DO SOMETHING
  cell.onclick = () => alert(i);

  // (C3) BREAK INTO NEXT ROW
  cells++;
  if (cells % perrow == 0 && cells != data.length) {
    row = table.insertRow();
  }
});
