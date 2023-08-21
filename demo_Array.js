let cars = new Array("Mercidis-Benz","Toyota","Ford")

//console.log(cars);

// console.log(cars[1]);

cars[3]="Chevrlet";
//console.log(cars.length);
//object in array
//let person1={
//            name:"John",
//            age:55
//}
//let person2={
//            name:"Abraham",
//            age:54
//}
//let myarray=[person1,person2];
//console.log(myarray);

// for loop

//for(i=0;i<cars.length-1;i++){
//    console.log(cars[i])
//}

// for of loop

for(ele of cars)
{
    console.log(ele);
}