    let modalShowButton = document.querySelector('.add-button');
    let modalHideButton = document.querySelector('.close-button');
    let modal = document.querySelector('.modal');
    let body = document.querySelector('body')
    let h2 = document.getElementById('h2')
    let color_text = document.getElementById('color_text')

    modalShowButton.addEventListener('click', () => {
        modal.classList.add('modal_active');
    })

    modalHideButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
    })


    //Пишите здесь

    document.addEventListener('keydown', function (event) {

        if (event.key == 'b') {
            body.style = 'background: black'
            h2.style = 'color: white'
            color_text.style = 'color: white'
        }
        if (event.key == 'w') {
            body.style = 'background: white'
            h2.style = 'color: black'
            color_text.style = 'color: black'
        }
    })


    // Добавление новости в массив
    let error1 = document.querySelector('.error1');
    let error2 = document.querySelector('.error2');


    const sendButton = document.querySelector('.send');
    const titleInput = document.querySelector('input[type="text"]');
    const textArea = document.querySelector('.textarea');
    const newsWrapper = document.querySelector('.news-wrapper');

    sendButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const text = textArea.value.trim();

        if (titleInput.value ==''){
            error1.innerHTML = 'Введите название'
            return
        }
        else if (title.length < 8) {
            error1.innerHTML = 'Название должно быть не меньше 8 символов!'
            return
        }
        else{
            error1.innerHTML = ''
        }
        
        if (textArea.value==''){
            error2.innerHTML = 'Введите текст'
            return
        }
        else if (text.length > 300) {
            error2.innerHTM = 'Текст должен быть не более 300 символов!'
            return
        }
        else{
            error2.innerHTML = ''
        }

        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const newsTitle = document.createElement('h3');
        newsTitle.classList.add('h3');
        newsTitle.textContent = title;

        const newsText = document.createElement('p');
        newsText.classList.add('news-item__p');
        newsText.textContent = text;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsText);
        newsWrapper.appendChild(newsItem);
    });