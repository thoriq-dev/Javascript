let namaMhs = "Thoriq Nurul Fikri";

let umurMhs = 23;

let lulus = true;

let IPSemester = [2.9, 3.1, 3.25, 2.28, 3.04];

function IPKumulatif(IPSemester) {
  let total = 0;
  for (let i = 0; i < IPSemester.length; i++) {
    total += IPSemester[i];
  }
  return total / IPSemester.length;
}
// Memanggil fungsi IPKumulatif dengan memberikan parameter IPSemester
let ipKumulatifResult = IPKumulatif(IPSemester);

// Menampilkan hasil IP kumulatif
console.log("IP Kumulatif:", ipKumulatifResult);
