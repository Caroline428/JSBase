const myNumber = 42 // браузерный API

localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
//localStorage может работать только со строками
localStorage.clear()

const object = {
    name: 'Max',
    age: 20
}

localStorage.setItem('person', JSON.stringify(object)) //stringify приводит к строке объект

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Caroline'

// console.log(person)

// ============
//синхронизация двух открытых вкладок одного приложения
window.addEventListener('storage', event => {
    console.log(event) //вызывается, когда событие происходит на другой вкладке
})

// window.onstorage = () => {}
//отличия localStorage от cookie
// cookie запросы уходят на сервер сторонний и не очень безопасны, так же их можно распарсить и исп в своих целях
// local не улетает никуда, это безопасно и только вы имеете доступ