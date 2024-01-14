function cetakAngka(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  cetakAngka(n - 1);
}

cetakAngka(10);
// Apabila kita tidak memasukan sebuah parameter, maka fungsi ini akan mengulan secara terus menerus.
