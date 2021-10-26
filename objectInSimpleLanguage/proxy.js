//прокси - некоторый класс в JS, который повзоляет создавать ловушки для объектов и классов
//Objects
const  person = {
    name: 'Caroline',
    age: 25,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    //первый параметр таргет, та цель, на кот хотим повесить прокси
    //второй параметр - набор хэндлеров, методы, кот позвол сделать ловушки для таргета
get(target, prop) { //реализуем ловушки и переписываем базовый функционал
    // console.log('Target', target)

     console.log(`Getting prop ${prop}`)
    if (!(prop in target)) {
        return prop
            .split('_')
            .map(p => target[p])
            .join(' ')
    }

    return target[prop]
},
    set(target, prop, value) {
    if (prop in target) {
    target[prop] = value
    } else {
    throw new Error(`No ${prop} field in target`)
    }
  },
    has(target,prop) {
    return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
    console.log(`Deleting... ${prop}`)
        delete target[prop]
        return true
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')
        return target.apply(thisArg, args).toUpperCase()

    }
})

// Classes
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args, newTarget) {
        console.log('Construct...')
        return new Proxy(new target(...args), {
            get(t,prop) {
                console.log(`Getting prop ${prop}`)
                return t[prop]
            }
            }
        )
    }
})
const p = new PersonProxy('Maxim', 30)



