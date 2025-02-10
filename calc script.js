function getNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

function add() {
    var { num1, num2 } = getNumbers();
    var sum = num1 + num2;
    document.getElementById("result").innerText = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}

function minus() {
    var { num1, num2 } = getNumbers();
    var difference = num1 - num2;
    document.getElementById("result").innerText = "The difference of " + num1 + " and " + num2 + " is " + difference + ".";
}

function multiply() {
    var { num1, num2 } = getNumbers();
    var product = num1 * num2;
    document.getElementById("result").innerText = "The product of " + num1 + " and " + num2 + " is " + product + ".";
}

function divide() {
    var { num1, num2 } = getNumbers();
        if (num2 !== 0) {
            var quotient = num1 / num2;
            document.getElementById("result").innerText = "The quotient of " + num1 + " and " + num2 + " is " + quotient + ".";
        } 
		else {
            document.getElementById("result").innerText = "Cannot divide by zero.";
        }
    }

function modulus() {
    var { num1, num2 } = getNumbers();
        if (num2 !== 0) {
            var remainder = num1 % num2;
            document.getElementById("result").innerText = "The remainder of " + num1 + " divided by " + num2 + " is " + remainder + ".";
        } 
		else {
            document.getElementById("result").innerText = "Cannot divide by zero.";
        }
}