'use strict';
{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const $selected = 'selected';
        const $koma = 'koma';
        const $masu = 'masu';
        const komas = document.querySelectorAll('.koma');
        let elem = undefined;
        komas.forEach(koma => {
            koma.addEventListener('click', () => {
                if (elem !== undefined) {
                    if (elem === koma) {
                        console.log('同一の駒をクリックしました。');
                    }
                    else {
                        // ココ
                        console.log('異なる駒をクリックしました。');
                    }
                    if (elem.classList.contains($selected)) {
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
            const clickedElement = e.target;
            const clickedParentNode = clickedElement.parentNode;
            if (!clickedParentNode)
                return;
            if (!elem || clickedParentNode.classList.contains($koma))
                return;
            if (!clickedElement.classList.contains($masu)) {
                console.log('駒を持っている状態でマス目以外の箇所をクリックしました。');
                elem.classList.remove($selected);
                elem = undefined;
            }
            else {
                console.log('駒を持っている状態でマス目をクリックしました。');
                // ココ
                elem.classList.remove($selected);
                elem = undefined;
            }
        });
    }
}
