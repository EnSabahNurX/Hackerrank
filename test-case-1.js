


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
