function cariModus(arr) {
    // you can only write your code here!
    //
    var modus = [];
    var hasil = -1;

    

    for(var m = 0; m < arr.length; m++){
        for(var n = 0; n < arr.length-1; n++){
            if (arr[0] === arr[1] && arr[1] === arr[2]){
                hasil = -1;
            } else if (m === n){
                n++;
            } else if (arr[m] === arr[n]) {
                modus.push(arr[m]);
            } 
        }
    }
    var modusSort = modus.sort(function(value1, value2){return value1 - value2});
    if (modusSort.length === 1) {
        hasil = modusSort[0];
    } else if (modusSort.length > 1) {
        hasil = modusSort[0] ;
    } else if (modusSort.length === 0) {
        hasil = -1;
    
}
    return hasil;
}


  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1