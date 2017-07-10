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
 	//首页上下公告
   var swiper01 = new Swiper(".swiper-container01",{
     direction:"vertical",
	 autoplay:2000,
	 speed:2000,
	 autoplayDisableOnInteraction:false,
	 simulateTouch:false,//禁止点击拖动
	 loop:true//环路---当播放到最后一张，会从第一张开始自动循环播放。
	 });
	//点击切换 排行
	$("section p a").on("touchstart",function(){
		 if(!$(this).hasClass("colorblue")){
		 	 $(this).addClass("colorblue").siblings().removeClass("colorblue");
		 }
	})
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
	 });
	 //点击搜索  搜索完毕搜索值消失
	 $(".nav-inp-img").on("click",function(){
	 	 $(this).next("input").val("");
	 })
	 //banner轮播图
	 var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        effect: 'coverflow',
	        loop:true,
	        grabCursor: true,
	        centeredSlides: true,
	        slidesPerView: 'auto',
	        coverflow: {
	            rotate: 50,
	            stretch: 0,
	            depth: 100,
	            modifier: 1,
	            slideShadows : true
	        },
	        observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
	    });
	    swiper.update();
	 
	 //banner图   当触摸结束  改变左侧的银色和右侧的铜色
	 $(".swiper-container").on("touchend",function(){
	 	slideActive();
	 	$(".banner>div>b.good").css("opacity","1");
	 	$(".banner>div>b.better").css("opacity","1");
	 	$(".banner>div>b.best").css("opacity","1");
	 });	  
	 $(".swiper-container").on("touchmove",function(){	   	
	 	$(".banner>div>b.good").css("opacity","0.9");
	 	$(".banner>div>b.better").css("opacity","0.9");
	 	$(".banner>div>b.best").css("opacity","0.9");
	 	slideActive();
	 });	  
	 
	 function slideActive(){
	 	$(".swiper-slide").each(function(){
	 		var _val01 = $(this).children(".banner").children("div").hasClass("one");
	 		var _val02 = $(this).children(".banner").children("div").hasClass("two");
	 		var _val03 = $(this).children(".banner").children("div").hasClass("three");
	 		
	 		if(_val01){      //金牌页面
	 			$(this).children(".banner").find("b").removeClass().addClass("best");
	 		}else if(_val02){//银牌页面
	 			$(this).children(".banner").find("b").removeClass().addClass("better");
	 		}else if(_val03){//铜牌页面
	 			$(this).children(".banner").find("b").removeClass().addClass("good");
	 		}
	 		
	 		if($(this).hasClass("swiper-slide-active")){  //移除当前显示页面的蒙层
	 			$(this).children(".banner").find("b").removeClass();	 			
	 		}	 			
	 	})
	 };
	 slideActive();
	 
 })
 

