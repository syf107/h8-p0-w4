function urutkanAbjad(str) {
    kataSplit = str.split("");
    kataSusun = [];
    kataUrut = '';


    for(var m = 0; m < kataSplit.length; m++){
        kataSusun.push(str.charCodeAt(m));
    }
    
    kataSusun = kataSusun.sort(function(value1, value2){return value1 - value2});

    for(var n = 0; n < kataSusun.length; n++){
        kataUrut = kataUrut + String.fromCharCode(kataSusun[n]);
    }
    return kataUrut;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'