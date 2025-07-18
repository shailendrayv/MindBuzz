document.write("welecome JavaScript  hello learnvern");
  alert("Hello Learnvern");

        function msg() {
            alert("Hello JavaScripta Learnvern!");

          
        }
// document.getElementById("submit").addEventListener("click", msg);
        


var a = 80;
// document.write(++a);
// document.write(a++);
document.write(--a);
document.write(a--);



var grade = 'B';

switch (grade) {
  case 'A':
    document.write("Excellent!");
    break;
  case 'B':
    document.write("Good!");
    break;
  case 'C':
    document.write("Average!");
    break;
  case 'D':
    document.write("Below Average!");
    break;
  default:
    document.write("Invalid grade!");
  
}

document.write("<br>");
document.write("<h3>Days</h3>")

switch (new Date().getDay()) {
  case 0:
    document.write("Sunday");
    break;
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
  case 3:
    document.write("Wednesday");
    break;
  case 4:
    document.write("Thursday");
    break;
  case 5:
    document.write("Friday"); // Fixed typo
    break;
  case 6:
    document.write("Saturday");
    break;
  default:
    document.write("Invalid day!"); // Corrected default case
}


for (let i = 1; i <= 5; i++){
  document.writeln(i );
}

var i = 1;
while (i<=6) {
  document.writeln(i);
  i++;
}


function no(n) {
  alert(n*n*n);
}


class abc{
  abc(name, age){
    this.name = name;
    this.age = age;
  }
}

var obj = new abc('John', 30);


document.write("<h3>Days If Else</h3>")

let today = new Date().getDay(); // Get the current day as a number (0-6)
let dayName = "";

if (today === 0) {
    dayName = "Sunday";
} else if (today === 1) {
    dayName = "Monday";
} else if (today === 2) {
    dayName = "Tuesday";
} else if (today === 3) {
    dayName = "Wednesday";
} else if (today === 4) {
    dayName = "Thursday";
} else if (today === 5) {
    dayName = "Friday";
} else {
    dayName = "Saturday";
}

document .write("Today is " + dayName);


document.write("<h3>Person</h3>")
var person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  eyeColor:"brown"
}
document.writeln(person.name + " is " + person.age + " and " + person.city + "" + person.eyeColor +"<br>");


var emp = new Object();
   
emp.id = 1;
emp.name = "shailendra";
emp.salary = 2000;

for (value in emp) {
  document.writeln(emp[value]);
}


document.write("<h3>Array</h3>")
const obj1 = {
  name: 'John',
  age: 30,
  city: 'New York'
}
console.log(Object.values(obj1));

var emp = ["John", "def", "ghi", "shailendra"];
for (value of emp) {
  document.writeln(value +"<br>");
}


document.write("<h3>second Array</h3>")

var fruits = new Array();
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Cherry";

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}
document.write("<h3>third Array</h3>")
var car = new Array("xuv", "Swift", "verna");
for (value of car) { 
  document.write(value + "<br>");
}



document.write("<h3>Navigator</h3>");
document.write(navigator.appName + "<br>");
document.write(navigator.appVersion + "<br>");
document.write(navigator.language + "<br>");
document.write(navigator.appCodeName + "<br>");
document.write(navigator.platform + "<br>");


document.write("<h3>DOM</h3>");
function showName() {
  var name = document.form1.name.value;
  alert("Welcome : " + name); 
}





