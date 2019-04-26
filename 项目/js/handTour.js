$(function(){

	var win_w = $(window).width(),
        win_h = $(window).height();

    if(win_h<900){
        $('.scroll-tip').remove();
    }

    var isScroll=0,
		pageIndex=0,
		$html= $('html');


	//屏幕滚动
	$html.mousewheel(function(event, delta){
		if(isScroll==0){
			isScroll=1;
			setTimeout(function(){
				isScroll=0;
			},500);

			if(delta==-1){
				console.log(delta);
	    		if(pageIndex<3){
	    			pageIndex++;
	    			console.log(pageIndex);
		    		if(pageIndex==0){
		    			// console.log(pageIndex);
		    			$('.j_nav,.box0').animate({'top':0},300);
                        $('.mini-live').animate({'top':87},300);
                        $('html,body').animate({'scrollTop':55},300);
                        return false;
		    		}

                    if(pageIndex==1){
                       setTimeout(function(){
                        $('.floatbar').fadeIn();
                       },500)
                    }

                    if(pageIndex==2){
                        $('.scroll-tip').hide();
                    }

		    		$('html,body').animate({'scrollTop':pageIndex*1050+55},800);
	    		}

	    	}else{
	    		if(pageIndex>-1){
	    			pageIndex--;

                    if(pageIndex==1){
                        setTimeout(function(){
                            $('.scroll-tip').show();
                        },500)
                    }
                    if(pageIndex==0){
                        $('.floatbar').fadeOut();
                    }
                    if(pageIndex==-1){
                    	console.log(pageIndex);
                        $('.j_nav,.box0').animate({'top':55},300);
                        $('.mini-live').animate({'top':143},300);
                        $('html,body').animate({'scrollTop':0},600);
                        return false;

                    }
                    $('html,body').animate({'scrollTop':pageIndex*1050+55},800);
	    		}
	    	}
            return false;
		}else{
			return false;
		}

    })





    // 顶部导航条
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


	// 初始化位置
	setTimeout(function(){
        $('html,body').animate({'scrollTop':55},10);
    },500)
    $('.j_nav').animate({'top':0},10);

    $('.m_sns .a1').hover(function(){
        $(this).siblings('img').fadeIn();
    },function(){
        $(this).siblings('img').fadeOut();
    })


// 第二屏  tab切换
    var w_width,tab_len;
    function sliderInit(){
    	w_width = $(window).width();
    	tab_len = $(".slider_b li").length;
    	$(".slider_b ul").width(tab_len*1920+50);
    	$(".slider_b li").width(w_width);
    	$(".slider_s ul").width(tab_len*535);
    	var fpage = '';
    	for(var i = 0; i < tab_len; i++){
    		fpage += '<span></span>';
    	}
    	$(".slider_p").html(fpage);
    	$(".slider_p span:first").addClass("current");
    }
    sliderInit();
    var sliderIndex = 0;
    function slider(index){
    	$('.slider_b').animate({'scrollLeft':index*w_width},500);
    	$('.slider_s').animate({'scrollLeft':index*535},500);
    	$(".slider_p span").removeClass('current').eq(index).addClass('current');
    }
    $(".phone .p_next").on("click",function(){
    	if(sliderIndex<tab_len-1){
    		sliderIndex++;
    	}else{
    		return false;
    	}
    	slider(sliderIndex);
    })
    $(".phone .p_prev").on("click",function(){
    	if(sliderIndex>0){
    		sliderIndex--;
    	}else{
    		return false;
    	}
    	slider(sliderIndex);
    })
    var Isdes = 0;
//     当调整浏览器窗口的大小时，发生 resize 事件。
// resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。
    $(window).resize(function(){
    	if(Isdes==0){
    		Isdes = 1;
    		sliderInit();
    	}
    	setTimeout(function(){
    		Isdes = 0;
    	},500)
    })

    $(".slider_p").on("click","span",function(){
    	var index = $(this).index();
    	sliderIndex = index;
    	slider(index);
    })

    // 新闻栏
    $('.news .tit_nav span').mouseenter(function(){
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.news dl').hide().eq(index).show();
    })

    // tab 广告栏
    var i_length = $('.info li').length;
    $('.info ul').width(tab_len*272);
    var ipageHTML = '';
    for(var i=0;i<i_length;i++){
        ipageHTML+='<span></span>'
    }
    $('.info .page').html(ipageHTML);
    $('.info .page span:first').addClass('current');

    function islider(){
        var $current = $('.info .page .current');
        var index = $current.index();
        var $next = $current.next();
        if($next.length>0){
            index++;
            $next.addClass('current').siblings().removeClass('current');
        }else{
            index=0;
            $('.info .page span:first').addClass('current').siblings().removeClass('current');
        }
        $('.info .sliders').animate({'scrollLeft':index*272},500);
    }

    var isliderTimer = setInterval(islider,4000);

    $('.info .page span').click(function(){
        clearInterval(isliderTimer);
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.info .sliders').animate({'scrollLeft':index*272},500);
        isliderTimer = setInterval(islider,2000);
	})

    // tab
    $('.media .tit_nav span').mouseenter(function(){
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.media .m_cont').hide().eq(index).show();
    })

    function flinkslider(){
        var l_len = $('.flinklist img').length;
        $('.flinklist').width(l_len*114);

        var $prev = $('.flink .d_prev');
        var $next = $('.flink .d_next');

        var index = 0;
        $next.click(function(){
            if(index<l_len-4){
                index++;
            }else{
                return false;
            }
            $('.flink .sliderD').animate({'scrollLeft':index*114},500);
        })

        $prev.click(function(){
            if(index>0){
                index--;
            }else{
                return false;
            }
            $('.flink .sliderD').animate({'scrollLeft':index*114},500);
        })
    }
    flinkslider();

    $('.sns .a1').hover(function(){
        $(this).find('img').show();
    },function(){
        $(this).find('img').hide();
    })

    //右侧浮动二维码
    $('.floatbar .dl_3').hover(function(){
        $('.sns_ewm').fadeIn();
    },function(){
        $('.sns_ewm').fadeOut();
    })

     //向下滚动
    $('.scroll-tip').click(function(){
        pageIndex++;
        if(pageIndex>1){
            $('.scroll-tip').hide();
        }
        $('html,body').animate({'scrollTop':pageIndex*1050+55},800);
    })

    // 下载弹窗
    $('.dl_2').on("click",function(){
        $('.pop-down,.maskdiv').show();
    })
    $(".pop-down .close").on("click",function(){
    	$('.pop-down,.maskdiv').hide();
    })

     //视频播放
    var isMove = 0;
    var bgvideo;
    $('.box1 .play').click(function(){
        bgvideo=jwplayer('j-popvideo').setup({
            'flashplayer':  'http://static.woniu.com/script/jwplayer/player.swf',
            'width':    '720',
            'height':   '400',
            'file':     'http://m.jy3d.woniu.com/static/web201606/images/jy3d.mp4',
            // 'image': 'http://jz.woniu.com/static/web201606/images/bg1.jpg',
            'autostart':true,
            'controls':false
        })
        $('.maskdiv,.pop-video').show();

        setTimeout(function(){
            isMove=1;
        },1000);
    })
    $(".pop-video .close").on("click",function(){
    	$('.pop-video,.maskdiv').hide();
    })

})