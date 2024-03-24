'use strict';

{

	const komas = document.querySelectorAll('.koma');
	let elem = undefined;

	komas.forEach(koma1 => {
		koma1.addEventListener('click', () => {
			if(elem) {
				if(elem.classList.contains('selected')) {
					elem.classList.remove('selected');
					return;
				}
			}
			elem = koma1;
			elem.classList.add('selected');
			
		});
	});

	



	document.addEventListener('click', e => {
		const clickedElement = e.target;

		if(!elem || clickedElement.parentNode.classList.contains('koma')) return;

		if(!clickedElement.classList.contains('masu')) {
			elem.classList.remove('selected');
		}
		if(clickedElement.classList.contains('masu')) {
			elem.classList.remove('selected');
		}
	});



}

