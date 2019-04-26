var myPlay = jwplayer("y_video").setup({
	file:"http://9yin.woniu.com/static/web201588/video/201808.mp4",
	width: 720,
	height: 400
});
$(".videoBox").on("click",function(){
	$(".mask").show();
	$("body .close").show();
	$(".content_video").show();
	$(".content_video").css({width:'720px',height:'400px'});
	// 	play() 开始播放音频/视频
	myPlay.play();
})
$(".mask,.close").on("click",function(){
// pause() 暂停当前播放的音频/视频
	myPlay.pause();
	$(".content_video").css({width:0,height:0});
	$(".mask").hide();
	$("body .close").hide();
})