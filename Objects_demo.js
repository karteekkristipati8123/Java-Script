let person={
    firstname:"John",
    lastname :"Abhraham",
    Age:50,
    Weight:70

}

//Accessing Object Properties

console.log(person["firstname"]);
console.log(person.Weight);


// Add new property to the existing object

person["height"]=5.8;
console.log(person["height"]);

// Updating property 
person["Weight"]=80;    
console.log(person["Weight"]);

// Remove property
delete person["Age"];
console.log(person["Age"]);

console.log("****************looping object*****************")

for(let x in person)
{
    // console.log(x)
    // console.log(person[x]);
    console.log(x+" "+person[x])


}