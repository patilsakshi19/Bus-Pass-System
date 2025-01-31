const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const password = document.getElementById('password');
const from = document.getElementById('from');
const destination = document.getElementById('destination');
const small = document.querySelector('small');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
    Proceed()
})

function checkInput() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const mobValue = mob.value.trim();
    const expdateValue = expdate.value;
    const fromValue = from.value;
    const destinationValue = destination.value;
    const passwordValue = password.value;
    console.log(name.value);
    if (nameValue === '') {
        showError(name, "Please fill out this field!");
    }
    else if (!isname(nameValue)) {
        showError(name, "This contain letters only.")
    }
    else {
        showSuccess(name);
        localStorage.setItem('Name', name.value)
    }


    if (emailValue === '') {
        showError(email, "Please fill out this field!");
    }
    else if (!isEmailValid(emailValue)) {
        showError(email, "Enter a valid email.")
    }
    else {
        showSuccess(email);
        localStorage.setItem('email', email.value)
    }

    if (passwordValue === '') {
        showError(password, "Please fill out this field!");
    }
    else {
        showSuccess(password);
        localStorage.setItem('Password', password.value);
    }

    if (mobValue === '') {
        showError(mob, "Please fill out this field!");
    }
    else if (!ismob(mobValue)) {
        showError(mob, "This contain numbers only without country code or 0.")
    }
    else {
        showSuccess(mob);
        localStorage.setItem('mobno', mob.value)
    }

    if (expdateValue === 'Select Months') {
        expdate.style.border = "2px solid red";
        showError(expdate, "Please fill out this field!");
    }
    else {
        expdate.style.border = "2px solid green";
        showSuccess(expdate);
        localStorage.setItem('Expire', expdate.value)

    }
    var pay = Number(expdate.value)

    if (fromValue === 'From') {
        from.style.border = "2px solid red";
        showError(from, "Please fill out this field!");
    }
    else {
        from.style.border = "2px solid green";
        showSuccess(from);
        localStorage.setItem('From', from.value)
        let fm = from.value
        let payment;
        if (fm == "Hupari") {
            payment = Number(450) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Rendal") {
            payment = Number(350) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Rangoli") {
            payment = Number(250) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Mankapur") {
            payment = Number(150) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Kagal") {
            payment = Number(850) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Sangav") {
            payment = Number(750) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (fm == "Yalgud") {
            payment = Number(550) * pay
            localStorage.setItem("Payment", payment)
        }
    }
}

    if (destinationValue === 'Choose Your Destination') {
        destination.style.border = "2px solid red";
        showError(destination, "Please fill out this field!");
    }
    


function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    return /^[a-zA-Z\-]+[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(email) || /^[a-zA-Z\-]+.[a-zA-Z\-]+_[a-zA-Z0-9\-]+@gla.ac.in$/.test(email);
}

function isname(name) {
    return /^[a-zA-Z \-]+$/.test(name);
}

function ismob(mob) {
    return /^[6-9]\d{9}$/.test(mob);
}


function validateMyForm() {
    if (!((name.parentNode.className == 'form-control success') && (email.parentNode.className == 'form-control success') && (mob.parentNode.className == 'form-control success') && (destination.parentNode.className == 'form-control success'))) {
        // returnToPreviousPage();
        return false;
    }
    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "Payment.html";
    }
}
