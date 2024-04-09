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
        let x;
        let y;
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
                        removePlaceable();
                    }
                }
                if (elem === null || elem === void 0 ? void 0 : elem.classList.contains($selected)) {
                    elem === null || elem === void 0 ? void 0 : elem.classList.remove($selected);
                    elem = undefined;
                    return;
                }
                elem = koma;
                if (elem.parentElement === null)
                    return;
                const x = Number(elem.parentElement.getAttribute('data-x'));
                const y = Number(elem.parentElement.getAttribute('data-y'));
                const positionNumber = x * 10 + y * 1;
                kaku(positionNumber);
                hisya(positionNumber);
                kyou(positionNumber);
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
                if (clickablePos.classList.contains('placeable')) {
                    clickablePos.appendChild(elem);
                }
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
        function kyou(positionNumber) {
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('kyou'))) {
                return;
            }
            const LDRU = [
                [-1, -1, -1],
                [1, 1, 1]
            ];
            test(positionNumber, elem, LDRU);
        }
        function kaku(positionNumber) {
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('kaku'))) {
                return;
            }
            const LDRU = [
                [11, 1, -1], [-9, -1, -1], [-11, -1, -1], [9, 1, -1],
                [11, 1, 1], [-9, -1, 1], [-11, -1, 1], [9, 1, 1]
            ];
            test(positionNumber, elem, LDRU);
        }
        function hisya(positionNumber) {
            if (!(elem === null || elem === void 0 ? void 0 : elem.classList.contains('hisya'))) {
                return;
            }
            const LDRU = [
                [10, 1, -1], [1, 1, -1], [-10, -1, -1], [-1, -1, -1],
                [10, 1, 1], [1, 1, 1], [-10, -1, 1], [-1, -1, 1],
            ];
            test(positionNumber, elem, LDRU);
        }
        function test(positionNumber, elem, LDRU) {
            for (let t = 0; t < LDRU.length; t++) {
                if (elem.classList.contains('ally') && LDRU[t][2] === 1)
                    continue;
                if (elem.classList.contains('enemy') && LDRU[t][2] === -1)
                    continue;
                for (let i = positionNumber; i * LDRU[t][1] <= 44 + 55 * LDRU[t][1]; i = i + LDRU[t][0]) {
                    if (i === positionNumber)
                        continue;
                    let posX = Math.floor(i / 10);
                    let posY = Math.floor(i - Math.floor(i / 10) * 10);
                    let masu = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`);
                    if (masu !== null) {
                        if (masu.children[0]) {
                            if ((masu.children[0].classList.contains('ally')
                                && elem.classList.contains('ally'))
                                || (masu.children[0].classList.contains('enemy'))
                                    && elem.classList.contains('enemy'))
                                break;
                        }
                        masu.classList.add('placeable');
                        if (masu.children[0])
                            break;
                    }
                    if (document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null)
                        break;
                }
            }
        }
    }
}
