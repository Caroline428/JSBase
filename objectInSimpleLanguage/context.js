function hello() {
    console.log('Hello', this) //this указывает на контекст данного объекта
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this), //привязали определенный контекст к функции

    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
//в JS всё является объектами!!!!
//this === window

const lena = {
    name: 'Elena',
    age: 23
}

 const fnLenaInfoLog = person.logInfo.bind(lena) //метод bind возвращает новую функцию, к которой привязан котекст
 fnLenaInfoLog('Frontend', '8-999-123-12-23')
//в метод bind помимо основного параметра(контекста), можно передавать остальные нужные параметры

const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')

//есть метод call, который отличается от bind тем, что сразу вызывает функцию
 person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')

//есть метод apply, в который сначала передается контекст, а потом массив из нужных параметров
//вызывается сразу
 person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

//применение на практике
const  array = [1, 2, 3, 4, 5]

function multBy(arr, n) {
    return arr.map(function(i) {
        return i*n
    })
}
console.log(multBy(array, 5)) // с функцией выше пришлось бы так вызывать ее

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}
 console.log(array.multBy(2))

//Приоритете данного способа в том, что теперь для того, чтоб изменять объекты массива (любого), нам не нужно вызывать отдельную функцию







