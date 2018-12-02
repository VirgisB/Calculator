
var operator = '';
var num1 = '';
var num2 = '';
var answer = 0;




function getNumber(n) {

    if (operator.length == 0) {
        num1 += n;
        document.getElementById('output').innerHTML = num1;

    }
    else {
        num2 += n;
        document.getElementById('output').innerHTML = num2;
    }
}




function Compute() {

    if (operator == "+") {
        answer = Number(num1) + Number(num2);
        document.getElementById('output').innerHTML = answer;
    }

    else if (operator == '-') {
        answer = Number(num1) - Number(num2);
        document.getElementById('output').innerHTML = answer;
    }

    else if (operator == '*') {
        answer = Number(num1) * Number(num2);
        document.getElementById('output').innerHTML = answer;
    }

    else if (operator == '/') {
        answer = Number(num1) / Number(num2);
        document.getElementById('output').innerHTML = answer;
    }
}


function getOperator(action) {
    operator+=action;

   }

