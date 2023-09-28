let body = document.querySelector('body')
let title1 = document.getElementById('title1')
let title2 = document.getElementById('title2')
let title_add = document.getElementById('title_add')
let add_news = document.getElementById('add_news')
let logotyp = document.getElementById('logotyp')
let title_card = document.getElementById('title_card')
let h4 = document.getElementById('h4')




document.addEventListener('keydown', function(event){

    if(event.key == 'd'){
        body.style = 'background: black'
        title1.style= 'color:white'
        title2.style= 'color:white'
        title_add.style= 'color:white'
        title_card.style= 'color:white'
        logotyp.style = 'color:black; background:white'
        h4.style= 'color:white'
        add_news.style= 'background:black'
        
    }
    if(event.key == 'w'){
        body.style = 'background: white'
        title1.style = 'color: black'
        title2.style = 'color: black'
        logotyp.style= 'color:white'
        logotyp.style= 'background:black'
        h4.style= 'color: black'
        add_news.style= 'background:#F8F8F8'
        title_add.style= 'color:black'
        title_card.style= 'color:black'
    }
})





let news = []

let titlename = document.querySelector('.titlename')
let date = document.querySelector('.date')
let author = document.querySelector('.author')
let text = document.querySelector('.text')

let button = document.querySelector('.btn')
let newsPlace = document.querySelector('.card')

function showNews (){
    newsPlace.innerHTML = ''
    news.forEach(element =>{
            newsPlace.innerHTML += `
            <img src="./img/Rectangle 3.png" class="img_card" alt="card">
                    <div class="text_card">
                        <h4 class="title_card">${element.name}</h4>
                    </div>
                    <p class="status">Опубликована</p>
                    <div class="info_card">
                        <div class="block_card">
                            <p class="date">1 Hour Ago</p>
                            <p class="author">${element.author}</p>
                        </div>
                        <div class="icon_card">
                            <a href="" class="icon"><img src="./img/edit.png" alt="edit"></a>
                            <a href="" class="icon"><img src="./img/remove.png" alt="remove"></a>
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
