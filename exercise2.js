function hasObjectProperty(str, obj) {
    return str in obj;
}

let car = {
    name: 'Tesla',
    battery: '100 kWh',
    color: 'grey',
    engine: '518 hp',
    speed: '250 km/h',
}

const str = 'engine';

console.log(str, car);