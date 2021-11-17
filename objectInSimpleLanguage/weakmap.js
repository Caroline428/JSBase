// с помощью этой структуры мы моежм избегать различных утечек данных

let obj = {name: 'weakmap'}

// const arr = [obj]
//
// obj = null
//
// console.log(arr[0])

const map = new WeakMap( [
    [obj, 'obj data']
])
//get set delete has

obj = null

console.log(map.has(obj))

// =========

const cache = new WeakMap()

function  cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(lena))
//если хранить объекты в обычном массиве,то после удаления объекта, он сохраняется в массиве
//если же хранить в WeakMap, то после удаления ничего не остается