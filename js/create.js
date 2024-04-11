function createban(){

	let gridCell = `<div class="ban">`;

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

function createKoma(opponent, name) {
	const div = document.createElement('div');
	div.classList.add('koma');
	div.classList.add(opponent);
	div.classList.add(name);
	return div;
}


const container = document.getElementById('container');
container.innerHTML += createban();
function renderKoma(x, y, opponent, name) {

	const targetElement = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
	targetElement.appendChild(createKoma(opponent, name));
	
}


renderKoma(5, 9, 'ally', 'gyoku');
renderKoma(5, 8, 'ally', 'kinn');
renderKoma(6, 9, 'enemy', 'kinn');
renderKoma(3, 9, 'enemy', 'ginn');
renderKoma(5, 5, 'enemy', 'kyou');
renderKoma(1, 9, 'ally', 'kyou');
renderKoma(5, 3, 'ally', 'kaku');
renderKoma(3, 5, 'ally', 'hu');
renderKoma(9, 3, 'enemy', 'hu');
renderKoma(5, 7, 'enemy', 'kaku');
renderKoma(9, 5, 'ally', 'hisya');
renderKoma(7, 1, 'ally', 'kaku');
renderKoma(1, 5, 'enemy', 'hisya');
renderKoma(4, 3, 'enemy', 'kei');
renderKoma(7, 9, 'ally', 'ginn');
renderKoma(1, 1, 'ally', 'uma');
renderKoma(9, 9, 'enemy', 'ryuu');





function yarinaosi(){
	document.location.reload(true);
}

