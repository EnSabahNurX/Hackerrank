console.log('hi!')


// Using recursion
// function extraLongFactorials(n) {
//     function bigFact(bigint) {
//         bigint = BigInt(bigint)
//         if (bigint !== 0n) {
//             return bigint * bigFact(bigint - 1n)
//         } else {
//             return 1n
//         }
//     }
//     console.log(bigFact(n).toString())
// }

// Best way
// function extraLongFactorials(n) {
//     let fact = BigInt(1)
//     let i = BigInt(n)
//     while (i > 0) {
//         fact *= i
//         i -= BigInt(1)
//     }
//     console.log(fact.toString())
// }
// extraLongFactorials(5)
// extraLongFactorials(25)
// extraLongFactorials(45)
// extraLongFactorials(53)


// function bitwiseAnd(N, K) {
//   let max = 0
//   for (let i = 1, j = 2; i < N; (j < N) ? j++ : (i++, j = i + 1)) {
//     let and = i & j
//     if ((and > max) && (and < K)) {
//       max = and
//     }
//   }
//   return max
// }
// console.log(bitwiseAnd(5, 2)) // 1
// console.log(bitwiseAnd(8, 5)) // 4
// console.log(bitwiseAnd(2, 2)) // 0


// // function stones(n, a, b) {
// // const arr = Array(n - 1).fill().map(x => [a, b])
// // function* generatePermutaion(head, ...tail) {
// //     let remainder = tail.length ? generatePermutaion(...tail) : [[]];
// //     for (let r of remainder) for (let h of head) yield [h, ...r];
// // }
// // let permutations = [...generatePermutaion(...arr)]
// // return [...new Set(permutations.map(item => item.reduce((sum, x) => sum + x, 0)))]

// // let arrStones = []
// // for (let i = 0; i < n; i++) {
// //     let temp = a * ((n - 1) - i) + b * i
// //     arrStones[i] = temp
// // }
// // return !(a == b)
// //     ? arrStones.sort((a, b) => a - b)
// //     : [a * (n - 2) + b]

// // return !(a == b)
// //     ? Array(n).fill().map((_, idx) => idx).reduce((stones, x, i) => [...stones, a * ((n - 1) - i) + b * i], []).sort((a, b) => a - b)
// //     : [a * (n - 2) + b]
// // }
// // console.log(stones(3, 1, 2)) // [2, 3, 4 ]
// // console.log(stones(4, 10, 100)) // [30, 120, 210, 300]
// // console.log(stones(58, 69, 24))
// // console.log(stones(83, 86, 81))
// // console.log(stones(73, 25, 25))


// // function cavityMap(grid) {
// //     grid = grid.map(x => x.split(''))
// //     let n = grid.length
// //     for (let i = 0, j = 0; i < n && j < n; j++, (j == n) ? i++ : i, (j == n) ? j = 0 : j) {
// //         if (j == 0 || j == n - 1 || i == 0 || i == n - 1) {
// //             continue
// //         }
// //         if (grid[i][j] >  grid[i - 1][j] && grid[i][j] >   grid[i + 1][j] && grid[i][j] >  grid[i][j - 1] && grid[i][j] >  grid[i][j + 1]) {
// //             grid[i][j] = 'X'
// //         }
// //     }
// //     grid = grid.map(x => x.join(''))
// //     return grid
// // }
// // let result = cavityMap(['1112', '1912', '1892', '1234'])
// // process.stdout.write(result.join("\n") + "\n")


// // console.time()
// // function fairRations(B) {
// //     let N = B.length
// //     let count = 0
// //     for(let i = 0; i < N - 1; i++) {
// //         if (B[i] % 2 == 0) continue
// //         B[i] += 1
// //         B[i + 1] += 1
// //         count += 2
// //     }
// //     return (B[N - 1]%2) ? 'NO' : count
// //
// //     let loaves = 0
// //     let rounds = 0
// //     let big = B.length ** 2
// //     for (let i = 0;!B.every(x => x % 2 == 0) && rounds < big; i++ % B.length) {
// //         if (i < B.length - 1 && B[i] % 2 != 0) {
// //             B[i]++
// //             B[i + 1]++
// //             loaves += 2
// //         }
// //         rounds++
// //     }
// //
// //     for (let i = B.length - 1;!B.every(x => x % 2 == 0) && rounds < big; i-- % B.length - 1) {
// //         if (i >= 1 && B[i] % 2 != 0) {
// //             B[i]++
// //             B[i - 1]++
// //             loaves += 2
// //         }
// //             rounds++
// //     }
// //
// //     return (rounds < big)
// //      ? loaves
// //      : 'NO'
// // }
// // console.log(fairRations([4, 5, 6, 7])) // 4
// // console.log(fairRations([1, 2])) // 'NO'
// // console.timeEnd()



