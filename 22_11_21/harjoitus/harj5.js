// 1.
let array = ['one', 'two', 'three', 'four', 'five'];

array.forEach(number => {
    document.write(number + ' ')
});

// 2.
let prices = ['20', '50', '10', '12.5', '150'];

let ale = prices.map(x => x * 0.2);
document.write(ale + ' | ');

// 3.
let names = ['Pekka', 'John', 'Jack', 'Liisa', 'John'];

names = names.map(name => {
    if (name === 'John') {
        return 'Matt';
    }
    return name;
});
document.write(names + ' | ');

// 4.
let numbers = ['-2', '5', '-32', '41', '23'];

let positive = numbers.filter(pos => pos >= 0);
document.write(positive + ' | ');

// 5.
let names2 = ['Petri', 'Annastiina', 'Timoteus', 'Aleksanteri', 'Toljanteri'];

let longName = names2.filter(longName => longName.length >= 8 && longName[0] === 'T')
document.write(longName + ' | ');

// 6.
if (names.every(sana => sana.length > 0)) {
    let pituudet = names.map(sana => sana.length);

    let summa = pituudet.reduce((previous, current) => previous + current);
    document.write(summa)
}
