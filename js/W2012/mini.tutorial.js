/*
Developer: Alfred Kam (www.cs.mcgill.ca/~akam2/), McGill MCB
Version: 0.0.2
Last Update Sept 2011
*/
(function(){tutorial.fn={inGameTutorial:function(){console.log("@ inGame Tutorial")},menuTutorial:function(){var b=document,a=window;if(b.getElementById("tutorial-pre")==void 0){var c=b.createElement("div");c.id="tutorial-pre";b.body.appendChild(c)}$("#tutorial-pre").html("<div class='tutorial-pre-box'></div><div class='tutorial-pre-content'></div>");$(".tutorial-pre-box").css({position:"absolute",top:"0",left:"0",height:a.innerHeight,width:a.innerWidth,zIndex:"201",opacity:"0.8","background-color":"#383838"});
$(".tutorial-pre-content").css({position:"absolute",zIndex:"202"});common.checkDevice()=="other"^common.checkDevice()=="ipad"?($(".tutorial-pre-content").css("left",(a.innerWidth-560)/2),$(".tutorial-pre-content").css("top",(a.innerHeight-315)/2),mcb.GET("lang")=="en"?$(".tutorial-pre-content").html('<iframe width="560" height="315" src="http://www.youtube.com/embed/oKcvsgIQOt0" frameborder="0" allowfullscreen></iframe>'):$(".tutorial-pre-content").html('<iframe width="560" height="315" src="http://www.youtube.com/embed/hNUoJ4lnpAU" frameborder="0" allowfullscreen></iframe>')):
($(".tutorial-pre-content").css("left",(a.innerWidth-336)/2),$(".tutorial-pre-content").css("top",(a.innerHeight-189)/2),mcb.GET("lang")=="en"?$(".tutorial-pre-content").html('<iframe width="336" height="189" src="http://www.youtube.com/embed/oKcvsgIQOt0" frameborder="0" allowfullscreen></iframe>'):$(".tutorial-pre-content").html('<iframe width="336" height="189" src="http://www.youtube.com/embed/hNUoJ4lnpAU" frameborder="0" allowfullscreen></iframe>'));$(".tutorial-pre-box").click(function(){$("#tutorial-pre").html("")})}}})();