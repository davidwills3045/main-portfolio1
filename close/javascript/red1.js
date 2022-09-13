const signUp = e => {
    let fname = document.getElementById('Fname').value,
        email = document.getElementById('Email').value,
        pwd = document.getElementById('Pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() 
        );

    if (!exist) {
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('Fname').focus();
        alert("Account Successfully Created!.\n\n Please proceed to Sign In Below ");return
    }
    else {
        alert("This Account Already Exist!!!\n Try Sign In Using The Link"); 
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exist) {
        alert("Incorrect Login Details");return
    }
    else {
        location.href = "nice.html";
    }
    e.preventDefault();
}