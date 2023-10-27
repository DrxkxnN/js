
// let a = prompt('Введите число')
// let box = '<div class="box"><img class="img" src="./img/Без названия.jpg" alt=""></div>';
// let box_list = document.querySelector('.box_list');

// for(let i = 0; i < a; i++){
//     box_list.insertAdjacentHTML('beforeend',box);
// }


let news = [
{
    id:1,
    name: 'я в париже',
    author: 'MAMA',
    date:'01.01.2004',
    text:'Сегодня я поехала в париж было очень весело'
},
{
    id:2,
    name: 'новости дня',
    author: 'папа',
    date:'03.02.2004',
    text:'Сегодня я поехал в париж было очень весело'
},
{
    id:3,
    name: 'Завтрашняя новость',
    author: 'дядя',
    date:'05.02.2004',
    text:'затра я поеду в париж будет очень весело'
},
{
    id:4,
    name: 'Егор купил ноут',
    author: 'Алексей',
    date:'09.09.2023',
    text:'поздравляем'
},
{
    id:5,
    name: 'Просто новость',
    author: 'Просто автор',
    date:'01.01.2004',
    text:'просто текст'
}
]

newsPlace = document.querySelector('.box_list')
news.forEach(element => {
html = `
<div class="news_card">
<div class="namedate">
<h3>${element.name}</h3>
<p class="opasitytext">${element.date}</p>
</div>
<p>${element.text}</p>
<div class="namedate">
<p class="authorname">${element.author}</p>
<p class="opasitytext">id:${element.id}</p>
</div>
</div>
`

newsPlace.innerHTML += html
})