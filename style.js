// CHAPTER # 38-42 : FUNCTIONS;SWITCH STATEMENTS;WHILE ... DO WHILE LOOPS


// TASK 1

/*var a = prompt(" Enter first number: ");
var b = prompt(" Enter second number: ");

function power(){
    var pow = Math.pow(a,b);
   return pow;
}
document.write(power());*/

// TASK 2

/*function leapYear(){
    var inputYear = prompt(" Enter any year: ");
   if((inputYear % 100 === 0) && (inputYear % 400 === 0) || (inputYear % 4 === 0)){
       document.write("This is leap year.");
   }
       else{
           document.write(" Not a leap year.");
       }
    }
       leapYear();*/



// TASK 3

/*function peri(a,b,c){
    var s = (a+b+c)/2;
    return s;
}

function area(){
    var area = s*(s-a)(s-b)(s-c);
    return area;
}
document.write(peri(4,5,2));
document.write(area());*/

// TASK 4

/*function mainFunction(){
    var marks1 = prompt(" Enter your marks in first subject: ");
    var marks2 = prompt(" Enter your marks in second subject: ");
    var marks3 = prompt(" Enter your marks in third subject: ");
}
mainFunction();

function percentage(){
    var total = mark1+mark2+mark3;
    var per = total*100/300;
    return per;
}
document.write(percentage());*/

// TASK 5

/*function indexOf(a,b){
    var index ;
    for(var i = 0; i < a.length ; i++){
        if(a[i] == b){
            index = i ; 
            break;
        }
    }
    document.write(index);
}
indexOf("Hafsa Sohail" , "s");*/

// TASK 6

/*var sentence = "My name is Hafsa Sohail";
document.write(sentence);

function removeVowels(){
    if(sentence == "a" || "e" || "i" || "o" || "u"){
        sentence.replace(" ");
    }
}
document.write(removeVowels());*/



// TASK 7

// TASK 8

/*var input = prompt(" Enter the distance between two cities in kilometre.");
function meter(){
    var m = input*1000;
    return m ;
}
document.write(" The distance between two cities in meter: " + meter() + " m " + "<br>");

function feet(){
    var f = input*3281;
    return f ;
}
document.write(" The distance between two cities in feet: " + feet() + " feet " + "<br>");

function inches(){
    var inch = input*39370;
    return inch ;
}
document.write(" The distance between two cities in inches: " + inches() + " inches " + "<br>");

function centimetre(){
    var cm = input*100000;
    return cm;
}
document.write(" The distance between two cities in cm: " + centimetre() + " cm " + "<br>");*/

// TASK 9

/*var workedHours = prompt(" Enter total worked hours: ");
function overTime(){
    if(workedHours >= 40){
        overtime = workedHours-40;
        overtimePay = 12*overtime;
}
else{
    document.write(" ");

}
return overtimePay;
}
document.write(" the total overtime pay of employee is: " + overTime());*/

// TASK 10

/*var amount = prompt("Please enter amount for withdraw :");

function withdraw(){
    var a = amount/100;
    var b= (amount%100)/50;
    var c = (((amount%100)%50)/10);
    return a,b,c;
}
document.write(withdraw());*/


// CHAPTER # 43-48 : EVENTS

// TASK 1
// In Html

// TASK 2
/*function alert(){
    alert("Thank you for purchasing mobile from us.");
}*/

// TASK 3
/*function Delete1(){
    var del1 = document.getElementById("delete1");
    del1.remove();
}
function Delete2(){
    var del2 = document.getElementById("delete2");
    del2.remove();
}
function Delete3(){
    var del3 = document.getElementById("delete3");
    del3.remove();
}
function Delete4(){
    var del4 = document.getElementById("delete4");
    del4.remove();
}
function Delete5(){
    var del5 = document.getElementById("delete5");
    del5.remove();
}*/

// TASK 4
/*function after(){
    document.getElementById("flower").src = "images/b.jpg";
}
function before(){
    document.getElementById("flower").src = "images/a.jpg";
}*/

// TASK 5

/*var a = document.getElementById("input");
var counter = 1;

function increase(){
    a.innerHTML = counter.toString();
    counter++;
    return counter;
}

function decrease(){
    a.innerHTML = counter.toString();
    counter--;
    return counter;
}*/

// CHAPTER # 49-52: EVENTS

// TASK 1
 /*function submission(){
     var name = document.getElementById("name");
     document.write(name.value);
     var email = document.getElementById("e-mail");
     document.write(email.value);
 }*/

 // TASK 2
/*function readMore(){
    var para = "This study was a preliminary study of high school student value changes because of the terrorist attack on the U.S. The major limitations of this study were that the student population was from California and might not truly represent all high school students in the U.S. Further, this study could not be considered a truly longitudinal study because of privacy issues that prevented the researchers from identifying all the students who returned surveys before the attack. In addition, the senior class had graduated the previous year, and a much larger freshman class entered the school. These issues not only made the samples similar, but also different in their composition. The researchers will conduct periodic studies to explore whether these value changes are permanent and continue into adulthood. We do not know what if any changes will take place in their values as they grow older, and we will continue to explore their values in our longitudinal studies of the impact of the 9/11 terrorist attacks.";
    document.getElementById("paragraph").innerHTML = para;
}*/

// TASK 3

// CHAPTER # 53-57: 

// TASK 1

/*var modal = document.getElementById("myModal");                             // I just set a modal on first picture as I don't understand how to do this.

var img = document.getElementById("img1");
var modalImg = document.getElementById("myimg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}*/



// TASK 2
/*function zoomIn(){
    var para1= document.getElementById("paragraph").style.fontSize= "30px";
}
function zoomOut(){
    var para2 = document.getElementById("paragraph").style.fontSize = "15px";
}*/

//CHAPTER # 58-67: DOM

// TASK 1

// (i)
/*var mainContent = document.getElementById("main-content");
console.log(mainContent);*/

// (ii)
/*var elements = document.getElementById("main-content").childNodes;
console.log(elements);*/

// (iii)
/*var ren = document.getElementsByClassName("render");
for(var i = 0;i< ren.length ;i++){
    document.write(ren[i].innerHTML + "<br>");
}*/

//(iv)
/*document.getElementById("first-name").value = "Hafsa";

// (v)

document.getElementById("last-name").value = "Sohail";
document.getElementById("email").value = "shafsa187@gmail.com";*/

// TASK 2

// (i)
 /*var form = document.getElementById("form-content").nodeType;
 document.write(form + "<br>");*/

 // (ii)
 /*var lname = document.getElementById("lastName").nodeType;
 document.write(lname + "<br>");

var nodeList = document.getElementById("lastName").childNodes;
for (var index = 0; index < nodeList.length; index++) {
    document.write(nodeList[index]);
}*/

// (iv)
/*var first = document.getElementById("main-content").firstChild;
document.getElementById("demo").innerHTML = first;

var last = document.getElementById("main-content").lastChild;
document.getElementById("demo").innerHTML = last;
console.log(last);*/

// (v)
/*var next = document.getElementById("lastName").nextSibling.innerHTML;
document.getElementById("demo").innerHTML = next ;*/
