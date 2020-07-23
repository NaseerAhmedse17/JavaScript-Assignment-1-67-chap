//Chapter 21-25
//Task 1
var fname=prompt("Enter Your First Name");
var lname=prompt("Enter Your Last Name");
var fullname=fname+lname;
document.write("Your Full name is :",fullname);

//task 2
var pmodel=prompt("Enter Your fAVOURATE phone Model" ,"Phone Model");
var len=pmodel.length;
document.write("<br/>My fAVOURATE phone is :",len);

//task 3
var str="pakistani";
var index=str.indexOf("n");
document.write("<br> Index of 'n':",index);

//Task 4
var str1="Hello World";
var find="l";
var index = -1; 
document.write("<br>");
var len=str1.length;
for(var i = 0; i < len; i++){
if (str1[i] === find){
index = i; 
}
}
 if (index === -1) 
 document.write("Character not found"); 
else
document.write("Last index of ",find," is ", index); 

//Task5
document.write("<br/>String : ",str);
document.write("<br/> Charachter at index 3 :",str[3]);

//Task6
document.write("<br/>full Name is :",fname.concat(lname));

//Task7
var city="Hyderabad";
var res = city.substring(5);
var name="islam";
document.write("</br> City Hyderabad");
document.write("<br> AFTER Replacement: ",name.concat(res));
//Task 8

var message = "Ali and Sami are best friends.They play cricket.";
var res = message.replace("and", "&");
document.write("<br/> "+res);

//Task 9
var str2="472";

document.write("<br/>type of :",typeof(str2));
document.write("<br/> value: ",str2);
var num1=parseInt(str2);
document.write("<br/>type of :",typeof(num1));
document.write("<br/> value: ",str2);

//task 10
var input=prompt("Enter Value here");
var capital=input.slice(0, 1);
var allother=input.slice(1);
var letter=capital.toUpperCase();
document.write("</br>value is :",letter.concat(allother));

//Task 11
var num="35.36";
var num1=num.replace('.', "");
document.write("</br> value:",num1);

//Task 12
var symbol = [",", "@", ".","!"];
var input=prompt("Enter Username ");
for (var i =0; i<symbol.length; i++) {
   for (var j = i; j < input.length; j++) {
   	 if(symbol[i]===input[j]){
   	 	alert("Invalid User Name");
   	 	break;
   	 }
   }
}

//Task 13
var array=["cake", "apple pie", "cookie", "chips", "patties"];
var input=prompt("Enter Input Value");
for (var i = 0; i < array.length; i++) {
	 if(array[i]==input.toLowerCase()){
	  alert(input+" is available at index "+i);
	  break;
	 }
}

//Task 15
/*
var input=prompt("Enter Password ");

var passw=  /^[A-Za-z]\w{6,14}$/;
if(input.value.match(passw)) 
{ 
alert('Correct, try another...')
}
else
{
alert('Wrong...!')
}
*/
//task 16
var str = 'University Of Karachi';
var ar = str.split('');
for (var i = 0; i <ar.length; i++) {
	document.write("</br> ",ar[i]); 
}

//Task 17
var value="Pakistan";
document.write("<br/>user Input ",value);
document.write("<br/>Last Charachter of :",value[value.length-1]);



//Lab 26-30
document.write("<H1> Lab 26-30 </h1>");

//Task1
var number=prompt("Enter Positive Integer Value");
document.write("<br> Number ",number);
document.write("</br> Round Off ",Math.round(number));
document.write("</br> Floor value ",Math.floor(number));
document.write("</br> ceil Value ",Math.ceil(number));

//Task2
var number=prompt("Enter Negative Float Value");
document.write("<br> Number ",number);
document.write("</br> Round Off ",Math.round(number));
document.write("</br> Floor value ",Math.floor(number));
document.write("</br> ceil Value ",Math.ceil(number));

//Task3
var number=-6;
document.write("<br/>Absolute value of ",number," is ",Math.abs(number));

//Task4
document.write("<br/>Random value of dice ",Math.floor(Math.random()*6));

//Task6
document.write("</br>random number between 1 and 100 is ",Math.floor(Math.random()*100)+1);
//Task5
//var number=Math.floor((Math.random()* 3));
//document.write("<br/> Value is ",number);
//if(number===1){
//	document.write("<br/> Random coin value :", Tail);
//}
//else if(number===2){
//	document.write("<br/> Random coin value :", Head);
//}

//Task8
var number=Math.floor((Math.random()*10));
var number2=parseInt(prompt("Enter Value between 1-10"));

if(number==number2){
	alert("Conguralate you Won");
}
else{
	alert("Try Again");
}

//Lab 31-35
document.write("<h1/> Lab 31-35 </h1>");
//Task1
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var today = new Date();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.write("</br> ",date," ",time);

//Task2
var month=(today.getMonth()+1);
if(month===1){
	alert("January");
}
if(month===2){
	alert("Feburary");
}
if(month===3){
	alert("March");
}
if(month===4){
	alert("April");
}
if(month===5){
	alert("May");
}
if(month===6){
	alert("June");
}
if(month===7){
	alert("July");
}


//Task3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayName = days[new Date().getDay()];
alert("Today is "+dayName);

//Task4
if(dayName==="Sun" || dayName==="Sat"){
	alert("It's Fun Day");
}

//Task5
var day=today.getDate();
if(day>=16){
	alert("Last days of the month");
}
else{
	alert("First fifteen days of the month");
}

//Task13
var age=parseInt(prompt("Enter Your Age"));
var cyear=today.getFullYear();
alert("Your Birth Year is "+(cyear-age));

//Task14
var days = ["", "Jan", "Feb", "March", "April", "May", "June","July","August","Sep","Oct"];
var dayName = days[today.getMonth()+1];
document.write("<br/><center><h1>K-Electric Bill </h1>");
document.write("</br>Month: <b>",dayName,"</b>");
document.write("</br>Number of units: <b>410</b>");
document.write("</br>Charges per Net: <b>16</b>");
document.write("</br></br>Net Amount Payable (within Due Date): <b>6560</b>");
document.write("</br>Late Payment Surcharge: <b>350</b>");
document.write("</br>Gross Amount Payable (after Due Date): <b>6910</b></center>");

