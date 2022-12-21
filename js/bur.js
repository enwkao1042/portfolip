$(document).ready(function(){
	
	//상단 메뉴
	$("#menu li> a").on("mouseenter click", function(){
		$("#menu nav").stop().slideDown();
	});
	
	$("#menu").mouseleave( function(){
		$("#menu nav").stop().slideUp();
	});
	
	$(".last").blur( function(){
		$("#menu nav").stop().slideUp();
	});
	
	//상단 메뉴 호버 활성화 유지
	$(".mainMenu").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("#head").addClass('act');
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("#head").addClass('act');
			} else {
				$("#head").removeClass('act');
			}
		});
	}
	




});//////////////////////////end