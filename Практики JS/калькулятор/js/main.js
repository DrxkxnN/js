const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const delenieBtn = document.querySelector('.delenie')
const umnojBtn = document.querySelector('.umnoj')
const submitBtn = document.querySelector('.submitBtn')
const resultEL = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

delenieBtn.onclick = function(){
    action = '/'
}

umnojBtn.onclick = function(){
    action = '*'
}

submitBtn.onclick = function(){
    if(action === '+'){
        const sum = Number(input1.value) + Number(input2.value)
        resultEL.textContent = sum 
    }else if(action === '-'){
        const sum = Number(input1.value) - Number(input2.value)
        resultEL.textContent = sum 
    }else if(action === '*'){
        const sum = Number(input1.value) * Number(input2.value)
        resultEL.textContent = sum 
    }else if(action === '/'){
        const sum = Number(input1.value) / Number(input2.value)
        resultEL.textContent = sum
    }

}