//Chapter 38-42
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
//Task1
var a=2;
var b=5;
function power(){
	var p = 1;
  for (var i=0; i<b; i++) {
    p *= a;
  }
  return p;
}

document.write("<br>power of ",b, " over ", a," is: ",power());

//Task2
var year=prompt("Enter Year to check leap year or not");
function leapyear()
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
if(leapyear())
document.write("<br>Leap Year");
else
  document.write("<br>Not leap year");

//Task3
var a=5;
var b=6;
var c=7;
function findArea() 
{ 
var s = (a+b+c)/2; 
var area =Math.sqrt(s*((s-a)*(s-b)*(s-c)));
return area; 
} 
document.write("<br>Area of Triangle ",findArea(),"<br>");

//Task4
function subject1(){
	var sub1=prompt("Enter 1 subject Marks");
	return sub1;
}
function subject2(){
	var sub2=prompt("Enter 2 subject Marks");
	return sub2;
}
function subject3(){
	var sub3=prompt("Enter 3 subject Marks");
	return sub3;
}
function percent(mark1, mark2, mark3,totalmarks) {
	var sum=(mark1+mark2+mark3);
	var percents=(sum/totalmarks)*100;
	docum.write(percents);
	return percents;
}
function average(argument) {
	var totalavg=(mark1+mark2+mark3)/3;
    return totalavg;
}

function main(){
	var totalmarks=300;
	var mark1=subject1();
	var mark2=subject2();
	var mark3=subject3();
    var percentage=percent(mark1,mark2,mark3,totalmarks);
    var avg=average(mark1,mark2,mark3);
    document.write("<br>Total % is ",percentage);
    document.write("<br>Total averagae is ",avg);
}

//main();

//task5
function indexof(){
var string = "This is a string";
var char = "a";
var index;
for (var i = 0; i < string.length; i++) {
  if (string[i] == char) {
    index = i;
    document.write("<br> index of a is ",index);
    break;
  }
}
}
indexof();

//Task6
var string = "heelloo world";
String.prototype.character = function() {
    return this.replace(/[aeiou]/gi, '');
}
document.write("<br> without vowel :",string.character());

//Task7

function findOccurrences() {
  var str = "Helloo world";
  var count = 0;
  var haveSeenVowel = false;

  for (const letter of str.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        {
          if (haveSeenVowel) {
            count++;
            haveSeenVowel = false;
          } else {
            haveSeenVowel = true;
          }
          break;
        }
      default:
        haveSeenVowel = false
    }
  }

  return count
}
document.write("<br> Occurance :",findOccurrences());

//Task8
var distance=prompt("Enter distance between 2 Cites in KM");

function meter() {
	var meters=distance/1000;
	document.write("<br>",distance,"KM IS Equal to ",meters,"meters");
	return meters;
}

function feet() {
	var feets=distance*3280.8;
	document.write("<br>",distance," KM IS Equal to ",feets,"feets");
	return feets;
}

function inches() {
	var inch=distance*39;
	document.write("<br>",distance," KM IS Equal to ",inch," inches");
	return inch;
}

function cm() {
	var cmeter=distance/100000;
	document.write("<br>",distance," IS Equal to ",cmeter," centimeters");
	return cmeter;
}

meter();
feet();
inches();
cm();

//Task9

function overtimepay(){
	var i, time_worked, over_time, overtime_pay = 0;
	time_worked=prompt("Enter the time employee worked in hr ");
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	document.write("<br>Total Overtime Pay Of Employee Is ", overtime_pay);
}
overtimepay();

//Task10
function denomination() {
	var amount;
	amount=prompt("Please input amount for withdraw : ");
	document.write("<br>Required notes of Rs. 100  : ", amount / 100);
	document.write("<br>Required notes of Rs. 50   :", (amount % 100) / 50);
	document.write("<br>Required notes of Rs. 10   :", (((amount % 100) % 50) / 10));
	document.write("<br>Amount still remaining Rs. :", (((amount % 100) % 50) % 10));
}

denomination();

function myFunction() {
    document.getElementById("demo").style.color = "red";
}

//Chapter 43-48
//Task1
function clicks(){
	alert("Welcome to Google");
}

//Task2
function mobile() {
	alert("Thanks For Purchasing a Phone From Us ");
}

//Task3
function DeleteRowFunction(o) {
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

//Task5
var counter=0;
function increase() {
    counter += 1;
    document.getElementById("demo").value=counter;
}

function decrease() {
 
    counter -= 1;
    document.getElementById("click").value = counter;
}

//Chapter 49-52

//Task1





//Chapter 53-67 DOM
document.write("<br/> DOM <br/>");
document.write(document.getElementById('form-content'));

document.write("<br>",document.getElementById("main-content").childNodes[3]);

document.write("<br>");

var x = document.getElementById("main-content").querySelectorAll("content"); 
document.write("<br>",x);