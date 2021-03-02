// Object constructor super extend inherit
// 'use strict';
// 
// var _input = '';
// var _index = 0;
// process.stdin.on('data', (data) => { _input += data; });
// process.stdin.on('end', () => {
//     _input = _input.split(new RegExp('[ \n]+'));
//     main();    
// });
// function read() { return _input[_index++]; }
// 
// /**** Ignore above this line. ****/
// 
// class Person {
//     constructor(firstName, lastName, identification) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.idNumber = identification;
//     }
//         
//             printPerson() {
//                 console.log(
//                     "Name: " + this.lastName + ", " + this.firstName 
//                                 + "\nID: " + this.idNumber
//                 )
//             }
// }
// 
// class Student extends Person {
//     /*	
//      *   Class Constructor
//      *   
//      *   @param firstName - A string denoting the Person's first name.
//      *   @param lastName - A string denoting the Person's last name.
//      *   @param id - An integer denoting the Person's ID number.
//      *   @param scores - An array of integers denoting the Person's test scores.
//      */
//     Write your constructor here
//         constructor(firstName, lastName, identification, testScores) {
//             super(firstName, lastName, identification)
//             this.testScores = testScores
//         }
//             
//                 /*	
//                  *   Method Name: calculate
//                  *   @return A character denoting the grade.
//                  */
//                 Write your method here
//                     calculate() {
//                         let score = this.testScores.slice().reduce((sum, x)=> sum + x, 0) / this.testScores.length
//                                 let grade = score < 40 ? 'T' : score < 55 ? 'D' : score < 70 ? 'P' : score < 80 ? 'A' : score < 90 ? 'E' : 'O'
//                                 
//                                 return grade
//                     }
// }
// 
// function main() {
//     let firstName = read()
//     let lastName = read()
//     let id = +read()
//     let numScores = +read()
//     let testScores = new Array(numScores)
//     
//     for (var i = 0; i < numScores; i++) {
//         testScores[i] = +read()  
//     }
//     
//         let s = new Student(firstName, lastName, id, testScores)
//         s.printPerson()
//         s.calculate()
//         console.log('Grade: ' + s.calculate())
// }




// /*
//  *  Write code that adds an 'area' method to the Rectangle class' prototype
//  */
// Rectangle.prototype.area = function() {
//     return this.w * this.h
// }
// /*
//  * Create a Square class that inherits from Rectangle and implement its class constructor
//  */
// class Square extends Rectangle {
//     constructor(side) {
//         super(side, side)
//     }
//         constructor(side) {
//                 super(side)
//                     this.w = side
//                         this.h = side
//                         }
// }


// function hourGlassSum(arr) {
//     let ar = arr.slice()
//     while (ar.some(element => Array.isArray(element))) ar = [].concat(...arr)
//     let highestSum = Math.min(...ar) >= 0? 0 : Math.pow(Math.min(...ar), 3)
//     for (let i = 0; i < arr.length - 2; i++) {
//         let temp = []
//         let sum = 0
//         for (let j  = 0; j < arr[i].length - 2; j++) {
//             temp.push(arr[i][j],arr[i][j + 1], arr[i][j + 2], arr[i + 1][j + 1], arr[i + 2][j],arr[i + 2][j + 1], arr[i + 2][j + 2])
//             sum = temp.reduce((sum, x) => sum + x, 0)
//             if (sum > highestSum) {
//                 highestSum = sum
//             }
//             temp = []
//         }
//     }
//     return highestSum
// 
// 
// Alternative solution
//     
//     let result = []
//     for (let i = 0; i < arr.length - 2; i++) {
//         for (let j  = 0; j < arr[i].length - 2; j++) {
//             result.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
//         }
//     }
//     return Math.max(...result)
//     
//     One line solution
//         return Math.max(...[].concat(...arr.map((a, i) => arr[i].map((b, j) => (i < arr.length - 2) && (j < arr[i].length - 2) ? arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2] : Math.pow(Math.min(...[].concat(...arr)), 3)))))
//                 
// }
// const array = [ [ 1, 1, 1, 0, 0, 0 ],
// [ 0, 1, 0, 0, 0, 0 ],
// [ 1, 1, 1, 0, 0, 0 ],
// [ 0, 0, 2, 4, 4, 0 ],
// [ 0, 0, 0, 2, 0, 0 ],
// [ 0, 0, 1, 2, 4, 0 ] ]
// 
// const array2 = [ [-1, 1, -1, 0, 0, 0],
// [0, -1, 0, 0, 0, 0],
// [-1, -1, -1, 0, 0, 0],
// [0, -9, 2, -4, -4, 0],
// [-7, 0, 0, -2, 0, 0],
// [0, 0, -1, -2, -4, 0] ]
// 
// const array3 = [ [0, -4, -6, 0, -7, -6],
// [-1, -2, -6, -8, -3, -1],
// [-8, -4, -2, -8, -8, -6],
// [-3, -1, -2, -5, -7, -4],
// [-3, -5, -3, -6, -6, -6],
// [-3, -6, 0, -8, -6, -7] ]

