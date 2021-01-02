const carMakers: string[] = ['ford',  'toyota', 'chevy'];

const dates = [ new Date(), new Date()]

// const carsByMake: string[][] = [];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camero']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop()

// Prevent incorrect values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});


