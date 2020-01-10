// this is called a self-invoking anonymous function
// also called a IIFE
// also called a module (it's a pattern)

(() => {

	console.log('Hello from the JS World!');

	// find the elements in the document
	let toggleButton = document.querySelector(".switch-text"), 
		myHeading = document.querySelector('h1'),
		svgImage = document.querySelector('#badge');

	// this function should change the header text
	function changeText() {
		myHeading.textContent = "What is up? I am feeling scripty!";
	}

	// this function should log the ID for each SVG to the console
	function logSVG () {
		console.log(this.id);
	}

	toggleButton.addEventListener("click", changeText);
	svgImage.addEventListener("mouseover", logSVG);

	// document.querySelector('h1').textContent = "What is up? I am feeling scripty!"

})();