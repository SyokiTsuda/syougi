'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		

		

		const $selected: string = 'selected';
		const $koma: string = 'koma';
		const $masu: string = 'masu';
		const komas: NodeListOf<Element> = document.querySelectorAll('.koma');
		const masus: NodeListOf<Element> = document.querySelectorAll('.masu');
		let elem: undefined | Element = undefined;
		let clickablePos: null | Element = null;
	
		komas.forEach(koma => {
			koma.addEventListener('click', () => {
				clickablePos = koma.parentElement;
				
				if(elem === koma) {
					console.log('同一の駒をクリックしました。');
					removePlaceable();
				}else {
					if((elem?.classList.contains('ally') && koma.classList.contains('ally'))
					|| (elem?.classList.contains('enemy') && koma.classList.contains('enemy'))
					) {
						console.log('味方の駒をクリックしました。');
						removePlaceable();
					} else {
						console.log('敵の駒をクリックしました。');
						kaku();
						hisya();
						removePlaceable();
					}
				}
				if(elem?.classList.contains($selected)) {
					elem?.classList.remove($selected);
					elem = undefined;
					return;
				}
				
				elem = koma;
				kaku();
				hisya();
				elem.classList.add($selected);		
			});
		});


	
		document.addEventListener('click', e => {

			clickablePos = e.target as Element;
			const clickablePosdParentNode = clickablePos.parentElement as Element;
			if(!clickablePosdParentNode) return;
	
			if(!elem || clickablePosdParentNode.classList.contains($koma)) return;
	
			if(!clickablePos.classList.contains($masu)) {
				console.log('駒を持っている状態でマス目以外の箇所をクリックしました。');
				removePlaceable();
				elem.classList.remove($selected);
				elem = undefined;
			}else {
				console.log('駒を持っている状態でマス目をクリックしました。');
				kaku();
				hisya();
				removePlaceable();
				elem.classList.remove($selected);
				elem = undefined;
			}
		});


		function removePlaceable(): void {
			masus.forEach(masu => {
				masu.classList.remove('placeable');
			})
		}
		
		function kaku() {
			if(!elem?.classList.contains('kaku')) {
				return;
			}
			
			const x = Number(elem.parentElement?.getAttribute('data-x'));
			const y = Number(elem.parentElement?.getAttribute('data-y'));
			
			const positionNumber: any = x * 10 + y * 1;
			
			const LDRU :any = [
				[11, [1, 1]], [-9, [-1, 1]], [-11, [-1, -1]], [9, [1, -1]]
			];

			for(let t = 0; t < LDRU.length; t++) {
				for(let i = positionNumber + LDRU[t][0]; i * LDRU[t][1][0] <= 44 + 55 * LDRU[t][1][0]; i = i + LDRU[t][0]) {
					if(x === 5 + 4 * LDRU[t][1][0] || y === 5 + 4 * LDRU[t][1][1]) break;
					let posX = Math.floor(i/10);
					let posY = Math.floor(i - Math.floor(i/10) * 10);
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
					{
						if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
						&& elem.classList.contains('ally'))
						||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
						&& elem.classList.contains('enemy')) 
						{
							break;
						}
					}
					document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
					if(posX === 1 || posX === 9 || posY === 1 || posY === 9) break;
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
						break;
					}
				}
			}
		}

		function hisya() {
			if(!elem?.classList.contains('hisya')) {
				return;
			}
			const x = Number(elem.parentElement?.getAttribute('data-x'));
			const y = Number(elem.parentElement?.getAttribute('data-y'));
			const positionNumber: any = x * 10 + y * 1;
			const LDRU :any = [
				[10, 1], [1, 1], [-10, -1], [-1, -1]
			];
			for(let t = 0; t < LDRU.length; t++) {
				for(let i = positionNumber; i * LDRU[t][1] <= 44 + 55 * LDRU[t][1]; i = i + LDRU[t][0]) {
					if(i === positionNumber) continue;
					let posX = Math.floor(i/10);
					let posY = Math.floor(i - Math.floor(i/10) * 10);
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
						{
						if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
							&& elem.classList.contains('ally'))
						||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
						&& elem.classList.contains('enemy')) 
						{
							break;
						}
					}
					document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
						break;
					}
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
				}
			}
			// for(let i = positionNumber; i * (1) <= 44 + 55 * (1); i = i + (10)) {
			// 	if(i === positionNumber) continue;
			// 	let posX = Math.floor(i/10);
			// 	let posY = Math.floor(i - Math.floor(i/10) * 10);
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
			// 		{
			// 		if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
			// 			&& elem.classList.contains('ally'))
			// 		||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
			// 		&& elem.classList.contains('enemy')) 
			// 		{
			// 			break;
			// 		}
			// 	}
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
			// }
			// for(let i = positionNumber; i * (1) <= 44 + 55 * (1); i = i + (1)) {
			// 	if(i === positionNumber) continue;
			// 	let posX = Math.floor(i/10);
			// 	let posY = Math.floor(i - Math.floor(i/10) * 10);
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
			// 		{
			// 		if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
			// 			&& elem.classList.contains('ally'))
			// 		||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
			// 		&& elem.classList.contains('enemy')) 
			// 		{
			// 			break;
			// 		}
			// 	}
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
			// }
			// for(let i = positionNumber; i * (-1) <= 44 + 55 * (-1); i = i + (-10)) {
			// 	if(i === positionNumber) continue;
			// 	let posX = Math.floor(i/10);
			// 	let posY = Math.floor(i - Math.floor(i/10) * 10);
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
			// 		{
			// 		if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
			// 			&& elem.classList.contains('ally'))
			// 		||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
			// 		&& elem.classList.contains('enemy')) 
			// 		{
			// 			break;
			// 		}
			// 	}
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
			// }
			// for(let i = positionNumber; i * (-1) <= 44 + 55 * (-1); i = i + (-1)) {
			// 	if(i === positionNumber) continue;
			// 	let posX = Math.floor(i/10);
			// 	let posY = Math.floor(i - Math.floor(i/10) * 10);
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0])
			// 		{
			// 		if((document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('ally')
			// 			&& elem.classList.contains('ally'))
			// 		||(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0].classList.contains('enemy'))
			// 		&& elem.classList.contains('enemy')) 
			// 		{
			// 			break;
			// 		}
			// 	}
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
			// }
		}
	}
}

