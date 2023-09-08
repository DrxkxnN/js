
let a = Number(prompt('Укажите стоймость товара'))
let b = Number(prompt('Введите количество своих Money'))

let x = a - b
let c = b - a

let textarea = document.querySelector('.textarea');
if(a>b){
    // alert('Для покупки нехватает ' + x +' р.')
    let textarea = document.getElementById('textarea');
    textarea.textContent = 'Для покупки нехватает ' + x +' р.';
}else{
    // alert('Покупка совершена. Сдача '+ c +' р.')
    let textarea = document.getElementById('textarea');
    textarea.textContent = 'Покупка совершена. Сдача '+ c +' р.';
    
}

    textarea.style.background = 'bisque'
    textarea.style.color = 'red'

