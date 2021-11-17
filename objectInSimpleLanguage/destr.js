function calcValues(a, b) {
   return [
       a + b,
       a-b,
       a * b,
       a / b
   ]
}

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42,10) //доп запятая говорит о том, что мы пропускаем один параметр
// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result

// console.log(sum, sub, mult, other)

// Objects
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name = person.name
// const {
//     name: firstName = 'Без имени',
//     age,
//     car = 'Машины нет',
//     address: {city: homeTown, country}
// } = person

const {name, ...info} = person

function logPerson({name: firstName = '111', age}) {
    console.log(name + ' ' + age)
}

logPerson(person)
// console.log(firstName, age, car, homeTown, country)

// объекты деструктуризуются по названию ключей, а массивы по любому названию переменной