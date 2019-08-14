// mengembalikan nilai true 
// jika dalam string tersebut terdapat karakter a & b
// memiliki jarak 3 karakter dengan lain minimal 1x 
// kalau nggak ada, false

function checkAB(num) {
    // you can only write your code here!
    var b = num.indexOf('b');

    
    for(var m = 0; m < num.length; m++){
        for(var n = 0; n < num.length; n++){        
            if(num[m] === 'a' && num[n] === 'b' && m !== n){
               var jarak = Math.abs(n - m);
            }      
        }
    }
    
    if(jarak-1 <= 3){
        return true;
    } else if (jarak-1 === undefined){
        return false;
    } else {
        return false;
    }

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false