const menuLi = document.querySelectorAll('.menu_link')
menuLi.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        const menu2 = element.querySelector('.menu2')
        menu2.style.display = 'block'
    })
})

menuLi.forEach(element => {
    element.addEventListener('mouseout', ()=>{
        const menu2 = element.querySelector('.menu2')
        menu2.style.display = 'none'
    })
})
