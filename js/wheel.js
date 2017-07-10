$(function(){
	var _wheelbox = document.getElementById('wheelbox');
    if(_wheelbox){
        $(function() {            
            var $box = $('.wheelbox'),
                $cont = $('.rotate-cont');
            $box.height($cont.height());
            $(window).resize(function(){
                $box.height($cont.height());
            });
            var deg = 0;
            var old_p_idx = 0;
            var prize = [ "谢谢参与","小米手环","小米手机", "20元话费券", "再接再励", "100M流量包", "ipad","现金100元"];
            $(".rotate-arrow-text").on('click','img',function() {
            	
            	var start = setInterval(function(){
	                var $rotate = $('.rotate');
	                if($rotate.hasClass('active')){
	                    $rotate.removeClass('active');
	                }else{
	                    $rotate.addClass('active');
	                }
                },500);
            	
                //获得有抽奖机会的人员
                var new_p_idx =4; //奖品索引
                deg += 5760;
                deg += (new_p_idx - old_p_idx) * 45;
                old_p_idx = new_p_idx;
                $(".arrow-img").css({
                    "-webkit-transform": "rotate(" + deg + "deg)",
                    "transform": "rotate(" + deg + "deg)"
                });                
 
                setTimeout(function () {
                    clearInterval(start);
                   //抽奖结果
                   switch(new_p_idx){
                   	   case 0 : 
                   	   $(".out01").css("display","block");
                   	   $(".bground").css("display","block"); break;
                   	   case 1 : 
                   	   $(".out02").css("display","block");
                   	   $(".bground").css("display","block"); break;
                   	   case 4 : 
                   	   $(".out03").css("display","block");
                   	   $(".bground").css("display","block"); break;
                   }
                    
                }, 4000);
                return false;
            });
       
     
        });
    } 
		
	/*隐藏抽奖结果*/
	$(".out01-top>span").on("click",function(){
		$(".bground").css("display","none");
		$(this).parent().parent().css("display","none");
	})
	$(".out01-bottom>div").on("click",function(){
		$(".bground").css("display","none");
		$(this).parent().parent().css("display","none");
	})
	$(".out02-top>span").on("click",function(){
		$(".bground").css("display","none");
		$(this).parent().parent().css("display","none");
	})
	$(".out02-bottom-inp3").on("click",function(){
		$(".bground").css("display","none");
		$(this).parent().parent().css("display","none");
	})
})
