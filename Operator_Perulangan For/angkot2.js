var noAngkot = 1;
var angkotBeroperasi = 6;
var jumlahAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No." + noAngkot + " Beroperasi dengan baik.");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot No." + noAngkot + " Tidak beroperasi.");
}
