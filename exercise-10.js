function changeMe(arr) {
    
    if(arr.length === 0){
        console.log('//  ""')
    }
    for(m = 0; m < arr.length; m++){
        console.log((m+1) + ". " + arr[m][0] + " " + arr[m][1]);    
        var superhero = {
            firstName: arr[m][0],
            lastName: arr[m][1],
            gender: arr[m][2],
            age: 2019 - arr[m][3]
        }
        if (arr[m][3] === undefined){
            superhero.age = "Invalid Birth Year";
        } else if (arr[m][3] > 2019){
            superhero.age = "Invalid Birth Year";
        }

        console.log(superhero);
}
    

    
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""