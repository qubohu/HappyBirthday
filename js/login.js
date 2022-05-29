$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;

    if((userName=="秦玉莲" &&  pwd=="2484") || (userName=="qy" &&  pwd=="123456") || (userName=="亲爱的" || pwd=="亲爱的")){
		  var system = {};
		  var p = navigator.platform;
		  var u = navigator.userAgent;

		  system.win = p.indexOf("Win") == 0;
		  system.mac = p.indexOf("Mac") == 0;
		  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		  if (system.win || system.mac || system.xll) {//如果是PC端
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){
				location.href= userName=="亲爱的" || pwd=="亲爱的" ? "BirthdayCake.html" : "BirthdayCake0.html";
			},2000);
		  }else{
			  alert("为了更好的体验请在电脑上看哦~");
		  }
	}
	else{
		alert("敲敲小脑袋瓜~");
	}
});

function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}
function audioAutoPlay(id){  
    var audio = document.getElementById(id),
        play = function(){  
            audio.play();  
            document.removeEventListener("touchstart",play, false);  
        };  
    audio.play();  
    document.addEventListener("WeixinJSBridgeReady", function () {  
        play();  
    }, false);  
    document.addEventListener('YixinJSBridgeReady', function() {  
        play();  
    }, false);  
    document.addEventListener("touchstart",play, false);  
} 
