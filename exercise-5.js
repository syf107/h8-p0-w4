function ubahHuruf(kata) {
    // you can only write your code here!
    var kataBaru = '';

    for(var m = 0; m < kata.length; m++){
      kataBaru = kataBaru + String.fromCharCode(kata.charCodeAt(m) + 1);
    }
    return kataBaru;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu