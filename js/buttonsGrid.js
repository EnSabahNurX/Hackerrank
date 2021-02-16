let btnArray = document.getElementsByClassName('buttonClass')
let bnt5 = document.getElementById('btn5')
let tempArray = [0, 1, 2, 5, 8, 7, 6, 3]
let resultArray = []
for (let i in tempArray) {
    resultArray.push(btnArray[tempArray[i]].innerHTML)
}

function rotateClockWise() {
    let temp = resultArray.pop()
    resultArray.unshift(temp)
    for (let j in resultArray) {
        btnArray[tempArray[j]].innerHTML = resultArray[j]

    }
}

bnt5.addEventListener('click', rotateClockWise)