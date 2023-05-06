async function createUser() {
    const htmlElementName = document.getElementById('name');
    const valueName = htmlElementName.value;

    const htmlElementEmail = document.getElementById('email');
    const valueEmail = htmlElementEmail.value;

    const htmlElementEmailAgain = document.getElementById('email-again');
    const valueEmailAgain = htmlElementEmailAgain.value;

    const htmlElementPass = document.getElementById('pass');
    const valuePass = htmlElementPass.value;

    const htmlElementPassAgain = document.getElementById('pass-again');
    const valuePassAgain = htmlElementPassAgain.value;



    try {
        //Name
        if (valueName.length < 3) {
            alert('The name must be at least 3 letters!');
            return;
        }
    
        if (validateName(valueName) === false) {
            alert("The name has digits in it!")
        }



        //Email
        if (valueEmail.length === 0) {
            alert('The email address is required!');
            throw ('The email address is required!');

        }
        if (valueEmail.length < 6) {
            alert('The email field must have at least 6 characters!');
            return;
        }
        if (valueEmail.indexOf('@') === -1) {
            alert("The email must have '@' in it!");
            return;
        }
        if (valueEmail.indexOf('.') === -1) {
            alert("The email must have '.' in it!");
            return;
        }

        //EmailAgain
        if (valueEmailAgain !== valueEmail) {
            alert("The email address do not match!");
            return;
        }

        //Password
        if (valuePass.length < 6) {
            alert('The password field must have at least 6 characters!');
            return;
        }

        //PasswordAgain

        if (valuePassAgain !== valuePass) {
            alert("The password do not match!");
            return;
        }


        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name: valueName,
                email: valueEmail,
                emailAgain: valueEmailAgain,
                pass: valuePass,
                passAgain: valuePassAgain
            })
        })

        if (res.status === 201) {
            console.log('Successfully created account')
        }

        console.log("Name: " + valueName);
        console.log("Email: " + valueEmail);
    }
    catch (e) {
        console.error(e);
    }
}



function checkIfDigit(char) {
    if (char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9") {
        return true;
    } else {
        return false;
    }
}

function validateName(name) {
    for (let i = 0; i < name.length; i++) {
        if (checkIfDigit(name.charAt(i))) {
            return false;
        }
    }
    return true;
}



