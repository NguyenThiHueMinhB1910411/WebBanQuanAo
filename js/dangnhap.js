

const form1 = document.getElementById('form__login');
const username = document.getElementById('username');
const password = document.getElementById('password');
const container = document.querySelector('.container');
const anmtBox = document.querySelector('.box-animation');

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkUsername() {
    if (username.value === '') {
        errorMessage(username, "Vui lòng nhập username");
    } else {
        successMessage(username);
    }
}

function checkPassword() {
    if (password.value == "") {
        errorMessage(password, "Vui lòng nhập mật khẩu");
    } else if (password.value.length < 6 && password.value.length > 40) {
        errorMessage(password, "Password length is 6-40 characters");
    } else {
        successMessage(password);
    }

    //tạo sự kiển hiển thị mật khẩu
    $(document).ready(function(){
        //alert('OK');
        /* Tạo sự kiện click */
        $('.eye').click(function(){
           // alert('Clicked')
           $(this).toggleClass('open');
           $(this).children('i').toggleClass('fa-eye-slash fa-eye');
    
           if($(this).hasClass('open')){
               $(this).prev().attr('type', 'text1');
           } else {
            $(this).prev().attr('type', 'password');
           }
        });
    });
};



username.addEventListener('blur', checkUsername, true);
password.addEventListener('blur', checkPassword, true);

form1.addEventListener('submit', (evt) => {

    evt.preventDefault();


    const formRows = document.querySelectorAll('.form-row');
    let arrformRows = Array.from(formRows); 
    arrformRows.pop();
    let isValid = true;
    arrformRows.forEach(item => {
        console.log(item.classList.contains('success'));
        if (!item.classList.contains('success')) isValid = false;
    });

    if (isValid) {
        container.classList.add('complete');
        alert("Wellcome to seunie. Chức mừng đăng nhập thành công.");
        anmtBox.classList.add('show');
    } else {
        container.classList.remove('complete');
        anmtBox.classList.remove('show');
    }
});


function errorMessage(pElement, message) {
    const formRow = pElement.parentElement.parentElement;
    if (formRow.classList.contains('success')) {
        formRow.classList.remove('success');
        formRow.classList.add('error');
    } else {
        formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
}

function successMessage(pElement) {
    const formRow = pElement.parentElement.parentElement;
    if (formRow.classList.contains('error')) {
        formRow.classList.remove('error');
        formRow.classList.add('success');
    } else {
        formRow.classList.add('success');
    }
}

