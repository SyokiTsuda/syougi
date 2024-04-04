'use strict';

{
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
		
		const $selected: string = 'selected';
		const $koma: string = 'koma';
		const $masu: string = 'masu';
		const komas: NodeListOf<Element> = document.querySelectorAll('.koma');
		let elem: undefined | Element = undefined;
	
		komas.forEach(koma => {
			koma.addEventListener('click', () => {
				if(elem !== undefined) {
					if(elem === koma) {
						console.log('同一の駒をクリックしました。');
					}else {
						console.log('異なる駒をクリックしました。')
					}
					if(elem.classList.contains($selected)) {
						elem.classList.remove($selected);
						return;
					}
				}
				elem = koma;
				elem.classList.add($selected);
				
			});
		});
	
		
	
	
		document.addEventListener('click', e => {
			const clickedElement: HTMLElement = e.target as HTMLElement;
			const clickedParentNode: HTMLElement = clickedElement.parentNode as HTMLElement;
	
			if(!clickedParentNode) return;
	
			if(!elem || clickedParentNode.classList.contains($koma)) return;
	
			if(!clickedElement.classList.contains($masu)) {
				console.log('マス目以外の箇所をクリックしました。');
				elem.classList.remove($selected);
				elem = undefined;
			}else {
				console.log('マス目をクリックしました。');
				elem.classList.remove($selected);
				elem = undefined;
			}
			
		});
	}
}

