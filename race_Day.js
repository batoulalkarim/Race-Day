let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (early && age > 18) {
    raceNumber += 1000;
}
if (early && age > 18) {
    console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
}