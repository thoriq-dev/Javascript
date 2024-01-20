function Angkot(sopir, trayek, penumpang, kas) {
  (this.sopir = sopir),
    (this.trayek = trayek),
    (this.penumpang = penumpang),
    (this.kas = kas);

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot Masih Kosong");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot("Thoriq", ["Cicaheum", "Cibiru"], [], 0);
let angkot2 = new Angkot("Tom Cruise", ["Antapani", "Ciroyom"], [], 0);
