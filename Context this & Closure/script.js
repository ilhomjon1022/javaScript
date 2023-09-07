// 'use strict'

// context this - xar doim nimagadur qaram(osiladi)

// ********************* ------------------- ********************
// 1-) Oddiy functionni contexti ya'ni this xar doim window global objectga qaram bo'ladi
//     ya'ni osiladi. Agarda qati'y rejim yoqu bo'lsa (use strict) context undefinedga teng

// function logger(a, b) {
//   console.log(this)
//   function sum() {
//     console.log(this)
//     return a + b
//   }
//   console.log(sum())
// }
// logger(1, 2)

// ********************* ------------------- ********************
// 2-) Context this objectni ichidagi metodda - objectni o'ziga teng

// const obj = {
//   x: 10,
//   y: 15,
//   sum: function () {
//     console.log(this)
//   },
// }
// obj.sum()

// ********************* ------------------- ********************
// 3-) Context this funksiya konstruktorda yangi objectni ekzempyariga teng

// function Car(name, color) {
//   this.name = name
//   this.color = color
//   this.isAirbag = true
// }
// const bmw = new Car('BMW', 'Black')

// ********************* ------------------- ********************
// Closure
// const a = 4
// function log() {
//   console.log(a)
// }
// log()
