// My solution
const args = process.argv
const numbers = args.splice(2)
const sum = numbers.reduce((x,y) => Number(x) + Number(y), 0);
console.log(sum);

// Official solution
'use strict'
    
let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