// console.log(hourGlassSum(array))
// console.log(hourGlassSum(array2))
// console.log(hourGlassSum(array3))



// function pigIt(str){
//     return str.split(' ').map(word => word.replace(/(\w)(\w*)/g, '$2$1ay')).join(' ')
//     
//     return str.replace(/(\w)(\w*)/g, '$2$1ay')
//     
//     return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay")
//     
//     return str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3')
//     
//     return str.replace(/\b(\w)(\w*)\b/gi, '$2$1ay')
// }
// console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
// console.log(pigIt('This is my string')) // hisTay siay ymay tringsay
// console.log(pigIt('O tempora o mores !')) // Oay emporatay oay oresmay !
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


// function utopianTree(n) {
//    return n == 0 ? 1 : n % 2 == 0 ? utopianTree(n - 1) + 1 : utopianTree(n - 1) * 2
//     return Math.pow(2, Math.ceil(n / 2) + 1) - 1 + ((n % 2 == 0) ? 0 : -1)
// }
// console.log(utopianTree(0)) // 1
// console.log(utopianTree(1)) // 2
// console.log(utopianTree(2)) // 3
// console.log(utopianTree(3)) // 6
// console.log(utopianTree(4)) // 7
// console.log(utopianTree(5)) // 14
// console.log(utopianTree(6)) // 15


// function maxConsecBiNumber(n) {
//     let binary = n.toString(2).split('')
//     let maxNum = 0
//     let sum = 0
//     for (let i of binary) {
//         if (i == 1) {
//             sum++
//         } else {
//             sum = 0
//         }
//         if (sum > maxNum) {
//             maxNum = sum
//         }
//     }
//     return maxNum
//     
//     return n.toString(2).split('0').reduce((max, x) => x.length > max ? x.length : max,0)
//     
//     return Math.max(...n.toString(2).split('0').map(x => x.length))
//     
// }
// console.log(maxConsecBiNumber(5))
// console.log(maxConsecBiNumber(13))
// console.log(maxConsecBiNumber(125))

// function designerPdfViewer(h, word) {
//     return Math.max(...word.toLowerCase().split('').map(c => h[c.charCodeAt() - 97])) * word.length
//     
// }
// 
// console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba')) 


// function toCamelCase(str){
//     return str.replace(/(_\w|-\w)/gim, (c) => c.toUpperCase().replace(/-|_/gi, ''))
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
//     return str.replace(/[_-]\w/gi, c => c[1].toUpperCase())
//     return str.replace(/[-_](.)/g, (m, v) => v.toUpperCase())
// }
// 
// console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
// console.log(toCamelCase("The-Stealth-Warrior")) // TheStealthWarrior


// function duplicateCount(text){
//     let dict = {}
//           text.toLowerCase().split('').forEach(item => dict[item] = dict[item] + 1 || 1)
//     return Object.keys(dict).filter(x => dict[x] > 1).length
//     
//     
//         return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//     
//     
//     return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
//     
//     return (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length
//        
//     
// }
// console.log(duplicateCount("aabBcde")) // 2
// console.log(duplicateCount("Indivisibility")) // 1
// console.log(duplicateCount("Indivisibilities")) // 2



// function hurdleRace(k, height) {
//     return k < Math.max(...height) ? Math.max(...height) - k : 0
// }
// console.log(hurdleRace(4, [1,6,3,5,2]))


