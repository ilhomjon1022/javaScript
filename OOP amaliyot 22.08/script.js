               
                       //ES 5-uchun qo'llanma    
               
               
               // qiymatlari bilan qattiq kodlash ob'ekti

// let car1 = { brand: "Volvo", model: "CX90", year: 2020}
// let car2 = { brand: "Mitsubishi", model: "ASX", year: 2016}
// let car3 = { brand: "Toyotya", model: "Fortiner", year: 2019}


//                 // shablon funksiyasi

// function car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// let car4 = new car("BMW", "X5", 2017);
// let car5 = new car("VW", "tiguan", 2018);

// console.log(car4.brand);
// console.lo0g(car5);


                               //ES 6-uchun qo'llanma   

class Vehicle {
    constructor(year) {
        this._year = year;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        this._year = newYear;
    }

    startr() {
        console.log('the vehicle started...');
    }
}

class car extends Vehicle {
    constructor(brand, model, year) {
        super(year);
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log('the car started...')
    }

    static toString() {
        console.log("toString called...");
    }

}

let car4 = new car("BMW", "X5", 2017);
let car5 = new car("VW", "tiguan", 2018);

car4.year = 2020;
car5.start();

console.log(car4._year);
console.log(car5);
car.toString();