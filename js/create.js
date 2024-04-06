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
renderKoma(6, 9, 'syougi_koma01_z_06.png', 'ally', 'kinn');
renderKoma(3, 9, 'syougi_koma01_z_07.png', 'ally', 'ginn');
renderKoma(5, 5, 'Gsyougi_koma01_z_11.png', 'enemy', 'kyou')
renderKoma(7, 5, 'Gsyougi_koma01_z_11.png', 'enemy', 'kyou')
renderKoma(5, 3, 'syougi_koma01_z_02.png', 'ally', 'kaku')
renderKoma(3, 5, 'syougi_koma01_z_13.png', 'ally', 'hu')
// Gsyougi_koma01_z_11.png

// $(function() {
// 	$('<p class="koma gyoku koma1 tebann"></p>').prependTo('#masu1_95');
// 	$('<p class="koma kinn koma1 tebann"></p>').prependTo('#masu1_94');
// 	$('<p class="koma kinn koma1 tebann"></p>').prependTo('#masu1_96');
// 	$('<p class="koma ginn koma1 tebann"></p>').prependTo('#masu1_93');
// 	$('<p class="koma ginn koma1 tebann"></p>').prependTo('#masu1_97');
// 	$('<p class="koma kei koma1 tebann"></p>').prependTo('#masu1_92');
// 	$('<p class="koma kei koma1 tebann"></p>').prependTo('#masu1_98');
// 	$('<p class="koma kyou koma1 tebann"></p>').prependTo('#masu1_91');
// 	$('<p class="koma kyou koma1 tebann"></p>').prependTo('#masu1_99');
// 	$('<p class="koma kaku koma1 tebann"></p>').prependTo('#masu1_82');
// 	$('<p class="koma hisya koma1 tebann"></p>').prependTo('#masu1_88');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_71');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_72');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_73');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_74');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_75');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_76');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_77');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_78');
// 	$('<p class="koma hu koma1 tebann"></p>').prependTo('#masu1_79');
	
// 	$('<p class="koma gyoku koma2"></p>').prependTo('#masu1_15');
// 	$('<p class="koma kinn koma2"></p>').prependTo('#masu1_14');
// 	$('<p class="koma kinn koma2"></p>').prependTo('#masu1_16');
// 	$('<p class="koma ginn koma2"></p>').prependTo('#masu1_13');
// 	$('<p class="koma ginn koma2"></p>').prependTo('#masu1_17');
// 	$('<p class="koma kei koma2"></p>').prependTo('#masu1_12');
// 	$('<p class="koma kei koma2"></p>').prependTo('#masu1_18');
// 	$('<p class="koma kyou koma2"></p>').prependTo('#masu1_11');
// 	$('<p class="koma kyou koma2"></p>').prependTo('#masu1_19');
// 	$('<p class="koma kaku koma2"></p>').prependTo('#masu1_28');
// 	$('<p class="koma hisya koma2"></p>').prependTo('#masu1_22');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_31');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_32');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_33');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_34');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_35');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_36');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_37');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_38');
// 	$('<p class="koma hu koma2"></p>').prependTo('#masu1_39');
	
	
// });



function yarinaosi(){
	document.location.reload(true);
}

