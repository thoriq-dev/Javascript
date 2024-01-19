let array = [];
array.push("Thoriq", "Islam", 21, "Tangerang");
function cetak() {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
array.shift();
cetak();
