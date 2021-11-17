const obj = {
    name: 'Vladilen',
    age: 26,
    job: 'fullstack'
}

const entries = [
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map.get('job'))
//Отличие Map от объектов: различные методы взаимодействия, в ключах Map могут быть различные типы данных
map
    .set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ??')

// console.log(map.get(obj))
// map.delete('job')
// console.log(map.has('job'))
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// ========== методы Map

console.log(map.entries())

// for (let [key, value] of map) { //по умолчанию если мы делаем итерацию по карте, вызывается метод entries
//     console.log(key, value)
// }

// for (let val of map.values()) {
//     console.log(val)
// }
//
// for (let key of map.keys()) {
//     console.log(key)
// }

// map.forEach( (val, key, m) => {
//     console.log(val, key)
// })

// ===============

// const array = [...map]
//
// const array2 = Array.from(map)
//
// const mapObj = Object.fromEntries(map.entries()) // преобразование Map к объекту (все объекты в ключах приводятся к строке)
//
// console.log(mapObj)

// ===============

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date().getTime() + 1000 * 60)
    .set(users[2], new Date().getTime() + 5000 * 60)

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))