// // function workbook(n, k, arr) {
// //     let book = {}
// //     let page = 1
// //     arr.forEach(x => {
// //         let problems = x
// //         let last = 0
// //         while (problems) {
// //             if (problems >= k) {
// //                 book[page] = Array(k).fill().map((_, idx) => idx + 1 + last)
// //                 problems -= k
// //                 last += k
// //             } else {
// //                 book[page] = Array(problems).fill().map((_, idx) => idx + 1 + last)
// //                 problems = 0
// //             }
// //             page++
// //         }
// //     })
// //     return Object.entries(book).filter(x => x[1].includes(Number(x[0]))).length
// // }
// // console.log(workbook(5, 3, [4, 2, 6, 1, 10]))


// // function libraryFine(input) {
// //     let entries = input.match(/\d+/g).map(Number)
// //     let result = 0
// //     let d1 = entries[0]
// //     let m1 = entries[1]
// //     let y1 = entries[2]
// //     let d2 = entries[3]
// //     let m2 = entries[4]
// //     let y2 = entries[5]
// //     if (y1 > y2) {
// //         result = 10000
// //     } else if (y1 == y2 && m1 > m2) {
// //         result = 500 * (m1 - m2)
// //     } else if (y1 == y2 && m1 == m2 && d1 > d2) {
// //         result = 15 * (d1 - d2)
// //     }
// //     return result
// // }
// // console.log(libraryFine('9 6 2015\n6 6 2015'))


// // function serviceLane(width, cases) {
// //   return cases.map(seg => Math.min(...width.slice(seg[0], seg[1] + 1)))
// // }
// // console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [
// //   [0, 3],
// //   [4, 6],
// //   [6, 7],
// //   [3, 5],
// //   [0, 7]
// // ]))



// // function chocolateFeast(n, c, m) {
// //   let wrappers = Math.floor(n / c)
// //   let bars = Math.floor(n / c)
// //   while (wrappers >= m) {
// //     bars += Math.floor(wrappers / m)
// //     wrappers = Math.floor(wrappers / m) + wrappers % m
// //   }
// //   return bars
// // }
// // console.log(chocolateFeast(15, 3, 2)) // 9
// // console.log(chocolateFeast(10, 2, 5)) // 6
// // console.log(chocolateFeast(12, 4, 4)) // 3
// // console.log(chocolateFeast(6, 2, 2)) // 5


// // function howManyGames(p, d, m, s) {
// //     let games = 0
// //         while (p > m && s >= p){
// //             if (p - d > m) {
// //                 s -= p
// //                             p -= d
// //                                         games++
// //             } else {
// //                 s -= p
// //                 p = m
// //                 games++
// //             }
// //         }
// //     games += Math.floor(s / p)
// //     return games
// // }
// // console.log(howManyGames(20, 3, 6, 80)) // 6
// // console.log(howManyGames(20, 3, 6, 85)) // 7
// // console.log(howManyGames(100, 1, 1, 99)) // 0



// // function minimumDistances(a) {
// //     let dict = {}
// //     a.forEach((item, idx) => dict[item] ? dict[item].push(idx) : dict[item] = [idx])
// //     let pairs= Object.keys(dict).filter(x => dict[x].length > 1)
// //     return pairs.length > 0
// //         ? Math.min(...pairs.map(y => dict[y][1] - dict[y][0]))
// //         : -1
// // }
// // console.log(minimumDistances([7, 1, 3, 4, 1, 7])) // 3
// // console.log(minimumDistances([1, 2, 3, 4, 10]))
// //

