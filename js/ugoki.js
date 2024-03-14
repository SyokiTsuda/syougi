$(function(){
	var $selectedKoma = null;
	var dropnum;
	var datanum;
	var ugokiArray = [];
	var utiArray = [];
	var komaArray = [];
	var ans;
	var flag=0;
	
	$(document).on('click', '.tebann', function(){
		$selectedKoma = $(this);
		utiArray = [];
		datanum = $selectedKoma.parent().data('masu1');
		if(($('.droppable').length < 1) && $selectedKoma.parent().parent().hasClass("ban") && flag==0) {
			gyokuMove('gyoku koma1'), hisyaMove('hisya koma1'), kakuMove('kaku koma1'), kinnMove('kinn koma1'),
			ginnMove('ginn koma1'), keiMove('kei koma1'), kyouMove('kyou koma1'), huMove('hu koma1'), tokinnMove('tokinn koma1'),
			narikyouMove('narikyou koma1'), narikeiMove('narikei koma1'), nariginnMove('nariginn koma1'), ryuuMove('ryuu koma1'), umaMove('uma koma1');
		}else if(($('.droppable').length < 1) && $selectedKoma.parent().parent().hasClass("ban") && flag==1) {
			gyokuMove('gyoku koma2'), hisyaMove('hisya koma2'), kakuMove('kaku koma2'), kinnMove('kinn koma2'),
			ginnMove('ginn koma2'), keiMove('kei koma2'), kyouMove('kyou koma2'), huMove('hu koma2'), tokinnMove('tokinn koma2'),
			narikyouMove('narikyou koma2'), narikeiMove('narikei koma2'), nariginnMove('nariginn koma2'), ryuuMove('ryuu koma2'), umaMove('uma koma2');
		}else if(($('.droppable').length < 1) && $selectedKoma.parent().parent().hasClass("motigoma1") && flag==0) {
			uti('gyoku koma1'), uti('hisya koma1'), uti('kaku koma1'), uti('kinn koma1'), uti('ginn koma1'), uti('kei koma1'), uti('kyou koma1'), uti('hu koma1');
		}else if(($('.droppable').length < 1) && $selectedKoma.parent().parent().hasClass("motigoma2") && flag==1) {
			uti('gyoku koma2'), uti('hisya koma2'), uti('kaku koma2'), uti('kinn koma2'), uti('ginn koma2'), uti('kei koma2'), uti('kyou koma2'), uti('hu koma2');
		}
		
		
		//もし選択された駒をクリックしたら選択解除する、そうではなく選択状態のときに他の駒をクリックしたら選択が入れ替わる
	    if ($selectedKoma.hasClass('droppable')) {
	    	hintNonDisplay();
	    	$selectedKoma.removeClass("droppable");
	    }else {
	    	hintDisplay();
	    	$selectedKoma.addClass("droppable");
	    	if($('.droppable').length > 1) {
	    		hintNonDisplay();
	    		$('.tebann').removeClass("droppable");
	    	}
	    }
	});

	//駒が選択状態のときに駒がない升目をクリックすると駒が移動して選択解除する
	$(document).on('click', '.masu1:not(:has(.tebann))', function(){
		dropnum = $(this).data('masu1');
	    if($('.droppable').length > 0) {
	    	if((($.inArray(dropnum, ugokiArray))>-1) && $selectedKoma.parent().hasClass("masu1")) {
	    		$(this).prepend($selectedKoma);
	    		hintNonDisplay();
		    	$selectedKoma.removeClass("droppable").addClass("dropped");
		    	komanari(['hisya','ryuu'], ['kaku', 'uma'], ['ginn', 'nariginn'], ['kei', 'narikei'], ['kyou', 'narikyou'], ['hu', 'tokinn']);
		    	document.getElementById("komaoto").play();
		    	$selectedKoma.removeClass("dropped");
		    	$selectedKoma = null;
		    	
		    	if(($('.koma1').hasClass("tebann")) && flag==0) {
		    		$('.koma1').removeClass("tebann");
		    		$('.koma2').addClass("tebann");
		    		flag=1;
		    	}else if(($('.koma2').hasClass("tebann")) && flag==1) {
		    		$('.koma2').removeClass("tebann");
		    		$('.koma1').addClass("tebann");
		    		flag=0;
		    	}
		    	var ks = $(this).children();
		    	var len = ks.length;
		    	var k = ks.eq(1);
		    	
		    	function kaesi(torigoma, nomal, ura) {
		    		if(torigoma.hasClass(ura)) {
		    			torigoma.addClass(nomal).removeClass(ura);
		    		}
		    	}
		    	
		    	if(len==2) {
		    		if(k.hasClass('koma1')) {
		    			kaesi(k, "kaku", "uma");
		    			kaesi(k, "hisya", "ryuu");
		    			kaesi(k, "ginn", "nariginn");
		    			kaesi(k, "kei", "narikei");
		    			kaesi(k, "kyou", "narikyou");
		    			kaesi(k, "hu", "tokinn");
		    			if(k.hasClass("hu")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.hu2'));
		    			}else if(k.hasClass("kyou")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.kyou2'));
		    			}else if(k.hasClass("kei")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.kei2'));
		    			}else if(k.hasClass("ginn")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.ginn2'));
		    			}else if(k.hasClass("kinn")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.kinn2'));
		    			}else if(k.hasClass("kaku")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.kaku2'));
		    			}else if(k.hasClass("hisya")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.hisya2'));
		    			}else if(k.hasClass("gyoku")) {
		    				k.removeClass('koma1').removeClass("tebann").addClass('koma2').prependTo($('.gyoku2'));
		    			}
		    			
		    		}else if(k.hasClass('koma2')) {
		    			kaesi(k, "kaku", "uma");
		    			kaesi(k, "hisya", "ryuu");
		    			kaesi(k, "ginn", "nariginn");
		    			kaesi(k, "kei", "narikei");
		    			kaesi(k, "kyou", "narikyou");
		    			kaesi(k, "hu", "tokinn");
		    			if(k.hasClass("hu")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.hu1'));
		    			}else if(k.hasClass("kyou")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.kyou1'));
		    			}else if(k.hasClass("kei")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.kei1'));
		    			}else if(k.hasClass("ginn")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.ginn1'));
		    			}else if(k.hasClass("kinn")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.kinn1'));
		    			}else if(k.hasClass("kaku")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.kaku1'));
		    			}else if(k.hasClass("hisya")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.hisya1'));
		    			}else if(k.hasClass("gyoku")) {
		    				k.removeClass('koma2').removeClass("tebann").addClass('koma1').prependTo($('.gyoku1'));
		    			}
		    		}
		    	}
		    	
		    	
	    	}else if((($.inArray(dropnum, utiArray))>-1) && $selectedKoma.parent().parent().hasClass("motigoma")) {
	    		$(this).append($selectedKoma);
	    		hintNonDisplay();
	    		$selectedKoma.removeClass("droppable").addClass("dropped");
	    		document.getElementById("komaoto").play();
		    	$selectedKoma.removeClass("dropped");
		    	$selectedKoma = null;
		    	if(($('.koma1').hasClass("tebann")) && flag==0) {
		    		$('.koma1').removeClass("tebann");
		    		$('.koma2').addClass("tebann");
		    		flag=1;
		    	}else if(($('.koma2').hasClass("tebann")) && flag==1) {
		    		$('.koma2').removeClass("tebann");
		    		$('.koma1').addClass("tebann");
		    		flag=0;
		    	}
	    	}else {
	    		hintDisplay();
	    		$selectedKoma.addClass("droppable");
	    	}
	    }
	    
	    
	    function save(basyo, koma) {
	    	var cnt = 0;
	    	cnt = $(basyo+'>'+koma).length;
    		for(var i=1; i<$(basyo+'>'+koma).length; i++) {
    			$(basyo+'>'+koma+':eq('+i+')').hide();
    		}
    		$(basyo+'>'+koma+':eq(0)').show();
    		if(cnt>0) {
    			$(basyo+'> span').text(cnt);
    		}else if(cnt==0) {
    			$(basyo+'> span').text('');
    		}
	    }
	    
	    save(".hu1", ".hu");
	    save(".kyou1", ".kyou");
	    save(".kei1", ".kei");
	    save(".ginn1", ".ginn");
	    save(".kinn1", ".kinn");
	    save(".kaku1", ".kaku");
	    save(".hisya1", ".hisya");
	    save(".gyoku1", ".gyoku");
	    
	    
	    save(".hu2", ".hu");
	    save(".kyou2", ".kyou");
	    save(".kei2", ".kei");
	    save(".ginn2", ".ginn");
	    save(".kinn2", ".kinn");
	    save(".kaku2", ".kaku");
	    save(".hisya2", ".hisya");
	    save(".gyoku2", ".gyoku");
	    
	    
	});
	
	
	
	//駒が選択状態のときに升目以外のところをクリックすると選択解除する
	$(document).on('click', function(e){
		if(!$(e.target).closest('#ban1, .motigoma').length) {
			if($('.droppable').length > 0) {
				hintNonDisplay();
				$selectedKoma.removeClass("droppable");
				$selectedKoma = null;
		    }
		}
	});

	var ugoki;

	function gyokuMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function hisyaMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -10);
			moveRange(array2, 10, 100, 10);
			moveRange(array3, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, -1);
			moveRange(array4, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, 1);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -10);
			moveRange(array2, 10, 100, 10);
			moveRange(array3, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, -1);
			moveRange(array4, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, 1);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			console.log(ugokiArray);
		}
	}

	function kakuMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -11);
			moveRange(array2, 10, 100, -9);
			moveRange(array3, 10, 100, 9);
			moveRange(array4, 10, 100, 11);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -11);
			moveRange(array2, 10, 100, -9);
			moveRange(array3, 10, 100, 9);
			moveRange(array4, 10, 100, 11);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			console.log(ugokiArray);
		}
	}

	function kinnMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function ginnMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, 9, 11);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -9, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function keiMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-21, -19);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(19, 21);
			console.log(ugokiArray);
		}
	}

	function kyouMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			var array1 = [];
			moveRange(array1, 10, 100, -10);
			var moveArray = [array1];
			ugokiArray = movableRange(moveArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			var array1 = [];
			moveRange(array1, 10, 100, 10);
			var moveArray = [array1];
			ugokiArray = movableRange(moveArray);
		}
	}

	function huMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(10);
			console.log(ugokiArray);
		}
	}

	function tokinnMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function narikyouMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function narikeiMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function nariginnMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			ugokiArray = movablePoint(-11, -10, -9, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			ugokiArray = movablePoint(-10, -1, 1, 9, 10, 11);
			console.log(ugokiArray);
		}
	}

	function ryuuMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -10);
			moveRange(array2, 10, 100, 10);
			moveRange(array3, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, -1);
			moveRange(array4, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, 1);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			movablePoint(-11, -9, 9, 11);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -10);
			moveRange(array2, 10, 100, 10);
			moveRange(array3, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, -1);
			moveRange(array4, (Math.floor(datanum/10))*10, (Math.floor(datanum/10+1))*10, 1);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			movablePoint(-11, -9, 9, 11);
			console.log(ugokiArray);
		}
	}

	function umaMove(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -11);
			moveRange(array2, 10, 100, -9);
			moveRange(array3, 10, 100, 9);
			moveRange(array4, 10, 100, 11);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			movablePoint(-10, -1, 1, 10);
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			ugokiArray = [];
			var array1 = [], array2 = [], array3 = [], array4 = [];
			moveRange(array1, 10, 100, -11);
			moveRange(array2, 10, 100, -9);
			moveRange(array3, 10, 100, 9);
			moveRange(array4, 10, 100, 11);
			var array = [array1, array2, array3, array4];
			ugokiArray = movableRange(array);
			movablePoint(-10, -1, 1, 10);
			console.log(ugokiArray);
		}
	}

	function uti(komaName) {
		if(($selectedKoma.hasClass(komaName)) && flag==0) {
			utiArray = [];
			ugokiArray = [];
			if($selectedKoma.hasClass("hu koma1")) {
				var noHuPositionArray = [];
				var huPositionArray = [];
				for(var i=0; i<81; i++) {
					if(!$('.masu1:eq('+ i +')').children().hasClass("hu koma1")) {
						continue;
					}
					var huPosition = $('.masu1:eq('+ i +')').data("masu1");
					var onesPlaceHuPosition = huPosition % 10;
					huPositionArray.push(onesPlaceHuPosition);
				}
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(($.inArray(elem % 10, huPositionArray))>-1 || elem<20) {
						continue;
					}
					utiArray.push(elem);
				}
			}else if($selectedKoma.hasClass("kyou koma1")) {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(elem<20) {
						continue;
					}
					utiArray.push(elem);
				}
			}else if($selectedKoma.hasClass("kei koma1")) {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(elem<30) {
						continue;
					}
					utiArray.push(elem);
				}
			}else {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					utiArray.push(elem);
				}
			}
			ugokiArray = utiArray;
			console.log(ugokiArray);
		}else if(($selectedKoma.hasClass(komaName)) && flag==1) {
			utiArray = [];
			ugokiArray = [];
			if($selectedKoma.hasClass("hu koma2")) {
				var noHuPositionArray = [];
				var huPositionArray = [];
				for(var i=0; i<81; i++) {
					if(!$('.masu1:eq('+ i +')').children().hasClass("hu koma2")) {
						continue;
					}
					var huPosition = $('.masu1:eq('+ i +')').data("masu1");
					var onesPlaceHuPosition = huPosition % 10;
					huPositionArray.push(onesPlaceHuPosition);
				}
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(($.inArray(elem % 10, huPositionArray))>-1 || elem>90) {
						continue;
					}
					utiArray.push(elem);
				}
			}else if($selectedKoma.hasClass("kyou koma2")) {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(elem>90) {
						continue;
					}
					utiArray.push(elem);
				}
			}else if($selectedKoma.hasClass("kei koma2")) {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					if(elem>80) {
						continue;
					}
					utiArray.push(elem);
				}
			}else {
				for(var i=0; i<81; i++) {
					if($('.masu1:eq('+ i +')').children().hasClass("koma")) {
						continue;
					}
					var elem = $('.masu1:eq('+ i +')').data("masu1");
					utiArray.push(elem);
				}
			}
			ugokiArray = utiArray;
			console.log(ugokiArray);
		}
	}
	
	function hintDisplay() {
		for(var t=0; t<ugokiArray.length; t++) {
			if($('#btn1').hasClass("hintDisplay")) {
				$("[data-masu1=" + ugokiArray[t] + "]").css('background', 'skyblue');
			}
		}
	}

	function hintNonDisplay() {
		for(var t=0; t<ugokiArray.length; t++) {
			$("[data-masu1=" + ugokiArray[t] + "]").css('background', 'transparent');
		}
	}
	

	function moveRange(ar, value1, value2, value3) {
		for(var i=datanum;  i>value1 && i<value2; i=i+value3) {
			if(i%10==0) break;
			ar.push(i);
		}
	}

	function movablePoint() {
		for(var i=0; i<arguments.length; i++) {
			ugoki = datanum + arguments[i]
			if((ugoki<10 || ugoki>100 || ugoki%10==0 || $("[data-masu1=" + ugoki + "]").children().hasClass("koma1")) && flag==0) {
				continue;
			}else if((ugoki<10 || ugoki>100 || ugoki%10==0 || $("[data-masu1=" + ugoki + "]").children().hasClass("koma2")) && flag==1) {
				continue;
			}
			
			ugokiArray.push(ugoki);
		}
		return ugokiArray;
	}

	function movableRange(ar) {
		for(var t=0; t<ar.length; t++) {
			ar[t] = ar[t].filter(function(v) {
				return v != datanum;//$selectedKoma.parent().data('masu1');かもしれない
			}); //[ar1, ar2, ar3, ar4]のt番目の配列の中で$selectedKomaの要素を削除する
			for(var s=0; s<ar[t].length; s++) {
				var elem = $("[data-masu1=" + ar[t][s] + "]");
				if(flag==0 && elem.children().hasClass('koma1')) break;// 注意！
				if(flag==1 && elem.children().hasClass('koma2')) break;// 注意！
				ugokiArray.push(elem.data("masu1"));
				if(flag==0 && elem.children().hasClass('koma2')) break;// 注意！
				if(flag==1 && elem.children().hasClass('koma1')) break;// 注意！
			} //[ar1, ar2, ar3, ar4]のt番目の配列の駒までの要素を絞る
		}
		return ugokiArray;
	}

	function komanari() {
		var ans;
        for(var i=0; i<arguments.length; i++) {
            if(($selectedKoma.hasClass(arguments[i][0])) && flag==0) {
                if(dropnum<40 || datanum<40) {
                	ans = confirm("成りますか？");
                }
                if(ans) {
                	$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma1").addClass("koma1");
                }else {
                	if(dropnum<20 && ($selectedKoma.hasClass('hu') || $selectedKoma.hasClass('kyou'))) {
                		$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma1").addClass("koma1");
                	}else if(dropnum<30 && $selectedKoma.hasClass('kei')) {
                		$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma1").addClass("koma1");
                	}
                }
            }else if(($selectedKoma.hasClass(arguments[i][0])) && flag==1) {
            	if(dropnum>70 || datanum>70) {
                	ans = confirm("成りますか？");
                }
                if(ans) {
                	$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma2").addClass("koma2");
                }else {
                	if(dropnum>90 && ($selectedKoma.hasClass('hu') || $selectedKoma.hasClass('kyou'))) {
                		$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma2").addClass("koma2");
                	}else if(dropnum>80 && $selectedKoma.hasClass('kei')) {
                		$selectedKoma.removeClass(arguments[i][0]).addClass(arguments[i][1]).removeClass("koma2").addClass("koma2");
                	}
                }
            }
        }
    }
});



