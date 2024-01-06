var noAngkot = 1;
var angkotOpr = 6;
var jmhAngkot = 10;

for (noAngkot; noAngkot <= jmhAngkot; noAngkot++) {
  if (noAngkot <= angkotOpr) {
    console.log("Angkot No." + noAngkot + " Beroperasi dengan baik.");
  } else if (noAngkot === 8) {
    console.log("angkot No." + noAngkot + " Sedang Lembur.");
  } else {
    console.log("Angkot No." + noAngkot + " Tidak beroperasi.");
  }
}
