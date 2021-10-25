// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    ame: 'Maxim',
    age: 25,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() { //расширили прототип класса
    console.log('Hello!')
}

const lena = Object.create(person) //передаем объект, который будет явл. прототипов для объекта Лена
//у объекта Лена должно быть свое имя
lena.name = 'Elena'
//Прототип идет сверху вниз, первое встретившееся значение будет установлено данному объекту

// const str = 'Я строка'
const str = new String('Я строка')


