let array = ["Thoriq", "Micko", "Danu", "Fadhly", "Faisal"];

for (i = 0; i < array.length; i++) {
  console.log("Nama Mahasiswa ke-" + (i + 1) + " : " + array[i]);
}

array.shift();
console.log(array.join(" - "));
