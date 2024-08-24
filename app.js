// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// 1. define -> zarlah
// argument/parametr -> func-iin zaaval avah utga
function hello(name,age){
	console.log("Hello "+name);
	console.log("Your age is " + age);
}
// 2. call -> duudaj ajluulna
hello("Bat",20);
hello("Suvd",15);
// Нас оруулахад төрсөн оныг гаргаж ирэх функц бичнэ үү
function findYear(age){
	// NaN not a number
	console.log("Your birth year : " + (2024-age));
}
findYear(24);
findYear(55);
// 2 тооны нийлбэр олдог функ бичнэ үү
function niilber(too1,too2){
	console.log(too1+too2);
}
niilber(5,110);
// DOM -> Document : html deerh buh code
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// variableName.style.styleName="value";
h1.style.color="red";
// varName.innerText="value"; ->
h1.innerText="Hello Bat";
function changeText(){
	h1.style.color="green";
	h1.innerText="Text changed";
}
// define
var input=document.getElementsByTagName('input')[0];
var p=document.getElementsByTagName('p')[0];
var p2=document.getElementsByTagName('p')[1];
var p3=document.getElementsByTagName('p')[2];
console.log(input);
console.log(p);
function nas(){
	console.log(2024-input.value);
	p.innerText="Your bith year :"+(2024-input.value);
	if(input.value>17){
		p2.innerText="Ta nasand hursen baina";
	}else{
		p2.innerText="Ta nasand hureegui baina";
	}
	// parseInt(input.value)+10
	if(input.value>130){
		p3.innerText="Hun iim naslah bolomjgui";
		
	}else if(input.value<0){
		p3.innerText="Ta turuugui baina";
		
	}else if(input.value==""){
		alert("Hooson baij bolohgui");
	}
}
// 1. Насанд хүрсэн эсэхийг гаргаж ирэх
// 2. 130-аас дээш нас оруулахад улаан өнгөөр хүн ийм наслах боломжгүй гэж гаргаж ирэх
// 3. 0-ээс бага тоо оруулахад та төрөөгүй байна гэж шар өнгөөр гаргаж ирэх
// 4. 10 жилийн дараа хэдэн нас хүрэхийг гаргаж ирэх 
// 5. Хоосон утга оруулвал alert гаргаж ирэх