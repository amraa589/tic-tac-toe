let a = [1, 2, 3, 4, 5];
let total = a.reduce((total, curr) => total + curr, 0)
console.log(total)
let even = a.filter((n) => {
    return n % 2 == 0
})

//some

let customList = a.map((n, i) => {
    return {
        index: i,
        element: n
    }
})

console.table(a)
let [d, c] = customList;
console.log(d ,c)
