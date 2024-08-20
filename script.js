document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName");
    const firstNameMessage = document.getElementById("firstNameMessage");
    const lastName = document.getElementById("lastName");
    const lastNameMessage = document.getElementById('lastNameMessage')
    const email = document.getElementById("email");
    const emailMessage = document.getElementById('emailMessage')
    const password = document.getElementById("password");
    const passwordMessage = document.getElementById('passwordMessage')

    if (!firstName.value) {
        isEmpty(firstName, firstNameMessage)
    } else {
        isNotEmpty(firstName, firstNameMessage)
    }

    if (!lastName.value) {
        isEmpty(lastName, lastNameMessage)
    } else {
        isNotEmpty(lastName, lastNameMessage)
    }

    if (email.value) {
        emailNotValid(email, emailMessage)
    } else if (!email.value) {
        isEmpty(email, emailMessage)
    } else {
        isNotEmpty(email, emailMessage)
    }

    if (!password.value) {
        isEmpty(password, passwordMessage)
    } else {
        isNotEmpty(password, passwordMessage)
    }
});

function isEmpty(input, inputMessage) {
    input.style.border = "hsl(0, 100%, 74%) 3px solid";
    input.style.outline = "none";
    input.placeholder = ""
    inputMessage.style.display = "inline-block"
    if (input == document.getElementById("email")) {
        inputMessage.textContent = "Email cannot be empty!"
    }
}

function isNotEmpty(input, inputMessage) {
    input.style.border = "hsl(246, 25%, 77%) 1px solid";
    input.placeholder = `${inputMessage.textContent}`
    inputMessage.style.display = "none"
    
}

function emailNotValid(email, emailMessage) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email.value);

    if (emailRegex.test(email.value)) {
        email.style.border = "hsl(246, 25%, 77%) 1px solid";
        email.placeholder = `Email Address`
        emailMessage.style.display = "none"
        return false;
    } else {
        email.style.border = "hsl(0, 100%, 74%) 3px solid";
        email.style.outline = "none";
        email.placeholder = "";
        emailMessage.textContent = "Looks like this is not an email";
        emailMessage.style.display = "inline-block";
        return true;
    }
}

