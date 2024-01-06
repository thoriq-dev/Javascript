// Meminta input angka dari pengguna
let angka = parseInt(prompt("Masukkan angka:"));

let bilanganPrima = true;

// Memeriksa apakah angka kurang dari atau sama dengan 1
if (angka <= 1) {
  bilanganPrima = false;
} else {
  // Memeriksa apakah angka merupakan bilangan prima
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      bilanganPrima = false;
      break;
    }
  }
}

// Menampilkan hasil
if (bilanganPrima) {
  alert(angka + " adalah bilangan prima.");
} else {
  alert(angka + " bukan bilangan prima.");
}
