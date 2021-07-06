(() =>{
	'use strict'

	const bars     = document.querySelector('.nav_list'),
		barsButton = document.querySelector('#bars-button'),
		edad       = document.getElementById('edad'),
		project    = document.getElementById('project'),
		leng       = document.getElementById('leng');
	let view       = false

	function hideShow() {
		if (!view) {
			bars.style.left = "0"
			barsButton.innerHTML = '<i class="las la-times" aria-hidden="true"></i>';
			view = !view
		} else {
			bars.style.left = "-100vw"
			barsButton.innerHTML = '<i class="las la-bars" aria-hidden="true">';
			view = !view
		}
	}

	/*cuando se ve, se activa la funcion*/
	let options = threshold: 1, x = 1;

	function edadPlus() {
		setTimeout(function() {
			edad.innerText = `${x}`;
			if (x < 17) {
				x++;
				edadPlus();
			}
		}, 200)
	}

	function edadCallback(entries, observer) if (entries[0].isIntersecting) edadPlus();

	const observerEdad = new IntersectionObserver(edadCallback, options)
	observerEdad.observe(edad)


	let y = 1;

	function lengPlus() {
		setTimeout(function() {
			leng.innerText = `${y}`;
			if (y < 5) {
				y++;
				lengPlus();
			}
		}, 200)
	}

	function lengCallback(entries, observer) if (entries[0].isIntersecting) lengPlus();

	const observerLeng = new IntersectionObserver(lengCallback, options);
	observerLeng.observe(leng);



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

	function projectCallback(entries, observer) if (entries[0].isIntersecting) projectPlus()

	const observerProject = new IntersectionObserver(projectCallback, options)
	observerProject.observe(project)

})();