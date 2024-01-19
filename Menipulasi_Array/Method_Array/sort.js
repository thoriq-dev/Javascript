angka2 = [1, 2, 5, 3, 6, 8, 4, 10, 20];
angka2.sort(function (a, b) {
  return a - b;
});
console.log(angka2.join(" - "));
