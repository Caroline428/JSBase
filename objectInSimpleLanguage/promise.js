console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)
//слишком большая вложенность

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
        }
        resolve(backendData) //промис завершил выполнение //передали бэкенд данные
    }, 2000)

})
//resolve вызывается тогда, когда закончена ассинхронная операция успешно

// p.then(data => {
//     const  p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     p2.then(clientData => {
//         console.log('Data received', clientData)
//     })
//
// })  //вызыв тогда, когда закончится ассинх операция

//другой вариант
p.then(data => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })

})

    .then(clientData =>{
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData})
    .then(data => {
        console.log('Modified', data)
})
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
})
}

sleep(2000).then(() => console.log('After 2 sec'))
sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(6000), sleep(10000)]) //первый промис выполнился и ждал, пока выполнится другой
    .then(() => {
        console.log('All promises')
    })//передаем массив промисов

Promise.race([sleep(6000), sleep(7000)]) //первый промис выполнился и ждал, пока выполнится другой
    .then(() => {
        console.log('Race promises')
    })//первый промис выполнится и сразу отработает