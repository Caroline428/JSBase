// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal {
    static type = 'ANIMAL'  //если переменная или методя явл статические то вызыв онли в классе
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }


    voice() {
        console.log('I an Animal!')
    }
}
//
// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })
 class Cat extends Animal {
    static type = 'CAT'

     constructor(options) {
         super(options)
         this.color = options.color
     }

     voice() {
        super.voice()
        console.log('Meow')
     }

     get ageInfo() {  // геттер это не метод, это поле, то есть вызывать без скобочек
        return this.age * 7
     }
     set ageInfo (newAge) {  // обращение к сеттер cat.ageInfo = newAge, к геттеру cat.ageInfo
        this.age = newAge
     }
 }

    const cat = new Cat( {
         name: 'Cat',
         age: 7,
         hasTail: true,
        color: 'black'
     })

// пример из практики

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)//через доллар обозначаются переменные, которые содержат в себе некоторую ноду
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends  Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size +'px'
        this.$el.style.background = options.color

    }
}

const box1 = new Box({
    selector: '#box1',   // решеткой обозначается id
    size: 100,
    color: 'red'
})
const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends  Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c= new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})


