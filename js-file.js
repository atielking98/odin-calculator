function add(x, y) {
	return x + y;
};

function subtract(x, y) {
	return x - y;
};

function multiply(x, y) {
  return x * y;
};

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    x = Number(x)
    y = Number(y)
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            if (b === 0) return null;
            return divide(x, y);
        default:
            return null;
    }
}