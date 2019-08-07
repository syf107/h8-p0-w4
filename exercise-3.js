function cariMedian(arr) {
    // menentukan variable array yang sudah disusun dari yang kecil sampai ke yang besar.
   var arrRapi = arr.sort(function (value1, value2){return value1 - value2});

   // untuk menentukan nilai tengah dari array, yang menjadi patokkan untuk mendapatkan nilai median. 
   // hasil pembagiannya dibulatkan ke atas, agar dapat mencapai nilai suatu arai
   var arrTengah = Math.round((arrRapi.length-1) * 1/2);
   var median = 0;

   // mendeklarasikan fungsi if, jika panjang array ganjil, maka mediannya adalah angka tengah.
    if (arrRapi.length % 2 === 1){
        median = arrRapi[arrTengah];
    }
    // mendeklarasikan fungsi if, jika panjang array genap, maka mediannya adalah hasil pembagian dua angka di tengah.
    else if (arrRapi.length % 2 === 0){
        median = (arrRapi[arrTengah] + arrRapi[arrTengah-1]) / 2;
    }
    return median;
}
    


  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5