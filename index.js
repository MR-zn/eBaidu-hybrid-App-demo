//首页子页面
var sw = true;
var backPosiBtn = document.querySelector('#backPosi');
document.querySelector('#putlist').addEventListener('tap',function(){
	if(sw){
		sw = false;
		backPosiBtn.classList.add('hidden');
		document.querySelector('#container').classList.add('main');
		document.querySelectorAll(".list-way")[0].classList.add('mui-hidden');
		document.querySelectorAll(".list-way")[1].classList.remove('mui-hidden');
		Default();
	}
}) 
document.querySelector('#getlist').addEventListener('tap',function(){
	if(!sw){
		sw = true;
		backPosiBtn.classList.remove('hidden');
		document.querySelector('#container').classList.remove('main');
		document.querySelectorAll(".list-way")[0].classList.remove('mui-hidden');
		document.querySelectorAll(".list-way")[1].classList.add('mui-hidden');
		Default();
	}
})
//底部菜单
var up = document.querySelector('#showup');
var putlist = document.querySelector('#footer .showup');
var cont = document.querySelector('#container');
var hed = document.querySelector('#header');

function Back(obj,tag,name){
	obj.addEventListener('tap',function(){
		t(tag,name);
	});
	obj.addEventListener('touchmove',function(){
		t(tag,name);
	});
	function t(tag,name){
		removeClass(tag,name);
    	pix();
		document.querySelector('#suggestId').blur();
	}
}
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
} 
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}
up.addEventListener("tap",function () {
    toggleClass(putlist,'move');
    pix();
});
function pix(){
    if(hasClass(putlist,'move')){
//  	up.querySelector('span').classList.remove('mui-icon-arrowup');
    	up.querySelector('span').classList.add('rotate');
    }else{
    	up.querySelector('span').classList.remove('rotate')
//  	up.querySelector('span').classList.add('mui-icon-arrowup');
    }
}
Back(hed,putlist,'move');
Back(cont,putlist,'move');



//      	var first = null;
//          mui.back = function(){
//              mui.plusReady(function() {
//                  //首页返回键处理
//                  //处理逻辑：1秒内，连续两次按返回键，则退出应用；
//                  if(!first){
//                      first = new Date().getTime();
//                      mui.toast('再按一次退出应用');
//                      setTimeout(function(){
//                          first = null;
//                      },1000);
//                  }else{
//                      if(new Date().getTime()-first<1000){
//                          plus.runtime.quit();
//                      }
//                  }
//              });
//          }
//      


