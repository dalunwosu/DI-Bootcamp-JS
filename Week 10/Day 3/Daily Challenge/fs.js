const fs = require('fs');


let steps = 0;
let position = 0

const exercise1 = fs.readFile('RightLeft.txt', 'utf-8', (err, data)=>{
  if(err){
    console.log(err)
  }
  else{
    let array = data.split("")
    for(let i = 0; i < array.length; i++){
      position++
      if(array[i] === '>'){
        steps++
      }
      else if(array[i] === '<'){
        steps--
      }
    }
    console.log("right steps", steps)
  }
})


let steps2 = 0;
let position2 = 0

const exercise2 = fs.readFile('RightLeft.txt', 'utf-8', (err, data)=>{
  if(err){
    console.log(err)
  }
  else{
    let array = data.split("")
    for(let i = 0; i < array.length; i++){
      position2++
      if(array[i] === '>'){
        steps2++
      }
      else if(array[i] === '<'){
        steps2--
      }
     if(steps2 === -1){
        console.log("steps", position2)
        break;
      }
    }
  }
})

