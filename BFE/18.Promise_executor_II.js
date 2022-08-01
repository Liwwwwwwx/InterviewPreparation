const p1 = Promise.resolve(1) // p1 -> 1
const p2 = new Promise((resolve) => resolve(p1)) // p2是一个pending promise
const p3 = Promise.resolve(p1)
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))
const p5 = p4.then(() => p4)

console.log(p1 == p2)
console.log(p1 == p3)
console.log(p3 == p4)
console.log(p4 == p5)