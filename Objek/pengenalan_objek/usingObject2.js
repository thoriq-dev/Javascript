let orang = {
  nama: "Thoriq Nurul Fikri",
  umur: 23,
  pekerjaan: "Front-End Developer",
  sapa: function () {
    return (
      "Hi, nama saya " +
      this.nama +
      ", usia saya " +
      this.umur +
      " tahun" +
      " dan saya adalah seorang " +
      this.pekerjaan
    );
  },
};

console.log(orang);
console.log(orang.sapa());
