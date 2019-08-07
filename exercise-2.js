function fpb(angka1, angka2) {
    var hasil = 0;

    // looping untuk menentukan angka FPB dari kedua belah sisi dengan membagi Angka dengan angka Looping, yang hasilnya 0.
    for (var m = 0; m <= angka1 || m <= angka2; m++){
       
        //fungsi if, jika ada angka yang bisa membagi dua angka FPB, maka dinyatakan sebagai hasil.
        if(angka1 % m === 0 && angka2  % m === 0){
            hasil = m;
        }
    }
    return hasil;

}

    
  


  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1