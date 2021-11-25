/*p = document.querySelector('p');
document.querySelector('button').addEventListener('click', () => p.textContent= 'Tekstiä');

const funk = x => x + 5;

palautus = funk(10);

function funk2(x) {

}
*/

let ages = [17, 22, 70, 4];

let adults = ages.filter(age => age >= 18);
console.log(adults);

let oldFound = ages.some(age => age > 60)