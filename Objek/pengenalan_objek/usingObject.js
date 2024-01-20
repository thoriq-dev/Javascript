let mahasiswa = {
  nama: "Thoriq Nurul Fikri",
  nim: 20190801054,
  lulus: true,
  IPSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
  IPKumulatif: function () {
    let total = 0;
    let ips = this.IPSemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

console.log(mahasiswa);

console.log(mahasiswa.IPKumulatif());
