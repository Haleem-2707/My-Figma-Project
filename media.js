	
function myFunction() {
	let x = document.getElementById("myNavBar");
	if (x.className === "navBar") {
		x.className += "responsive"
	} else {
		x.className = "navBar";
	}
}

const button2 = document.querySelector (".emailButton2")
const button = document.querySelector (".emailButton")
const edieText = document.querySelector (".edieText")


button.addEventListener("click" , handleClick); 
function handleClick() {
	button.style.backgroundColor = "green" ;
	button.style.textContent = "...success" ;
	alert ("You are welcome")
	button.textContent = "successful"
	button.style.color = "white"
	
}

button2.addEventListener("click" , handleClick2); 
function handleClick2() {
	button2.style.backgroundColor = "green" ;
	button2.style.textContent = "...success" ;
	alert ("You are welcome")
	button2.textContent = "successful"
	button2.style.color = "white"
	
}

edieText.addEventListener("click" , header); 
function header() {
	edieText.style.color = "blue" ;

}





