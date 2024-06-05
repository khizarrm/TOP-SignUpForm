const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const password = document.querySelector('input[type=password][name=password');
    const pswordConfirm = document.querySelector('input[type=password][name=password-confirm]');

    if (password.value != pswordConfirm.value){
        password.style.border = '2px solid red';
        pswordConfirm.style.border = '2px solid red';
    } else {
        const txtContainer = document.querySelector('.text-container > h1');
        const formData = new FormData(document.querySelector('form'))
        let fname = formData.get('fname');
        let lname = formData.get('lname');
        txtContainer.innerHTML += `<br><br>Welcome, ${fname} ${lname}!`;
        console.log('all g');
    }

})

