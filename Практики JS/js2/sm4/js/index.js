const button = document.querySelectorAll('.tab_header_btn')
const tabs = document.querySelectorAll('.tab_body')

for(let x = 0; x < button.length; x++){
    button[x].addEventListener('click',()=>{
        for(let y = 0; y < tabs.length; y++){
            if(x==y){
                console.log('work')
                tabs[y].classList.add('body_active')
                button[y].classList.add('btn_active')
            }else{
                console.log('else work')

                tabs[y].classList.remove('body_active')
                button[y].classList.remove('btn_active')
            }
        }
        button[x].classList.add('btn_active')
    })
}