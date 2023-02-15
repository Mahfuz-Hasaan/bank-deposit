document.getElementById('submit').addEventListener('click',function(){
    const emailFiled = document.getElementById('user-email');
    const emailValue = emailFiled.value;
    const passField = document.getElementById('user-pass');
    const passValue = passField.value;
    console.log(emailValue,passValue);

    if(emailValue === 'mahfuzhasan587@gmai.com' && passValue === 'MahFUZ-128011'){
        location.href = 'bank.html';
    }
    else{
        alert('wrong!!!')
    }
})
