let array = [];

array.push("Thoriq", "Islam", 21, "Tangerang");

function cetak() {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Contekan Splice (indexAwal, mauDihapusBerap, mauDitambah, elemenBaru, ...)

array.splice(3, 0, "Kp.Pos Bitung");

cetak();
