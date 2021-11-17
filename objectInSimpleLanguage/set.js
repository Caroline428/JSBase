const set = new Set([1, 2, 3, 3, 3, 4, 5, 6])

set.add(10).add(30).add(20)

// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.delete(1))

// for (let key of set) {
//     console.log(key)
// }

// =========

function uniqValues(array) {
    // return [...new Set(array)]
    return Array.from(new Set(array))
}

console.log(uniqValues([1, 2, 2, 2, 2, 3, 4, 4, 4]))