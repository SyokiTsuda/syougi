'use strict';
{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        function createban() {
            let gridCell = `<div class="ban">`;
            for (let i = 1; i <= 9; i++) {
                gridCell += `<div class="paragraph">`;
                for (let t = 9; t >= 1; t--) {
                    gridCell += `<div class="masu" data-x="${t}" data-y="${i}"></div>`;
                }
                gridCell += `</div>`;
            }
            gridCell += `</div>`;
            return gridCell;
        }
        const container = document.getElementById('container');
        if (container !== null) {
            container.innerHTML += createban();
            renderKoma(1, 5, 9, 'ally', 'gyoku');
            renderKoma(7, 6, 9, 'ally', 'kinn');
            renderKoma(8, 4, 9, 'ally', 'kinn');
            renderKoma(11, 7, 9, 'ally', 'ginn');
            renderKoma(12, 3, 9, 'ally', 'ginn');
            renderKoma(15, 8, 9, 'ally', 'kei');
            renderKoma(16, 2, 9, 'ally', 'kei');
            renderKoma(19, 9, 9, 'ally', 'kyou');
            renderKoma(20, 1, 9, 'ally', 'kyou');
            renderKoma(5, 8, 8, 'ally', 'kaku');
            renderKoma(3, 2, 8, 'ally', 'hisya');
            renderKoma(23, 5, 7, 'ally', 'hu');
            renderKoma(24, 6, 7, 'ally', 'hu');
            renderKoma(25, 4, 7, 'ally', 'hu');
            renderKoma(26, 7, 7, 'ally', 'hu');
            renderKoma(27, 3, 7, 'ally', 'hu');
            renderKoma(28, 8, 7, 'ally', 'hu');
            renderKoma(29, 2, 7, 'ally', 'hu');
            renderKoma(30, 9, 7, 'ally', 'hu');
            renderKoma(31, 1, 7, 'ally', 'hu');
            renderKoma(2, 5, 1, 'enemy', 'ou');
            renderKoma(9, 4, 1, 'enemy', 'kinn');
            renderKoma(10, 6, 1, 'enemy', 'kinn');
            renderKoma(13, 3, 1, 'enemy', 'ginn');
            renderKoma(14, 7, 1, 'enemy', 'ginn');
            renderKoma(17, 2, 1, 'enemy', 'kei');
            renderKoma(18, 8, 1, 'enemy', 'kei');
            renderKoma(21, 1, 1, 'enemy', 'kyou');
            renderKoma(22, 9, 1, 'enemy', 'kyou');
            renderKoma(6, 2, 2, 'enemy', 'kaku');
            renderKoma(4, 8, 2, 'enemy', 'hisya');
            renderKoma(32, 5, 3, 'enemy', 'hu');
            renderKoma(33, 4, 3, 'enemy', 'hu');
            renderKoma(34, 6, 3, 'enemy', 'hu');
            renderKoma(35, 3, 3, 'enemy', 'hu');
            renderKoma(36, 7, 3, 'enemy', 'hu');
            renderKoma(37, 2, 3, 'enemy', 'hu');
            renderKoma(38, 8, 3, 'enemy', 'hu');
            renderKoma(39, 1, 3, 'enemy', 'hu');
            renderKoma(40, 9, 3, 'enemy', 'hu');
        }
        const komaArrs = [
            ['ou', 'ou'],
            ['kaku', 'kaku'],
            ['uma', 'kaku'],
            ['hisya', 'hisya'],
            ['ryuu', 'hisya'],
            ['kinn', 'kinn'],
            ['ginn', 'ginn'],
            ['nariginn', 'ginn'],
            ['kei', 'kei'],
            ['narikei', 'kei'],
            ['kyou', 'kyou'],
            ['narikyou', 'kyou'],
            ['hu', 'hu'],
            ['tokinn', 'hu'],
            ['gyoku', 'gyoku'],
        ];
        const testkomaArrs = {
            'ally': [
                ['ou', 'syougi_koma01_z_01.png'],
                ['kaku', 'syougi_koma01_z_02.png'],
                ['uma', 'syougi_koma01_z_03.png'],
                ['hisya', 'syougi_koma01_z_04.png'],
                ['ryuu', 'syougi_koma01_z_05.png'],
                ['kinn', 'syougi_koma01_z_06.png'],
                ['ginn', 'syougi_koma01_z_07.png'],
                ['nariginn', 'syougi_koma01_z_08.png'],
                ['kei', 'syougi_koma01_z_09.png'],
                ['narikei', 'syougi_koma01_z_10.png'],
                ['kyou', 'syougi_koma01_z_11.png'],
                ['narikyou', 'syougi_koma01_z_12.png'],
                ['hu', 'syougi_koma01_z_13.png'],
                ['tokinn', 'syougi_koma01_z_14.png'],
                ['gyoku', 'syougi_koma01_z_15.png'],
            ],
            'enemy': [
                ['ou', 'Gsyougi_koma01_z_01.png'],
                ['kaku', 'Gsyougi_koma01_z_02.png'],
                ['uma', 'Gsyougi_koma01_z_03.png'],
                ['hisya', 'Gsyougi_koma01_z_04.png'],
                ['ryuu', 'Gsyougi_koma01_z_05.png'],
                ['kinn', 'Gsyougi_koma01_z_06.png'],
                ['ginn', 'Gsyougi_koma01_z_07.png'],
                ['nariginn', 'Gsyougi_koma01_z_08.png'],
                ['kei', 'Gsyougi_koma01_z_09.png'],
                ['narikei', 'Gsyougi_koma01_z_10.png'],
                ['kyou', 'Gsyougi_koma01_z_11.png'],
                ['narikyou', 'Gsyougi_koma01_z_12.png'],
                ['hu', 'Gsyougi_koma01_z_13.png'],
                ['tokinn', 'Gsyougi_koma01_z_14.png'],
                ['gyoku', 'Gsyougi_koma01_z_15.png'],
            ]
        };
        const testKomas = Object.entries(testkomaArrs);
        const $selected = 'selected';
        const $placeable = 'placeable';
        const $koma = 'koma';
        const $masu = 'masu';
        const $tebann = 'tebann';
        const $motigoma = 'motigoma';
        const komas = document.querySelectorAll('.koma');
        const masus = document.querySelectorAll('.masu');
        const komaoto = document.querySelector('#komaoto');
        let elem = undefined;
        let clickToPos = null;
        let clickFromPos = null;
        if (komaoto !== null)
            komaoto.volume = 1;
        komas.forEach(koma => {
            if (koma.classList.contains('ally')) {
                koma.classList.add($tebann);
            }
            koma.addEventListener('click', () => {
                if (elem !== undefined) {
                    clickToPos = koma.parentElement;
                    // 敵駒クリック処理
                    if (clickToPos !== null && clickFromPos !== null && elem !== koma) {
                        if (clickToPos.classList.contains($placeable)) {
                            komaArrs.forEach(komaArr => {
                                if (koma.classList.contains(komaArr[0])) {
                                    koma.classList.remove(komaArr[0]);
                                    koma.classList.add(komaArr[1]);
                                }
                            });
                            toMotigoma(koma, 'ally', 'enemy');
                            toMotigoma(koma, 'enemy', 'ally');
                            koma.classList.add($motigoma);
                            clickToPos.appendChild(elem);
                            komanari(clickToPos, clickFromPos);
                            insertKoma();
                            changeTebann(komas);
                            if (komaoto !== null)
                                komaoto.play();
                        }
                    }
                    removePlaceable(masus);
                    elem.classList.remove($selected);
                    elem = undefined;
                    return;
                }
                else {
                    if (!koma.classList.contains($tebann))
                        return;
                    elem = koma;
                    if (elem.parentElement === null)
                        return;
                    const posX = Number(elem.parentElement.getAttribute('data-x'));
                    const posY = Number(elem.parentElement.getAttribute('data-y'));
                    getMovablePosition(posX, posY);
                    if (elem.classList.contains($motigoma))
                        uti();
                    elem.classList.add($selected);
                    clickFromPos = elem.parentElement;
                }
            });
        });
        document.addEventListener('click', e => {
            clickToPos = e.target;
            const clickToPosdParentNode = clickToPos.parentElement;
            if (clickToPosdParentNode === null)
                return;
            if (!elem || clickToPosdParentNode.classList.contains($koma))
                return;
            //マス目をクリック
            if (clickToPos.classList.contains($masu)) {
                if (clickFromPos === null)
                    return;
                if (clickToPos.classList.contains($placeable)) {
                    clickToPos.appendChild(elem);
                    komanari(clickToPos, clickFromPos);
                    if (komaoto !== null)
                        komaoto.play();
                    elem.classList.remove($motigoma);
                    changeTebann(komas);
                    insertKoma();
                }
            }
            elem.classList.remove($selected);
            elem = undefined;
            removePlaceable(masus);
        });
        insertKoma();
        function createKoma(id, opponent, name) {
            const div = document.createElement('div');
            div.classList.add('koma');
            div.classList.add(opponent);
            div.classList.add(name);
            div.setAttribute('data-id', `${id}`);
            return div;
        }
        function renderKoma(id, x, y, opponent, name) {
            const targetElement = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
            if (targetElement !== null) {
                targetElement.appendChild(createKoma(id, opponent, name));
            }
        }
        function changeTebann(komas) {
            komas.forEach(koma => {
                koma.classList.toggle($tebann);
            });
        }
        function insertKoma() {
            komas.forEach(koma => {
                koma.innerHTML = '';
                testKomas.forEach((testKoma) => {
                    if (koma.classList.contains(testKoma[0])) {
                        testKoma[1].forEach((e) => {
                            if (koma.classList.contains(e[0])) {
                                const img = document.createElement('img');
                                img.src = `./images/${e[1]}`;
                                koma.appendChild(img);
                            }
                        });
                    }
                });
            });
        }
        function removePlaceable(masus) {
            masus.forEach(masu => {
                masu.classList.remove($placeable);
            });
        }
        function getMovablePosition(posX, posY) {
            const LDRU = {
                'hu': {
                    'ally': [[0, -1, false]],
                    'enemy': [[0, 1, false]]
                },
                'kyou': {
                    'ally': [[0, -1, true]],
                    'enemy': [[0, 1, true]]
                },
                'kei': {
                    'ally': [[1, -2, false], [-1, -2, false]],
                    'enemy': [[-1, 2, false], [1, 2, false]]
                },
                'ginn': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 1, false], [-1, 1, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, -1, false], [1, -1, false], [1, 1, false]]
                },
                'kinn': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [0, -1, false], [1, 0, false], [1, 1, false]]
                },
                'nariginn': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [0, -1, false], [1, 0, false], [1, 1, false]]
                },
                'narikei': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [0, -1, false], [1, 0, false], [1, 1, false]]
                },
                'narikyou': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [0, -1, false], [1, 0, false], [1, 1, false]]
                },
                'tokinn': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [0, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [0, -1, false], [1, 0, false], [1, 1, false]]
                },
                'kaku': {
                    'ally': [[1, -1, true], [1, 1, true], [-1, 1, true], [-1, -1, true]],
                    'enemy': [[-1, 1, true], [-1, -1, true], [1, -1, true], [1, 1, true]]
                },
                'hisya': {
                    'ally': [[1, 0, true], [0, 1, true], [-1, 0, true], [0, -1, true]],
                    'enemy': [[-1, 0, true], [0, -1, true], [1, 0, true], [0, 1, true]]
                },
                'uma': {
                    'ally': [[1, -1, true], [1, 1, true], [-1, 1, true], [-1, -1, true], [1, 0, false], [0, 1, false], [-1, 0, false], [0, -1, false]],
                    'enemy': [[-1, 1, true], [-1, -1, true], [1, -1, true], [1, 1, true], [-1, 0, false], [0, -1, false], [1, 0, false], [0, 1, false]]
                },
                'ryuu': {
                    'ally': [[1, 0, true], [0, 1, true], [-1, 0, true], [0, -1, true], [1, -1, false], [1, 1, false], [-1, 1, false], [-1, -1, false]],
                    'enemy': [[-1, 0, true], [0, -1, true], [1, 0, true], [0, 1, true], [-1, 1, false], [-1, -1, false], [1, -1, false], [1, 1, false]]
                },
                'gyoku': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [1, 1, false], [0, 1, false], [-1, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [-1, -1, false], [0, -1, false], [1, -1, false], [1, 0, false], [1, 1, false]]
                },
                'ou': {
                    'ally': [[0, -1, false], [1, -1, false], [1, 0, false], [1, 1, false], [0, 1, false], [-1, 1, false], [-1, 0, false], [-1, -1, false]],
                    'enemy': [[0, 1, false], [-1, 1, false], [-1, 0, false], [-1, -1, false], [0, -1, false], [1, -1, false], [1, 0, false], [1, 1, false]]
                },
            };
            const entries = Object.entries(LDRU);
            entries.forEach(e => {
                if (elem !== undefined) {
                    if (elem.classList.contains(e[0])) {
                        komaMove(posX, posY, elem, e[1]);
                    }
                }
            });
        }
        function uti() {
            const utiArr = [
                ['ally',
                    [
                        ['hu', 2, 1, []],
                        ['kyou', 2, 1, []],
                        ['kei', 3, 1, []],
                    ]
                ],
                ['enemy',
                    [
                        ['hu', 8, -1, []],
                        ['kyou', 8, -1, []],
                        ['kei', 7, -1, []],
                    ]
                ],
            ];
            komas.forEach(koma => {
                utiArr.forEach((e) => {
                    if (koma.classList.contains(e[0]) && koma.classList.contains(e[1][0][0])) {
                        if (koma.parentElement !== null) {
                            if (!koma.classList.contains($motigoma)) {
                                const posX = Number(koma.parentElement.getAttribute('data-x'));
                                e[1][0][3].push(posX);
                            }
                        }
                    }
                });
            });
            masus.forEach(masu => {
                if (masu.children[0] === undefined && elem !== undefined) {
                    masu.classList.add($placeable);
                    const posY = Number(masu.getAttribute('data-y'));
                    const posX = Number(masu.getAttribute('data-x'));
                    getUtiablePos(elem, masu, utiArr, posY, posX);
                }
            });
        }
        function toMotigoma(element, classToRemove, classToAdd) {
            if (element.classList.contains($tebann))
                return;
            const motigomaArea = document.querySelector(`.${classToAdd}.motigomaArea`);
            if (element.classList.contains(classToRemove) && motigomaArea !== null) {
                element.classList.remove(classToRemove);
                element.classList.add(classToAdd);
                element.classList.add($tebann);
                motigomaArea.appendChild(element);
            }
        }
        function getUtiablePos(elem, masu, utiArr, posY, posX) {
            utiArr.forEach((es) => {
                es[1].forEach((e) => {
                    if (elem !== undefined) {
                        if (elem.classList.contains(es[0]) && elem.classList.contains(e[0])) {
                            if (!(posY * e[2] >= e[1] * e[2])) {
                                masu.classList.remove($placeable);
                            }
                            if (e[0] === 'hu' && e[3].indexOf(posX) !== -1) {
                                masu.classList.remove($placeable);
                            }
                        }
                    }
                });
            });
        }
        function komanari(clickToPos, clickFromPos) {
            if (elem === undefined)
                return;
            if (elem.classList.contains('motigoma'))
                return;
            const clickToPos_y = Number(clickToPos.getAttribute('data-y'));
            const clickFromPos_y = Number(clickFromPos.getAttribute('data-y'));
            if (elem.classList.contains('hu')) {
                if (clickToPos_y >= 2 && clickToPos_y <= 3 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickToPos_y === 1 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickToPos_y >= 7 && clickToPos_y <= 8 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
                else if (clickToPos_y === 9 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('hu');
                    elem.classList.add('tokinn');
                }
            }
            else if (elem.classList.contains('kyou')) {
                if (clickToPos_y >= 2 && clickToPos_y <= 3 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickToPos_y === 1 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickToPos_y >= 7 && clickToPos_y <= 8 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
                else if (clickToPos_y === 9 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('kyou');
                    elem.classList.add('narikyou');
                }
            }
            else if (elem.classList.contains('kei')) {
                if (clickToPos_y === 3 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickToPos_y <= 2 && clickToPos_y >= 1 && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickToPos_y === 7 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
                else if (clickToPos_y >= 8 && clickToPos_y <= 9 && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    elem.classList.remove('kei');
                    elem.classList.add('narikei');
                }
            }
            else if (elem.classList.contains('ginn')) {
                if ((clickToPos_y <= 3 || (clickFromPos_y === 3 && clickToPos_y === 4)) && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('ginn');
                    elem.classList.add('nariginn');
                }
                else if ((clickToPos_y >= 7 || (clickFromPos_y === 7 && clickToPos_y === 6)) && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('ginn');
                    elem.classList.add('nariginn');
                }
            }
            else if (elem.classList.contains('kaku')) {
                if ((clickToPos_y <= 3 || clickFromPos_y <= 3) && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kaku');
                    elem.classList.add('uma');
                }
                else if ((clickToPos_y >= 7 || clickFromPos_y >= 7) && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('kaku');
                    elem.classList.add('uma');
                }
            }
            else if (elem.classList.contains('hisya')) {
                if ((clickToPos_y <= 3 || clickFromPos_y <= 3) && elem.classList.contains('ally') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hisya');
                    elem.classList.add('ryuu');
                }
                else if ((clickToPos_y >= 7 || clickFromPos_y >= 7) && elem.classList.contains('enemy') && clickToPos.classList.contains($placeable)) {
                    if (!confirm('成りますか?'))
                        return;
                    elem.classList.remove('hisya');
                    elem.classList.add('ryuu');
                }
            }
        }
        function komaMove(posX, posY, elem, LDRU) {
            for (let t = 0; t < Object.keys(LDRU).length; t++) {
                if (elem.classList.contains(Object.keys(LDRU)[t])) {
                    for (let i = 0; i < LDRU[Object.keys(LDRU)[t]].length; i++) {
                        for (let x = posX, y = posY; x * LDRU[Object.keys(LDRU)[t]][i][0] <= 4 + 5 * LDRU[Object.keys(LDRU)[t]][i][0] || y * LDRU[Object.keys(LDRU)[t]][i][1] <= 4 + 5 * LDRU[Object.keys(LDRU)[t]][i][1]; x = x + LDRU[Object.keys(LDRU)[t]][i][0], y = y + LDRU[Object.keys(LDRU)[t]][i][1]) {
                            if (x === posX && y === posY)
                                continue;
                            const masu = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
                            if (masu === null)
                                break;
                            if (masu.children[0]) {
                                if (masu.children[0].classList.contains(Object.keys(LDRU)[0 + t]))
                                    break;
                            }
                            masu.classList.add($placeable);
                            if (masu.children[0]) {
                                if (masu.children[0].classList.contains(Object.keys(LDRU)[1 - t]))
                                    break;
                            }
                            if (!LDRU[Object.keys(LDRU)[0]][i][2])
                                break;
                        }
                    }
                }
            }
        }
    }
}
