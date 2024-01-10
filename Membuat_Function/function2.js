let sisiSegitigaA = prompt("Masukkan Sisi Segitiga A : ");
let sisiSegitigaB = prompt("Masukkan Sisi Segitiga B : ");

function sisiKeduaSegitiga() {
  rumusA = sisiSegitigaA * sisiSegitigaA * sisiSegitigaA;
  alert("Hasil dari Sisi Segitiga A = " + rumusA);
  rumusB = sisiSegitigaB * sisiSegitigaB * sisiSegitigaB;
  alert("Hasil dari Sisi Segitiga B = " + rumusB);
  total = rumusA + rumusB;
  alert("Hasil dari penjumlahan kedua sisi = " + total);
  return;
}

let hasil = sisiKeduaSegitiga(sisiSegitigaA, sisiSegitigaB);

console.log(hasil);
