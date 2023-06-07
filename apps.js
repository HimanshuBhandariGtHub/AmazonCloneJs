const leftBtn= document.querySelector(".l-btn");
const rightBtn= document.querySelector(".r-btn");
rightBtn.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftBtn.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftBtn1= document.querySelector(".btn-1b");
const rightBtn1= document.querySelector(".btn-1a");
rightBtn1.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftBtn1.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-1');
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftBtn2= document.querySelector(".btn-2b");
const rightBtn2= document.querySelector(".btn-2a");
rightBtn2.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-2');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftBtn2.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-2');
    conent.scrollLeft -=1100;
    event.preventDefault();
});

const leftBtn3= document.querySelector(".btn-3b");
const rightBtn3= document.querySelector(".btn-3a");
rightBtn3.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-3');
    conent.scrollLeft +=1100;
    event.preventDefault();
});
leftBtn3.addEventListener('click', function(event){
    const conent=document.querySelector('.product-slide-3');
    conent.scrollLeft -=1100;
    event.preventDefault();
});