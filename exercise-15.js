function highestScore (students) {

    // membuat variabel result untuk menampung hasil
    var result = {};
    var skor  = 0;

    // membuat kondisional if, jika array studens kosong.
    if(students.length === 0){
        return "//{}"
    }

    // membuat looping sekaligus digabung, tidak pecah pecah.
    for(var m = 0; m < students.length; m++){ 
        
      if(result[students[m].class] === undefined){
            result[students[m].class] = {};
            result[students[m].class].name = students[m].name;
            result[students[m].class].score = students[m].score;
            skor = students[m].score;

      } else if (!result[students[m].class] && students[m].score > skor){
            result[students[m].class].name = students[m].name;
            result[students[m].class].score = students[m].score;     
      } 
    }
    
    return result;  
}
  
// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}