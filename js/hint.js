var hintFlag = 0
$(function() {
	$(document).on('click', '#btn1', function() {
		if(hintFlag==0) {
			$(this).addClass("hintDisplay").removeClass("noHintDisplay");
			hintFlag = 1;
		}else {
			$(this).addClass("noHintDisplay").removeClass("hintDisplay");
			hintFlag = 0;
		}
	});
});


