mui.init();
mui.plusReady(function() {
    plus.webview.currentWebview().setStyle({
        scrollIndicator: 'none'
    });
})

mui('#popover').popover('hide', document.getElementById("pay"));
var btn = document.getElementById("pay");;
var popoverbox = document.getElementById("popover");
var bHeight = document.documentElement.clientHeight;
var c_top = bHeight * 0.5 - 113 - 50;
popoverbox.style.height = 226 + 'px';
popoverbox.style.width = 373 + 'px';
popoverbox.style.top = c_top + 'px';
btn.onclick = function() {
    popoverbox.style.top = c_top + 'px';
}

function closeSheet() {
    //下方弹出层关闭
    mui('#paysheet').popover('hide');
}

//-----------单选框---------------
var pay_Weixin = document.getElementById("pay_Weixin");
var pay_Alipay = document.getElementById("pay_Alipay");
var pay_balance = document.getElementById("pay_balance");
function fn1() {
    pay_Weixin.checked = true;
    pay_Alipay.checked = '';
    pay_balance.checked = '';
}

function fn2() {
    pay_Weixin.checked = '';
    pay_balance.checked = ''
    pay_Alipay.checked = true;
}

function fn3() {
    pay_Weixin.checked = '';
    pay_balance.checked = true;
    pay_Alipay.checked = '';
}

//------------------------------------------
mui('#popover2').popover('hide', document.getElementById("Withdraw"));
var btn = document.getElementById("Withdraw");;
var popoverbox = document.getElementById("popover2");
var bHeight = document.documentElement.clientHeight;
var d_top = bHeight * 0.5 - 113 - 100;
popoverbox.style.height = 360 + 'px';
popoverbox.style.width = 373 + 'px';
popoverbox.style.top = d_top + 'px';
btn.onclick = function() {
    popoverbox.style.top = d_top + 'px';
}

//--------------全部提现--------------

var allwithDraw = document.getElementById("allwithDraw");
var balance = document.getElementById("balance");
var input_widthDraw = document.getElementById("input_widthDraw");
allwithDraw.onclick = function() {
    console.log(input_widthDraw.value);
    input_widthDraw.value = balance.innerHTML;
}

//--------------------------------------
function re(s) {
    //校验金额
    //000 错
    //0 对
    //0. 错
    //0.0 对
    //050 错
    //00050.12错
    //70.1 对
    //70.11 对
    //70.111错
    //500 正确
    var patrn = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if(patrn.test(s)) {
        return true
    } else {
        mui.alert('输入金额格式不正确！', '提示')
        return false
    }
}

function alipay(s) {
    var patrn = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(patrn.test(s)) {
        return true
    } else {
        mui.alert('支付宝帐号格式错误！', '提示')
        return false
    }
}
