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
						// hisya();
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
				// hisya();
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
				// hisya();
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
			const p_element = elem.parentElement;
			
			const x = Number(p_element?.getAttribute('data-x'));
			const y = Number(p_element?.getAttribute('data-y'));
			
			let positionNumber: any = x * 10 + y * 1;
			
			const LDRU :any = [
				[11, [1, 1]], [-9, [-1, 1]], [-11, [-1, -1]], [9, [1, -1]]
			];

			for(let i = 0; i < LDRU.length; i++) {
				for(let t = positionNumber + LDRU[i][0]; t * LDRU[i][1][0] <= 44 + 55 * LDRU[i][1][0]; t = t + LDRU[i][0]) {
					if(x === 5 + 4 * LDRU[i][1][0] || y === 5 + 4 * LDRU[i][1][1]) break;
					let posX = Math.floor(t/10);
					let posY = Math.floor(t - Math.floor(t/10) * 10);
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
			
			console.log(elem, clickablePos);
		}

		// function hisya() {
		// 	if(!elem?.classList.contains('hisya')) {
		// 		return;
		// 	}
		// 	const p_element = elem.parentElement;
		// 	const positions: number[][] = [];
		// 	let posY = Number(p_element?.getAttribute('data-y'));
		// 	let posX = Number(p_element?.getAttribute('data-x'));
		// 	for(let posX = Number(p_element?.getAttribute('data-x')) + 1; posX <= 9; posX++) {
		// 		document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
		// 	}
		// 	for(let posY = Number(p_element?.getAttribute('data-y')) + 1; posY <= 9; posY++) {
		// 		document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
		// 	}
		// 	for(let posX = Number(p_element?.getAttribute('data-x')) - 1; posX >= 1; posX--) {
		// 		document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
		// 	}
		// 	for(let posY = Number(p_element?.getAttribute('data-y')) - 1; posY >= 1; posY--) {
		// 		document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
		// 	}
		// }
	}
}

