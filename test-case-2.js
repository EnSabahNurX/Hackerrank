function strangeCounter(t) {
    // let snake = 3
    // while ((2 * snake) - 2 <= t) snake *= 2
    // return snake - (t - (snake - 2))

    // let snake = 3
    // while (t > snake) t = t - snake, snake *= 2
    // return (snake - t + 1)

    let snake = Math.ceil(Math.log2(1 + t / 3))
    return 3 * (2 ** snake - 1) - t + 1
}
console.log(strangeCounter(1))
console.log(strangeCounter(2))
console.log(strangeCounter(3))
console.log(strangeCounter(4))
console.log(strangeCounter(5))
console.log(strangeCounter(6))
console.log(strangeCounter(7))
console.log(strangeCounter(8))
console.log(strangeCounter(9))
console.log(strangeCounter(10))
console.log(strangeCounter(11))
console.log(strangeCounter(12))
console.log(strangeCounter(13))
console.log(strangeCounter(14))

