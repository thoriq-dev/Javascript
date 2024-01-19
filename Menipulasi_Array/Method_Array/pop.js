let arrayThoriq = [];

arrayThoriq.push("Thoriq", 21, "Islam", "Single", "Tangerang");

for (let i = 0; i < arrayThoriq.length; i++) {
  console.log("Data  Indeks ke-" + i + " : " + arrayThoriq[i]);
}

console.log(arrayThoriq.join(" - "));

arrayThoriq.pop();
arrayThoriq.pop();
console.log(arrayThoriq.join(" - "));
