const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (event) => {
    const password = document.querySelector('input[type=password][name=password');
    const pswordConfirm = document.querySelector('input[type=password][name=password-confirm]');

    if (password.value != pswordConfirm.value){
        event.preventDefault();
        password.style.border = '2px solid red';
        pswordConfirm.style.border = '2px solid red';
    } 

})
