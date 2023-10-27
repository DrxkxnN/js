document.addEventListener('DOMContentLoaded', () =>{

    const blocks = document.querySelectorAll('.block')
    const phoneblock = document.querySelector('.phone_block')

    
    function rand(max){
        return Math.floor(Math.random()*max);
    }

    window.addEventListener('scroll',()=>{

        
        const windowHeigth = window.innerHeight
        
        const scrollPosition = window.scrollY

        const blockHeight = blocks[3].clientHeight
        
        const blockMidle = blocks[3].offsetTop + blockHeight / 2
        
        if(scrollPosition + windowHeigth>= blockMidle){
            phoneblock.style.display = "block"
            phoneblock.style.background = `rgb(${rand(255)},${rand(255)},${rand(255)})`
        }else{
            phoneblock.style.display = "none"
        }

    })
})