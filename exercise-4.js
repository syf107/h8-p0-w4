function cariModus(arr) {

    var anon = 0; // untuk menyimpan seberapa banyak modus yang sama.
    var anon2 = 0; // menyimpan nillai array
    var maks = 0; 

    for(var m = 0; m < arr.length; m++){
        for(var n = 0; n < arr.length; n++){
            if (arr[m] === arr[n] && m !== n){
                anon++;
            }

            if (maks < anon){
                anon2 = arr[m];
                maks = anon;
            }
        }
        anon = 0;   
    }
    if (maks === 0 || maks === arr.length-1){
        return -1;
    } else {
        return anon2;
    }
}


  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  console.log(cariModus([7, 7, 7, 8, 8, 8])); // 
  console.log(cariModus([7, 5, 5, 8, 8, 8])); // 