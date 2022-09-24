

const email = document.getElementById('email');
const password = document.getElementById('password');
const retype = document.getElementById('retype');
const phoneNumber = document.getElementById('sdt');
const form = document.getElementById('register-form');

function validateEmail(email) {
    var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailPattern.test(String(email.value).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    let phonePattern = /^\d*$/;
    return phonePattern.test(phoneNumber.value);
}

function checkEmail() {
    if (email.value == "") {
        errorMessage(email, "This field is required.");
    } else if (!validateEmail(email)) {
        errorMessage(email, "This email is not a proper email address");
    } else {
        successMessage(email);
    }
};

function checkPassword() {
    if (password.value == "") {
        errorMessage(password, "This field is required");
    } else if (password.value.length < 6 || password.value.length > 40) {
        errorMessage(password, "Password length is 6-40 characters");
    } else if ((password.value != retype.value) && retype.value != "") {
        errorMessage(retype, "Password confirm is different from password");
    } else {
        successMessage(password);
    };
}

function checkRetype() {
    if (retype.value == "") {
        errorMessage(retype, "This field is required");
    } else if (retype.value.length < 6 || retype.value.length > 40) {
        errorMessage(retype, "Password length is 6-40 characters");
    } else if (retype.value != password.value) {
        errorMessage(retype, "Password confirm is different from password");
    } else {
        successMessage(retype);
    }
}

function checkPhoneNumber() {
    if (phoneNumber.value == "") {
        errorMessage(phoneNumber, "This field is required");
    } else if (phoneNumber.value.length != 10) {
        errorMessage(phoneNumber, "This is not a valid phone number");
    } else if (!validatePhoneNumber(phoneNumber)) {
        errorMessage(phoneNumber, "This is not a valid phone number");
    } else {
        successMessage(phoneNumber);
    }
}

email.addEventListener('blur', checkEmail, true);
password.addEventListener('blur', checkPassword, true);
retype.addEventListener('blur', checkRetype, true);
phoneNumber.addEventListener('blur', checkPhoneNumber, true);

function errorMessage(element, message) {
    if (element.classList.contains("success")) {
        element.classList.remove("success");
    }
    element.classList.add("error");
    if (element.type == "password") {
        element.nextElementSibling.nextElementSibling.textContent = message;
    } else {
        element.nextElementSibling.textContent = message;
    }
}

function successMessage(element) {
    if (element.classList.contains("error")) {
        element.classList.remove("error");
    }
    element.classList.add("success");
    if (element.type == "password") {
        element.nextElementSibling.nextElementSibling.innerHTML = '<i class="fa fa-check-circle check-icon"></i>';
    } else {
        element.nextElementSibling.innerHTML = '<i class="fa fa-check-circle check-icon"></i>';
    }
}

form.addEventListener('submit', (submit) => {
    submit.preventDefault();

    let successConditions = document.getElementsByClassName("success");
    if (successConditions.length == 4) {
        alert("Đăng ký thành công");
    }
});

let showPass = document.getElementsByClassName("fa-eye");

for (let i = 0; i < showPass.length; i++) {
    showPass[i].addEventListener("click", (evt) => {
        var password = evt.target.previousElementSibling;
        if (password.type == "password") {
            password.type = "text";
            evt.target.classList.add("fa-eye-slash");
            evt.target.classList.remove("fa-eye");
            evt.target.textContent = ' Giấu mật khẩu';
        } else {
            password.type = "password";
            evt.target.classList.remove("fa-eye-slash");
            evt.target.classList.add("fa-eye");
            evt.target.textContent = ' Hiển thị mật khẩu';
        }
    })
}