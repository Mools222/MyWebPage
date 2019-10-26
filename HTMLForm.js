let loginObjekt = {};
let lead = document.getElementById("pre");
let email = document.getElementById("exampleInputEmail1");

let password = document.getElementById("exampleInputPassword1");
let checkBox = document.getElementById("exampleCheck1");

document.getElementById("validatePasswordButton").addEventListener("click", validatePassword);
document.getElementById("validateEmailButton").addEventListener("click", validateEmail);

demoPromiseConstructor = () => {
    console.log(pre);
    if (email.value) {
        pre.innerHTML = pre.innerHTML + "E-mail: " + email.value + "\n # ";
    }
};

function loginToObject() {
    // console.log(email.value);
    // console.log(password.value);
    // console.log(checkBox.value);

    loginObjekt["email"] = email.value;
    loginObjekt["password"] = password.value;
    loginObjekt["checkBox"] = checkBox.checked;
    console.log(loginObjekt);
    lead.innerHTML += JSON.stringify(loginObjekt) + "\n # ";
}

function validatePassword() {
    let pw = password.value;
    let containsDigit = /[\d]+/;
    let containsLowercaseLetter = /[a-z]+/;
    let containsUppercaseLetter = /[A-Z]+/;
    let atLeastSixCharacters = /.{6,}/;

    if (pw) {
        console.log("Contains digit: " + containsDigit.test(pw));
        console.log("Contains lowercase letter: " + containsLowercaseLetter.test(pw));
        console.log("Contains uppercase letter: " + containsUppercaseLetter.test(pw));
        console.log("At least six characters: " + atLeastSixCharacters.test(pw));

        lead.innerHTML += "Valid password:\n # ";
        lead.innerHTML += "Contains digit: " + containsDigit.test(pw) + "\n # ";
        lead.innerHTML += "Contains lowercase letter: " + containsLowercaseLetter.test(pw) + "\n # ";
        lead.innerHTML += "Contains uppercase letter: " + containsUppercaseLetter.test(pw) + "\n # ";
        lead.innerHTML += "At least six characters: " + atLeastSixCharacters.test(pw) + "\n # ";
    }
}

function validateEmail() {
    let em = email.value;
    // Rules I made:
    // 1. The local-part has to start with a letter. It may contain letters and digits. Relevant regex: [a-zA-z](\w+)?
    // 2. The local-part must be followed by an @ symbol. Relevant regex: @
    // 3. The domain must be made of letters contain a dot (e.g. .dk). Relevant regex: [a-zA-z]+.[a-zA-z]+
    // 4. The domain contain another dot and more letters (e.g. .co.uk). Relevant regex: .?[a-zA-z]+?
    let regExp = /^[a-zA-z](\w+)?@[a-zA-z]+.[a-zA-z]+.?[a-zA-z]+?$/;

    if (em) {
        console.log(regExp.test(em));

        lead.innerHTML += "Valid email: " + regExp.test(em) + "\n # ";
    }

}

function validateEmailAndras(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}