for(let i=0;i<=5;i++)
{
    console.log(i);
}


// for-in loop
const obj = {a: 1, b: 4, c: 7}; 

for (let prop in obj) { 
console.log(prop + ': ' + obj[prop]); 
} 

// for-of loop
const arr = [1, 2, 3]; 

for (let val of arr) { 
console.log(val); 
} 

// for each loop
const arr2 = [1, 2, 3]; 
arr2.forEach(val => console.log(val)); 

// map loop
const arr3 = [1, 2, 3]; 
const newArr = arr3.map(val => val * 2); 
console.log(newArr); 
