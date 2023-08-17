// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function () {
//         console.log("Fast with help doors");
//     },
// };

// theif.howOut();

// const { hair, style } = theif.colors;

// console.log(hair);
// console.log(style);

                                        //Uyga vazifa
                                        //Uyga vazifa

const warrior = {
    weapon: "spear",
    height: 1.9,
    methods: {
        attack: "directly",
        retreat: "suddenly",
    },
    howOut: function () {
        console.log("always move forward");
    },
};

warrior.howOut();

const { attack, retreat } = warrior.methods;

console.log(attack);
console.log(retreat);

// let count = 0;

// for (let key in theif) {
//     count++;
//     // if(typeof theif [key] === "object") {
//     //     for(let i in theif[key]) {
//     //         console.log(`Property ${i} has value ${theif[key][i]}`);
//     //     }
//     // }else {
//     //     console.log(`Property ${key} has value ${theif[key]}`);
//     // }
    
// }

// console.log(count);


// for (let key in theif) {
//     console.log(`property ${key} has value ${theif[key]}`);
// }

// console.log(theif.height);

// delete theif.jacket;

// console.log(theif);

