let angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let angka2 = angka.filter(function (x) {
  return x > 5;
});

console.log(angka2.join(" - "));
