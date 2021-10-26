const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear)
    }
    },
    {
    name: {
        value: 'Caroline', //после установленного значение можно настроить property descriptor
        enumerable: true, // по умолчанию это значение false
        writable: true, //перезаписываемый
        configurable: true //можно удалять ключи
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)

        }
    }
}) //метод create принимает в себя два параметры и оба объуеткы, первый это прототип, второй поля для объекта
// при таком объявлении мы не можем пройтись по полям с помощью цикла ниже
//РАЗОБРАТЬСЯ ПОЧЕМУ

// const  person = {
//     name: 'Carolibe',
//     birthYear: '1999'
// }
// при такуом объявлении все ок

person.name = 'Maxim'

for (let key in person) {  //пробегается и по прототипу и по полям объектов
    if(person.hasOwnProperty(key)) {  //пробегается только по ключам
        console.log('Key', key, person[key])
    }

}