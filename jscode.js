function saySomething() {
	alert("This is a function");
}
saySomething();

function addSomething(num, str) {
	var add = num + str;
	alert(add)
}
addSomething(455, " Programs to write");

var number1 = 7;
var number2 = 4;
//var number1 = number1 + number2;
number1 += number2
number1++;
document.write(number1);  //returns 12
number1--;
document.write(number1);  //returns 11