// // let dict = {}
// //     text.toLowerCase().split('').forEach(item => dict[item] = dict[item] + 1 || 1)
// //     return Object.keys(dict).filter(x => dict[x] > 1).length



// // console.time()
// // function isPrimeBest(n) {
// //     let checks = 0
// //     // check lower boundaries on primality
// //     if (n == 2) {
// //         ++checks
// //         console.log(`Checks: ${checks}`)
// //         return true
// //     }
// //     // 1 is not prime, even numbers > 2 are not prime
// //     else if (n == 1 || !(n & 1)) {
// //         ++checks
// //         console.log(`Checks: ${checks}`)
// //         return false
// //     }

// //     // Check for primality using odd numbers from 3 to sqrt(n)
// //     const tam = Math.floor(Math.sqrt(n))
// //     for (let i = 3; i <= tam; i += 2) {
// //         checks++
// //         // n is not prime if it is evenly divisible by some 'i' in this range
// //         if (n % i == 0) {
// //             ++checks
// //             console.log(`Checks: ${checks}`)
// //             return false
// //         }
// //     }
// //     // n is prime
// //     ++checks
// //     console.log(`Checks: ${checks}`)
// //     return true
// // }
// // console.log(isPrimeBest(2147483647))
// // console.log(isPrimeBest(1073741831))
// // console.log(isPrimeBest(536870909))
// // console.timeEnd()


// // console.time()
// // function prime(input) {
// //     let count = 0
// //     input.match(/\d+/g).slice(1).map(Number)
// //         .map(item => (Array(Math.floor(Math.sqrt(item)) - 1).fill()
// //             .map((_, i) => 2 + i)
// //             .every(prime => (item % prime !== 0)))
// //             ? item != 1
// //                 ? console.log('Prime')
// //                 : console.log('Not prime')
// //             : console.log('Not prime')
// //         )
// //     return input.match(/\d+/g).slice(1).map(Number)
// // }
// // console.log(prime('3 2147483647 1073741831 536870909'))
// // console.timeEnd()


// // function beautifulTriplets(d, arr) {
// //     let triplets = []
// //     let len = arr.length
// //     let i = 0
// //     let j = 1
// //     let k = 2
// //     while (i <= len - 2) {
// //         if((arr[j] - arr[i] === d && arr[k] - arr[j] == d)) {
// //             triplets.push([i, j, k])
// //         }
// //
// //         if (k < len - 1) {
// //             k++
// //         } else {
// //             if (j < len - 2) {
// //                 j++
// //                 k = j + 1
// //             } else {
// //                 i++
// //                 j = i + 1
// //                 k = j + 1
// //             }
// //         }
// //     }
// //
// //     for (let i=0, j=1, k=2;i<= len - 2; (k<len - 1) ? k++ : (j < len - 2) ? (j++ , k = j + 1) : (i++, j = i + 1, k = j + 1)) {
// //         if((arr[j] - arr[i] === d && arr[k] - arr[j] == d)) {
// //             triplets.push([i, j, k])
// //         }
// //     }
// //     return triplets.length
// //
// //     let triplets = 0
// //     arr.forEach(x => (arr.includes(x + d) && arr.includes(x + (d * 2))) ? triplets++ : triplets)
// //     return triplets
// //
// //     return arr.reduce((triplets, x) => (arr.includes(x + d) && arr.includes(x + (d * 2))) ? triplets + 1 : triplets, 0)
// //
// //     let tam = arr[arr.length - 1]
// //     return arr.slice().filter(f => f <= (tam - (d * 2))).reduce((triplets, x) => (arr.includes(x + d) && arr.includes(x + (d * 2))) ? triplets + 1 : triplets, 0)
// // }
// // console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))
// // console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]))


// // function kaprekarNumber(p, q) {
// //     let arr1 = Array(q - p + 1).fill().map((_, idx) => idx + p)
// //     let arr2 = arr1.slice().map(x => ((x ** 2).toString().split('')))
// //         .map(y => Number(y.slice(0, (Math.floor(y.length / 2))).join('')) + Number(y.slice(Math.floor(y.length / 2), y.length).join('')))
// //     let kaprekar = arr1.filter((z, idx) => z == arr2[idx])
// //     return (kaprekar.length) ? kaprekar : 'INVALID RANGE'
// //
// // }
// // console.log(kaprekarNumber(1, 100))
// // console.log(kaprekarNumber(400, 700))
// //