//日期选择
(function(){
	var dateEle = document.querySelector("#date");
	var dateVal = dateEle.querySelector(".value");
	var year = [],month = [],day = [];//定义年月日数组  
	var hour = [], minute = [];
	var data4 = [
	    {
	      text: '前',
	      value: '前'
	    }, {
	      text: '整',
	      value: '整'
	    }
	  ];
	var nowDate = new Date(); 
	var nowYear = nowDate.getFullYear();//获取当前年月日  
	var nowMonth = nowDate.getMonth() + 1;  
	var nowHour = nowDate.getHours();
	var nowMinute = nowDate.getMinutes();
	var startYear = 2018,nowDay = null;  
	for(let i=startYear,j=1,k=nowYear+1;i<=k;i++,j++){//初始化 年 数据  
	    var temp = new Object();  
	    temp.text = i + ' 年';  
	    temp.value = j;  
	    year.push(temp);  
	}  
	for(let i=1,j=1;i<13;i++,j++){//初始化 月 数据  
	    var temp = new Object();  
	    temp.text = i + ' 月';  
	    temp.value = j;  
	    month.push(temp);  
	}  
	if(nowMonth == 2){//不同月份，具体的天数的处理  
	    nowDay= ((nowYear % 4 == 0 && nowYear % 100 != 0) || nowYear % 400 ==0) ? 29 : 28;//闰年29天，平年28天  
	}else if(nowMonth==1 || nowMonth==3 || nowMonth==5 || nowMonth==7 || nowMonth==8 || nowMonth==10 || nowMonth==12){  
	    nowDay= 31;//月份为：1,3,5,7,8,10,12 时，大月.天数为31  
	}else{  
	    nowDay= 30;//其他月份，小月，天数为30.  
	}  
	for(let i=1,j=1;i<nowDay+1;i++,j++){//初始化 日 数据  
	    var temp = new Object();  
	    temp.text = i + ' 日';  
	    temp.value = j;  
	    day.push(temp);  
	}  
	for(let i=1;i<25;i++){//初始化 小时 数据  
	    var temp = new Object();  
	    temp.text = i + ' 时 ';  
	    temp.value = i;  
	    hour.push(temp);  
	}  
	for(let i=1;i<61;i++){//初始化 分钟 数据  
	    var temp = new Object();  
	    temp.text = i + ' 分 ';  
	    temp.value = i;  
	    minute.push(temp);  
	}  
	var selectedIndex = [year.length-2, nowDate.getMonth(), nowDate.getDate()-1,nowDate.getHours()-1,nowDate.getMinutes()-1,data4.length-1]; /* 年月日默认选中的值 */  
	var datePicker = new Picker({//创建并初始化选择器对象  
	    data: [year,month,day,hour,minute,data4],  
	    selectedIndex: selectedIndex  
	    // title: '选择日期'  
	});  
	dateEle.addEventListener('tap',function(){
			datePicker.show();//绑定触发选择器事件  c
	})
	var changeDate = {year:'',month:'',day:''}//定义选择器已选的年月日  
	datePicker.on('picker.change', function (index, selectedIndex){//监听每列发生滚动的的事件  
	    changeDate.year = startYear + year.length-1;  
	    if(index == 0){  
	        changeDate.year = startYear + selectedIndex  
	    }  
	    if(index == 1){  
	        changeDate.month = selectedIndex+1;  
	        if(changeDate.month == 2){  
	            changeDate.day= ((changeDate.year % 4 == 0 && changeDate.year % 100 != 0) || changeDate.year % 400 ==0) ? 29 : 28;//闰年29天，还是平年  
	        }else if(changeDate.month==1 || changeDate.month==3 || changeDate.month==5 || changeDate.month==7 || changeDate.month==8 || changeDate.month==10 || changeDate.month==12){  
	            changeDate.day= 31;//月份为：1,3,5,7,8,10,12 时，大月.天数为31  
	        }else{  
	            changeDate.day= 30;//其他月份，小月，天数为30.  
	        }  
	        day = [];  
	        for(let i=1,j=1;i<=changeDate.day;i++,j++){  
	            var temp = new Object();  
	            temp.text = i + ' 日';  
	            temp.value = j;  
	            day.push(temp);  
	        }  
	        datePicker.refillColumn(2, day);//动态更新不同月份对应的不同总天数  
	    }  
	});  
	datePicker.on('picker.valuechange', function (selectedVal, selectedIndex) {//确定按钮的回调  
	    selectedVal[0] = startYear + selectedVal[0] - 1;//selectedVal [2015, 2, 28]  
		dateVal.innerText = selectedVal[0]+'-'+selectedVal[1]+'-'+selectedVal[2]+' '+selectedVal[3]+':'+selectedVal[4]+' '+selectedVal[5];
	});
})();


function showTime(){

	var time = document.querySelector('#show-order input.time');
	var arrow = document.querySelector('#show-order .cTime .arrow');
	var hour = [];
	var nowDate = new Date(); 
	for(let i=1;i<25;i++){//初始化 小时 数据  
	    var temp = new Object();  
	    temp.text = i + ' 时 ';  
	    temp.value = i;  
	    hour.push(temp);  
	}  
	var selectedIndex = [nowDate.getHours()-1]; /* 年月日默认选中的值 */  
	var timePicker = new Picker({//创建并初始化选择器对象  
	    data: [hour],  
	    selectedIndex: selectedIndex 
	});  
	arrow.addEventListener('tap',function(){
		timePicker.show();//绑定触发选择器事件  c
	})
	
	timePicker.on('picker.valuechange', function (selectedVal, selectedIndex) {//确定按钮的回调  
		time.value = selectedVal[0] + '时';
		chooseTime(selectedVal[0],allOrder);
	});
	
}
 
