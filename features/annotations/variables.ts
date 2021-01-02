
const json = '{"x": 10, "y": 20}';

const coordinates: {x: number, y: number} = JSON.parse(json)

console.log(coordinates)