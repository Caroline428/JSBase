// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue // вариант написания стрелочной функции кста
    })
}

const position = withDefaultValue({
    x: 24,
    y:42
},
    0
)

// Hidden properties
const withHiddenProx = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj =>  Reflect.ownKeys(obj)//свойство, которое говорит, какие ключи находятся в объекте
         .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0


    })
}

const data = withHiddenProx({
    name: 'Caroline',
    age: 25,
    _uid: '121212'
})

// Optimization
const userData = [
    {id: 1, name: 'Caroline', job: 'Frontend', age: 22},
    {id: 2, name: 'Vlad', job: 'Programmer', age: 26},
    {id: 3, name: 'Anya', job: 'Design', age: 27},
    {id: 4, name: 'Igor', job: 'Student', age: 20}
]

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }

            }
        } )
    }
})

const users = new IndexedArray([
    {id: 1, name: 'Caroline', job: 'Frontend', age: 22},
    {id: 2, name: 'Vlad', job: 'Programmer', age: 26},
    {id: 3, name: 'Anya', job: 'Design', age: 27},
    {id: 4, name: 'Igor', job: 'Student', age: 20}
])

