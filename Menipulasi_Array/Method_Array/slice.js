let array = [];

array = [
  "Thoriq Nurul Fikri",
  20190801054,
  "Teknik Informatika",
  21,
  "Islam",
  "Tangerang",
];

// Contekan Slice (awal, akhir)
let array2 = array.slice(0, 3);

function cetak(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
cetak(array);
console.log("==================");
cetak(array2);

// Bagaimana caranya cetak Array dan Array2 ?
