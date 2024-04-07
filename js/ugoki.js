'use strict';
{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const $selected = 'selected';
        const $koma = 'koma';
        const $masu = 'masu';
        const komas = document.querySelectorAll('.koma');
        const masus = document.querySelectorAll('.masu');
        let elem = undefined;
        let clickablePos = null;
        komas.forEach(koma => {
            koma.addEventListener('click', () => {
                clickablePos = koma.parentElement;
                if (elem === koma) {
                    console.log('同一の駒をクリックしました。');
                    removePlaceable();
                }
                else {
                    if (((elem === null || elem === void 0 ? void 0 : elem.classList.contains('ally')) && koma.classList.contains('ally'))
                        || ((elem === null || elem === void 0 ? void 0 : elem.classList.contains('enemy')) && koma.classList.contains('enemy'))) {
                        console.log('味方の駒をクリックしました。');
                        removePlaceable();
                    }
                    else {
                        console.log('敵の駒をクリックしました。');
                        kaku();
                        hisya();
                        removePlaceable();
                    }
                }
                if (elem === null || elem === void 0 ? void 0 : elem.classList.contains($selected)) {
                    elem === null || elem === void 0 ? void 0 : elem.classList.remove($selected);
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
            clickablePos = e.target;
            const clickablePosdParentNode = clickablePos.parentElement;
            if (!clickablePosdParentNode)
                return;
            if (!elem || clickablePosdParentNode.classList.contains($koma))
                return;
            if (!clickablePos.classList.contains($masu)) {
                console.log('駒を持っている状態でマス目以外の箇所をクリックしました。');
                removePlaceable();
                elem.classList.remove($selected);
                elem = undefined;
            }
            else {
                console.log('駒を持っている状態でマス目をクリックしました。');
                kaku();
                hisya();
                removePlaceable();
                elem.classList.remove($selected);
                elem = undefined;
            }
        });
        function removePlaceable() {
            masus.forEach(masu => {
                masu.classList.remove('placeable');
            });
        }
        function kaku() {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('kaku'))) {
                return;
            }
            const x = Number((_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-x'));
            const y = Number((_b = elem.parentElement) === null || _b === void 0 ? void 0 : _b.getAttribute('data-y'));
            const positionNumber = x * 10 + y * 1;
            const LDRU = [
                [11, [1, 1]], [-9, [-1, 1]], [-11, [-1, -1]], [9, [1, -1]]
            ];
            for (let t = 0; t < LDRU.length; t++) {
                for (let i = positionNumber + LDRU[t][0]; i * LDRU[t][1][0] <= 44 + 55 * LDRU[t][1][0]; i = i + LDRU[t][0]) {
                    if (x === 5 + 4 * LDRU[t][1][0] || y === 5 + 4 * LDRU[t][1][1])
                        break;
                    let posX = Math.floor(i / 10);
                    let posY = Math.floor(i - Math.floor(i / 10) * 10);
                    if ((_c = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _c === void 0 ? void 0 : _c.children[0]) {
                        if ((((_d = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _d === void 0 ? void 0 : _d.children[0].classList.contains('ally'))
                            && elem.classList.contains('ally'))
                            || ((_e = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _e === void 0 ? void 0 : _e.children[0].classList.contains('enemy'))
                                && elem.classList.contains('enemy')) {
                            break;
                        }
                    }
                    (_f = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _f === void 0 ? void 0 : _f.classList.add('placeable');
                    if (posX === 1 || posX === 9 || posY === 1 || posY === 9)
                        break;
                    if ((_g = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _g === void 0 ? void 0 : _g.children[0]) {
                        break;
                    }
                }
            }
        }
        function hisya() {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('hisya'))) {
                return;
            }
            const x = Number((_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-x'));
            const y = Number((_b = elem.parentElement) === null || _b === void 0 ? void 0 : _b.getAttribute('data-y'));
            const positionNumber = x * 10 + y * 1;
            const LDRU = [
                [10, 1], [1, 1], [-10, -1], [-1, -1]
            ];
            for (let t = 0; t < LDRU.length; t++) {
                for (let i = positionNumber; i * LDRU[t][1] <= 44 + 55 * LDRU[t][1]; i = i + LDRU[t][0]) {
                    if (i === positionNumber)
                        continue;
                    let posX = Math.floor(i / 10);
                    let posY = Math.floor(i - Math.floor(i / 10) * 10);
                    if ((_c = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _c === void 0 ? void 0 : _c.children[0]) {
                        if ((((_d = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _d === void 0 ? void 0 : _d.children[0].classList.contains('ally'))
                            && elem.classList.contains('ally'))
                            || ((_e = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _e === void 0 ? void 0 : _e.children[0].classList.contains('enemy'))
                                && elem.classList.contains('enemy')) {
                            break;
                        }
                    }
                    (_f = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _f === void 0 ? void 0 : _f.classList.add('placeable');
                    if ((_g = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _g === void 0 ? void 0 : _g.children[0]) {
                        break;
                    }
                    if (document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null)
                        break;
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
