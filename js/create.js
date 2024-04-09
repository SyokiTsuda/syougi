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
function renderKoma(x, y, opponent, name) {

	const image = getImage(opponent, name);


	const targetElement = document.querySelector(`.masu[data-x="${x}"][data-y="${y}"]`);
	targetElement.appendChild(createKoma(opponent, name, image));
	function getImage(opponent, name) {
		if(opponent === 'ally') {
			if(name === 'ou') {
				return 'syougi_koma01_z_01.png';
			}else if(name === 'kaku') {
				return 'syougi_koma01_z_02.png';
			}else if(name === 'uma') {
				return 'syougi_koma01_z_03.png';
			}else if(name === 'hisya') {
				return 'syougi_koma01_z_04.png';
			}else if(name === 'ryuu') {
				return 'syougi_koma01_z_05.png';
			}else if(name === 'kinn') {
				return 'syougi_koma01_z_06.png';
			}else if(name === 'ginn') {
				return 'syougi_koma01_z_07.png';
			}else if(name === 'nariginn') {
				return 'syougi_koma01_z_08.png';
			}else if(name === 'kei') {
				return 'syougi_koma01_z_09.png';
			}else if(name === 'narikei') {
				return 'syougi_koma01_z_10.png';
			}else if(name === 'kyou') {
				return 'syougi_koma01_z_11.png';
			}else if(name === 'narikyou') {
				return 'syougi_koma01_z_12.png';
			}else if(name === 'hu') {
				return 'syougi_koma01_z_13.png';
			}else if(name === 'tokinn') {
				return 'syougi_koma01_z_14.png';
			}else if(name === 'gyoku') {
				return 'syougi_koma01_z_15.png';
			}
		}else if(opponent === 'enemy') {
			if(name === 'ou') {
				return 'Gsyougi_koma01_z_01.png';
			}else if(name === 'kaku') {
				return 'Gsyougi_koma01_z_02.png';
			}else if(name === 'uma') {
				return 'Gsyougi_koma01_z_03.png';
			}else if(name === 'hisya') {
				return 'Gsyougi_koma01_z_04.png';
			}else if(name === 'ryuu') {
				return 'Gsyougi_koma01_z_05.png';
			}else if(name === 'kinn') {
				return 'Gsyougi_koma01_z_06.png';
			}else if(name === 'ginn') {
				return 'Gsyougi_koma01_z_07.png';
			}else if(name === 'nariginn') {
				return 'Gsyougi_koma01_z_08.png';
			}else if(name === 'kei') {
				return 'Gsyougi_koma01_z_09.png';
			}else if(name === 'narikei') {
				return 'Gsyougi_koma01_z_10.png';
			}else if(name === 'kyou') {
				return 'Gsyougi_koma01_z_11.png';
			}else if(name === 'narikyou') {
				return 'Gsyougi_koma01_z_12.png';
			}else if(name === 'hu') {
				return 'Gsyougi_koma01_z_13.png';
			}else if(name === 'tokinn') {
				return 'Gsyougi_koma01_z_14.png';
			}else if(name === 'gyoku') {
				return 'Gsyougi_koma01_z_15.png';
			}
		}
	}
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

