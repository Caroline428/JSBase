const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000).then(() => fetch(url))
//         .then(response => response.json())  //fetch возвращает промис
//
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data)
//     })
// .catch(e => console.error(e))

async function fetchAsyncTodos() { //async всегда возвращает promise
    console.log('Fetch todo started...')
    try{
        await delay(2000) //ждет завершения промиса, можно исп только в async функции
        const response = await fetch(url) //результат, который попадает в метод then можно синхронно получить в переменной
        const data = await response.json()
        console.log('Data: ', data)
    } catch (e) {
        console.error(e)
    } finally {

    }
}