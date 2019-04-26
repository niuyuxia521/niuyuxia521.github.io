$(function(){

	$("#tabItem1").click(function(){
    	$("#tabItem2").removeClass("current");
        $(this).addClass("current");
        $("#tabDetail2").addClass("hide");
        setTimeout(function(){
            $("#tabDetail2").hide().removeClass("hide");
            $("#tabDetail1").show();
            $("#tabDetail1").addClass("show");
            setTimeout(function(){
            	$("#tabDetail1").find(".card").removeClass("opactiy_d");
            	$("#tabDetail2").find(".card").addClass("opactiy_d");
            	$("#tabDetail1").removeClass("show");
            },305);
        },300);
    });
    $("#tabItem2").click(function(){
        $("#tabItem1").removeClass("current");
        $(this).addClass("current");
        $("#tabDetail1").addClass("hide");
        setTimeout(function(){
            $("#tabDetail1").hide().removeClass("hide");
            $("#tabDetail2").show();
            $("#tabDetail2").addClass("show");
            setTimeout(function(){
            	$("#tabDetail2").find(".card").removeClass("opactiy_d");
            	$("#tabDetail1").find(".card").addClass("opactiy_d");
            	$("#tabDetail2").removeClass("show");
            },305);
        },300);

    });
    $(".tab_item1").click(function(){
        $(".tab_item1").removeClass("current");
        $(this).addClass("current");
        var index = $(this).index();
        $(".page3_detail").hide();
        $(".page3_detail").eq(index).show();
    });
    $(".small_pics a").click(function(){
        if(!$(this).hasClass("selected")){
            var prev = $(this).parents(".small_pics").find(".selected");
            var prevName = prev.attr("name");
            prev.find("img").attr("src","images/"+prevName+"-s.png");
            prev.removeClass("selected");
            $(this).addClass("selected");
            var name = $(this).attr("name");
            $(this).find("img").attr("src","images/"+name+"-hover.png");
            $(this).parents(".page3_detail").find(".show_big").attr("src","images/loading.gif");
            $(this).parents(".page3_detail").find(".show_big").attr("src","images/"+name+"-big.png");
        }

    });

    $(".ancho").on("click",function(){
        var num = $(this).index()+1;
        console.log(num);
        var url = "images/fixed-bg"+num+".png";
        $(this).parent().css("background","url("+url+") no-repeat");
        if(num == 1){
            $("html,body").animate({scrollTop: 0},500);
        }
        if(num == 2){
            $("html,body").animate({scrollTop: 988},500);
        }
        if(num == 3){
            $("html,body").animate({scrollTop: 1800},500);
        }
    });


    $(window).scroll(function() {
        var s = $(window).scrollTop();
        if(s>0 && s<499){
            $(".f_ancho").css("background","url(images/fixed-bg1.png) no-repeat");
        }
        if(s>=499 && s<1450){
            $(".f_ancho").css("background","url(images/fixed-bg2.png) no-repeat");
        }
        if(s>=1450){
            $(".f_ancho").css("background","url(images/fixed-bg3.png) no-repeat");
        }
    });



})