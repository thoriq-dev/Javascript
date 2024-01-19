let angka = [1, 2, 5, 3, 6, 8, 4];

let angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2.join(" - "));
