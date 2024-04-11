'use strict';
{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const komaArrs = [
            ['ally', 'ou', 'ou', 'syougi_koma01_z_01.png'],
            ['ally', 'kaku', 'kaku', 'syougi_koma01_z_02.png'],
            ['ally', 'uma', 'kaku', 'syougi_koma01_z_03.png'],
            ['ally', 'hisya', 'hisya', 'syougi_koma01_z_04.png'],
            ['ally', 'ryuu', 'hisya', 'syougi_koma01_z_05.png'],
            ['ally', 'kinn', 'kinn', 'syougi_koma01_z_06.png'],
            ['ally', 'ginn', 'ginn', 'syougi_koma01_z_07.png'],
            ['ally', 'nariginn', 'ginn', 'syougi_koma01_z_08.png'],
            ['ally', 'kei', 'kei', 'syougi_koma01_z_09.png'],
            ['ally', 'narikei', 'kei', 'syougi_koma01_z_10.png'],
            ['ally', 'kyou', 'kyou', 'syougi_koma01_z_11.png'],
            ['ally', 'narikyou', 'kyou', 'syougi_koma01_z_12.png'],
            ['ally', 'hu', 'hu', 'syougi_koma01_z_13.png'],
            ['ally', 'tokinn', 'hu', 'syougi_koma01_z_14.png'],
            ['ally', 'gyoku', 'gyoku', 'syougi_koma01_z_15.png'],
            ['enemy', 'ou', 'ou', 'Gsyougi_koma01_z_01.png'],
            ['enemy', 'kaku', 'kaku', 'Gsyougi_koma01_z_02.png'],
            ['enemy', 'uma', 'kaku', 'Gsyougi_koma01_z_03.png'],
            ['enemy', 'hisya', 'hisya', 'Gsyougi_koma01_z_04.png'],
            ['enemy', 'ryuu', 'hisya', 'Gsyougi_koma01_z_05.png'],
            ['enemy', 'kinn', 'kinn', 'Gsyougi_koma01_z_06.png'],
            ['enemy', 'ginn', 'ginn', 'Gsyougi_koma01_z_07.png'],
            ['enemy', 'nariginn', 'ginn', 'Gsyougi_koma01_z_08.png'],
            ['enemy', 'kei', 'kei', 'Gsyougi_koma01_z_09.png'],
            ['enemy', 'narikei', 'kei', 'Gsyougi_koma01_z_10.png'],
            ['enemy', 'kyou', 'kyou', 'Gsyougi_koma01_z_11.png'],
            ['enemy', 'narikyou', 'kyou', 'Gsyougi_koma01_z_12.png'],
            ['enemy', 'hu', 'hu', 'Gsyougi_koma01_z_13.png'],
            ['enemy', 'tokinn', 'hu', 'Gsyougi_koma01_z_14.png'],
            ['enemy', 'gyoku', 'gyoku', 'Gsyougi_koma01_z_15.png'],
        ];
        const $selected = 'selected';
        const $placeable = 'placeable';
        const $koma = 'koma';
        const $masu = 'masu';
        const komas = document.querySelectorAll('.koma');
        const masus = document.querySelectorAll('.masu');
        const allyMotigoma = document.querySelector('.ally-motigoma');
        const enemyMotigoma = document.querySelector('.enemy-motigoma');
        let elem = undefined;
        let clickablePos = null;
        let clickedKomaPos;
        let flag = 0;
        komas.forEach(koma => {
            koma.addEventListener('click', () => {
                clickablePos = koma.parentElement;
                if (flag === 0) {
                    clickedKomaPos = koma.parentElement;
                    flag = 1;
                }
                if (elem === koma) {
                    // 同一の駒クリック
                    removePlaceable();
                    flag = 0;
                }
                else {
                    if (elem !== undefined) {
                        if ((elem.classList.contains('ally') && koma.classList.contains('ally'))
                            || (elem.classList.contains('enemy') && koma.classList.contains('enemy'))) {
                            // 味方の駒クリック
                            removePlaceable();
                            flag = 0;
                        }
                        else {
                            // 敵の駒クリック
                            if (clickablePos === null || allyMotigoma === null || enemyMotigoma === null)
                                return;
                            if (koma.classList.contains('enemy')) {
                                if (clickablePos.classList.contains($placeable)) {
                                    clickablePos.appendChild(elem);
                                    allyMotigoma.appendChild(koma);
                                    koma.classList.remove('enemy');
                                    koma.classList.add('ally');
                                    for (let i = 0; i < komaArrs.length / 2; i++) {
                                        if (koma.classList.contains(`${komaArrs[i][1]}`)) {
                                            koma.classList.remove(`${komaArrs[i][1]}`);
                                            koma.classList.add(`${komaArrs[i][2]}`);
                                            koma.classList.add('motigoma');
                                        }
                                    }
                                }
                            }
                            else if (koma.classList.contains('ally')) {
                                if (clickablePos.classList.contains($placeable)) {
                                    clickablePos.appendChild(elem);
                                    enemyMotigoma.appendChild(koma);
                                    koma.classList.remove('ally');
                                    koma.classList.add('enemy');
                                    for (let i = komaArrs.length / 2; i < komaArrs.length; i++) {
                                        if (komaArrs[i][1] === 'ally')
                                            continue;
                                        if (koma.classList.contains(`${komaArrs[i][1]}`)) {
                                            koma.classList.remove(`${komaArrs[i][1]}`);
                                            koma.classList.add(`${komaArrs[i][2]}`);
                                            koma.classList.add('motigoma');
                                        }
                                    }
                                }
                            }
                            if (clickedKomaPos === null)
                                return;
                            komanari(clickablePos, clickedKomaPos);
                            insertKoma();
                            removePlaceable();
                            flag = 0;
                        }
                    }
                }
                if (elem !== undefined) {
                    if (elem.classList.contains($selected)) {
                        elem.classList.remove($selected);
                        elem = undefined;
                        return;
                    }
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
                hu(positionNumber);
                kei(positionNumber);
                ginn(positionNumber);
                kinn(positionNumber);
                uma(positionNumber);
                ryuu(positionNumber);
                gyoku(positionNumber);
                if (elem.classList.contains('motigoma')) {
                    uti();
                }
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
                // マス目以外をクリック
                removePlaceable();
                flag = 0;
                elem.classList.remove($selected);
                elem = undefined;
            }
            else {
                // マス目をクリック
                if (clickablePos.classList.contains($placeable)) {
                    clickablePos.appendChild(elem);
                }
                if (clickedKomaPos === null)
                    return;
                if (!elem.classList.contains('motigoma')) {
                    komanari(clickablePos, clickedKomaPos);
                }
                else {
                    elem.classList.remove('motigoma');
                }
                insertKoma();
                removePlaceable();
                flag = 0;
                elem.classList.remove($selected);
                elem = undefined;
            }
        });
        function insertKoma() {
            komas.forEach(koma => {
                koma.innerHTML = '';
                komaArrs.forEach(komaArr => {
                    if (koma.classList.contains(komaArr[0]) && koma.classList.contains(komaArr[1])) {
                        const img = document.createElement('img');
                        img.src = `./images/${komaArr[3]}`;
                        koma.appendChild(img);
                    }
                });
            });
        }
        insertKoma();
        function removePlaceable() {
            masus.forEach(masu => {
                masu.classList.remove($placeable);
            });
        }
        function hu(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('hu')) {
                return;
            }
            const LDRU = [
                [-1, -1, 0],
                [1, 1, 0]
            ];
            test(positionNumber, elem, LDRU);
        }
        function kyou(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('kyou')) {
                return;
            }
            const LDRU = [
                [-1, -1, 1],
                [1, 1, 1]
            ];
            test(positionNumber, elem, LDRU);
        }
        function kei(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('kei')) {
                return;
            }
            const LDRU = [
                [8, -1, 0], [-12, -1, 0],
                [-8, 1, 0], [12, 1, 0]
            ];
            test(positionNumber, elem, LDRU);
        }
        function ginn(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('ginn')) {
                return;
            }
            const LDRU = [
                [9, -1, 0], [11, -1, 0], [-1, -1, 0], [-11, -1, 0], [-9, -1, 0],
                [-9, 1, 0], [-11, 1, 0], [1, 1, 0], [11, 1, 0], [9, 1, 0]
            ];
            test(positionNumber, elem, LDRU);
        }
        function kinn(positionNumber) {
            if (elem === undefined)
                return;
            if (!(elem.classList.contains('kinn') || elem.classList.contains('nariginn') || elem.classList.contains('narikei') || elem.classList.contains('narikyou') || elem.classList.contains('tokinn'))) {
                return;
            }
            const LDRU = [
                [10, -1, 0], [9, -1, 0], [-1, -1, 0], [-11, -1, 0], [-10, -1, 0], [1, -1, 0],
                [-10, 1, 0], [-9, 1, 0], [1, 1, 0], [11, 1, 0], [10, 1, 0], [-1, 1, 0],
            ];
            test(positionNumber, elem, LDRU);
        }
        function kaku(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('kaku')) {
                return;
            }
            const LDRU = [
                [11, -1, 1], [-9, -1, 1], [-11, -1, 1], [9, -1, 1],
                [11, 1, 1], [-9, 1, 1], [-11, 1, 1], [9, 1, 1]
            ];
            test(positionNumber, elem, LDRU);
        }
        function hisya(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('hisya')) {
                return;
            }
            const LDRU = [
                [10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1],
                [10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
            ];
            test(positionNumber, elem, LDRU);
        }
        function uma(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('uma')) {
                return;
            }
            const LDRU = [
                [11, -1, 1], [-9, -1, 1], [-11, -1, 1], [9, -1, 1],
                [11, 1, 1], [-9, 1, 1], [-11, 1, 1], [9, 1, 1],
                [10, -1, 0], [1, -1, 0], [-10, -1, 0], [-1, -1, 0],
                [10, 1, 0], [1, 1, 0], [-10, 1, 0], [-1, 1, 0],
            ];
            test(positionNumber, elem, LDRU);
        }
        function ryuu(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('ryuu')) {
                return;
            }
            const LDRU = [
                [10, -1, 1], [1, -1, 1], [-10, -1, 1], [-1, -1, 1],
                [10, 1, 1], [1, 1, 1], [-10, 1, 1], [-1, 1, 1],
                [11, -1, 0], [-9, -1, 0], [-11, -1, 0], [9, -1, 0],
                [11, 1, 0], [-9, 1, 0], [-11, 1, 0], [9, 1, 0],
            ];
            test(positionNumber, elem, LDRU);
        }
        function gyoku(positionNumber) {
            if (elem === undefined)
                return;
            if (!elem.classList.contains('gyoku')) {
                return;
            }
            const LDRU = [
                [11, -1, 0], [10, -1, 0], [9, -1, 0], [-1, -1, 0], [-11, -1, 0], [-10, -1, 0], [-9, -1, 0], [1, -1, 0],
                [-11, 1, 0], [-10, 1, 0], [-9, 1, 0], [1, 1, 0], [11, 1, 0], [10, 1, 0], [9, 1, 0], [-1, 1, 0],
            ];
            test(positionNumber, elem, LDRU);
        }
        function uti() {
            masus.forEach(masu => {
                if (masu.children[0] === undefined) {
                    masu.classList.add($placeable);
                }
            });
        }
        function komanari(clickablePos, clickedKomaPos) {
            if (elem === undefined)
                return;
            if (elem.classList.contains('motigoma'))
                return;
            const clickable_y = Number(clickablePos.getAttribute('data-y'));
            const clicked_y = Number(clickedKomaPos.getAttribute('data-y'));
            if (elem.classList.contains('hu')) {
                if (clickable_y >= 2 && clickable_y <= 3 && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickable_y === 1 && elem.classList.contains('ally')) {
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickable_y >= 7 && clickable_y <= 8 && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickable_y === 9 && elem.classList.contains('enemy')) {
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
            }
            else if (elem.classList.contains('kyou')) {
                if (clickable_y >= 2 && clickable_y <= 3 && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickable_y === 1 && elem.classList.contains('ally')) {
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickable_y >= 7 && clickable_y <= 8 && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickable_y === 9 && elem.classList.contains('enemy')) {
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
            }
            else if (elem.classList.contains('kei')) {
                if (clickable_y === 3 && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickable_y >= 2 && clickable_y <= 1 && elem.classList.contains('ally')) {
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickable_y === 7 && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickable_y >= 8 && clickable_y <= 9 && elem.classList.contains('enemy')) {
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
            }
            else if (elem.classList.contains('ginn')) {
                if ((clickable_y <= 3 || (clicked_y === 3 && clickable_y === 4)) && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('ginn');
                    elem.classList.add('nariginn');
                }
                else if ((clickable_y >= 7 || (clicked_y === 7 && clickable_y === 6)) && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('ginn');
                    elem.classList.add('nariginn');
                }
            }
            else if (elem.classList.contains('kaku')) {
                if ((clickable_y <= 3 || clicked_y <= 3) && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kaku');
                    elem.classList.add('uma');
                }
                else if ((clickable_y >= 7 || clicked_y >= 7) && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kaku');
                    elem.classList.add('uma');
                }
            }
            else if (elem.classList.contains('hisya')) {
                if ((clickable_y <= 3 || clicked_y <= 3) && elem.classList.contains('ally')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hisya');
                    elem.classList.add('ryuu');
                }
                else if ((clickable_y >= 7 || clicked_y >= 7) && elem.classList.contains('enemy')) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hisya');
                    elem.classList.add('ryuu');
                }
            }
        }
        function test(positionNumber, elem, LDRU) {
            for (let t = 0; t < LDRU.length; t++) {
                const flag = LDRU[t][0] > 0 ? 1 : -1;
                if (elem !== undefined) {
                    if (elem.classList.contains('ally') && LDRU[t][1] === 1)
                        continue;
                    if (elem.classList.contains('enemy') && LDRU[t][1] === -1)
                        continue;
                }
                for (let i = positionNumber; i * flag <= 44 + 55 * flag; i = i + LDRU[t][0]) {
                    if (i === positionNumber)
                        continue;
                    let posX = Math.floor(i / 10);
                    let posY = Math.floor(i - Math.floor(i / 10) * 10);
                    let masu = document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`);
                    if (masu !== null && elem !== undefined) {
                        if (masu.children[0]) {
                            if ((masu.children[0].classList.contains('ally') && elem.classList.contains('ally'))
                                || (masu.children[0].classList.contains('enemy')) && elem.classList.contains('enemy'))
                                break;
                        }
                        masu.classList.add($placeable);
                        if (masu.children[0])
                            break;
                    }
                    if (document.querySelector(`.masu[data-x="${posX}"][data-y="${posY}"]`) === null)
                        break;
                    if (!LDRU[t][2])
                        break;
                }
            }
        }
    }
}
