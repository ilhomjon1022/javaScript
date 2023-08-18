// let x = 10
// let y = x

// y = y + 5

// console.log(x)
// console.log(y)

// let isMarried = false
// let isArray = isMarried
// isArray = true

// console.log(isMarried)
// console.log(isArray)

// const number = {
//     x: 10,
//     y: 5,
// }

// const newNumber = number
// newNumber.x = 15

// console.log(number)
// console.log(newNumber)

// function nusxaObj(obj) {
    //     let objNusxa = {}

//     for (let key in obj) {
//         objNusxa[key] = obj[key]
//     }

//     return objNusxa
// }

// const number = {
//      x: 10,
//      y: 5,
//      z: {
//         a: 1,
//         b: 2,
//      }
// }

// const newNumber = nusxaObj(number)

// newNumber.x = 15
// newNumber.z.a = 10

// console.log(newNumber);
// console.log(number);

// const numbers = {
//       x: 10,
//       y: 5,
// }

// const addNumber = {
//     z: 15,
// }

// const allNumbers = Object.assign(numbers, addNumber)

// console.log(allNumbers)

// const arr =  [1, 2, 3]
// const numbers = arr.slice()
// numbers[1] = 'Samar'
// console.log(arr)
// console.log(numbers)



                // SPREADER operatori
                // SPREADER operatori
                // SPREADER operatori

// const liverpool = ['salah', 'mane']
// const manCity = ['Mahrez']
// const mixPlayer = [...liverpool, ...manCity]
// console.log(mixPlayer)


// const calc = [1, 2, 3]

// function logger(x, y, z) {
//     console.log(x + y + z)
// }

// logger(...calc)

// const arr = ['x', 'y']

// const newArr = [...arr]

                // obyektlada ishlashi spread opaeratorini
                // obyektlada ishlashi spread opaeratorini
                // obyektlada ishlashi spread opaeratorini

const numbers = {
    x: 10,
    y: 5,
}
const newNumbers = {...numbers}
console.log(numbers)
console.log(newNumbers)