'use strict';
{
    var $selected_1 = 'selected';
    var $koma_1 = 'koma';
    var $masu_1 = 'masu';
    var komas = document.querySelectorAll('.koma');
    var elem_1 = undefined;
    komas.forEach(function (koma) {
        koma.addEventListener('click', function () {
            if (elem_1 !== undefined) {
                if (elem_1 === koma) {
                    console.log('同一の駒をクリックしました。');
                }
                else {
                    console.log('異なる駒をクリックしました。');
                }
                if (elem_1.classList.contains($selected_1)) {
                    elem_1.classList.remove($selected_1);
                    return;
                }
            }
            elem_1 = koma;
            elem_1.classList.add($selected_1);
        });
    });
    document.addEventListener('click', function (e) {
        var clickedElement = e.target;
        var clickedParentNode = clickedElement.parentNode;
        if (!clickedParentNode)
            return;
        if (!elem_1 || clickedParentNode.classList.contains($koma_1))
            return;
        if (!clickedElement.classList.contains($masu_1)) {
            console.log('マス目以外の箇所をクリックしました。');
            elem_1.classList.remove($selected_1);
            elem_1 = undefined;
        }
        else {
            console.log('マス目をクリックしました。');
            elem_1.classList.remove($selected_1);
            elem_1 = undefined;
        }
    });
}
