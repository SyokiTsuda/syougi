'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		

		const komaArrs: string[][] = [
			['ally','ou','syougi_koma01_z_01.png'],
			['ally','kaku','syougi_koma01_z_02.png'],
			['ally','uma','syougi_koma01_z_03.png'],
			['ally','hisya','syougi_koma01_z_04.png'],
			['ally','ryuu','syougi_koma01_z_05.png'],
			['ally','kinn','syougi_koma01_z_06.png'],
			['ally','ginn','syougi_koma01_z_07.png'],
			['ally','nariginn','syougi_koma01_z_08.png'],
			['ally','kei','syougi_koma01_z_09.png'],
			['ally','narikei','syougi_koma01_z_10.png'],
			['ally','kyou','syougi_koma01_z_11.png'],
			['ally','narikyou','syougi_koma01_z_12.png'],
			['ally','hu','syougi_koma01_z_13.png'],
			['ally','tokinn','syougi_koma01_z_14.png'],
			['ally','gyoku','syougi_koma01_z_15.png'],

			['enemy','ou','Gsyougi_koma01_z_01.png'],
			['enemy','kaku','Gsyougi_koma01_z_02.png'],
			['enemy','uma','Gsyougi_koma01_z_03.png'],
			['enemy','hisya','Gsyougi_koma01_z_04.png'],
			['enemy','ryuu','Gsyougi_koma01_z_05.png'],
			['enemy','kinn','Gsyougi_koma01_z_06.png'],
			['enemy','ginn','Gsyougi_koma01_z_07.png'],
			['enemy','nariginn','Gsyougi_koma01_z_08.png'],
			['enemy','kei','Gsyougi_koma01_z_09.png'],
			['enemy','narikei','Gsyougi_koma01_z_10.png'],
			['enemy','kyou','Gsyougi_koma01_z_11.png'],
			['enemy','narikyou','Gsyougi_koma01_z_12.png'],
			['enemy','hu','Gsyougi_koma01_z_13.png'],
			['enemy','tokinn','Gsyougi_koma01_z_14.png'],
			['enemy','gyoku','Gsyougi_koma01_z_15.png'],
		];

		

		const $selected: string = 'selected';
		const $placeable: string = 'placeable';
		const $koma: string = 'koma';
		const $masu: string = 'masu';
		const komas: NodeListOf<Element> = document.querySelectorAll('.koma');
		const masus: NodeListOf<Element> = document.querySelectorAll('.masu');
		const allyMotigoma: null | Element = document.querySelector('.ally-motigoma');
		const enemyMotigoma: null | Element = document.querySelector('.enemy-motigoma');
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
							if(clickablePos === null || allyMotigoma === null || enemyMotigoma === null) return;
							if(koma.classList.contains('enemy')) {
								clickablePos.appendChild(elem);
								allyMotigoma.appendChild(koma);
							}else if(koma.classList.contains('ally')) {
								clickablePos.appendChild(elem);
								enemyMotigoma.appendChild(koma);
							}
							insertKoma();
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
				uma(positionNumber);
				ryuu(positionNumber);
				gyoku(positionNumber);
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
		
		function insertKoma() {
			komaArrs.forEach(komaArr => {
				komas.forEach(koma => {
					if(koma.classList.contains(komaArr[0]) && koma.classList.contains(komaArr[1])) {
						const img = document.createElement('img');
						img.src = `./images/${komaArr[2]}`;
						koma.appendChild(img);
					}
				});
			});
		}
		
		insertKoma();
		
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
				[-1, -1, 0],
				[1, 1, 0]
			];
			test(positionNumber, elem, LDRU);
		}

		function kyou(positionNumber: number): void {
			if(!elem?.classList.contains('kyou')) {
				return;
			}
			const LDRU: number[][] = [
				[-1, -1, 1],
				[1, 1, 1]
			];
			test(positionNumber, elem, LDRU);
		}

		function kei(positionNumber: number): void {
			if(!elem?.classList.contains('kei')) {
				return;
			}
			const LDRU: number[][] = [
				[8, -1, 0], [-12, -1, 0],
				[-8, 1, 0], [12, 1, 0]
			];
			test(positionNumber, elem, LDRU);
		}

		function ginn(positionNumber: number): void {
			if(!elem?.classList.contains('ginn')) {
				return;
			}
			const LDRU: number[][] = [
				[9, -1, 0], [11, -1, 0],[-1, -1, 0], [-11, -1, 0],[-9, -1, 0],
				[-9, 1, 0], [-11, 1, 0],[1, 1, 0], [11, 1, 0],[9, 1, 0]
			];
			test(positionNumber, elem, LDRU);
		}

		function kinn(positionNumber: number): void {
			if(!elem?.classList.contains('kinn')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 0],[9, -1, 0],[-1, -1, 0],[-11, -1, 0],[-10, -1, 0],[1, -1, 0],
				[-10, 1, 0],[-9, 1, 0],[1, 1, 0],[11, 1, 0],[10, 1, 0],[-1, 1, 0],
			];
			test(positionNumber, elem, LDRU);
		}

		
		function kaku(positionNumber: number): void {
			if(!elem?.classList.contains('kaku')) {
				return;
			}
			const LDRU :number[][] = [
				[11, -1, 1], [-9, -1, 1], [-11, -1, 1], [9, -1, 1], 
				[11, 1, 1], [-9, 1, 1], [-11, 1, 1], [9, 1, 1]
			];
			test(positionNumber, elem, LDRU);
		}

		function hisya(positionNumber: number): void {
			if(!elem?.classList.contains('hisya')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1], 
				[10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
			];
			test(positionNumber, elem, LDRU);
		}

		function uma(positionNumber: number): void {
			if(!elem?.classList.contains('uma')) {
				return;
			}
			const LDRU :number[][] = [
				[11, -1, 1], [-9, -1, 1], [-11, -1, 1], [9, -1, 1], 
				[11, 1, 1], [-9, 1, 1], [-11, 1, 1], [9, 1, 1],
				[10, -1, 0], [1, -1, 0], [-10, -1, 0], [-1, -1, 0],
				[10, 1, 0], [1, 1, 0], [-10, 1, 0], [-1, 1, 0],
			];
			test(positionNumber, elem, LDRU);
		}

		function ryuu(positionNumber: number): void {
			if(!elem?.classList.contains('ryuu')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1], 
				[10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
				[11, -1, 0], [-9, -1, 0], [-11, -1, 0], [9, -1, 0], 
				[11, 1, 0], [-9, 1, 0], [-11, 1, 0], [9, 1, 0],
			];
			test(positionNumber, elem, LDRU);
		}

		function gyoku(positionNumber: number): void {
			if(!elem?.classList.contains('gyoku')) {
				return;
			}
			const LDRU: number[][] = [
				[11, -1, 0], [10, -1, 0],[9, -1, 0],[-1, -1, 0],[-11, -1, 0],[-10, -1, 0],[-9, -1, 0],[1, -1, 0],
				[-11, 1, 0],[-10, 1, 0],[-9, 1, 0],[1, 1, 0],[11, 1, 0],[10, 1, 0],[9, 1, 0],[-1, 1, 0],
			];
			test(positionNumber, elem, LDRU);
		}


		function test(positionNumber: number, elem: undefined | Element, LDRU: number[][]): void {
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
					if(!LDRU[t][2]) break;
				}
			}
		}
	}
}

