function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    // membuat looping untuk mengetahui jarak dan harga.
    var hasil = [];
    // pertama pembuatan objek dan isi-isinya.
    for(var m = 0; m < arrPenumpang.length; m++){
        var object = {};
        var person = arrPenumpang[m][0];
        var goFrom = arrPenumpang[m][1];
        var direction = arrPenumpang[m][2];
        
        //selanjutnya perkalian untuk mendapatkan biaya tarif,
        //Pake math abs,
        var harga = 2000 * Math.abs(rute.indexOf(arrPenumpang[m][1]) - rute.indexOf(arrPenumpang[m][2]));
            
        object['penumpang'] = person;
        object['naikDari'] = goFrom;
        object['tujuan'] = direction;
        object['bayar'] = harga;

        hasil.push(object);
    }
    return hasil;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]