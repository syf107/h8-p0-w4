function angkaPrima(angka) {

    // melakukan looping untuk pembagian angka dengan angka di belakang var angka
    // m dimulai dari dua, agar angka 0 dan 1 tidak masuk looping (karena statusnya true)
    for (var m = 2; m < angka; m++){

        // fungsi pembagian yang dilakukan looping.
        // jika angka dibagi m, hasil sisanya sama dengan 0, maka jadikan nilai false.
        if(angka % m === 0){
            return false;
        }
    }
    // pengembalian nilai true, jika sampai looping selesai, tidak ada pembagian yang hasilnya = 0
    return true;

}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false