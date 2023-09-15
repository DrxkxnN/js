
let news = [
{
    id:1,
    name: 'Я в париже',
    author: 'MAMA',
    date:'01.01.2004',
    text:'Сегодня я поехала в париж было очень весело'
},
{
    id:2,
    name: 'Новость дня',
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
<h3 class="namenews">${element.name}</h3>
<p class="opasitytext">${element.date}</p>
</div>
<p class="text">${element.text}</p>
<div class="namedate">
<p class="authorname">${element.author}</p>
<p class="opasitytext">id:${element.id}</p>
</div>
</div>
`

newsPlace.innerHTML += html
})