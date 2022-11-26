let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let odd = arr.reduce(function (r, a) { return r + a % 2; }, 0);
let even = arr.length - odd;
    

console.log('Нечетных - ' + odd);
console.log('Четных - ' + even);