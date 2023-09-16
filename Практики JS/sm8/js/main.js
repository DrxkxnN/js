let button = document.querySelector('.button')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let button5 = document.querySelector('.button5')
let body = document.querySelector('body')


let box = document.querySelector('.box')
let box2 = document.querySelector('.box2')


let container = document.querySelector('.container')
let box_list1 = document.querySelector('.box_list1')

button.addEventListener('click', function(){
button.style = `color: white`
})

button.addEventListener('mousedown', function(){
button.style = `color: black`
button.style = `background: purple`
})

button2.addEventListener('mousedown', function(){
button2.style = `color: black`
button2.style = `background: blue`
button3.style = `color: white`
button3.style = `background: red`
})

button3.addEventListener('mouseup', function(){
button3.style = `color: white`
button3.style = `background: black`
button2.style = `color: white`
button2.style = `background: black`
})

function rand(max){
return Math.floor(Math.random()*max);
}

button4.addEventListener('dblclick', function(){
button4.style = `color: black`
button4.style = `background: purple`
body.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})

button5.addEventListener('contextmenu', function(){
console.log('ПКМ')
})


box.addEventListener('mouseout', function(){
    box.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
    box2.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})


box2.addEventListener('mousemove', function(){
    body.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
})