const bar=document.getElementById('bar');
const Close=document.getElementById('Close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(Close){
    Close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}