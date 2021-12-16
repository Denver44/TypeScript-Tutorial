const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// 2D ARRAY Annotations first Inside array Type which is string here then outside Array which tells it as an array of string array
const carByMake: string[][] = [['ford'], ['corolla'], ['f150']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//ERROR It will throw and prevent incompatible values
// carMakers.push(100);


// Help with 'map' means gives feature like autocomplete
carMakers.map((car:string)):string=>{
    return car.toUpperCase()
}

// Flexible Types

const importantDates : (Date| string)[] =[new Date(), "Hello"] ;