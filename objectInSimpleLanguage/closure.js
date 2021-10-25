function createCalcFn(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFn(42)

function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const  addTen = createIncrementor(10)
console.log(addOne(10))
console.log(addTen(20))

function  urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'))

console.log(ruUrl('yandex'))

//решение задачи
function logBook() {
    console.log(`Book: ${this.author}, ${this.title}, ${this.year}`)

}

const book1 = {
    author: 'Lev',
    title: 'War and Piece',
    year: 1899
}

const book2 = {
    author: 'Pushkin',
    title: 'Ruslan and Ludmila',
    year: 1900
}

function bind(context, fn) {
  return function (...args) {
      fn.apply(context, args)
  }
}

bind(book1, logBook)()

