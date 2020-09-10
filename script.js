//JS file

function ConsoleHello() {
	console.log("Hello World!");
}

function PopUpHello() {
	alert("Hello, World!");
}

function BrowserHello() {
	document.getElementById("Hello").innerHTML="Hello, World!";
}

function PromptHello() {
	var a = prompt("Please Enter Your Name");
	document.getElementById("Hello").innerHTML="Hello, " + a;

}
