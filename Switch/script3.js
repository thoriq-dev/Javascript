var item = prompt(
  "Masukkan nama / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "daging":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "susu":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "hamburger":
    alert("Makanan / Minuman Tidak SEHAT!");
    break;
  case "softdrink":
    alert("Makanan / Minuman Tidak SEHAT!");
    break;
  default:
    alert("Anda memasukkan nama makanan / minuman yang salah");
    break;
}