// function processData(input) {
//     let inputArray = input.split("\n")
//     let totalNoOfEntries = parseInt(inputArray.splice(0, 1))
//     let nameQueries = inputArray.splice(totalNoOfEntries)
//     let phoneBookArray = inputArray.map(item => item.split(" "))
//     let phoneBookMap = new Map(phoneBookArray)
//     nameQueries.forEach(friend => {
//         if(phoneBookMap.has(friend)){
//             console.log(`${friend}=${phoneBookMap.get(friend)}`)
//         }else{
//             console.log('Not found')
//         }
//     })
//     
//     
//     let entries = input.split('\n')
//     let queries = entries.slice(Number(entries.slice(0, 1)) + 1)
//     let phoneBookMap = new Map(entries.map(item => item.split(' ').length == 2 ? item.split(' ') : '').filter(x => x))
//     queries.forEach(friend => 
//         (phoneBookMap.has(friend))
//         ? console.log(`${friend}=${phoneBookMap.get(friend)}`)
//         : console.log('Not found')
//     )
// } 
// console.log(processData(`3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry`)) 



// function pickingNumbers(a) {
//     let longest = []
//     for (let i in a) {
//         let temp = [a[i]]
//         for (let j in a) {
//             if (i != j && ((a[j] - a[i]) == 1 || (a[j] - a[i]) == 0)) {
//                 temp.push(a[j])
//             }
//         }
//         if (temp.length > longest.length) {
//             longest = [].concat(temp)
//         }
//     }
//     return longest.length
// }
// console.log(pickingNumbers([1,2,2,3,1,2]))


// function processData(input) {
// 	 let even
// 	 let odd
// 	 for (let j of input.split('\n').slice(1)){
// 		 even = ''
// 		 odd = ''
// 		 for (let i in j) {
// 			if (i % 2 == 0) {
// 				even += j[i]
// 			} else {
// 				odd += j[i]
// 			}
// 		}
// 		console.log(even + '  ' + odd)
// 	}
// } 
//console.log(processData('2\nHacker\nRank')) // Hce akr \n Rn ak



// function catAndMouse(x, y, z) {
//     return Math.abs(z-x) == Math.abs(z-y)
// 		? 'Mouse C'
// 		: Math.abs(z-x) > Math.abs(z-y)
// 		? 'Cat B'
// 		: 'Cat A'
// }
// console.log(catAndMouse(1,3,4)) // Cat B
// console.log(catAndMouse(1,3,2)) // Mouse C

// function pageCount(n, p) {
// 	return Math.min(Math.floor(p/2), Math.floor(n/2) - Math.floor(p/2))
// }
// console.log(pageCount(6, 2)) // 1
// console.log(pageCount(5, 1)) // 0
// console.log(pageCount(5, 4)) // 0
// console.log(pageCount(6, 5)) // 1
// console.log(pageCount(7, 4)) // 1
// console.log(pageCount(18183, 18042)) // 70


// function pageCount(n, p) {
// 	let pagesArray = [...Array(n + 1).fill().map((_, idx) => idx)]
//  	let book = []
//   	for (let i = 0; i <= n; i += 2) {
//   		book.push(pagesArray.slice(i, i + 2))
// 	}
//   	let start = book.slice().reduce((found, turn, i) => turn[0] == p || turn[1] == p ? i : found, 'Not found')
//   	let end = book.slice().sort((a, b) => b - a).reduce((found, turn, i) => turn[0] == p || turn[1] == p ? i : found, 'Not found')
// 	return start > end ? end : start
// }
// 
// console.log(pageCount(6, 2)) // 1
// console.log(pageCount(5, 1)) // 0
// console.log(pageCount(5, 4)) // 0
// console.log(pageCount(6, 5)) // 1
// console.log(pageCount(7, 4)) // 1
// console.log(pageCount(7, 8)) // 1
// console.log(pageCount(18183, 18042)) // 70


