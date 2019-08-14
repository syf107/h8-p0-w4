function tukarBesarKecil(kalimat) {
    var baru = '';

    for(var m = 0; m < kalimat.length; m++){
        if (kalimat[m] === kalimat[m].toUpperCase()){
            baru = baru + kalimat[m].toLowerCase();
        } else if (kalimat[m] === kalimat[m].toLowerCase()){
            baru = baru + kalimat[m].toUpperCase();
        }
    }
    return baru;
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"