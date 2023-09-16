let news = []

let titlename = document.querySelector('.titlename')
let date = document.querySelector('.date')
let author = document.querySelector('.author')
let text = document.querySelector('.text')
let id = document.querySelector('.id')

let button = document.querySelector('.button')
let newsPlace = document.querySelector('.box_list')

function showNews (){
    newsPlace.innerHTML = ''
    news.forEach(element =>{
            newsPlace.innerHTML += `
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
        
    })
}

function addNews(){
    let object = {

        name: titlename.value,
        date:date.value,
        author:author.value,
        text:text.value,
        id:id.value,
        }

        news.push(object)
        console.log(news)
        titlename.value=''
        date.value=''
        author.value=''
        text.value=''
        id.value=''

        showNews()
}

button.addEventListener('click',addNews)