/*
function Person(initialAge){
    if (initialAge < 0) {
        console.log("Age is not valid, setting age to 0.")
        this.age = 0
    } else {
        this.age = initialAge
    }
    this.result
  Person.prototype.amIOld=function(){
   if (this.age < 13) {
       this.result = "You are young."
   } else if (this.age < 18) {
       this.result = "You are a teenager."
   } else {
       this.result = "You are old."
   }
   console.log(this.result)

  }
   Person.prototype.yearPasses=function(){
          this.age++
   }
}


var T=[-1, 10, 16, 18]
for(i=0;i<T.length;i++){
    var age=T[i]
    var p=new Person(age)
    p.amIOld()
    for(j=0;j<3;j++){
        p.yearPasses()

    }
    p.amIOld()
    console.log("")
    }

*/





// function bonAppetit(bill, k, b) {
//     return (bill.reduce((sum, item) => sum + item, 0) - bill[k]) / 2 == b
//     ? 'Bon Appetit'
//     : b - ((bill.reduce((sum, item) => sum + item, 0) - bill[k]) / 2)
// 
// }
// console.log(bonAppetit([2, 4, 6], 2, 3)) // Bon Appetit
// console.log(bonAppetit([3, 10, 2, 9], 1, 12)) // 5
// console.log(bonAppetit([3, 10, 2, 9], 1, 7)) // Bon Appetit



// function divisibleSumPairs(n, k, ar) {
//     return [].concat(...ar.map((item, idx) => 
//     [...Array(n).keys()].map(el => 
//     el != idx ? [item, ar[el]] : [''])
//     .filter(x => 
//     x != '' && x.reduce((sum, item) => 
//     sum + item, 0) % k == 0))).length / 2
//     
//     
//     let result = 0;
//     for(i = 0; i < ar.length - 1; i++){
//         for(j = i + 1; j < ar.length; j++){
//             if((ar[i] + ar[j]) % k == 0){
//                 result++
//             }
//         }
//     }
//     return result
// }
// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))
// console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6]))


// function birthday(s, d, m) {
//     return s.map((item, idx) => s.slice(idx, m + idx)).filter(el => el.length == m && el.reduce((sum, item) => sum + item, 0) == d).length
// 
//     
//     let count = 0
//     for (let i in s) {
//         let segment = s.slice(Number(i), m + Number(i))
//         if (segment.length == m && segment.reduce((sum, item) => sum + item, 0) == d) {
//                 count++
//         }
//     }
//     return count
// }
// console.log(birthday([2,2,1,3,2], 4, 2)) // 2
// console.log(birthday([1,2,1,3,2], 3, 2)) // 2
// console.log(birthday([1,1,1,1,1], 3, 2)) // 0
// console.log(birthday([4], 4, 1)) // 1


// function breakingRecords(scores) {
//     let max = scores[0]
//     let min = scores[0]
//     let countMin = 0
//     let countMax = 0
//     for (let i of scores) {
//         if (i < min) {
//             min = i
//             countMin++
//         }
//         if (i > max) {
//             max = i
//             countMax++
//         }
//     }
//     console.log(countMax, countMin)
// }
// breakingRecords([3,4,21,36,10,28,35,5,24,42])


// function getTotalX(a, b) {
//     return [...Array(Math.max(...b)).fill().map((_, idx) => 1 + idx)]
//     .filter(i => a.every(x => i % x == 0))
//     .filter(j => b.every(x => x % j == 0)).length
//     
//     
//     let result = []
//     for (let i = Math.min(...a); i < Math.max(...b); i++) {
//         let temp = 0
//         if (a.every(x => i % x == 0)) {
//             temp = i
//         }
//         if (b.every(x => x % i == 0) && temp != 0) {
//             result.push(temp)
//         }
//     }
//     return result.length
// }
// console.log(getTotalX([2,6], [24, 36])) // 2
// console.log(getTotalX([3,4], [24, 48])) // 2
// console.log(getTotalX([2,4], [16, 32, 96])) // 3
// console.log(getTotalX([1], [100])) // 9


// const factors = number => [...Array(number + 1).keys()].filter(i => number % i == 0)
// console.log(factors(36))


