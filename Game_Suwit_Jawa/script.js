// Menggunakan perulangan WHILE -> Agar tidak harus selalu me-refresh halaman
var tanya = true;
while (tanya) {
  // Menangkap pilihan dari player
  var pilihanPlayer = prompt("Pilih: gajah, semut, atau orang");

  // Menangkap pilihan dari komputer
  // Membangkitkan (Men-Generate) Bilangan Random
  var pilihanKomputer = Math.random();

  if (pilihanKomputer < 0.34) {
    pilihanKomputer = "gajah";
  } else if (pilihanKomputer >= 0.34 && pilihanKomputer < 0.67) {
    pilihanKomputer = "orang";
  } else {
    pilihanKomputer = "semut";
  }

  var hasil = "";

  // Menentukan Rules (Cth: Gajah akan kalah dengan semut)

  if (pilihanPlayer == pilihanKomputer) {
    hasil = "SERI 😑";
  } else if (pilihanPlayer == "gajah") {
    //   if (pilihanKomputer == "orang") {
    //     hasil = "Selamat Kamu MENANG!";
    //   } else {
    //     hasil = "Maaf, kamu KALAH :(";
    //   }
    hasil =
      pilihanKomputer == "orang"
        ? "Selamat Kamu MENANG🥳"
        : "Maaf, Kamu KALAH 😅";
  } else if (pilihanPlayer == "orang") {
    hasil =
      pilihanKomputer == "gajah"
        ? "Maaf, Kamu KALAH 😅"
        : "Selamat, Kamu MENANG🥳";
  } else if (pilihanPlayer == "semut") {
    hasil =
      pilihanKomputer == "orang"
        ? "Maaf, Kamu KALAH 😅"
        : "Selamat, Kamu MENANG🥳";
  } else {
    hasil = "Kamu salah memasukkan pilihan😡";
  }

  // Tampilkan hasilnya
  alert(
    "Kamu Memilih : " +
      pilihanPlayer +
      " Javascript Memilih : " +
      pilihanKomputer +
      "\n" +
      hasil
  );
  tanya = confirm("Mau Suwit Lagi🧐");
}
alert("Terimakasih sudah bermain 😀");
