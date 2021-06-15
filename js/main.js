const bars = document.querySelector('.nav_list');
const barsButton = document.querySelector('#bars-button');
const edad = document.getElementById('edad');
const project = document.getElementById('project');
const leng = document.getElementById('leng');
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

/*cuando se ve, se activa la funcion*/
let options = {
	/*root: edad,
	rootMargin: '0px',*/
	threshold: 1
}

let x = 1;

function edadPlus() {
	setTimeout(function() {
		edad.innerText = `${x}`;
		if (x < 17) {
			x++;
			edadPlus();
		}
	}, 200)
}

function edadCallback(entries, observer) {

	if (entries[0].isIntersecting) {
		edadPlus()
	}

}
const observerEdad = new IntersectionObserver(edadCallback, options)
observerEdad.observe(edad)


let y = 1;

function lengPlus() {
	setTimeout(function() {
		leng.innerText = `${y}`;
		if (y < 4) {
			y++;
			lengPlus();
		}
	}, 200)
}

function lengCallback(entries, observer) {

	if (entries[0].isIntersecting) {
		lengPlus()
	}
}
const observerLeng = new IntersectionObserver(lengCallback, options)
observerLeng.observe(leng)



let z = 1;

function projectPlus() {
	setTimeout(function() {
		project.innerText = `${z}`;
		if (z < 4) {
			z++;
			projectPlus();
		}
	}, 200)
}

function projectCallback(entries, observer) {

	if (entries[0].isIntersecting) {
		projectPlus()
	}
}
const observerProject = new IntersectionObserver(projectCallback, options)
observerProject.observe(project)
