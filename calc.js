//Jordan Gibson
var URL="https://api.clearllc.com/api/v2/math/";
var URL2="?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818&n1=";
var n1 = "";
var n2 = "";
var operator = "";
var operatorSign = "";
var numFlag = 0;
var screenString = "";

$( document ).ready(function() {
    
});

function clearScreen() {
    n1 = "";
    n2 = "";
    operator = "";
    operatorSign = "";
    numFlag = 0;
    $("#screen").val("");
}

function input(x) {
    if (numFlag == 0) {
        n1 += x;
    } else {
        n2 += x;
    }
    $("#screen").val(n1 + operatorSign + n2);
}

function operation(op, sign) {
    if (numFlag == 1) {
        alert("You cannot do another operation. Please enter your second number and press =")
    } else if (numFlag == 0 && n1 == "") {
        alert("You must first enter a number before you can perform an operation")
    } else {
        operator = op;
        operatorSign = sign;
        numFlag = 1;
        $("#screen").val(n1 + operatorSign + n2);

    }
}

function calculateMath() {
	a=$.ajax({
		url: URL + operator + URL2 + n1 + "&n2=" + n2,
		method: "GET"
	}).done(function(data) {
        $("#screen").val(data.result);
	}).fail(function(error) {
        alert(error.responseJSON.error.message);
        clearScreen();
	});
}