(function(){
	var data1 = [
	    {
	      text: '梅肯',
	      value: '1'
	    }, 
	    {
	      text: '秘法鞋',
	      value: '2'
	    },
	    {
	      text: '假腿',
	      value: '3'
	    },
	    {
	      text: '飞鞋',
	      value: '4'
	    },
	    {
	      text: '辉耀',
	      value: '5'
	    },
	    {
	      text: '金箍棒',
	      value: '6'
	    }
	];
	
	var data2 = [
	    {
	      text: '小件(1公斤内)',
	      value: '1'
	    }, 
	    {
	      text: '中件(3公斤内)',
	      value: '2'
	    },
	    {
	      text: '大件(5公斤内)',
	      value: '3'
	    }
	];
	
	var data3 = [
	    {
	      text: '否',
	      value: '1'
	    }, 
	    {
	      text: '是',
	      value: '2'
	    }
	];
	
	var picker1El = document.querySelector("#choose-place");
	var picker1Val = picker1El.querySelector(".value");
	var picker2El = document.querySelector("#choose-size");
	var picker2Val = picker2El.querySelector(".value");
	var picker3El = document.querySelector("#more-info");
	var picker3Val = picker3El.querySelector(".value");
	
	var picker1 = new Picker({
	    data: [data1]
	});
	var picker2 = new Picker({
	    data: [data2]
	});
	var picker3 = new Picker({
	    data: [data3]
	});
	
	picker1.on('picker.select', function (selectedVal, selectedIndex) {
       picker1Val.innerText = data1[selectedIndex[0]].text;
    });
    
    picker1El.addEventListener('tap', function () {
       picker1.show();
    });
    
    picker2.on('picker.select', function (selectedVal, selectedIndex) {
       picker2Val.innerText = data2[selectedIndex[0]].text;
    });
    
    picker2El.addEventListener('tap', function () {
       picker2.show();
    });
    
    picker3.on('picker.select', function (selectedVal, selectedIndex) {
       picker3Val.innerText = data3[selectedIndex[0]].text;
    });
    
    picker3El.addEventListener('tap', function () {
       picker3.show();
    });
    
})();




createNew("#footer");
createNew("#container");
function createNew(id){
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
				webview.show(aniShow, 200, null, extras);
			})

		} else {

			var webview = plus.webview.create(this.href, id, webview_style, extras);
			webview.addEventListener("loaded", function() {
				webview.show(aniShow, 200);
			});
		}
	});
}


//起始页
(function(){
	
	var showOnce = document.querySelector('#show-once');
	var put = showOnce.querySelector('.putweb');
	var get = showOnce.querySelector('.getweb');
	
	
	put.addEventListener('tap',function(){
		showOnce.classList.add('mui-hidden');
		sw = false;
		backPosiBtn.classList.add('hidden');
		document.querySelector('#container').classList.add('main');
		document.querySelectorAll(".list-way")[0].classList.add('mui-hidden');
		document.querySelectorAll(".list-way")[1].classList.remove('mui-hidden');
		document.querySelector('#getlist').classList.remove('mui-active');
		document.querySelector('#putlist').classList.add('mui-active');
		Default();
	})
	
	get.addEventListener('tap',function(){
		showOnce.classList.add('mui-hidden');
	})
	
})();


(function(){
	
	//发布
	var ways = document.querySelectorAll('#footer .list-way');
	var su=document.querySelector('.succed');
	var close=su.querySelector('.close');
	ways[0].addEventListener('tap',function(){
//		if(true){
			su.classList.remove('mui-hidden');
//		}
	})
	close.addEventListener('tap',function(){
		su.classList.add('mui-hidden');
	})
	
})();

mui("#show-order").on('tap','.close',function(){
	document.querySelector("#show-order").classList.add('mui-hidden');
})


