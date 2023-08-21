// const firstName = 'samar'
// const str = new String(firstName)

// console.log(typeof firstName)
// console.log(typeof str)

// let user = {
//     firstName: "David",
//     lastName: "Smith",
//     "Side Hustles": [
//       "blogging",
//       "YouTube"
//   ]
// }
// console.log(user)

// let user = {
//     firstName: "David",
//     lastName: "Smith",
//     fullName: (user) => {
//       return `${user.firstName} ${user.lastName}`;
//     }
//   }
//   console.log(user.fullName(user))

// //   if("firstName" in user){
// //     console.log("first name exists")
// //   }
//    //we get "first name exists" in the console.

//    for(let prop in user){
//     console.log(user[prop]);
//   } 
//   //returns all the keys inside of the user object

const car = {
    motor: 'x',
    color: 'red',
    isAirbag: true,
    isSpeed: function () {
        console.log(320)
    },
}

const gm = {
    isAirbag: false,
}

Object.setPrototypeOf(gm, car)
console.log(gm)


// gm.__proto__ = car
// console.log(gm.color)
// gm.isSpeed()