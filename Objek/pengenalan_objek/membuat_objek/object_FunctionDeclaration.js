function tambahMahasiswa(nama, nim, email, jurusan) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.nim = nim;
  mahasiswa.email = email;
  mahasiswa.jurusan = jurusan;
  return mahasiswa;
}

let mahasiswa = tambahMahasiswa(
  "Thoriq Nurul Fikri",
  "20190801054",
  "thoriq@gmail.com",
  "Teknik Informatika"
);

let mahasiswa2 = tambahMahasiswa(
  "Nofa Riza",
  "20190801044",
  "nofa@gmail.com",
  "Sistem Informasi"
);

let mahasiswa3 = tambahMahasiswa(
  "Sandhika",
  "2019080155",
  "dika@gmail.com",
  "Teknik Informatika"
);
