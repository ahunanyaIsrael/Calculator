var newLine = true // Determines if the next thing users type should be a new line
var value1;
var currOperator;

const digitBtnPressed = (button) => {
    if (newLine) {
        document.getElementById('inputbox').value = button;
        newLine = false
    } else {
        var currValue = document.getElementById('inputbox').value;
        document.getElementById('inputbox').value = currValue + button;
    }
}

const btnACPressed = () => {
    document.getElementById('inputbox').value = 0
    newLine = true
}

const operatorBtnPressed = (opeartor) => {
    currOperator = opeartor
    value1 = parseInt(document.getElementById('inputbox').value);
    newLine = true
}

const equalsBtnPressed = () => {
    var value2 = parseInt(document.getElementById('inputbox').value);
    var finalTotal;

    switch (currOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "x":
            finalTotal = value1 * value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
    }

    document.getElementById('inputbox').value = finalTotal;

    // value1 = 0;
    newLine = true;
}