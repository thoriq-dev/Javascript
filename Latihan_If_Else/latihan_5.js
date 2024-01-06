let beratBarang = parseInt(prompt("Masukkan berat barang dalam kg:"));

let biayaPengiriman;

if (beratBarang <= 5) {
  biayaPengiriman = 50000;
} else {
  let beratTambahan = beratBarang - 5;
  biayaPengiriman = 50000 + beratTambahan * 10000;
}

alert(
  "Biaya pengiriman untuk barang dengan berat " +
    beratBarang +
    " kg adalah " +
    biayaPengiriman +
    " rupiah."
);
