// Creating string using variable with single quotes
const str1= 'First String'
console.log(str1)

// Creating string using variable with dual quotes
const str2="Second String"
console.log(str2)

// Creating string using String() constructor
const str3= String("Third String");
console.log(str3)

// single quotes inside dual quotes
const str4= "\'karthik\' reddy"
console.log(str4)

// dual quotes inside dual quotes
const str5="\"Karthik\" reddy"
console.log(str5)

// finding length of string
console.log(str5.length)

// passing javascript string as objects
const str6= new String("Karthik Reddy");
console.log(str6)

// String comparison
function comparestring() {
    
const str7= "vikram"
const str8= 'vikram'

console.log(str7==str8)
console.log(str7.localeCompare(str8));
}
comparestring();

let x = 'Karthik Reddy'

console.log(x.slice(0,4));

console.log(x.replace("hi","ee"));

let y = 'KARTHIK'
console.log(y.toLowerCase());