function graduates (students) {

    // membuat variabel penampung.
    var result = {};
    
    // iterasi jika data kosong
    if(students.length === 0){
        return "// []"
    }


    // membuat iterasi untuk mengelompokkan nilai di atas 75
    // jika benar, maka masukkan ke dalam push class dengan objek nama dan skornya.
    for(var m = 0; m < students.length; m++){
        if(students[m].score > 75){
            if(result[students[m].class] === undefined){
                result[students[m].class] = [];
                result[students[m].class].push({name: students[m].name, score: students[m].score});
            } else {
                result[students[m].class].push({name: students[m].name, score: students[m].score});
            }
        }
    }
    return result;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}