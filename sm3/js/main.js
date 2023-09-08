
let a = Number(prompt('Укажите стоймость товара'))
let b = Number(prompt('Введите количество своих Money'))

if(a==b){
    alert('Покупка совершена')
}

let x = a - b
let c = b - a

if(a>b){
    alert('Для покупки нехватает ' + x +' р.')
}else{
    alert('Покупка совершена. Сдача '+ c +' р.')
}

