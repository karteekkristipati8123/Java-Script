let person={
    firstname:"John",
    lastname :"Abhraham",
    Age:50,
    Weight:70

}

//Accessing Object Properties

console.log(person["firstname"]);
console.log(person.Weight);


// Add new prperty to the existing object

person["height"]=5.8;
console.log(person["height"]);

// Updating property 
person["Weight"]=80;    
console.log(person["Weight"]);

// Remove property
delete person["Age"];
console.log(person["Age"]);