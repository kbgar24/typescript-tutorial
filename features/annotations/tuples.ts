const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number];

//Re-write object as array of values
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];

const carSpects: [number, number] = [400, 3354];

//Objects may be more useful than tuples due to keys that are easy to read
const carStats =  {
    horsepower: 300,
    weight: 3354
};