document.getElementById('submit').addEventListener('click',function(){
    const emailFiled = document.getElementById('user-email');
    const emailValue = emailFiled.value;
    const passField = document.getElementById('user-pass');
    const passValue = passField.value;
    console.log(emailValue,passValue);
})
document.getElementById('submit').addEventListener('keyup',function(){
    const emailFiled = document.getElementById('user-email');
    const emailValue = emailFiled.value;
    const passField = document.getElementById('user-pass');
    const passValue = passField.value;
    console.log(emailValue,passValue);
})