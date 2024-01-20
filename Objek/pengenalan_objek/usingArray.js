let mahasiswa = ["Thoriq Nurul Fikri", true, [2.9, 3.1, 3.25, 2.88, 3.04]];

function IPKumulatif(IPSemester) {
  let total = 0;
  for (let i = 0; i < IPSemester.length; i++) {
    total += IPSemester[i];
  }
  return total / IPSemester.length;
}

// Memanggil fungsi IPKumulatif dengan memberikan parameter array IPSemester
let ipKumulatifResult = IPKumulatif(mahasiswa[2]);

// Menampilkan hasil IP kumulatif
console.log("IP Kumulatif:", ipKumulatifResult);
