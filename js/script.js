let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
	let today = new Date();
	hours.innerHTML = (today.getHours() < 10 ? "0" : "") + today.getHours();
	minutes.innerHTML = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
	seconds.innerHTML = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
}, 1000);
