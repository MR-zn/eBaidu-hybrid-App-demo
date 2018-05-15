
Href('#sidemenu');
Href('#user-info #container .mui-table-view');
Href('#change-uPlace #add-place');
Href('#reward');
Href('#user-msg');

function Href(id){
	var aniShow = "slide-in-right";
	mui(id).on('tap', 'a', function() {
		var id = this.getAttribute("href");
		var type = this.getAttribute("open-type");
		var href = this.href;
		
		var webview_style = {
			popGesture: "close",
			statusbar : {
				background: "#f7f7f7"
			}
		}
		
		var extras = {};
	
		var titleType = this.getAttribute("data-title-type");
		
		var sw = true;
		
		if(titleType == "native") {
	
			if(!~id.indexOf('pullrefresh.html')) {
				webview_style.bounce = "vertical";
			}
	
			var webview = plus.webview.create(href, id, webview_style);
			var view = new plus.nativeObj.View("title", {
				top: 0,
				height: "44px",
				width: "100%",
				dock: "top",
				position: "dock"
			});
	
			view.drawRect("#f7f7f7"); //绘制背景色
			view.drawRect("#cccccc", {
				top: "43px",
				left: "0px"
			}); //绘制底部边线
	
			var bitmap = new plus.nativeObj.Bitmap("back");
			bitmap.loadBase64Data("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEUAAAAAev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8AAACubimgAAAAI3RSTlMAGfUTGfQTGPMSGPIYGhgaGBsXGxcbFxwXHBccFhwWHRYdHWufDPQAAAABYktHRACIBR1IAAAAB3RJTUUH4QETEBwooeTlkQAAAJVJREFUSMft1EkSgkAQRNFGUXFWHBDBibr/HTUwD5B/48Ig1y+io7u6MqUhf5hsNEY+j5hMgZ/FJ8Xc9ovos3T96utjbfqN/Nb0O/m96Uv5g+mP8ifTn+Ur01/ka9Nf5RvTt/I309/lH6Z/yr9Mn+Q71/MT8B34K/E58Enzv8R/K98HvnF8p3lr8F7izce7lbf3kJ/lDQp9HdBhgg3PAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTE5VDE2OjI4OjQwKzA4OjAwpTDFwQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0xOVQxNjoyODo0MCswODowMNRtfX0AAAAASUVORK5CYII=");
			view.drawBitmap(bitmap, {}, {
				top: "10px",
				left: "10px",
				width: "24px",
				height: "24px"
			});
			view.drawText(this.innerText.trim(), {}, {
				size: "17px",
				weight: "normal"
			});
	
			view.setTouchEventRect({
				top: "0px",
				left: "0px",
				width: "44px",
				height: "100%"
			});
			view.interceptTouchEvent(true);
			view.addEventListener("click", function(e) {
				webview.evalJS("mui.back();");
			}, false);
			webview.append(view);
	
			webview.addEventListener("loaded", function() {
				webview.show(aniShow, 300, null, extras);
			})
	
		} else {
//			//侧滑菜单需动态控制一下zindex值；
//			if(~id.indexOf('offcanvas-')) {
//				webview_style.zindex = 9998;
//				webview_style.popGesture = ~id.indexOf('offcanvas-with-right') ? "close" : "none";
//			}
	
			var webview = plus.webview.create(this.href, id, webview_style, extras);
			webview.addEventListener("loaded", function() {
				webview.show(aniShow, 200);
			});
		}
	});
}
