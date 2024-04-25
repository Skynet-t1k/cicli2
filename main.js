// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.

let num = 20;
let countDisp = 0;
let divMedia = 0;

while(num > 0) {
if (num % 2 == 0) {
    console.log(num);
}
else {
    countDisp +=num;
    divMedia++;
 }
num--;
}
console.log(countDisp/divMedia);
