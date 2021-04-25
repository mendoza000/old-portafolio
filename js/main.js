const bars = document.querySelector('.nav_list');
const barsButton = document.querySelector('#bars-button');
let view = false

console.log("inciando js...");


function hideShow() {
	if (!view) {
		bars.style.left = "0"
		barsButton.innerHTML = '<i class="las la-times" aria-hidden="true"></i>';
		view = true
	} else {
		bars.style.left = "-100vw"
		barsButton.innerHTML = '<i class="las la-bars" aria-hidden="true">';
		view = false
	}
}