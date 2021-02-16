let res = document.getElementById('res')
let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btnClr = document.getElementById('btnClr')
let btnEql = document.getElementById('btnEql')
let btnSum = document.getElementById('btnSum')
let btnSub = document.getElementById('btnSub')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')
res.innerHTML = ''
let decimalRes = res.innerHTML.replace(/[0-1]+/gm, (x) => parseInt(x, 2))

btn0.addEventListener('click', () => res.innerHTML += btn0.innerHTML)
btn1.addEventListener('click', () => res.innerHTML += btn1.innerHTML)
btnSum.addEventListener('click', () => res.innerHTML += btnSum.innerHTML)
btnSub.addEventListener('click', () => res.innerHTML += btnSub.innerHTML)
btnMul.addEventListener('click', () => res.innerHTML += btnMul.innerHTML)
btnDiv.addEventListener('click', () => res.innerHTML += btnDiv.innerHTML)
btnClr.addEventListener('click', () => res.innerHTML = '')
btnEql.addEventListener('click', equal)


// document.addEventListener('keydown', equal)

function equal() {
    let decimalRes = res.innerHTML.replace(/[0-1]+/gm, (x) => parseInt(x, 2))
    res.innerHTML = Math.floor(eval(decimalRes)).toString(2)
}