// function kangaroo(x1, v1, x2, v2) {
//     let T = (x1 - x2) / (v2 - v1)
//     if (Number.isInteger(T)) {
//         while (!(x1 > x2 && v1 > v2) && !(x2 > x1 && v2 > v1)) {
//             if (x1 == x2) {
//                 return 'YES'
//             }
//             x1 += v1
//             x2 += v2
//         }
//     }
//     return 'NO'    
// }
// console.log(kangaroo(0, 3, 4, 2)) // YES
// console.log(kangaroo(21, 6, 47, 3)) // NO
// console.log(kangaroo(43, 2, 70, 2)) // NO


// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let result = [0, 0]
//     result[0] = apples.map(item => item + a).filter(x => x >= s && x <= t).length
//     result[1] = oranges.map(item => item + b).filter(x => x >= s && x <= t).length
//     console.log(result[0])
//     console.log(result[1])
// 
// }
// console.log(countApplesAndOranges(7,11,5,15,[-2, 2, 1], [5, -6])) // 1 1


// function gradingStudents(grades) {
//         return grades.map(x => x >= 38 && x % 5 > 2 ? x + 5 - (x % 5) : x)
//     
//     let result = []
//     for (let i of grades) {
//         if (i >= 38 && ((Math.floor(i / 5) + 1) * 5)  - i < 3) {
//                 result.push((Math.floor(i / 5) + 1) * 5)
//         } else {
//             result.push(i)
//         }
//     }
//     return result
// }
// console.log(gradingStudents([73, 67, 38, 33]))


// function timeConversion(s) {
//     let hour = s.match(/\d{2}/)[0]
//     let shift = s.match(/AM|PM/)[0]
//     let rest = s.replace(/\d{2}/, '').replace(/AM|PM/, '')
//     let military
//     if (hour == 12 && shift == 'AM') {
//         military = '00'
//     } else if (hour > 0 && shift == 'AM') {
//         military = hour
//     } else if (hour == 12 && shift == 'PM') {
//         military = '12'
//     } else {
//         military = Number(hour) + 12
//     }
//     return military + rest
// }
// console.log(timeConversion('07:05:45PM'))
// console.log(timeConversion('12:05:45AM'))


// function birthdayCakeCandles(candles) {
//     let max = Math.max(...candles)
//     return candles.slice().filter(x => x == max).length
// 
// }
// 
// console.log(birthdayCakeCandles([3,2,1,3]))


// function staircase(n) {
//     let line
//     for (let i = 0; i < n; i++) {
//         line = ''
//         for (let j = 0; j < n; j++) {
//             if (j < n - i - 1) {
//                 line += ' '
//             } else {
//                 line += '#'
//             }
//         }
//         console.log(line)
//     }
// 
// }
// 
// staircase(15)

// function diagonalDifference(arr) {
//     let result = [0, 0]
//     for (let i in arr) {
//         result[0] += arr[i][i]
//         result[1] += arr[i][arr.length - i - 1]
//     }
//     return Math.abs(result[0] - result[1])
// }
// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
// console.log(diagonalDifference(arr))

// console.log([1,2,3,4,5].reduce((sum,item)=>sum+item,0))

// function miniMaxSum(arr) {
//     let min = (arr[arr.length - 1]) * (arr[arr.length - 1])
//     let max = -1
//     
//     for (let i = 0; i < arr.length; i++) {
//         let temp = 0
//         for (let j = 0; j < arr.length; j++) {
//             if( i != j) {
//                 temp += arr[j]
//             }
//         }
//         if (temp < min) {
//             min = temp
//         }
//                 if (temp > max) {
//             max = temp
//         }
//     }
//     return [min, max]
// 
// }
// 
// console.log(miniMaxSum([1,2,3,4,5]))




// function getMaxLessThanK(n, k) {
//     let max = 0
//     for (let i = 1; i <= n; i++) {
//         if (max == k - 1) break
//         for (let j = 1; j <= n; j++) {
//             if (max == k - 1) break
//             if (i != j && Number(i & j) < k && Number(i & j) > max) {
//                 max = i & j
//             }
//         }
//     }
//     return max
// }


// function getDayName(dateString) {    
//     return ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(dateString).getDay()]
// }
// 
// console.log(getDayName('01/01/1990')) // Monday
// console.log(getDayName('09/11/1999')) // Saturday
// console.log(getDayName('12/12/2013')) // Thursday
// console.log(getDayName('12/12/2012')) // Wednesday