// //   Dictionary sample
// // var blueCar   = {color: 'blue'};
// // var greenCar1 = {color: 'green'};
// // var redCar    = {color: 'red'};
// // var greenCar2 = {color: 'green'};
// //
// // var cars = [blueCar, greenCar1, redCar, greenCar2]
// //
// // var test = {};
// //
// // cars.forEach(function(value)
// // {
// //     var arr = [];
// //     cars.forEach(function(val)
// //     {
// //         if(value.color === val.color) {
// //             arr.push(val);
// //         }
// //     });
// //
// //     test[value.color] = arr;
// // })
// //
// // console.log(test);
// //
// // const result = {}
// // cars =
// // cars.forEach(car => {
// //     result[car.color] = result[car.color] || []
// //       result[car.color].push(car)
// // })



// // // Linked list
// // function Node(data) {
// //     this.data = data;
// //     this.next = null;
// // }
// // function Solution() {

// //     this.removeDuplicates = function (head) {
// //         if (head == null || head.next == null) {
// //             return head
// //         }
// //         else {
// //             let start = head
// //             let next = head
// //             let temp
// //             while (start.next) {
// //                 next = start.next
// //                 if (start.data == next.data) {
// //                     temp = JSON.parse(JSON.stringify(start.next))
// //                     start.next = temp.next
// //                 } else {
// //                     start = start.next
// //                 }
// //             }
// //         }
// //         return head
// //     }

// //     this.insert = function (head, data) {
// //         var p = new Node(data);
// //         if (head == null) {
// //             head = p;
// //         }
// //         else if (head.next == null) {
// //             head.next = p;
// //         }
// //         else {
// //             var start = head;
// //             while (start.next != null) {
// //                 start = start.next;
// //             }
// //             start.next = p;
// //         }
// //         return head;

// //     };

// //     this.display = function (head) {
// //         var start = head;
// //         while (start) {
// //             process.stdout.write(start.data + " ");
// //             start = start.next;
// //         }
// //     };
// // }
// // function main() {
// //     let head = null
// //     let mylist = new Solution()
// //     let data = [1, 2, 2, 3, 3, 4]
// //     for (let i of data) {
// //         head = mylist.insert(head, i)
// //     }
// //     head = mylist.removeDuplicates(head);
// //     mylist.display(head);

// // }
// // main()


// // // Working with Big Numbers
// // function taumBday(b, w, bc, wc, z) {
// //     b = BigInt(b)
// //     w = BigInt(w)
// //     bc = BigInt(bc)
// //     wc = BigInt(wc)
// //     z = BigInt(z)
// //     let int
// //         if (bc > (wc + z)) {
// //             int = b * (wc + z) + w * wc
// //                     return BigInt(int).toString()
// //         } else if (wc > (bc + z)) {
// //             int = b * bc + w * (bc + z)
// //             return BigInt(int).toString()
// //         } else {
// //             int =  b * bc + w * wc
// //                     return int.toString()
// //         }
// // }
// // console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924)) // 617318315833461267


// // function acmTeam(topic) {
// //     let highest = [0,0]
// //     for(let i=0; i<topic.length - 1; i++){
// //         for(let j=i+1; j<topic.length ; j++){
// //             let knownCount = 0
// //             for(let m=0; m<topic[i].length ; m++){
// //                 if(topic[i][m]|topic[j][m]){
// //                     knownCount++
// //                 }
// //             }
// //             knownCount > highest[0] ? highest = [knownCount, 1] : knownCount === highest[0] ? highest[1]++ : ''
// //         }
// //     }
// //     return highest
// //
// //
// //
// // }
// // console.log(acmTeam(['10101', '11100', '11010', '00101'])) // [5, 2]
// // console.log(acmTeam(['11101', '10101', '11001', '10111', '10000', '01110'])) // [5, 6]



