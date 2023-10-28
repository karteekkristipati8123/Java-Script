// creating set
let set1 = new Set([10,20,30,20])
console.log(set1)

// deleting an element
console.log(set1.delete(20))
console.log(set1.delete(50))

// value is present in set or not
console.log(set1.has(40))

// iterate set
set1.forEach(value =>{
    console.log(value);
})