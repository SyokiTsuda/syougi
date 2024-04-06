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
            var _a, _b, _c, _d, _e;
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('kaku'))) {
                return;
            }
            const kakuParetElement = elem.parentElement;
            const positions = [];
            const LDRU = [
                [1, 1],
                [-1, 1],
                [1, -1],
                [-1, -1],
            ];
            for (let i = 0; i < LDRU.length; i++) {
                let posY = Number(kakuParetElement === null || kakuParetElement === void 0 ? void 0 : kakuParetElement.getAttribute('data-y'));
                for (let posX = Number(kakuParetElement === null || kakuParetElement === void 0 ? void 0 : kakuParetElement.getAttribute('data-x')) + LDRU[i][0]; posX * LDRU[i][0] <= 4 + (5 * LDRU[i][0]); posX = posX + LDRU[i][0]) {
                    posY = posY + LDRU[i][1];
                    if ((_a = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _a === void 0 ? void 0 : _a.children[0]) {
                        if ((((_b = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _b === void 0 ? void 0 : _b.children[0].classList.contains('ally'))
                            && elem.classList.contains('ally'))
                            || ((_c = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _c === void 0 ? void 0 : _c.children[0].classList.contains('enemy'))
                                && elem.classList.contains('enemy')) {
                            break;
                        }
                    }
                    (_d = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _d === void 0 ? void 0 : _d.classList.add('placeable');
                    if (posY * LDRU[i][1] > 4 + (5 * LDRU[i][1])) {
                        break;
                    }
                    positions.push([posX, posY]);
                    if ((_e = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`)) === null || _e === void 0 ? void 0 : _e.children[0]) {
                        break;
                    }
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
