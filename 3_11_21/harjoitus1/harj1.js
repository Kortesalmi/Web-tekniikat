// Vaihtoehtoinen funktio, jos tarvii paljon käyttää querySelectoria
function _(name) {
    return document.querySelector(name);
}

// a)
// Käytetty querySelectorin funktiota
let aElem = _('#content');
console.log(aElem.nodeName);

// b)
let firstBasic = _('.basic');
console.log(firstBasic.nodeName);

// c)
let allItems = document.getElementsByTagName('li');

for(i of allItems) {
    console.log(i.textContent);
}

// d)
// Käytetty normaalisti querySelectoria (ei funktiota)
let body = document.querySelector('body');
let allNodes = body.querySelectorAll('*')

for (x of allNodes) {
    console.log(x.nodeName);
}

// e)
let article = _('article');

for(i of article.querySelectorAll('p')) {
    console.log('**' + i.textContent);
}

// f)
for(i of allItems) {
    i.textContent = 'John Doe';
}