// // function equalizeArray(arr) {
// //     return new Map([...new Set(arr)].map(x => [x, arr.filter(y => y === x).length]))
// //
// //     return arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
// //
// //     return arr.length - new Object([...new Set(arr)].map(x => [x, arr.filter(y => y === x).length])).sort((a, b) => b[1] - a[1])[0][1]
// //     return arr.length - [...new Set(arr)].map(x => [x, arr.filter(y => y === x).length]).reduce((high, z) => z[1] > high[1] ? z: high, [0, 0])[1]
// //     return arr.length - [...new Set(arr)].reduce((res, x) => arr.filter(y => y === x).length > res[1] ? [x, arr.filter(y => y === x).length]: res, [0, 0])[1]
// //     return [...new Set(arr)].map(x => arr.length - arr.filter(y => y === x).length)
// //     return Math.min(...arr.map(x => arr.length - arr.filter(y => y === x).length))
// // }
// // console.log(equalizeArray([1, 2, 2, 3]))

// // Use map.keys() to get unique elements
// //
// // Use map.values() to get the occurrences
// //
// // Use map.entries() to get the pairs [element, frequency]

// // function squares(a, b) {
// //     return Array(b - a + 1).fill().map((_, idx) => idx + a).filter(x => Math.sqrt(x) % 1 == 0).length
// //     return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1
// // }
// // console.log(squares(24, 49)) // 3
// // console.log(squares(3, 9)) // 2
// // console.log(squares(17, 24)) // 0


// // function int32ToIp(int32){
// //     return int32
// //         ? (int32 >>> 0).toString(2).match(/(\d{8})/g).map(x => parseInt(x, 2)).join('.')
// //         : '0.0.0.0'
// //
// //     return (int32>>>24) + '.' + (int32<<8>>>24) + '.' + (int32<<16>>>24) + '.' + (int32<<24>>>24)
// //
// //     return (
// //         ((int32 >> 24) & 0xFF) + "." +
// //         ((int32 >> 16) & 0xFF) + "." +
// //         ((int32 >>  8) & 0xFF) + "." +
// //         ((int32) & 0xFF)
// //     )
// //
// //     return [(int32 & 0xFF000000) >>> 24,
// //         (int32 & 0x00FF0000) >>> 16,
// //         (int32 & 0x0000FF00) >>> 8,
// //         (int32 & 0x000000FF)].join('.')
// //
// //     return [24, 16, 8, 0].map(e => int32 >> e & 255).join('.')
// //
// //     return [int32 >>> 24, int32 >> 16 & 255, int32 >> 8 & 255, int32 & 255].join('.')
// //
// // }
// // console.log(int32ToIp(2154959208)) // 128.114.17.104
// // console.log(int32ToIp(2149583361)) // 128.32.10.1
// // console.log(int32ToIp(0)) // 0.0.0.0



// // function appendAndDelete(s, t, k) {
// //     Minimum operations to convert s to t
// //     let op = s.length + t.length
// //     If it less then possibilities just return Yes
// //     if (k > op) return 'Yes'
// //     Looping through the s or t depend which one has a shorter size until and reducing 2 operations each time (one append and one delete)
// //     for (let i = 0, l = Math.min(s.length, t.length); i < l; i++, op -= 2) {
// //         check each letter if is still equal, otherwise just stop the loop
// //         if (s[i] !== t[i]) break
// //     }
// //     check if the number of left operations is bigger than the number of possibilities
// //     also the amount must be even, because of 2 operations everytime,
// //     return op > k || (k - op) % 2 !== 0 ? 'No' : 'Yes'
// // }
// // console.log(appendAndDelete('ashley', 'ash', 2)) // No
// // console.log(appendAndDelete('abcd', 'abcdert', 10)) // No
// // console.log(appendAndDelete('zzzzz', 'zzzzzzz', 4)) // Yes
// // console.log(appendAndDelete('abc', 'def', 6)) // Yes
// // console.log(appendAndDelete('hackerhappy', 'hackerrank', 9)) // Yes
// // console.log(appendAndDelete('aba', 'aba', 7)) // Yes



// // function jumpingOnClouds(c, k) {
// //         let e = 100
// //         let jump = 0
// //         do {
// //             if (c[jump] == 1) {
// //                 e -= 2
// //             }
// //             e--
// //             jump = (jump + k) % c.length
// //         } while (jump !== 0)
// //         return e
// // }
// // console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)) // 92
// // console.log(jumpingOnClouds([0, 0, 1, 0], 2)) // 92
// // console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)) // 80


