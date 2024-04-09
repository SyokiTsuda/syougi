'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		

		

		const $selected: string = 'selected';
		const $placeable: string = 'placeable';
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
					if(elem !== undefined) {
						if((elem.classList.contains('ally') && koma.classList.contains('ally'))
						|| (elem.classList.contains('enemy') && koma.classList.contains('enemy'))
						) {
							console.log('味方の駒をクリックしました。');
							removePlaceable();
						} else {
							console.log('敵の駒をクリックしました。');
							removePlaceable();
						}
					}
				}
				if(elem !== undefined) {
					if(elem.classList.contains($selected)) {
						elem.classList.remove($selected);
						elem = undefined;
						return;
					}
				}
				
				elem = koma;
				if(elem.parentElement === null) return;
				const x = Number(elem.parentElement.getAttribute('data-x'));
				const y = Number(elem.parentElement.getAttribute('data-y'));
				const positionNumber: number = x * 10 + y * 1;
				kaku(positionNumber);
				hisya(positionNumber);
				kyou(positionNumber);
				hu(positionNumber);
				kei(positionNumber);
				ginn(positionNumber);
				kinn(positionNumber);
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
				if(clickablePos.classList.contains($placeable)) {
					clickablePos.appendChild(elem);
				}
				removePlaceable();
				elem.classList.remove($selected);
				elem = undefined;
			}
		});
		
		
		
		
		function removePlaceable(): void {
			masus.forEach(masu => {
				masu.classList.remove($placeable);
			})
		}
		
		function hu(positionNumber: number): void {
			if(!elem?.classList.contains('hu')) {
				return;
			}
			const LDRU: number[][] = [
				[-1, -1],
				[1, 1]
			];
			test(positionNumber, elem, LDRU, false);
		}

		function kyou(positionNumber: number): void {
			if(!elem?.classList.contains('kyou')) {
				return;
			}
			const LDRU: number[][] = [
				[-1, -1],
				[1, 1]
			];
			test(positionNumber, elem, LDRU, true);
		}

		function kei(positionNumber: number): void {
			if(!elem?.classList.contains('kei')) {
				return;
			}
			const LDRU: number[][] = [
				[8, -1], [-12, -1],
				[-8, 1], [12, 1]
			];
			test(positionNumber, elem, LDRU, false);
		}

		function ginn(positionNumber: number): void {
			if(!elem?.classList.contains('ginn')) {
				return;
			}
			const LDRU: number[][] = [
				[9, -1], [11, -1],[-1, -1], [-11, -1],[-9, -1],
				[-9, 1], [-11, 1],[1, 1], [11, 1],[9, 1]
			];
			test(positionNumber, elem, LDRU, false);
		}

		function kinn(positionNumber: number): void {
			if(!elem?.classList.contains('kinn')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1],[9, -1],[-1, -1],[-11, -1],[-10, -1],[1, -1],
				[-10, 1],[-9, 1],[1, 1],[11, 1],[10, 1],[-1, 1],
			];
			test(positionNumber, elem, LDRU, false);
		}

		
		function kaku(positionNumber: number): void {
			if(!elem?.classList.contains('kaku')) {
				return;
			}
			const LDRU :number[][] = [
				[11, -1], [-9, -1], [-11, -1], [9, -1], 
				[11, 1], [-9, 1], [-11, 1], [9, 1]
			];
			test(positionNumber,elem,LDRU, true);
		}

		function hisya(positionNumber: number): void {
			if(!elem?.classList.contains('hisya')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1], [1, -1], [-10, -1], [-1, -1], 
				[10, 1], [1, 1], [-10, 1], [-1, 1],
			];
			test(positionNumber,elem,LDRU, true);
		}


		function test(positionNumber: number, elem: undefined | Element, LDRU: number[][], tobi: boolean): void {
			for(let t = 0; t < LDRU.length; t++) {
				const flag = LDRU[t][0] > 0 ? 1 : -1;
				if(elem !== undefined) {
					if(elem.classList.contains('ally') && LDRU[t][1] === 1) continue;
					if(elem.classList.contains('enemy') && LDRU[t][1] === -1) continue;	
				}
				for(let i = positionNumber; i * flag <= 44 + 55 * flag; i = i + LDRU[t][0]) {
					if(i === positionNumber) continue;
					let posX = Math.floor(i/10);
					let posY = Math.floor(i - Math.floor(i/10) * 10);
					let masu = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`);
					if(masu !== null && elem !== undefined) {
						if(masu.children[0])
						{
							if((masu.children[0].classList.contains('ally')	&& elem.classList.contains('ally'))
							||(masu.children[0].classList.contains('enemy')) && elem.classList.contains('enemy')) break;
						}
						masu.classList.add($placeable);
						if(masu.children[0]) break;
					}
					if(document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null) break;
					if(!tobi) break;
				}
			}
		}
	}
}

