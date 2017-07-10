$(function(){
	/* 动态换算rem和px值  */
	    var rem =20;
	    window.onload = function () {
	        changeW();
	        window.addEventListener("resize", changeW, false);
	        function changeW() {
	            rem = 20 / 375 * document.documentElement.clientWidth;
	            document.documentElement.style.fontSize = rem + "px";
	        }
	        window.addEventListener("resize", changeW, false);
	    }
	    $(function(){
	    	//点击搜索  显示搜索框 显示“取消”
			 $("nav>span").on("touchstart",function(){	 	
			 	 if(!$(this).hasClass("spnbg")){
			 	 	$(this).addClass("spnbg").html("取消");
			 	 	$(".nav-inp").animate({"left":"3%"},500,function(){
			 	 		$(".swiper-container01").css("display","none");
			 	 	});
			 	 }else{
			 	 	$(this).removeClass("spnbg").html("");
			 	 	$(".swiper-container01").css("display","block");
			 	 	$(".nav-inp").animate({"left":"90%"},500);
			 	 }
			 })
	    })
	    
	    //点击跳转 
      	$("article>dl").click(function(){
      		window.location.href="Personal-intro.html";
      	});
      	$(".lottery>i").click(function(){
      		$(".noreplay-box").show();
      		$(".noreplay-model").show();
      		return false;
      	});
      	$(document).on("click",".win-button2",function(){ //点击取消，弹窗消失
      		$(".noreplay-box").hide();
      		$(".noreplay-model").hide();
      	})
	//点击搜索  搜索完毕搜索值消失
	 $(".nav-inp-img").on("click",function(){
	 	 $(this).next("input").val("");
	 });
	//点击缩放
	
})
