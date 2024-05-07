const shareimg = document.querySelector('.shareImg')
const share = document.querySelector('.share');

shareimg.addEventListener('click', ()=>{
    if(share.classList.contains('hidden')){
        share.classList.remove('hidden');
    }else{
        share.classList.add('hidden');
    }
    
})