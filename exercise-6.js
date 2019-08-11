function digitPerkalianMinimum(angka) {
    var n = 0
    var digitKali = [];
    var digitResult = 0;
    for(var m = 0; m <= angka; m++){
        if (angka % m === 0){
            digitKali.push(m);
        }
    }
    var mid = Math.round(digitKali.length/2);

    if (digitKali.length % 2 === 0) {
        digitResult = String(digitKali[mid]) + String(digitKali[mid-1]);
        digitResult= digitResult.length;
    } else {
        digitResult = String(digitKali[0]) + String(digitKali[0]);
        digitResult= digitResult.length;
    }
    return digitResult;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2