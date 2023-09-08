
class Car {
    constructor(name, color, speed) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    calcSpeed() {
        return this.speed * 100
    }
}

class Spark extends Car {
    constructor(name, color, isAirbag, extraBallon) {
        super(name, color)
        this.isAirbag = isAirbag
        this.extraBallon = extraBallon
    }

    logger() {
        console.log(`Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}. Are there extra ballon ${this.extraBallon}`)
    }
}

const aboutcar = new Spark('Spark', 'White', true, 5)
aboutcar.logger()

// const bmw = new Car('BMW', 'Black', 200)
// const mers = new Car('MERS', 'Red', 100)

// console.log(bmw.calcSpeed())
// console.log(mers.calcSpeed())