// // let jump = 0
// //     let i = 0
// //     while (i < c.length - 1) {
// //         if (c[i + 2] == 0)  {
// //             jump++
// //             i += 2
// //         } else {
// //             jump++
// //             i += 1
// //         }
// //     }
// //     return jump





// // function humanReadable(seconds) {
// //     const hours = String(Math.floor(seconds / 3600)).padStart(2, 0)
// //     const mins = String(Math.floor(seconds % 3600 / 60)).padStart(2, 0)
// //     seconds = String(seconds % 60).padStart(2, 0)
// //     return `${hours}:${mins}:${seconds}`
// //     return hours + ':' + mins + ':' + seconds
// //
// //     let pad = x => x < 10 ? "0"+x : x
// //     return pad(parseInt(seconds / (60*60))) + ":" +
// //     pad(parseInt(seconds / 60 % 60)) + ":" +
// //     pad(seconds % 60)
// //
// // }
// // console.log(humanReadable(86399)) // '23:59:59'
// // console.log(humanReadable(60)) //  '00:01:00'
// // console.log(humanReadable(360000))



// // function permutationEquation(p) {
// //     let y = []
// //     for (let x = 1; x <= p.length; x++) {
// //         let px = p.indexOf(x) + 1
// //         let ppx = p.indexOf(px) + 1
// //         y.push(ppx)
// //     }
// //     return y
// //
// //     return p.reduce((y, el, x) => [...y, p.indexOf(p.indexOf(x + 1) + 1) + 1], [])
// // }
// // console.log(permutationEquation([5, 2, 1, 3, 4])) // [4, 2, 5, 1, 3]
// // console.log(permutationEquation([4, 3, 5, 1, 2])) // [1, 3, 5, 4, 2]


// // function circularArrayRotation(a, k, queries) {
// //     for (let i = 0; i < (k % a.length); i++){
// //         let at = a.pop()
// //         a.unshift(at)
// //     }
// //     return queries.reduce((arr, x) => [...arr, a[x]], [])
// //
// //
// //     const arr = k ? a.splice(-k % a.length).concat(a) : a
// //     return queries.map(x => arr[x])
// //
// //
// //     var res = []
// //     for (var q = 0; q < queries.length; q++) {
// //         var idx = (queries[q] - k) % a.length
// //                 if (idx < 0) {
// //                     idx += a.length
// //                 }
// //                 res.push(a[idx])
// //     }
// //     return res
// //
// //
// //     return queries.reduce((res, x) => (x - k) % a.length < 0 ? [...res, a[(x - k) % a.length + a.length]] : [...res, a[(x - k) % a.length]] , [])
// //
// // }
// // console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])) // 2 3 1    [1, 2, 0]
// // console.log(circularArrayRotation([3, 4, 5], 2, [1, 2])) // 5 3            [2, 0]
// //     return ((position - 1 + times - 1) % arrayLength) + 1
// //     return arr.reduceRight((acc, val) => val === 0 ? [...acc, val] : [val, ...acc], [])



// // let S = 'Exception and Error  handling'
// // S = 134235
// //
// // try {
// //     S != Number(S) && err()
// //     console.log(Number(S))
// // }
// // catch (err) {
// //     console.log('Bad String')
// // }
// //
// // try {
// //     num = parseInt(S) || error
// //             console.log(num)
// // }
// //     catch (error) {
// //         console.log("Bad String")
// // }


