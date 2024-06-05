const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (event) => {
    const password = document.querySelector('input[type=pword');
    const pswordConfirm = document.querySelector('input[type=pcword]');

    if (password != pswordConfirm){
        event.preventDefault();
        password.style.border = '2px solid red';
        pswordConfirm.style.border = '2px solid red';
    }

})
