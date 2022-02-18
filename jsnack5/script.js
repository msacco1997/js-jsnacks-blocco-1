let numbers = [];

let numGuest;

for (let i = 0; i < 6; i++) {
  numGuest = parseInt(prompt('Inserisci un numero:'));
  if (numGuest % 2 != 0){
    numbers.push(numGuest)
  }
}

console.log(numbers);