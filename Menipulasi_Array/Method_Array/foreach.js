let mahasiswa = [];

mahasiswa = [
  "Thoriq Nurul Fikri",
  "Teknik Informatika",
  "20190801054",
  21,
  "Single",
  "Tangerang",
];

// Menggunakan Methode For (Biasa)
for (let i = 0; i < mahasiswa.length; i++) {
  console.log(mahasiswa[i]);
}

console.log("===================");

mahasiswa.forEach(function (e) {
  console.log(e);
});

console.log("===================");

// Apabila kalian masih bingung dengan Function Expression :
// Kita bisa keluarkan function sendiri

let cetak = function (e) {
  console.log(e);
};

mahasiswa.forEach(cetak);

// Berarti kita tidak bisa menggunakan indeksnya ? Karena kita hanya bisa menggunakan elemennya apabila kita menggunakan for kita memiliki nilai indeksnya.
// Menggunakan forEach juga bisa menggunakan indeksnya.

let nama = ["Thoriq", "Nurul", "Fikri"];
nama.forEach(function (e2, i) {
  console.log("Nama mahasiswa ke-" + (i + 1) + " adalah : " + e2);
});
