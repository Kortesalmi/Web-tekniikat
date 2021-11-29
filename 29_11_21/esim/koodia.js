let persons = [
    {
        fname: "Mikael",
        age: 20
    },
    {
        fname: "Liisa",
        age: 29
    },
    {
        fname: "Sami",
        age: 14
    }
]
let word = "s";

let filtered_people = persons.filter(p => p.fname.includes(word));