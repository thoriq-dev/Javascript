var jmlhAngkot = 10;
var angkorBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi dengan Baik.");
//   } else if (noAngkot === 8) {
//     console.log("Angkot No. " + noAngkot + " Sedang Lembur");
//   } else if (noAngkot === 10) {
//     console.log("Angkot No. " + noAngkot + " Sedang Lembur");
//   } else {
//     console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
//   }
// }
// Apabila kita menggunakan cara yang ini juga tidak salah ya, ini adalah cara yang paling mudah.

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan Baik.");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " Sedang Lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
  }
}
