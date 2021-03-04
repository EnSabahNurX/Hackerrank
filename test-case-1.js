



// function solution(list){
//     list.sort((a, b) => a - b)
//     let result = []
//     let temp = []
//     let cache = []
//     for (let i = 0; i < list.length; i ++) {
//         if (list[i] + 1 == list[i + 1] && list[i] + 2 == list[i + 2]) {
//             temp = [...temp, list[i], list[i + 1], list[i + 2]]
//         } else {
//             temp = Array.from(new Set(temp))
//             if (temp.length) {
//                 cache = temp
//             }
//             if (temp.length >= 3) {
//                 result = [...result, temp]
//                 temp = []
//             } else {
//                     if (!cache.includes(list[i])) {
//                         result.push(list[i])
//                     }
//             }
//         }
//     }
//     return result.map(x => Array.isArray(x) ? [x[0], x[x.length - 1]].join('-') : String(x)).join(',')
// 
//     
//         let temp = list.slice()
//     for(let i =1; i <list.length;i++){
//         if(list[i-1]+1 ===list[i] && list[i+1] === list[i] +1){
//             temp[i]=""
//         }
//     }
//     return temp.join().replace(/,{2,}/gm,'-')
//     
//     
//     return list.map((val, idx) => list[idx - 1] === val - 1 && list[idx + 1] === val + 1 ? '' : val).join().replace(/,?(,)+/g, '-')
//     
//     
//     nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v)
//     return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-')
//     
// }
// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) // '-6,-3-1,3-5,7-11,14,15,17-20'


// function saveThePrisoner(n, m, s) {
//     return ((s - 1 + m - 1) % n) + 1
//     return (m - 1 + s) % n || n
// }
// console.log(saveThePrisoner(5, 2, 1)) // 2
// console.log(saveThePrisoner(5, 2, 2)) // 3
// console.log(saveThePrisoner(7, 19, 2)) // 6
// console.log(saveThePrisoner(3, 7, 3)) // 3
// console.log(saveThePrisoner(352926151, 380324688, 94730870)) // 122129406
// console.log(saveThePrisoner(499999999, 999999997, 2)) // 499999999
// console.log(saveThePrisoner(499999999, 999999998, 2)) // 1
// console.log(saveThePrisoner(999999999, 999999999, 1)) // 999999999


// Linked list, nodes and knots
// 
// process.stdin.resume()
// process.stdin.setEncoding('ascii')
// 
// let input_stdin = ""
// let input_stdin_array = ""
// let input_currentline = 0
// 
// process.stdin.on('data', function (data) {
//     input_stdin += data
// })
// 
// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n")
//     main()
// })
// function readLine() {
//     return input_stdin_array[input_currentline++]
// }
// function Node(data){
//     this.data=data
//     this.next=null
// }
// function Solution(){
//     
//     this.insert=function(head,data){
//         let temp = new Node(data)
//         if (head == null) {
//             return temp
//         } else{
//             let start = head
//                         while (start.next) {
//                             start = start.next
//                         }
//                                     start.next = temp
//                                                 console.log(JSON.stringify(start))
//                                                             return head
//         }
//     }
//     
//     this.display=function(head){
//         let start=head
//         while(start){
//             process.stdout.write(start.data+" ")
//             start=start.next
//         }
//         console.log('')
//     }
// }
// function main(){
//     let T=parseInt(readLine())
//     let head=null
//     let mylist=new Solution()
//     let data = [8, 11, 2, 3, 4]
//     for(let i of data){
//         let data=parseInt(readLine())
//     head=mylist.insert(head, i)
//     }
//     console.log(JSON.stringify(head))
//     mylist.display(head)
// }		
// main()


// function repeatedString(s, n) {
//     if (s.length == 1 && s[0] == 'a') {
//         return n
//     } else if (!s.match(/a/g)) {
//         return 0
//     } else {
//         return Math.floor(n / s.length) * (s.match(/a/g).length) + 
//         ((n % s.length) ? s.slice(0, n % s.length).split('')
//         .filter(_ => _ == 'a').length : n % s.length)
//     }
//     
//     
//     let matched = s.split('').filter((c) => c == 'a').length
//     let repeats = Math.floor(n/s.length)
//     let left = n - (repeats * s.length)
//     return repeats * matched + s.split('').filter((x,idx) => x == 'a' && idx < left).length
//     
//     
//     let sOrig = s;
//     let fullCountInS = (s.length - s.replace(/a/g, '').length);
//     let repeat = Math.floor(n / s.length);
//     let leftOver = n % s.length;
//     
//     let count = repeat * fullCountInS;
//     
//     s = sOrig.substring(0, leftOver);
//     let leftOverCount = (s.length - s.replace(/a/g, '').length);
//     
//     return count + leftOverCount
//     
//     
// }
// console.log(repeatedString('a', 1000000000000)) // 1000000000000
// console.log(repeatedString('aba', 10)) // 7
// console.log(repeatedString('abcac', 10)) // 4
// console.log(repeatedString('x', 10000000000)) // 0
// console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400)) // 51574523448
// console.log(repeatedString('gfcaaaecbg', 547602)) // 164280
// console.log(repeatedString('jdiacikk', 899491)) // 112436
// console.log(repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570)) // 16481469408


