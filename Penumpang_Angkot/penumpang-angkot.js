let penumpang = [];

function tambahDataPenumpang(nama, status) {
  let dataPenumpang = {
    nama: nama,
    status: status,
  };
  penumpang.push(dataPenumpang);
  console.log(`Penumpang ${nama} naik kedalam angkot`);
}

function tampilkanDataPenumpang() {
  console.log("Isi Penumpang dalam Angkot :");

  penumpang.forEach(function (dataPenumpang, index) {
    console.log(`Kursi ke-[${index + 1}] Nama: ${dataPenumpang.nama}, `);
  });
}

tambahDataPenumpang("Thoriq", "Penumpang");

tampilkanDataPenumpang();
