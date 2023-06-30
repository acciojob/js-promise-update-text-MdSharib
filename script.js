//your JS code here. If required.
const div = document.getElementById("output");

let prom = new Promise((res, rej) => {
	setTimeout(() => {
		res("Hello, world!");
	}, 1000)
})

prom.then((data) => {
	div.innerText = data;
})