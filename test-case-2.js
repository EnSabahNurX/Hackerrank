function strangeCounter(t) {
    let cycle = 1
    let cycleSize = 3
    let last = 3
    let current = 1
    if (t <= last) {
        for (let i = 1; i <= cycleSize; i++) {
            if (current == t) {
                return last
            }
            last--
            current++
        }
    }

}
console.log(strangeCounter(1))
console.log(strangeCounter(2))
console.log(strangeCounter(3))

