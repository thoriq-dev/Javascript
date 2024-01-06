var jmlhAngkot = 10;
var angkorBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " Sedang Lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " Tidak beroperasi");
  }
}
