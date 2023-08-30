// console.log(new Date())

const now = new Date()
const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate() 
const month = now.getMonth() // bu bzaga 0-11 gaca qaytaradi
const year = now.getFullYear()

const months = [
    'yanvar',
    'fevral',
    'mart',
    'aprel',
    'may',
    'iyun',
    'iyul',
    'avgust',
    'sentabr',
    'oktabr',
    'noyabr',
    'dekabr',
]
console.log('Today:', today)
console.log('Month:', months[month])
console.log('Year:', year)

// vaqtlar bilan ishlaganda yoziladigan kodlar:

const hour = now.getHours()
const minute = now.getMinutes()
const second = now.getSeconds()
console.log(`${hour}:${minute}:${second}`)