// // function solution(list){
// //     list.sort((a, b) => a - b)
// //     let result = []
// //     let temp = []
// //     let cache = []
// //     for (let i = 0; i < list.length; i ++) {
// //         if (list[i] + 1 == list[i + 1] && list[i] + 2 == list[i + 2]) {
// //             temp = [...temp, list[i], list[i + 1], list[i + 2]]
// //         } else {
// //             temp = Array.from(new Set(temp))
// //             if (temp.length) {
// //                 cache = temp
// //             }
// //             if (temp.length >= 3) {
// //                 result = [...result, temp]
// //                 temp = []
// //             } else {
// //                     if (!cache.includes(list[i])) {
// //                         result.push(list[i])
// //                     }
// //             }
// //         }
// //     }
// //     return result.map(x => Array.isArray(x) ? [x[0], x[x.length - 1]].join('-') : String(x)).join(',')
// //
// //
// //         let temp = list.slice()
// //     for(let i =1; i <list.length;i++){
// //         if(list[i-1]+1 ===list[i] && list[i+1] === list[i] +1){
// //             temp[i]=""
// //         }
// //     }
// //     return temp.join().replace(/,{2,}/gm,'-')
// //
// //
// //     return list.map((val, idx) => list[idx - 1] === val - 1 && list[idx + 1] === val + 1 ? '' : val).join().replace(/,?(,)+/g, '-')
// //
// //
// //     nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v)
// //     return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-')
// //
// // }
// // console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) // '-6,-3-1,3-5,7-11,14,15,17-20'


// // function saveThePrisoner(n, m, s) {
// //     return ((s - 1 + m - 1) % n) + 1
// //     return (m - 1 + s) % n || n
// // }
// // console.log(saveThePrisoner(5, 2, 1)) // 2
// // console.log(saveThePrisoner(5, 2, 2)) // 3
// // console.log(saveThePrisoner(7, 19, 2)) // 6
// // console.log(saveThePrisoner(3, 7, 3)) // 3
// // console.log(saveThePrisoner(352926151, 380324688, 94730870)) // 122129406
// // console.log(saveThePrisoner(499999999, 999999997, 2)) // 499999999
// // console.log(saveThePrisoner(499999999, 999999998, 2)) // 1
// // console.log(saveThePrisoner(999999999, 999999999, 1)) // 999999999


// // Linked list, nodes and knots

// // process.stdin.resume()
// // process.stdin.setEncoding('ascii')

// // let input_stdin = ""
// // let input_stdin_array = ""
// // let input_currentline = 0

// // process.stdin.on('data', function (data) {
// //     input_stdin += data
// // })

// // process.stdin.on('end', function () {
// //     input_stdin_array = input_stdin.split("\n")
// //     main()
// // })
// // function readLine() {
// //     return input_stdin_array[input_currentline++]
// // }
// // function Node(data) {
// //     this.data = data
// //     this.next = null
// // }
// // function Solution() {

// //     this.insert = function (head, data) {
// //         let temp = new Node(data)
// //         if (head == null) {
// //             return temp
// //         } else {
// //             let start = head
// //             while (start.next) {
// //                 start = start.next
// //             }
// //             start.next = temp
// //             console.log(JSON.stringify(start))
// //             return head
// //         }
// //     }

// //     this.display = function (head) {
// //         let start = head
// //         while (start) {
// //             process.stdout.write(start.data + " ")
// //             start = start.next
// //         }
// //         console.log('')
// //     }
// // }
// // function main() {
// //     let T = parseInt(readLine())
// //     let head = null
// //     let mylist = new Solution()
// //     let data = [8, 11, 2, 3, 4]
// //     for (let i of data) {
// //         let data = parseInt(readLine())
// //         head = mylist.insert(head, i)
// //     }
// //     console.log(JSON.stringify(head))
// //     mylist.display(head)
// // }
// // main()


// // function repeatedString(s, n) {
// //     if (s.length == 1 && s[0] == 'a') {
// //         return n
// //     } else if (!s.match(/a/g)) {
// //         return 0
// //     } else {
// //         return Math.floor(n / s.length) * (s.match(/a/g).length) +
// //         ((n % s.length) ? s.slice(0, n % s.length).split('')
// //         .filter(_ => _ == 'a').length : n % s.length)
// //     }
// //
// //
// //     let matched = s.split('').filter((c) => c == 'a').length
// //     let repeats = Math.floor(n/s.length)
// //     let left = n - (repeats * s.length)
// //     return repeats * matched + s.split('').filter((x,idx) => x == 'a' && idx < left).length
// //
// //
// //     let sOrig = s;
// //     let fullCountInS = (s.length - s.replace(/a/g, '').length);
// //     let repeat = Math.floor(n / s.length);
// //     let leftOver = n % s.length;
// //
// //     let count = repeat * fullCountInS;
// //
// //     s = sOrig.substring(0, leftOver);
// //     let leftOverCount = (s.length - s.replace(/a/g, '').length);
// //
// //     return count + leftOverCount
// //
// //
// // }
// // console.log(repeatedString('a', 1000000000000)) // 1000000000000
// // console.log(repeatedString('aba', 10)) // 7
// // console.log(repeatedString('abcac', 10)) // 4
// // console.log(repeatedString('x', 10000000000)) // 0
// // console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400)) // 51574523448
// // console.log(repeatedString('gfcaaaecbg', 547602)) // 164280
// // console.log(repeatedString('jdiacikk', 899491)) // 112436
// // console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570)) // 16481469408


