let sisiKubusA = prompt("Masukan Nilai Sisi Kubus A : ");
let sisiKubusB = prompt("Masukan Nilai Sisi Kubus B : ");

function jumlahVolumeDuaKubus(sisiKubusA, sisiKubusB) {
  var total, volumeA, volumeB;
  volumeA = sisiKubusA * sisiKubusA * sisiKubusA;
  volumeB = sisiKubusB * sisiKubusB * sisiKubusB;
  total = volumeA + volumeB;

  return total;
}

alert(jumlahVolumeDuaKubus(sisiKubusA, sisiKubusB));
