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
			const kakuParetElement = elem.parentElement;
			const positions: number[][] = [];
			const LDRU = [
				[1,1],
				[-1,1],
				[1,-1],
				[-1,-1],
			];
			for(let i = 0; i < LDRU.length; i++) {
				let posY: number = Number(kakuParetElement?.getAttribute('data-y'));
				for(let posX = Number(kakuParetElement?.getAttribute('data-x')) + LDRU[i][0]; posX * LDRU[i][0] <= 4 + (5 * LDRU[i][0]); posX = posX + LDRU[i][0]) {
					posY = posY + LDRU[i][1];
					document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
					if(posY * LDRU[i][1] > 4 + (5 * LDRU[i][1]) || document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
						break;
					}
					positions.push([posX, posY]);
				}
			}
			// let posY: number;
			// posY = Number(kakuParetElement?.getAttribute('data-y'));
			// for(let posX = Number(kakuParetElement?.getAttribute('data-x')) + 1; posX * 1 <= 4 + (5 * 1); posX = posX + 1) {
			// 	posY = posY + 1;
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(posY * 1 > 4 + (5 * 1) || document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	positions.push([posX, posY]);
			// }
			// posY = Number(kakuParetElement?.getAttribute('data-y'));
			// for(let posX = Number(kakuParetElement?.getAttribute('data-x')) - 1; posX * -1 <= 4 + (5 * -1); posX = posX - 1) {
			// 	posY = posY + 1;
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(posY * 1 > 4 + (5 * 1) || document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	positions.push([posX, posY]);
			// }
			// posY = Number(kakuParetElement?.getAttribute('data-y'));
			// for(let posX = Number(kakuParetElement?.getAttribute('data-x')) + 1; posX * 1 <= 4 + (5 * 1); posX = posX + 1) {
			// 	posY = posY - 1;
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(posY * -1 > 4 + (5 * -1) || document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	positions.push([posX, posY]);	
			// }
			// posY = Number(kakuParetElement?.getAttribute('data-y'));
			// for(let posX = Number(kakuParetElement?.getAttribute('data-x')) - 1; posX * -1 <= 4 + (5 * -1); posX = posX - 1) {
			// 	posY = posY - 1;
			// 	document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.classList.add('placeable');
			// 	if(posY * -1 > 4 + (5 * -1) || document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)?.children[0]) {
			// 		break;
			// 	}
			// 	positions.push([posX, posY]);
			// }
			console.log(elem, clickablePos);
			console.log(positions);
			return positions;
		}
	}
}

