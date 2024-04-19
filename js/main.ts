'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		
		function createban(): string{
			let gridCell: string = `<div class="ban">`;
			for(let i=1; i<=9; i++) {
				gridCell += `<div class="paragraph">`;
				for(let t=9; t>=1; t--) {
					gridCell += `<div class="masu" data-x="${t}" data-y="${i}"></div>`;
				}
				gridCell += `</div>`;
			}
			gridCell += `</div>`
			return gridCell;
		}
		
		function createKoma(opponent: string, name: string): Element {
			const div = document.createElement('div');
			div.classList.add('koma');
			div.classList.add(opponent);
			div.classList.add(name);
			return div;
		}
		
		
		const container: null | Element = document.getElementById('container');
		if(container !== null) {
			container.innerHTML += createban();
			function renderKoma(x: number, y: number, opponent: string, name: string): void {
			
				const targetElement: null | Element = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
				if(targetElement !== null) {
					targetElement.appendChild(createKoma(opponent, name));
				}
			}
			renderKoma(5, 9, 'ally', 'gyoku');
			renderKoma(6, 9, 'ally', 'kinn');
			renderKoma(4, 9, 'ally', 'kinn');
			renderKoma(7, 9, 'ally', 'ginn');
			renderKoma(3, 9, 'ally', 'ginn');
			renderKoma(8, 9, 'ally', 'kei');
			renderKoma(2, 9, 'ally', 'kei');
			renderKoma(9, 9, 'ally', 'kyou');
			renderKoma(1, 9, 'ally', 'kyou');
			renderKoma(8, 8, 'ally', 'kaku');
			renderKoma(2, 8, 'ally', 'hisya');
			renderKoma(5, 7, 'ally', 'hu');
			renderKoma(6, 7, 'ally', 'hu');
			renderKoma(4, 7, 'ally', 'hu');
			renderKoma(7, 7, 'ally', 'hu');
			renderKoma(3, 7, 'ally', 'hu');
			renderKoma(8, 7, 'ally', 'hu');
			renderKoma(2, 7, 'ally', 'hu');
			renderKoma(9, 7, 'ally', 'hu');
			renderKoma(1, 7, 'ally', 'hu');
			renderKoma(5, 1, 'enemy', 'ou');
			renderKoma(4, 1, 'enemy', 'kinn');
			renderKoma(6, 1, 'enemy', 'kinn');
			renderKoma(3, 1, 'enemy', 'ginn');
			renderKoma(7, 1, 'enemy', 'ginn');
			renderKoma(2, 1, 'enemy', 'kei');
			renderKoma(8, 1, 'enemy', 'kei');
			renderKoma(1, 1, 'enemy', 'kyou');
			renderKoma(9, 1, 'enemy', 'kyou');
			renderKoma(2, 2, 'enemy', 'kaku');
			renderKoma(8, 2, 'enemy', 'hisya');
			renderKoma(5, 3, 'enemy', 'hu');
			renderKoma(4, 3, 'enemy', 'hu');
			renderKoma(6, 3, 'enemy', 'hu');
			renderKoma(3, 3, 'enemy', 'hu');
			renderKoma(7, 3, 'enemy', 'hu');
			renderKoma(2, 3, 'enemy', 'hu');
			renderKoma(8, 3, 'enemy', 'hu');
			renderKoma(1, 3, 'enemy', 'hu');
			renderKoma(9, 3, 'enemy', 'hu');
		}
		
		const komaArrs: string[][] = [
			['ally','ou', 'ou', 'syougi_koma01_z_01.png'],
			['ally','kaku', 'kaku', 'syougi_koma01_z_02.png'],
			['ally','uma','kaku','syougi_koma01_z_03.png'],
			['ally','hisya','hisya','syougi_koma01_z_04.png'],
			['ally','ryuu','hisya','syougi_koma01_z_05.png'],
			['ally','kinn','kinn','syougi_koma01_z_06.png'],
			['ally','ginn','ginn','syougi_koma01_z_07.png'],
			['ally','nariginn','ginn','syougi_koma01_z_08.png'],
			['ally','kei','kei','syougi_koma01_z_09.png'],
			['ally','narikei','kei','syougi_koma01_z_10.png'],
			['ally','kyou','kyou','syougi_koma01_z_11.png'],
			['ally','narikyou','kyou','syougi_koma01_z_12.png'],
			['ally','hu','hu','syougi_koma01_z_13.png'],
			['ally','tokinn','hu','syougi_koma01_z_14.png'],
			['ally','gyoku','gyoku','syougi_koma01_z_15.png'],

			['enemy','ou','ou', 'Gsyougi_koma01_z_01.png'],
			['enemy','kaku','kaku', 'Gsyougi_koma01_z_02.png'],
			['enemy','uma','kaku', 'Gsyougi_koma01_z_03.png'],
			['enemy','hisya','hisya', 'Gsyougi_koma01_z_04.png'],
			['enemy','ryuu','hisya', 'Gsyougi_koma01_z_05.png'],
			['enemy','kinn','kinn', 'Gsyougi_koma01_z_06.png'],
			['enemy','ginn','ginn', 'Gsyougi_koma01_z_07.png'],
			['enemy','nariginn','ginn', 'Gsyougi_koma01_z_08.png'],
			['enemy','kei','kei', 'Gsyougi_koma01_z_09.png'],
			['enemy','narikei','kei', 'Gsyougi_koma01_z_10.png'],
			['enemy','kyou','kyou', 'Gsyougi_koma01_z_11.png'],
			['enemy','narikyou','kyou', 'Gsyougi_koma01_z_12.png'],
			['enemy','hu','hu', 'Gsyougi_koma01_z_13.png'],
			['enemy','tokinn','hu', 'Gsyougi_koma01_z_14.png'],
			['enemy','gyoku','gyoku', 'Gsyougi_koma01_z_15.png'],
		];

		

		const $selected: string = 'selected';
		const $placeable: string = 'placeable';
		const $koma: string = 'koma';
		const $masu: string = 'masu';
		const komas: NodeListOf<Element> = document.querySelectorAll('.koma');
		const masus: NodeListOf<Element> = document.querySelectorAll('.masu');
		const allyMotigoma: null | Element = document.querySelector('.ally-motigoma');
		const enemyMotigoma: null | Element = document.querySelector('.enemy-motigoma');
		const komaoto: null | HTMLAudioElement = document.querySelector('#komaoto');
		let elem: undefined | Element = undefined;
		let clickablePos: null | Element = null;
		let clickedKomaPos: null | Element;
		let flag: number = 0;

		if(komaoto !== null) komaoto.volume = 1;
	
		komas.forEach(koma => {
			if(koma.classList.contains('ally')) {
				koma.classList.add('tebann');
			}
			koma.addEventListener('click', () => {
				clickablePos = koma.parentElement;
				if(flag === 0) {
					clickedKomaPos = koma.parentElement;
					flag = 1;
				}
				if(elem === koma) {
					// 同一の駒クリック
					removePlaceable();
					flag = 0;
				}else {
					if(elem !== undefined) {
						if((elem.classList.contains('ally') && koma.classList.contains('ally'))
						|| (elem.classList.contains('enemy') && koma.classList.contains('enemy'))
						) {
							// 味方の駒クリック
							removePlaceable();
							flag = 0;
						} else {
							// 敵駒クリック処理
							if(clickablePos === null || allyMotigoma === null || enemyMotigoma === null) return;
							if(koma.classList.contains('enemy')) {
								if(clickablePos.classList.contains($placeable)) {
									clickablePos.appendChild(elem);
									allyMotigoma.appendChild(koma);
									koma.classList.remove('enemy');
									koma.classList.add('ally');
									for(let i = 0; i < komaArrs.length / 2; i++) {
										if(koma.classList.contains(`${komaArrs[i][1]}`)) {
											koma.classList.remove(`${komaArrs[i][1]}`);
											koma.classList.add(`${komaArrs[i][2]}`);
											koma.classList.add('motigoma');
											koma.classList.add('tebann');
										}
									}
								}
							}else if(koma.classList.contains('ally')) {
								if(clickablePos.classList.contains($placeable)) {
									clickablePos.appendChild(elem);
									enemyMotigoma.appendChild(koma);
									koma.classList.remove('ally');
									koma.classList.add('enemy');
									for(let i = komaArrs.length / 2; i < komaArrs.length; i++) {
										if(komaArrs[i][1] === 'ally') continue;
										if(koma.classList.contains(`${komaArrs[i][1]}`)) {
											koma.classList.remove(`${komaArrs[i][1]}`);
											koma.classList.add(`${komaArrs[i][2]}`);
											koma.classList.add('motigoma');
											koma.classList.add('tebann');
										}
									}
								}
							}
							if(clickedKomaPos === null) return;
							komanari(clickablePos, clickedKomaPos);
							insertKoma();
							removePlaceable();
							changeTebann(komas);
							if(komaoto !== null) {
								komaoto.play();
							}
							flag = 0;
						}
						// ここまで敵駒クリック処理
					}
				}
				if(elem !== undefined) {
					if(elem.classList.contains($selected)) {
						elem.classList.remove($selected);
						elem = undefined;
						return;
					}
				}

				if(!koma.classList.contains('tebann')) return;
				
				elem = koma;
				if(elem.parentElement === null) return;
				const x = Number(elem.parentElement.getAttribute('data-x'));
				const y = Number(elem.parentElement.getAttribute('data-y'));
				const positionNumber: number = x * 10 + y * 1;
				kaku(x, y);
				hisya(positionNumber);
				kyou(positionNumber);
				hu(positionNumber);
				kei(positionNumber);
				ginn(positionNumber);
				kinn(positionNumber);
				uma(positionNumber);
				ryuu(positionNumber);
				gyoku(positionNumber);
				if(elem.classList.contains('motigoma')) {
					uti();
				}
				elem.classList.add($selected);
			});
		});


	
		document.addEventListener('click', e => {

			clickablePos = e.target as Element;
			const clickablePosdParentNode = clickablePos.parentElement as Element;
			if(!clickablePosdParentNode) return;
	
			if(!elem || clickablePosdParentNode.classList.contains($koma)) return;
	
			if(!clickablePos.classList.contains($masu)) {
				// マス目以外をクリック
				removePlaceable();
				flag = 0;
				elem.classList.remove($selected);
				elem = undefined;
			}else {
				// マス目をクリック
				if(clickedKomaPos === null) return;
				if(clickablePos.classList.contains($placeable)) {
					clickablePos.appendChild(elem);
					komanari(clickablePos, clickedKomaPos);
					elem.classList.remove('motigoma');
					if(komaoto !== null) {
						komaoto.play();
					}
					insertKoma();
					removePlaceable();
					changeTebann(komas);
					flag = 0;
					elem.classList.remove($selected);
					elem = undefined;
				}
			}
		});

		function changeTebann(komas: NodeListOf<Element>): void {
			komas.forEach(koma => {
				if(koma.classList.contains('tebann')) {
					koma.classList.remove('tebann');
				}else {
					koma.classList.add('tebann');
				}
			});
		}
		
		function insertKoma() {
			komas.forEach(koma => {
				koma.innerHTML = '';
				komaArrs.forEach(komaArr => {
					if(koma.classList.contains(komaArr[0]) && koma.classList.contains(komaArr[1])) {
						const img = document.createElement('img');
						img.src = `./images/${komaArr[3]}`;
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
			if(elem === undefined) return;
			if(!elem.classList.contains('hu')) {
				return;
			}
			const LDRU: number[][] = [
				[-1, -1, 0],
				[1, 1, 0]
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function kyou(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('kyou')) {
				return;
			}
			const LDRU: number[][] = [
				[-1, -1, 1],
				[1, 1, 1]
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function kei(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('kei')) {
				return;
			}
			const LDRU: number[][] = [
				[8, -1, 0], [-12, -1, 0],
				[-8, 1, 0], [12, 1, 0]
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function ginn(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('ginn')) {
				return;
			}
			const LDRU: number[][] = [
				[9, -1, 0], [11, -1, 0],[-1, -1, 0], [-11, -1, 0],[-9, -1, 0],
				[-9, 1, 0], [-11, 1, 0],[1, 1, 0], [11, 1, 0],[9, 1, 0]
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function kinn(positionNumber: number): void {
			if(elem === undefined) return;
			if(!(elem.classList.contains('kinn') || elem.classList.contains('nariginn') || elem.classList.contains('narikei') || elem.classList.contains('narikyou') || elem.classList.contains('tokinn'))) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 0],[9, -1, 0],[-1, -1, 0],[-11, -1, 0],[-10, -1, 0],[1, -1, 0],
				[-10, 1, 0],[-9, 1, 0],[1, 1, 0],[11, 1, 0],[10, 1, 0],[-1, 1, 0],
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function test(posX: number, posY: number, elem: Element, LDRU: any) {
			for(let t = 0; t < Object.keys(LDRU).length; t++) {
				if(elem.classList.contains(Object.keys(LDRU)[t])) {
					for(let i = 0; i < LDRU[Object.keys(LDRU)[t]].length; i++) {
						for(let x = posX, y = posY; x * LDRU[Object.keys(LDRU)[t]][i][0] <= 4 + 5 * LDRU[Object.keys(LDRU)[t]][i][0] || y * LDRU[Object.keys(LDRU)[t]][i][1] <= 4 + 5 * LDRU[Object.keys(LDRU)[t]][i][1]; x = x + LDRU[Object.keys(LDRU)[t]][i][0], y = y + LDRU[Object.keys(LDRU)[t]][i][1]) {
							if(x === posX && y === posY) continue;
							const masu = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
							if(masu === null) break;
							if(masu.children[0]) {
								if(masu.children[0].classList.contains(Object.keys(LDRU)[0 + t])) break;
							}
							masu.classList.add($placeable);
							if(masu.children[0]) {
								if(masu.children[0].classList.contains(Object.keys(LDRU)[1 - t])) break;
							}
							if(!LDRU[Object.keys(LDRU)[0]][i][2]) break;
						}
					}
				}
			}
		}


		function kaku(posX: number, posY: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('kaku')) {
				return;
			}
			const LDRU: any = 
			{
				'ally': [[1, -1, true],[1, 1, true],[-1, 1, true],[-1, -1, true]],
				'enemy': [[-1, 1, true],[-1, -1, true],[1, -1, true],[1, 1, true]]
			};

			test(posX, posY, elem, LDRU);

		}
	

		function hisya(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('hisya')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1], 
				[10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function uma(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('uma')) {
				return;
			}
			const LDRU :number[][] = [
				[11, -1, 1], [-9, -1, 1], [-11, -1, 1], [9, -1, 1], 
				[11, 1, 1], [-9, 1, 1], [-11, 1, 1], [9, 1, 1],
				[10, -1, 0], [1, -1, 0], [-10, -1, 0], [-1, -1, 0],
				[10, 1, 0], [1, 1, 0], [-10, 1, 0], [-1, 1, 0],
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function ryuu(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('ryuu')) {
				return;
			}
			const LDRU: number[][] = [
				[10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1], 
				[10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
				[11, -1, 0], [-9, -1, 0], [-11, -1, 0], [9, -1, 0], 
				[11, 1, 0], [-9, 1, 0], [-11, 1, 0], [9, 1, 0],
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function gyoku(positionNumber: number): void {
			if(elem === undefined) return;
			if(!elem.classList.contains('gyoku')) {
				return;
			}
			const LDRU: number[][] = [
				[11, -1, 0], [10, -1, 0],[9, -1, 0],[-1, -1, 0],[-11, -1, 0],[-10, -1, 0],[-9, -1, 0],[1, -1, 0],
				[-11, 1, 0],[-10, 1, 0],[-9, 1, 0],[1, 1, 0],[11, 1, 0],[10, 1, 0],[9, 1, 0],[-1, 1, 0],
			];
			komaMove(positionNumber, elem, LDRU);
		}

		function uti(): void {
			const allyHus: number[] = [];
            const enemyHus: number[] = [];
            komas.forEach(koma => {
				if(koma.parentElement !== null) {
					if(koma.classList.contains('hu') && koma.classList.contains('ally')) {
						const posX: number = Number(koma.parentElement.getAttribute('data-x'));
						allyHus.push(posX);
					}else if(koma.classList.contains('hu') && koma.classList.contains('enemy')) {
						const posX: number = Number(koma.parentElement.getAttribute('data-x'));
						enemyHus.push(posX);
					}
				}
				console.log(allyHus, enemyHus);
            });
            masus.forEach(masu => {
                if (masu.children[0] === undefined && elem !== undefined) {
                    const posY = Number(masu.getAttribute('data-y'));
                    const posX = Number(masu.getAttribute('data-x'));
                    if (elem.classList.contains('hu') && elem.classList.contains('ally')) {
                        if (posY !== 1 && allyHus.indexOf(posX) === -1) {
                            masu.classList.add($placeable);
                        }
                    }
                    else if (elem.classList.contains('hu') && elem.classList.contains('enemy')) {
                        if (posY !== 9 && enemyHus.indexOf(posX) === -1) {
                            masu.classList.add($placeable);
                        }
                    }
                    else if (elem.classList.contains('kyou') && elem.classList.contains('ally')) {
                        if (posY !== 1) {
                            masu.classList.add($placeable);
                        }
                    }
                    else if (elem.classList.contains('kyou') && elem.classList.contains('enemy')) {
                        if (posY !== 9) {
                            masu.classList.add($placeable);
                        }
                    }
                    else if (elem.classList.contains('kei') && elem.classList.contains('ally')) {
                        if (posY > 2) {
                            masu.classList.add($placeable);
                        }
                    }
                    else if (elem.classList.contains('kei') && elem.classList.contains('enemy')) {
                        if (posY < 8) {
                            masu.classList.add($placeable);
                        }
                    }else {
                        masu.classList.add($placeable);
                    }
                }
            });
		}

		function komanari(clickablePos: Element, clickedKomaPos: Element): void {
			if(elem === undefined) return;
			if(elem.classList.contains('motigoma')) return;
			const clickable_y = Number(clickablePos.getAttribute('data-y'));
			const clicked_y = Number(clickedKomaPos.getAttribute('data-y'));
			if(elem.classList.contains('hu')) {
				if(clickable_y >= 2 && clickable_y <= 3 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('hu');
					elem.classList.add('tokinn');
				}else if(clickable_y === 1 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('hu');
					elem.classList.add('tokinn');
				}else if(clickable_y >= 7 && clickable_y <= 8 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('hu');
					elem.classList.add('tokinn');
				}else if(clickable_y === 9 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('hu');
					elem.classList.add('tokinn');
				}
			}else if(elem.classList.contains('kyou')) {
				if(clickable_y >= 2 && clickable_y <= 3 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kyou');
					elem.classList.add('narikyou');
				}else if(clickable_y === 1 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('kyou');
					elem.classList.add('narikyou');
				}else if(clickable_y >= 7 && clickable_y <= 8 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kyou');
					elem.classList.add('narikyou');
				}else if(clickable_y === 9 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('kyou');
					elem.classList.add('narikyou');
				}
			}else if(elem.classList.contains('kei')) {
				if(clickable_y === 3 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kei');
					elem.classList.add('narikei');
				}else if(clickable_y <= 2 && clickable_y >= 1 && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('kei');
					elem.classList.add('narikei');
				}else if(clickable_y === 7 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kei');
					elem.classList.add('narikei');
				}else if(clickable_y >= 8 && clickable_y <= 9 && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					elem.classList.remove('kei');
					elem.classList.add('narikei');
				}
			}else if(elem.classList.contains('ginn')) {
				if((clickable_y <= 3 || (clicked_y === 3 && clickable_y === 4)) && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('ginn');
					elem.classList.add('nariginn');
				}else if((clickable_y >= 7 || (clicked_y === 7 && clickable_y === 6)) && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('ginn');
					elem.classList.add('nariginn');
				}
			}else if(elem.classList.contains('kaku')) {
				if((clickable_y <= 3 || clicked_y <= 3) && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kaku');
					elem.classList.add('uma');
				}else if((clickable_y >= 7 || clicked_y >= 7) && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('kaku');
					elem.classList.add('uma');
				}
			}else if(elem.classList.contains('hisya')) {
				if((clickable_y <= 3 || clicked_y <= 3) && elem.classList.contains('ally') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('hisya');
					elem.classList.add('ryuu');
				}else if((clickable_y >= 7 || clicked_y >= 7) && elem.classList.contains('enemy') && clickablePos.classList.contains($placeable)) {
					if(!confirm('成りますか?')) return;
					elem.classList.remove('hisya');
					elem.classList.add('ryuu');
				}
			}
		}


		function komaMove(positionNumber: number, elem: undefined | Element, LDRU: number[][]): void {
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

