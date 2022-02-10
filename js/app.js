document.getElementById('login-btn').addEventListener('click', function () {

    // get user email field and  value 
    const emailField = document.getElementById('user-email');
    const userMail = emailField.value;

    // get user pass field and value
    const userPassField = document.getElementById('user-pass');
    const userPass = userPassField.value;
    if (userMail === 'abid43iiuc@gmail.com' && userPass === 'admin@123') {
        window.location.href = 'banking.html';
    }
    // console.log(userMail, userPass);
})