////物件信息
//document.getElementById('Image').addEventListener('tap', function() {  
//  if (mui.os.plus) {  
//      var buttonTit = [{  
//          title: "拍照"  
//      }, {  
//          title: "从手机相册选择"  
//      }];  
//        
//      plus.nativeUI.actionSheet({  
//          title: "上传图片",  
//          cancel: "取消",  
//          buttons: buttonTit  
//      }, function(b) { /*actionSheet 按钮点击事件*/  
//          switch (b.index) {  
//              case 0:  
//                  break;  
//              case 1:  
//                  getImage(); /*拍照*/  
//                  break;  
//              case 2:  
//                  galleryImg();/*打开相册*/  
//                  break;  
//              default:  
//                  break;  
//          }  
//      })  
//  }          
//}, false);
////拍照
//function getImage() {
//  var cmr = plus.camera.getCamera();
//  var res = cmr.supportedImageResolutions[0];
//  var fmt = cmr.supportedImageFormats[0];
//  cmr.captureImage(function(path) {
//      //plus.io.resolveLocalFileSystemURL(path, function(entry) {  
//  plus.io.resolveLocalFileSystemURL(path, function(entry) {
//      var localUrl = entry.toLocalURL();
//      uploadHead(localUrl + "?version=" + new Date().getTime());
//  }, function(err) {
//      console.error("拍照失败：" + err.message);
//  }, {
//      index: 1
//  });
//  });
//} 
////本地相册选择
//function galleryImg() {
//  plus.gallery.pick(function(a) {
//  plus.io.resolveLocalFileSystemURL(a, function(entry) {
//      plus.io.resolveLocalFileSystemURL("_doc/", function(root) {
//      root.getFile("head.png", {}, function(file) {
//          //文件已存在
//          file.remove(function() {
//          console.log("file remove success");
//          entry.copyTo(root, 'head.png', function(e) {
//              var e = e.fullPath + "?version=" + new Date().getTime();
//              uploadHead(e); /*上传图片*/
//              //变更大图预览的src
//              //目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
//              },function(e) {
//                          console.log('copy image fail:' + e.message);
//          });
//          }, function() {
//          console.log("delete image fail:" + e.message);
//          });
//      }, function() {
//          //文件不存在
//          entry.copyTo(root, 'head.png', function(e) {
//          var path = e.fullPath + "?version=" + new Date().getTime();
//          uploadHead(path); /*上传图片*/
//          },function(e) {
//          console.log('copy image fail:' + e.message);
//          });
//      });
//      }, function(e) {
//      console.log("get _www folder fail");
//      })
//  }, function(e) {
//      console.log("读取拍照文件错误：" + e.message);
//  });
//  }, function(a) {}, {
//  filter: "image"
//  })
//};
//
////上传头像图片
//function uploadHead(imgPath) {
//  var image = new Image();
//  image.src = imgPath;
//  document.getElementById('user-img').src = imgPath;//头像更换
//  image.onload = function() {
//  var imgData = getBase64Image(image);
//  console.log(imgData);
//  /*在这里调用上传接口*/
//  //mui.ajax("图片上传接口", {
//      //data: {
//      //img: imgData
//      //},
//      //dataType: 'json',
//      //type: 'post',
//      //timeout: 10000,
//      //success: function(data) {
//      //mui.toast('上传成功',{
//          //duration:'long',
//          //type:'div'
//      //});
//              //document.getElementById('head-img').src = imgPath;
//      //document.getElementById('head-img1').src = imgPath;
//      //document.getElementById('head-img2').src=imgPath;
//      //}, 
//          //error: function(xhr, type, errorThrown) {
//      //mui.toast('网络异常，请稍后再试！');
//      //}
//  //});
//  }
//}
////将图片压缩转成base64
//function getBase64Image(img) {
//  var canvas = document.createElement("canvas");
//  var width = img.width;
//  var height = img.height;
//  // calculate the width and height, constraining the proportions
//  if(width > height) {
//  if(width > 100) {
//      height = Math.round(height *= 100 / width);
//      width = 100;
//  }
//  } else {
//  if(height > 100) {
//      width = Math.round(width *= 100 / height);
//      height = 100;
//  }
//  }
//  canvas.width = width; /*设置新的图片的宽度*/
//  canvas.height = height; /*设置新的图片的长度*/
//  var ctx = canvas.getContext("2d");
//  ctx.drawImage(img, 0, 0, width, height); /*绘图*/
//  var dataURL = canvas.toDataURL("image/png", 0.8);
//  return dataURL.replace("data:image/png;base64,", "");
//}