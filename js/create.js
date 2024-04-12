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


