'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		

		class Koma {
			// placeableRange: any;
			
			hu(): number[][] {
				return [[],[]];
			}
			kaku(x: number, y: number): number[][] {
				const positions: number[][] = [];
				let posY: number = y;
				for(let posX = x + 1; posX <= 9; posX++) {
					posY++;
					if(posY > 9) {
						break;
					}
					positions.push([posX, posY]);
				}
				posY = y;
				for(let posX = x - 1; posX >= 1; posX--) {
					posY++;
					if(posY > 9) {
						break;
					}
					positions.push([posX, posY]);		
				}
				posY = y;
				for(let posX = x + 1; posX <= 9; posX++) {
					posY--;
					if(posY < 1) {
						break;
					}
					positions.push([posX, posY]);	
				}
				posY = y;
				for(let posX = x - 1; posX >= 1; posX--) {
					posY--;
					if(posY < 1) {
						break;
					}
					positions.push([posX, posY]);
				}
				return positions;
			}
		}

		
		

		const $selected: string = 'selected';
		const $koma: string = 'koma';
		const $masu: string = 'masu';
		const komas: NodeListOf<Element> = document.querySelectorAll('.koma');
		let elem: undefined | Element = undefined;
		let clicked: null | Element = null;
	
		komas.forEach(koma => {
			koma.addEventListener('click', () => {
				clicked = koma.parentElement;
				if(elem !== undefined) {
					if(elem === koma) {
						console.log('同一の駒をクリックしました。');
					}else {
						if((elem.classList.contains('ally') && koma.classList.contains('ally'))
						|| (elem.classList.contains('enemy') && koma.classList.contains('enemy'))
						) {
							console.log('味方の駒をクリックしました。');
						} else {
							console.log('敵の駒をクリックしました。');
							kaku();
						}
					}
					if(elem.classList.contains($selected)) {
						elem.classList.remove($selected);
						elem = undefined;
						return;
					}
				}
				elem = koma;
				elem.classList.add($selected);		
			});
		});


	
		document.addEventListener('click', e => {

			clicked = e.target as Element;
			const clickedParentNode = clicked.parentElement as Element;
			if(!clickedParentNode) return;
	
			if(!elem || clickedParentNode.classList.contains($koma)) return;
	
			if(!clicked.classList.contains($masu)) {
				console.log('駒を持っている状態でマス目以外の箇所をクリックしました。');
				elem.classList.remove($selected);
				elem = undefined;
			}else {
				console.log('駒を持っている状態でマス目をクリックしました。');
				kaku();
				elem.classList.remove($selected);
				elem = undefined;
			}
		});

		function kaku() {
			const kaku = document.querySelectorAll('.kaku')[0];
			const kakuParetElement = kaku.parentElement;
			if(kakuParetElement === null) {
				return;
			}
			const positions: number[][] = [];
			let posY: number = Number(kakuParetElement.getAttribute('data-y'));
			for(let posX = Number(kakuParetElement.getAttribute('data-x')) + 1; posX <= 9; posX++) {
				posY++;
				if(posY > 9) {
					break;
				}
				positions.push([posX, posY]);
			}
			posY = Number(kakuParetElement.getAttribute('data-y'));
			for(let posX = Number(kakuParetElement.getAttribute('data-x')) - 1; posX >= 1; posX--) {
				posY++;
				if(posY > 9) {
					break;
				}
				positions.push([posX, posY]);		
			}
			posY = Number(kakuParetElement.getAttribute('data-y'));
			for(let posX = Number(kakuParetElement.getAttribute('data-x')) + 1; posX <= 9; posX++) {
				posY--;
				if(posY < 1) {
					break;
				}
				positions.push([posX, posY]);	
			}
			posY = Number(kakuParetElement.getAttribute('data-y'));
			for(let posX = Number(kakuParetElement.getAttribute('data-x')) - 1; posX >= 1; posX--) {
				posY--;
				if(posY < 1) {
					break;
				}
				positions.push([posX, posY]);
			}
			console.log(elem, clicked);
			return positions;
		}
	}
}

