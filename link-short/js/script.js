const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit',formSubmit);

function validURL(str){
    var pattern = new RegExp(
        '^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str);
}

function formSubmit(e){
    e.preventDefault();
    if(input.value === ''){
        errMsg.innerHTML = 'Please enter something.';
        input.classList.add('border-red');
    }
    else if(!validURL(input.value)){
        errMsg.innerHTML = 'Please enter a valid URL.';
        input.classList.add('border-red');
    }else{
        errMsg.innerHTML = '';
        input.classList.remove('border-red');
        alert('success');
    }
}

document.getElementById('menu-btn').addEventListener('click',()=>{
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('menu').classList.toggle('hidden');
    document.getElementById('menu').classList.toggle('flex');
    
})