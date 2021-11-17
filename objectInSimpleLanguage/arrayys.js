const people = [
    { name: 'Владилен', age: 26, budget: 40000 },
    { name: 'Михаил', age: 27, budget: 40780 },
    { name: 'Каролина', age: 22, budget: 40600 },
    { name: 'Игорь', age: 17, budget: 43000 },
    { name: 'Александр', age: 23, budget: 1000 },
    { name: 'Петр', age: 15, budget: 45000 },
    { name: 'Владимир', age: 24, budget: 50000 },
]


// ES5 синтаксис, большинство браузеров поймут
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
//
// // цикл for of ES6 синтаксис
// for (let person of people) {
//     console.log(person)
// }

// ForEach
// people.forEach(function (person)  {
//     console.log(person)
// })

// people.forEach(person => console.log(person))

// Map

// const newPeople = people.map(person => `${person.name} (${person.age})`
// )
// console.log(newPeople)

// Filter
// const adults = []
// for(let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// const adults = people.filter(person => person.age >= 18)

// Reduce

// let amount = 0
// for(let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// Find

// let igor = people.find(person => person.name === 'Игорь')
// console.log(igor)

// FindIndex

// let igorIndex = people.findIndex(person => person.name === 'Игорь')
// console.log(igorIndex)

const amount = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)