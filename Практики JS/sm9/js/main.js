let body = document.querySelector('body')
let box = document.querySelector('.box')
let box1 = document.querySelector('.box1')
let container = document.querySelector('.container')

function rand(max){
return Math.floor(Math.random()*max);
}
// body.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`

document.addEventListener('keydown', function(event){

    
    if(event.key == 'r'){
        body.style = 'background: red'
        // box.style = 'background: red'
    }
    if(event.key == 'w'){
        box.style.top = box.offsetTop - 3 + 'px'
        box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'a'){
        box.style.left = box.offsetLeft - 3 + 'px'
        box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'd'){
        box.style.left = box.offsetLeft + 3 + 'px'
        box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 's'){
        box.style.top = box.offsetTop + 3 + 'px'
        box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }

    if(event.key == 'ArrowUp'){
        box1.style.top = box1.offsetTop - 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'ArrowLeft'){
        box1.style.left = box1.offsetLeft - 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'ArrowRight'){
        box1.style.left = box1.offsetLeft + 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }
    if(event.key == 'ArrowDown'){
        box1.style.top = box1.offsetTop + 3 + 'px'
        box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    }




    // if(event.key == 'ArrowUp'){
    //     box.style.top = box.offsetTop - 1 + 'px'
    //     box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 'ArrowLeft'){
    //     box.style.left = box.offsetLeft - 1 + 'px'
    //     box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 'ArrowRight'){
    //     box.style.left = box.offsetLeft + 1 + 'px'
    //     box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 'ArrowDown'){
    //     box.style.top = box.offsetTop + 1 + 'px'
    //     box.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }




    // if(event.key == 'w'){
    //     box1.style.top = box1.offsetTop + 1 + 'px'
    //     box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 'a'){
    //     box1.style.left = box1.offsetLeft + 1 + 'px'
    //     box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 'd'){
    //     box1.style.left = box1.offsetLeft - 1 + 'px'
    //     box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }
    // if(event.key == 's'){
    //     box1.style.top = box1.offsetTop - 1 + 'px'
    //     box1.style.boxShadow = `0 0 25px rgb(${rand(255)},${rand(255)},${rand(255)})`
    // }

})


document.addEventListener('keyup', function(event){
    if(event.key == 'r'){
        document.body.style.background= 'white'
        // box.style.background= 'white'
    }
})

document.addEventListener('keydown', function(event){
    if(event.key == 'g'){
        body.style = 'background: green'
        // box.style = 'background: green'
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == 'g'){
        document.body.style.background= 'white'
        // box.style.background= 'white'
    }
})

document.addEventListener('keydown', function(event){
    if(event.key == 'b'){
        body.style = 'background: blue'
        // box.style = 'background: blue'
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == 'b'){
        document.body.style.background= 'white'
        // box.style.background= 'white'
    }
})

