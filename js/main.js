
	const bars     = document.querySelector('.nav_list'),
		barsButton = document.querySelector('#bars-button'),
		project    = document.getElementById('project'),
		leng       = document.getElementById('leng'),
		proxHabilidades = document.querySelector('#proxHabilidades');
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

/* Cuantas habilidades */
	let y = 1;

	function lengPlus() {
		setTimeout(function() {
			leng.innerText = `${y}`;
			if (y < 7) {
				y++;
				lengPlus();
			}
		}, 200)
	}

	function lengCallback(entries, observer) {if (entries[0].isIntersecting) lengPlus();}

	const observerLeng = new IntersectionObserver(lengCallback);
	observerLeng.observe(leng);

/* Cuantas habilidades en progreso*/
	let x = 1;

	function proxHabilPlus() {
		setTimeout(function() {
			proxHabilidades.innerText = `${x}`;
			if (x < 3) {
				x++;
				proxHabilPlus();
			}
		}, 200)
	}

	function proxHabilCallback(entries, observer) {if (entries[0].isIntersecting) proxHabilPlus();}

	const observerProxHabilPlus = new IntersectionObserver(proxHabilCallback);
	observerProxHabilPlus.observe(proxHabilidades);


/* Numero de proyectos */
	let z = 1;

	function projectPlus() {
		setTimeout(function() {
			project.innerText = `${z}`;
			if (z < 5) {
				z++;
				projectPlus();
			}
		}, 200)
	}

	function projectCallback(entries, observer) {if (entries[0].isIntersecting) projectPlus()}

	const observerProject = new IntersectionObserver(projectCallback)
	observerProject.observe(project)
