// function logger() {
//     console.log(this)
// }

// const car = {
//     name: 'BMW',
//     color: 'Black',
// }

const obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));