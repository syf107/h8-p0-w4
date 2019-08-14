function shoppingTime(memberId, money) {
 
// membuat object belanja
  var belanja = {
    memberId: memberId,
    money: money
  }

  // mulai conditional if, jika tidak ada memberId dan memberId kosong, maka toko hanya berlaku untuk member
  if(memberId === '' || memberId === undefined){
      return "Mohon maaf, toko X hanya berlaku untuk member saja.";
  
  //jika uang kurang dari 50000, maka tampilkan uang tidak cukup.
  } else if(money < 50000){
      return "Mohon maaf, uang tidak cukup.";
  }

// membuat array barang dan harga.
var barang = 
    [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]]

    // membuat variabel untuk mengisi data listPurchased dan changeMoney 
    var uangBelanja = belanja.money;
    var belanjaan = [];
    
    // membuat iterasi, sesuai panjang array barang.
    // jika uangbelanja dikurangi harga barang, tidak sama dengan nol,
    // maka push barang dan kurangi uang belanja, 
    for(m = 0; m < barang.length; m++){
        if (uangBelanja - barang[m][1] >= 0){
            belanjaan.push(barang[m][0]);
            uangBelanja = uangBelanja - barang[m][1];
        }
    }

// menjadikan belanjaan sebagai value dari key list purchased dan juga uangBelanja.
belanja['listPurchased'] = belanjaan;
belanja['changeMoney'] = uangBelanja;

return belanja;
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('asdasdasdasdaawewe234', 5000000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime('asdasdasdasdaawewe234', 0)); //Mohon maaf, uang tidak cukup
