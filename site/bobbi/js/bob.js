$(document).ready(function(){
	
	//트루매치파운데이션		
	const styleWidth = $('#style>div>div').width();	
	$('#sliding a').css('width',styleWidth+'px');
	const aWidth =  $('#sliding a').width();	
	$('#sliding').css({'width':(aWidth*8)+'px' , 'left':(aWidth*(-1))+'px'});
	//console.log( $('#sliding').css('left')  );
	//왼쪽버튼
	$("#leftBtn").click(function(){
		$("#sliding").stop(true,true).animate({left: aWidth*(-2)+'px'},'slow',function(){
			$("#sliding").append( $("#sliding a").first());
			$("#sliding").css("left", aWidth*(-1)+'px');
		});
	});
	
	//오른쪽버튼
	$("#rightBtn").click(function(){
		$("#sliding").stop(true,true).animate({left:'0px'},'slow',function(){
			$("#sliding").prepend( $("#sliding a").last());
			$("#sliding").css("left",aWidth*(-1)+'px');
		});
	});
	
	//top 슬라이드 움직이기
	const slide = setInterval( rightMove, 2800 );
	
	//let i = 4; //원형블릿 ( 블릿갯수 )
	let j = 0; //블릿 index [0,1,2,3]
	
	function rightMove(){
			j++;
			if( j == 4) {j = 0; }
			$("#slide div").stop(false,true).animate({left:0},1000, function(){
					$(this).prepend($("#slide img").last());
					$(this).css("left","-100vw");
					$("#radius div").eq(j).addClass("black").siblings().removeClass("black");
			});
	}
	/*
	function leftMove(){
			j++;
			if( j == 3) {j = 0; }
			$("#slide").stop(false,true).animate({left:"-1600px"},1000, function(){
					$(this).append($("#slide>div").first());
					$(this).css("left","-800px");
					$("#slide>div img").eq(j).addClass("black").siblings().removeClass("black");
			});
	}
	
	$("#slide").swiperight(function(){
				rightMove();		
	});
	
	$("#slide").swipeleft(function(){
				leftMove();		
	});	*/
	
})//////////////all end