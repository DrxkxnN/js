const nextBtn=document.querySelector('.next')
const backBtn=document.querySelector('.back')
const slides=document.querySelector('.slides')
const countSl=document.querySelectorAll('.slide').length

let width = 500;
let left = 0;

nextBtn.addEventListener('click',()=>{
    left = (left - width);
    if(left> -(countSl*width)){
        slides.style.left = left + 'px'
    }else{
        left = 0;
        slides.style.left = '0px'
    }
})

left = -(countSl * width);
backBtn.addEventListener('click',()=>{
    if(left==0){
        left = -(countSl*width - width);
        slides.style.left = left + 'px'
    }else if(left>= -(countSl*width)){
        left = (left+width);
        slides.style.left = left + 'px'
    }
})