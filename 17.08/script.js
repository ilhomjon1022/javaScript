// const arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// arr.push(7);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }
// arr[99] = 0;
// console.log(arr.length);

// const arr = [1, 2, 3, 4, 5, 6];
// arr[99] = 0;
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function (items, index, arr) {
//     console.log(`${index}: ${items}: into arr ${arr}`);
// })

// const movies = prompt("What's your favourite movies", "");
// const userMovies = movies.split(", ");
// userMovies.sort();
// console.log(userMovies.join("- "));

const arr = [2, 13, 14, 25, 8];
arr.sort((a, b) => a - b);
console.log(arr);
