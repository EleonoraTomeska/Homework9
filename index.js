function checkIfDigit(char) {
    if (char === "1" || char === "2" || char === "3" || char === "4" || char === "5" || char === "6" || char === "7" || char === "8" || char === "9" ){
    return true;
    } else {
          return false;
    }
}

function validateName(name) {
    for (let i = 0; i < name.length; i++){
        if (checkIfDigit(name.charAt(i))){
            return false;
        }
    }
    return true;
}


function submit(){
    const htmlElementName = document.getElementById('name');
    const valueName = htmlElementName.value;

    if (valueName.length < 3 ){
         alert('The name must be at least 3 letters!');
         return;
    }

    if (validateName(valueName) === false){
        alert("The name has digits in it!")
    }

    console.log("Name: " + valueName);

    
    const htmlElementEmail = document.getElementById('email');
    const valueEmail = htmlElementEmail.value;

    if (valueEmail.length < 6){
        alert('The email field must have at least 6 characters!');
        return;
    }
    if (valueEmail.indexOf('@') === -1 ){
        alert("The email must have '@' in it!");
        return;
    }
    if (valueEmail.indexOf('.') === -1 ){
        alert("The email must have '.' in it!");
        return;
    }

    console.log("Email: " + valueEmail);


    const htmlElementEmailAgain = document.getElementById('email-again');
    const valueEmailAgain = htmlElementEmailAgain.value;

    if (valueEmailAgain !== valueEmail){
        alert("Incorect email");
        return;
    }


    const htmlElementPass = document.getElementById('pass');
    const valuePass = htmlElementPass.value;

    if (valuePass.length < 6){
        alert('The password field must have at least 6 characters!');
        return;
    }
    
    console.log("Password: " + valuePass);


    const htmlElementPassAgain = document.getElementById('pass-again');
    const valuePassAgain = htmlElementPassAgain.value;

    if (valuePassAgain !== valuePass){
        alert("Incorect password");
        return;
    }

}

