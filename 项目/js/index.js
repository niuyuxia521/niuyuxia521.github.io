$(function(){
	$(".head_img").on("mouseover",function(){
		$(".head_imgs").hide().siblings().show();
	});
	$(".head_img").on("mouseout",function(){
		$(".head_imgs").show().siblings().hide();
	});


	var oLi = $(".headNav li");
	// console.log(oLi);
	oLi.on("mouseover",function(){
		$(this).addClass("current").siblings().removeClass("current");
		var oW = $(this).find("div.headNav_list").width();
		var oH = $(this).find("div.headNav_list").height();
		// console.log(oW);
		console.log($(this).find(".headNav_list_mask").show().css("width",oW+'px'));
		console.log($(this).find(".headNav_list_mask").show().css("height",oH+'px'));
	}).on("mouseout",function(){
		$(this).removeClass("current");
	});


	$(".navbtn").on("mouseover",function(){
		$(this).addClass('navBtn_hover').siblings().removeClass('navBtn_hover');
	})
	var subNavHeight=$('.navContBg').height();
	var falg=true;
	// 当鼠标指针穿过元素时，会发生 mouseenter 事件。
	$('.navBg').mouseenter(function(){
	    $('.navbtn').removeClass('navBtn_hover');
	    $(this).addClass('navBtn_hover');
	    if(falg){
	        $('.navContBg').css({
	            visibility:'visible'
	        }).animate({
	                height: subNavHeight
	            },function(){
	                falg=false;
	            });
	    }

	    return false;
	});

	$('.navBg').mouseleave(function(){
	    $('.navbtn').removeClass('navBtn_hover');
	    if(!falg){
	        $('.navContBg').animate({
	            height:0
	        },function(){
	            falg=true;
	        });
	    }

	    return false;
	});
	$('.subnavs').mouseenter(function(){
	    var index=$('.subnavs').index(this);
	    console.log(index);
	    $('.navbtn').removeClass('navBtn_hover');
	    $('.navbtn').eq(index).addClass('navBtn_hover');


	    return false;
	});


	// 商城 轮播图
	var box = $("#shop_slide ul");
	var lis = $("#shop_slide ul li");
	console.log(lis.length);
	var iNow = 0;
	$("#leftBtn").on("click",function(){
		iNow--;
		if(iNow<0){
			iNow =lis.length;
		}
		tab();
	})
	$("#rightBtn").on("click",function(){
		iNow++;
		if(iNow>lis.length){
			iNow = 0;
		}
		tab();
	})
	var time=setInterval(next,2000);
	$("#rightBtn").on("mouseover",function(){
		clearInterval(time);
	});
	$("#leftBtn").on("mouseover",function(){
		clearInterval(time);
	});
	$("#rightBtn").on("mouseout",function(){
		time=setInterval(next,2000);
	});
	$("#leftBtn").on("mouseout",function(){
		time=setInterval(next,2000);
	});
	function tab(){
		box.stop().animate({left:-iNow*(box.find("li").width())},500);
	}
	function next(){
		iNow++;
		if(iNow>lis.length){
			iNow = 0;
		}
		tab();
	}




	// 全球华人服
	var $seacBtn = $(".seac_btn");
	var seacH = $seacBtn.eq(0).height();
	$seacBtn.hover(function(){
		$(this).find(".seac_d1").stop().animate({'top':-seacH + 'px'},200);
		$(this).find(".seac_d2").stop().animate({'top':-seacH + 'px'},300);
	},function(){
		$(this).find(".seac_d1").stop().animate({'top':0},300);
		$(this).find(".seac_d2").stop().animate({'top':0},200);
	})


	// 广告轮播图
	var warpBox = $(".warpBox");
	var slideImg = $(".warpBox ul");
	var imgWidth = slideImg.find("li").width();
	var olis = $(".slide_ico li");
	var index = 0;
	for(var i = 0; i < olis.length; i++){
		olis[i].index = i;
		olis[i].onclick = function(){
			for(var j = 0; j < olis.length; j++){
				if(this.index == j){
					index = j;
					fun1(-(index*imgWidth));
					fun2();
				}
			}
		}
	}
	var timer = setInterval(fun,2300);
	$(".slide_ico").on("mouseover",function(){clearInterval(timer)});
	$(".slide_ico").on("mouseout",function(){timer = setInterval(fun,2300)});
	function fun(){
		index++;
		if(index > 4){
			index = 0;
		}
		fun1(-(index*imgWidth));
		fun2();
	}
	function fun1(a){
		slideImg.stop().animate({left:a},500);
	}
	function fun2(){
		for(var i = 0; i < olis.length; i++){
			olis[i].className='';
		}
		olis[index].className='current';
	}


	// 新闻公告栏 tab切换
	var oA = $(".fn_nav").eq(0).width();
	$(".fn_nav").hover(function(){
		var index = $(".fn_nav").index($(this));
		$(".tabline").stop().animate({'left':oA*index+'px'},300);
	})
	var oLis = $(".fn_list li");
	oLis.hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index = oLis.index(this);
		$("div.tabcont > div").eq(index).show().siblings().hide();
	})


	//游戏任务简介
	var partOA = $(".partOA").eq(0).width();
	$(".partOA").hover(function(){
		var index = $(".partOA").index($(this));
		$(".tablines").stop().animate({'left':(partOA+10)*index+'px'},300);
	})
	var partUl = $(".partUl li");
	partUl.hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index = partUl.index(this);
		$("div.partContent>div").eq(index).addClass("current").siblings().removeClass("current");
	})
	var part_inner_ul = $(".part_inner_ul li");
	part_inner_ul.hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index = part_inner_ul.index(this);
		$("div.part_inner_cont>div").eq(index).addClass("current").siblings().removeClass("current");
	})

	// 精彩视频   精美壁纸  武学大典  周边  玩家靓照  COSPLAY
	var video_btn = $(".video_btn");
	var h1 = video_btn.eq(0).find(".vicon").height();
	var h2 = video_btn.eq(0).find(".viD").height();
	video_btn.hover(function(){
		$(this).find(".vicon").stop().animate({'top':0},300);
		$(this).find(".viD").stop().animate({'bottom':0},200);
	},function(){
		$(this).find(".vicon").stop().animate({'top':-h1+'px'},300);
		$(this).find(".viD").stop().animate({'bottom':-h2+'px'},200);
	})



	// 媒体栏
	var meacBtn = $(".meacBtn").eq(0).width();
	$(".meacBtn").hover(function(){
		var index = $(".meacBtn").index($(this));
		$(".meacline").stop().animate({'left':(meacBtn+10)*index+'px'},300);
	})
	var liss = $(".madia_btn li");
	liss.hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index = liss.index(this);
		$("div.meac_cont > ul").eq(index).show().siblings().hide();
	})

	// 专题栏
	var veac_select = $(".veac_select");
	var veac_none = $(".veac_none");
	var old = undefined;
	veac_select.on("click",function(e){
		// 不再派发事件。
// 终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。
// 该方法将停止事件的传播，阻止它被分派到其他 Document 节点。在事件传播的任何阶段都可以调用它。注意，虽然该方法不能阻止同一个 Document 节点上的其他事件句柄被调用，但是它可以阻止把事件分派到其他节点。
		e.stopPropagation();
		var index = veac_select.index($(this));
		if(index==old){
			veac_none.eq(index).toggle();
			old = index;
			return;
		}
		veac_none.hide().eq(index).show();
		old = index;
	})
	$(document).on("click",function(){
		veac_none.hide();
	})




	// 游戏助手
	var inacBtn = $(".inacBtn");
	var inacBtnH = inacBtn.eq(0).height();
	var pop=$(".wx-pop");
	$('body').append(pop);
	var mouseAction = function(e){
        this.x = e.pageX
        this.y = e.pageY
    }
    var mouse = function(e,offstw,offsety){
        var h =  $(document).scrollTop();
        var mouse = new mouseAction(e);
       	var result={};
        result.xpos = mouse.x+offstw;
        result.ypos = mouse.y+offsety;
        return result;
    }
    inacBtn.hover(function(e){
        if($(this).attr('id')=='inacLi'){
           var myPos=mouse(e,-150,-150);

           $(".wx-pop").css({'top':myPos.ypos,'left':myPos.xpos}).show();
        }
        $(this).find('.inac_d1').stop().animate({'top':-inacBtnH+'px'},200);
        $(this).find('.inac_d2').stop().animate({'top':-inacBtnH+'px'},300);
    },function(){
        if($(this).attr('id')=='inacLi'){

           $(".wx-pop").hide();
        }
        $(this).find('.inac_d1').stop().animate({'top':'0'},300);
        $(this).find('.inac_d2').stop().animate({'top':'0'},200);
    })



    $("#loginBtn").on("click",function(){
    	$(".login_mask").show();
    	$(".login_cont").show();
    })
    $(".login_close").on("click",function(){
    	$(".login_mask").hide();
    	$(".login_cont").hide();
    })
    var loginTips = $("#login_tips");
    var username = $("#username");
    var password = $("#password");
    var loginB = $("#login_btn");
    var code_v = $("#code_v");
    loginB.on('click',function(){
    	if(username.val() == '' || password.val() == ''){
    		loginTips.html('！请填写完整信息');
    		return false;
    	}else if(!/\d{9}$/.test(username.val())){
    		loginTips.html('！号码格式不正确');
    		return false;
    	}else if(!/\w{6}$/.test(password.val())){
    		loginTips.html('！密码不正确');
    		return false;
    	}else if(code_v.val()!= 'uls4'){
    		loginTips.html('！验证码不正确');
    		return false;
    	}else{
    		loginTips.html('！此号尚未注册，请注册');
    	}
    })
    username.on('focus',function(){
    	username.parent().prev().html('');
    	username.parent().next().show();
    })
    password.on('focus',function(){
    	password.parent().prev().html('');
    	password.parent().next().show();
    })
    code_v.on('focus',function(){
    	code_v.parent().prev().html('');
    })
    var clears1 = username.parent().prev().next();
    clears1.on('click',function(){
    	username.val('');
    })



})