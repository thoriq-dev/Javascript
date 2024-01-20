let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // Else
    // Telusuri seluruh kursi di awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " Sudah ada didalam angkot");
      }
      // tampilkan pesan kesalahannya
      // kembalikan isi array & keluar dari function
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikkan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + "Tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
}
