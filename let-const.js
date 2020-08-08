const doubleIt = num => num*2;
const add = (x, y) => x + y;
const doMath = (x, y) => {
 const sum = x + y;
 const diff = x - y;
 const result = sum * diff;
 return result;
}


const result2 = doubleIt(80);
const result = add(50, 70);
const result3 = doMath(80, 45);

console.log(result2);
console.log(result);
console.log(result3);
