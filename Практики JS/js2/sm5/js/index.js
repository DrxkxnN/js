

const timeblock = document.querySelector('.time_block')
const timebtn=document.querySelector('.time_btn')
const countEl = document.querySelector('.tail')
let img_rotate = document.querySelector('.img_rotate')

setTimeout(()=>{
    
    countfull()

},3000)

timebtn.addEventListener('click',()=>{
    countfull()
})

function countfull(){

    timeblock.classList.add('active')
    let count = 5

    countHtml(count)
    timebtn.classList.remove('active')


    const countinterval = setInterval(()=>{
    
            count--
            countHtml(count)
    
            if(count ===0){
                clearInterval(countinterval)
                timeblock.classList.remove('active')
                timebtn.classList.add('active')
            }
    },3000)
}

function countHtml(value){
    countEl.innerHTML=value
}