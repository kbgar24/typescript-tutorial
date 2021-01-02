const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number];

//Re-write object as array of values
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];