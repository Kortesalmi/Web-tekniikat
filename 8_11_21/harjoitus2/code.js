// a)
let h2 = document.querySelector('h2');
h2.textContent = "Let's manipulate some DOM again!";

// b)
let hr = document.createElement('hr');
h2.parentElement.insertBefore(hr, h2);

// c)
let article = document.querySelector('article');
let p1 = article.firstElementChild;
let p2 = article.lastElementChild;
let temp = p1.textContent;

p1.textContent = p2.textContent;
p2.textContent = temp;

// d)
let content = document.getElementById('content');
let ul = document.createElement('ul');
content.appendChild(ul);

for (let i = 1; i < 6; i++) {
    let li = document.createElement('li');
    li.textContent = 'Number ' + i;
    ul.appendChild(li);
}

// e)
let table = document.createElement('table');

let rows = [document.createElement('tr'), document.createElement('tr')];
let ths = [document.createElement('th'), document.createElement('th')];
let tds = [document.createElement('td'), document.createElement('td')];

ths[0].textContent = 'First name';
ths[1].textContent = 'Last name';

tds[0].textContent = 'John';
tds[1].textContent = 'Doe';

rows[0].append(ths[0], ths[1]);
rows[1].append(tds[0], tds[1]);

table.append(rows[0], rows[1]);

document.getElementById('content').appendChild(table);

// f)
let elems = document.querySelectorAll('#content > *');

for (const e of elems) {
    let hr = document.createElement('hr');
    e.parentElement.insertBefore(hr, e);
}

// g)
elem = document.querySelectorAll('div > p:first-child');

for (const e of elem) {
    let span = document.createElement('span');
    span.textContent = '***';
    e.parentElement.insertBefore(span, e);
}