let number =Number( prompt("выбери число")); 


if (number == 1) {
console.log('I'); 
} else if (number === 2) {
console.log('II'); 
} else if (number === 3) {
console.log('III'); 
} else if (number === 4) {
console.log('IV'); 
} else if (number === 5) {
console.log('V'); 
} else if (number === 6) {
console.log('VI'); 
} else if (number === 7) {
console.log('VII'); 
} else if (number === 8) {
console.log('VIII'); 
} else if (number === 9) {
console.log('IX'); 
} else {
    roman = 'Invalid number';
}



let cardType = prompt('GOLD & SILVER & PLATINUM'); 
let Liters = Number(prompt('Liters'));;
let points;

if (cardType === 'SILVER') {
    points = Liters * 0.5;
} else if (cardType === 'GOLD') {
    points = Liters * 0.75;
} else if (cardType === 'PLATINUM') {
    points = Liters  * 1;
} else {
    points = 0;
}

console.log(`Card Type: ${cardType}, Liters: ${Liters}, Points: ${points}`);

let amount = Number(prompt('сумма'));
let fuelType = prompt('АИ-95 & АИ-98 & ДТ & ДТ'); 
let pricePerLiter;
let liters;

if (fuelType === 'АИ-92') {
    pricePerLiter = 45;
} else if (fuelType === 'АИ-95') {
    pricePerLiter = 50;
} else if (fuelType === 'АИ-98') {
    pricePerLiter = 55;
} else if (fuelType === 'ДТ') {
    pricePerLiter = 40;
} else if (fuelType === 'ДТ') {
    pricePerLiter = 30;
} else {
    pricePerLiter = 0;
}

liters = pricePerLiter ? (amount / pricePerLiter) : 0;

console.log(`Amount: ${amount} сом, Fuel Type: ${fuelType}, Liters: ${liters.toFixed(2)}`);
