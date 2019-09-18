
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");

function setNumber(number) {
    d2.value += number;
}

function math(command) {
    if (d2.value !== "") {
        if (d1.value.toString().search(/[/*+-]/) > 1) {
            d1.value += d2.value;
            equals2();
        } else if (d1.value === "") {
            d1.value = d2.value + command;
        } else {
            d1.value += command + d2.value;
            equals2();
        }
        d2.value = "";
    }
}

function equals() {
    if (d1.value.toString().search(/[/*+-]/) > 1) {
        var math = d1.value.split(" ");
        var n1 = math[0];
        var command = math[1];
        var n2 = d2.value;

        switch (command) {
            case "/":
                d1.value = parseFloat(n1) / parseFloat(n2);
                break;
            case "*":
                d1.value = parseFloat(n1) * parseFloat(n2);
                break;
            case "+":
                d1.value = parseFloat(n1) + parseFloat(n2);
                break;
            case "-":
                d1.value = parseFloat(n1) - parseFloat(n2);
                break;
        }
        d2.value = "";
    }
}

function equals2() {
    var math = d1.value.split(" ");

    var n1 = math[0];
    var command = math[1];
    var n2 = math[2];

    console.log(n1);
    console.log(command);
    console.log(n2);

    switch (command) {
        case "/":
            d1.value = parseInt(n1) / parseInt(n2);
            break;
        case "*":
            d1.value = parseInt(n1) * parseInt(n2);
            break;
        case "+":
            d1.value = parseInt(n1) + parseInt(n2);
            break;
        case "-":
            d1.value = parseInt(n1) - parseInt(n2);
            break;
    }
}