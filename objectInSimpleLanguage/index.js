const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

// Spread
// console.log(...citiesRussia) //данный оператор разворачивает массивы в строку (все его элементы)

// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope] //новый более наглядный способ
// const allCities = citiesEurope.concat(citiesRussia) // более старый способ
// console.log(allCities)

// console.log({...citiesRussiaWithPopulation}) //создали новый объект с помощью фигурных скобок и развернули объект
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
//из двух одинаковых ключей берется последний ключ из перечисления

// Practice
// const numbers = [3, 37, 42, 17]
// console.log(Math.max(3, 37, 42, 17))
// console.log(Math.max(numbers))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

// Rest
function sum(a, b, ...rest) { // в данном случае это rest
    // console.log(...rest)  // в данном spread
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5]

// console.log(sum(...numbers)) //Spread!!

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...others] = numbers

// console.log(a, b, others)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address)