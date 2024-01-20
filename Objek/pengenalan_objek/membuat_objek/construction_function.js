function Mahasiswa(nama, nim, email, jurusan) {
  (this.nama = nama),
    (this.nim = nim),
    (this.email = email),
    (this.jurusan = jurusan);
}

let mahasiswa = new Mahasiswa(
  "Thoriq Nurul Fikri",
  "20190801054",
  "thoriq@gmail.com",
  "Teknik Informatika"
);
