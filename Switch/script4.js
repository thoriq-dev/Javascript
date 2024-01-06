var item = prompt(
  "Masukkan nama / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("Makanan / Minuman Tidak SEHAT!");
    break;
  default:
    alert("Anda memasukkan nama makanan / minuman yang salah");
    break;
}