// function jumpingOnClouds(c) {
//     let jump = 0
//     let i = 0
//     while (i < c.length - 1) {
//         if (c[i + 2] == 0)  {
//             jump++
//             i += 2
//         } else {
//             jump++
//             i += 1
//         }
//     }
//     return jump
// }
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3
// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])) // 3


// function viralAdvertising(n) {
//     let sum = 0
//     let recipients = 5
//     for (let i = 1; i <= n; i++) {
//         sum += Math.floor(recipients / 2)
//         recipients = Math.floor(recipients / 2) * 3
//     }
//     return sum
//     
//     return Array(n).fill().map((_,x)=> x + 1)
//     .reduce(function(result, x) {
//         result[1] += Math.floor(result[0] / 2)
//         result[0] =  Math.floor(result[0] / 2) * 3
//         return result
//     }, [5, 0])[1]
// }
// console.log(viralAdvertising(3)) // 9
// console.log(viralAdvertising(4)) // 15
// console.log(viralAdvertising(5)) // 24
// console.log(viralAdvertising(6)) // 37
// console.log(viralAdvertising(7)) // 56
// console.log(viralAdvertising(49)) // 1379192761
// console.log(viralAdvertising(50)) // 2068789129


// function beautifulDays(i, j, k) {
//     return Array(j - i + 1).fill()
//     .map((_, idx) => idx + i)
//     .filter(x => 
//     (Math.abs(x - Number(x.toString().split('').reverse().join(''))) / k) % 1 == 0)
//     .length
// 
// }
// console.log(beautifulDays(20, 23, 6))


// function domainName(url){
//     return url.replace(/.*www.|.*\/\/|\..*/g, '')
//     return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]
//     return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
// }
// 
// console.log(domainName("http://google.com")) // "google"
// console.log(domainName("http://google.co.jp")) // "google"
// console.log(domainName("www.xakep.ru")) // "xakep"
// console.log(domainName("https://youtube.com")) // "youtube"
// console.log(domainName("http://twn0b-8qhwel7gvrmnphow.net/archive/")) // "twn0b-8qhwel7gvrmnphow"


// function angryProfessor(k, a) {
//     
//     return a.filter(x => x <= 0).length >= k ? 'NO' : 'YES'
// }
// console.log(angryProfessor(3, [-1, -3, 4, 2]))
// console.log(angryProfessor(2, [0, -1, 2, 1]))


/*
Abstract Classes
class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
                else {
                    this.title = title;
                    this.author = author;
                }
    }
            
                    display() {
                        console.log('Implement the \'display\' method!')
                    }
}
class MyBook extends Book {
    
    constructor(title, author, price){
        super(title, author)
        this.price = price
    }
              
                            display() {
                                console.log('Title: ' + this.title)
                                console.log('Author: ' + this.author)
                                console.log('Price: ' + this.price)
                            }                      
}

let title = 'Bingo'
let author = 'Ricardo'
let price = 1000
let b = new MyBook(title,author, price)
b.display()*/



// function moveZeros(arr) {
// Simple and Best practice
//     let preArray = []
//     let sufArray = []
//     arr.forEach(item => (item === 0) ? sufArray.push(item) : preArray.push(item))
//     return preArray.concat(sufArray)
//     
// Hard coding
//     return arr.reduce((pre, item) => (item !== 0 ? pre.push(item) : '', pre), []).concat(arr.reduce((pre, item) => (item === 0 ? pre.push(item) : '', pre), []))
//     
// Clever
//     return arr.filter(x => x !== 0).concat(arr.filter(x =>  x === 0))
//     
//     return [...arr.filter(x => x !== 0),...arr.filter(x =>  x === 0)]
//     
//     return arr.reduceRight((acc, val) => val === 0 ? [...acc, val] : [val, ...acc], [])
//     
//     return [...arr.filter(d => d !== 0), ...Array(arr.length).fill().map(x => 0)].slice(0, arr.length)
//     
// }
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // [false,1,1,2,1,3,"a",0,0]
// console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])) // [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