// function jumpingOnClouds(c) {
//   let jump = 0
//   let i = 0
//   while (i < c.length - 1) {
//     if (c[i + 2] == 0) {
//       jump++
//       i += 2
//     } else {
//       jump++
//       i += 1
//     }
//   }
//   return jump
// }
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])) // 3


// // function viralAdvertising(n) {
// //     let sum = 0
// //     let recipients = 5
// //     for (let i = 1; i <= n; i++) {
// //         sum += Math.floor(recipients / 2)
// //         recipients = Math.floor(recipients / 2) * 3
// //     }
// //     return sum
// //
// //     return Array(n).fill().map((_,x)=> x + 1)
// //     .reduce(function(result, x) {
// //         result[1] += Math.floor(result[0] / 2)
// //         result[0] =  Math.floor(result[0] / 2) * 3
// //         return result
// //     }, [5, 0])[1]
// // }
// // console.log(viralAdvertising(3)) // 9
// // console.log(viralAdvertising(4)) // 15
// // console.log(viralAdvertising(5)) // 24
// // console.log(viralAdvertising(6)) // 37
// // console.log(viralAdvertising(7)) // 56
// // console.log(viralAdvertising(49)) // 1379192761
// // console.log(viralAdvertising(50)) // 2068789129


// // function beautifulDays(i, j, k) {
// //     return Array(j - i + 1).fill()
// //     .map((_, idx) => idx + i)
// //     .filter(x =>
// //     (Math.abs(x - Number(x.toString().split('').reverse().join(''))) / k) % 1 == 0)
// //     .length
// //
// // }
// // console.log(beautifulDays(20, 23, 6))


// // function domainName(url){
// //     return url.replace(/.*www.|.*\/\/|\..*/g, '')
// //     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]
// //     return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
// // }
// //
// // console.log(domainName("http://google.com")) // "google"
// // console.log(domainName("http://google.co.jp")) // "google"
// // console.log(domainName("www.xakep.ru")) // "xakep"
// // console.log(domainName("https://youtube.com")) // "youtube"
// // console.log(domainName("http://twn0b-8qhwel7gvrmnphow.net/archive/")) // "twn0b-8qhwel7gvrmnphow"


// // function angryProfessor(k, a) {
// //
// //     return a.filter(x => x <= 0).length >= k ? 'NO' : 'YES'
// // }
// // console.log(angryProfessor(3, [-1, -3, 4, 2]))
// // console.log(angryProfessor(2, [0, -1, 2, 1]))



// // function moveZeros(arr) {
// // Simple and Best practice
// //     let preArray = []
// //     let sufArray = []
// //     arr.forEach(item => (item === 0) ? sufArray.push(item) : preArray.push(item))
// //     return preArray.concat(sufArray)
// //
// // Hard coding
// //     return arr.reduce((pre, item) => (item !== 0 ? pre.push(item) : '', pre), []).concat(arr.reduce((pre, item) => (item === 0 ? pre.push(item) : '', pre), []))
// //
// // Clever
// //     return arr.filter(x => x !== 0).concat(arr.filter(x =>  x === 0))
// //
// //     return [...arr.filter(x => x !== 0),...arr.filter(x =>  x === 0)]
// //
// //     return arr.reduceRight((acc, val) => val === 0 ? [...acc, val] : [val, ...acc], [])
// //
// //     return [...arr.filter(d => d !== 0), ...Array(arr.length).fill().map(x => 0)].slice(0, arr.length)
// //
// // }
// // console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
// // console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // [false,1,1,2,1,3,"a",0,0]
// // console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])) // [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
