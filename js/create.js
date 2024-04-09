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

function createKoma(opponent, name, image) {
	const div = document.createElement('div');
	div.classList.add('koma');
	div.classList.add(opponent);
	div.classList.add(name);
	div.innerHTML += `<img src="./images/${image}">`;
	return div;
}


const container = document.getElementById('container');
container.innerHTML += createban();
function renderKoma(x, y, img, opponent, name) {
	const targetElement = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
	targetElement.appendChild(createKoma(opponent, name, img));
}


renderKoma(5, 9, 'syougi_koma01_z_15.png', 'ally', 'gyoku');
renderKoma(5, 8, 'syougi_koma01_z_06.png', 'ally', 'kinn');
renderKoma(6, 9, 'Gsyougi_koma01_z_06.png', 'enemy', 'kinn');
renderKoma(3, 9, 'Gsyougi_koma01_z_07.png', 'enemy', 'ginn');
renderKoma(5, 5, 'Gsyougi_koma01_z_11.png', 'enemy', 'kyou');
renderKoma(1, 9, 'syougi_koma01_z_11.png', 'ally', 'kyou');
renderKoma(5, 3, 'syougi_koma01_z_02.png', 'ally', 'kaku');
renderKoma(3, 5, 'syougi_koma01_z_13.png', 'ally', 'hu');
renderKoma(9, 3, 'Gsyougi_koma01_z_13.png', 'enemy', 'hu');
renderKoma(5, 7, 'Gsyougi_koma01_z_02.png', 'enemy', 'kaku');
renderKoma(9, 5, 'syougi_koma01_z_04.png', 'ally', 'hisya');
renderKoma(7, 1, 'syougi_koma01_z_02.png', 'ally', 'kaku');
renderKoma(1, 5, 'Gsyougi_koma01_z_04.png', 'enemy', 'hisya');
renderKoma(4, 3, 'Gsyougi_koma01_z_09.png', 'enemy', 'kei');
renderKoma(7, 9, 'syougi_koma01_z_07.png', 'ally', 'ginn');





function yarinaosi(){
	document.location.reload(true);
}

